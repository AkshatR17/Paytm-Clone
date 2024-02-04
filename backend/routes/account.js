const express = require('express');
const authMiddleware = require('../middleware');
const router = express.Router();
const { Account, User } = require('../db');
const mongoose = require('mongoose');

router.get('/balance', authMiddleware, async (req, res) => {

    try {
        const user = await Account.findOne({
            userId: req.userId
        });

        const userBalance = user.balance;

        res.status(200).json({
            balance: userBalance
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Internal server error"
        });
    }

});

// Below transfer code could be understood from chatgpt by tackling the error introduced in previous code
router.post('/transfer', authMiddleware, async (req, res) => {

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const account = await Account.findOne({
            userId: req.userId
        }).session(session);
        
        if (account.balance < req.body.amount) {
            throw new Error("Insufficient balance");
        }

        const newAmount = account.balance - req.body.amount;
        const name = await User.findOne({_id: req.userId});
        const userName = name.username;
        const toAccount = await Account.findOne({
            userId: req.body.to
        }).session(session);

        if (!toAccount) {
            throw new Error("Invalid Account");
        }

        await Account.updateOne({
            userId: req.userId
        }, {
            $inc: {
                balance: -req.body.amount
            }
        }).session(session);

        await Account.updateOne({
            userId: req.body.to,
        }, {
            $inc: {
                balance: req.body.amount
            }
        }).session(session);

        await session.commitTransaction();
        res.status(200).json({
            msg: "Transfer successful",
            newAmount,
            userName
        });

    } catch (error) {
        console.error(error);
        await session.abortTransaction();
        res.status(400).json({
            msg: error.message || "Transaction failed"
        });
    } finally {
        session.endSession();
    }
});


module.exports = router;