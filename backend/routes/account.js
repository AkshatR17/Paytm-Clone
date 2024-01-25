const express = require('express');
const authMiddleware = require('../middleware');
const router = express.Router();
const { Account } = require('../db');

router.get('/balance', authMiddleware, async(req, res)=>{

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

module.exports = {
    router
}