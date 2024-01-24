require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router();
const jwt = require('jsonwebtoken');
const zod = require('zod');
const User = require('../db');
const bcrypt = require('bcrypt');
const saltRounds = 10;


const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6),
    firstName: zod.string(),
    lastName: zod.string()
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
            const token = jwt.sign({
                userId
            }, process.env.JWT_SECRET);

            res.json({
                message: "User created successfully",
                token
            });

        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: "Internal Server error"
            });
        }




    }
});

module.exports = router;