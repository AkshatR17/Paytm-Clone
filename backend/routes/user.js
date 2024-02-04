require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router();
const jwt = require('jsonwebtoken');
const zod = require('zod');
const { User, Account } = require('../db');
const bcrypt = require('bcrypt');
const authMiddleware = require('../middleware');
const saltRounds = 10;


const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6),
    firstName: zod.string(),
    lastName: zod.string()
});

const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
});

const updateBody = zod.object({
    passoword: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
});

router.get('/' ,authMiddleware ,async(req,res)=>{

    const account = await Account.findOne({
        userId: req.userId
    });

    const user = await User.findOne({
        _id: req.userId
    });

    res.status(200).json({
        msg: "authenticated",
        intialAmount: account.balance,
        username: user.username
    });
    
});

router.post('/signup', async (req, res) => {

    if (!(signupSchema.safeParse(req.body).success)) {
        res.status(411).json({
            msg: "Incorrect inputs"
        });
    }
    else {

        try {
            const existingUser = await User.findOne({
                username: req.body.username
            });

            if (existingUser) {
                res.status(411).json({
                    msg: 'User already exists'
                });
                return;
            }

            const hash = await bcrypt.hash(req.body.password, saltRounds);

            const user = await User.create({
                username: req.body.username,
                password: hash,
                firstName: req.body.firstName,
                lastName: req.body.lastName
            });

            const userId = user._id;
            const intialAmount =  Math.round(1 + Math.random() * 10000);

            await Account.create({
                userId,
                balance: intialAmount
            });

            const token = jwt.sign({
                userId
            }, process.env.JWT_SECRET);

            res.json({
                message: "User created successfully",
                token,
                intialAmount
            });

        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: "Internal Server error"
            });
        }

    }
});

router.post('/signin', async (req, res) => {

    if (!(signinSchema.safeParse(req.body).success)) {
        res.status(411).json({
            msg: "Incorrect inputs"
        });
    }
    else {
        try {

            const user = await User.findOne({
                username: req.body.username
            });

            const match = await bcrypt.compare(req.body.password, user.password);

            const account = await Account.findOne({
                userId: user._id
            });

            const intialAmount = account.balance;

            if (match) {

                const token = jwt.sign({
                    userId: user._id
                }, process.env.JWT_SECRET);

                res.status(200).json({
                    token,
                    intialAmount
                });

                return;

            }
            else {
                res.status(411).json({
                    msg: "Error while logging in"
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: "Internal server error"
            })
        }
    }

});

router.put('/', authMiddleware, async (req, res) => {

    if (!updateBody.safeParse(req.body).success) {
        res.status(411).json({
            msg: "Error while updating information",
        });
        return;
    }

    await User.updateOne(req.body, {
        _id: req.userId
    });

    res.status(200).json({
        msg: "Updated successfully"
    });
});

router.get('/bulk', async (req, res) => {

    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
    // map function just doesn't iterate over the users array but it also creates the new array and in above the new user is created which is pushed into the user, the object literal contains properties of new object.
});

module.exports = router;