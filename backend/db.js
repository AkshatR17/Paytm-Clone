const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:H8gVgrtTkTOAT27A@cluster0.zirtemd.mongodb.net/paytm');

const userSchema = new mongoose.Schema({
    usename: String,
    password: String,
    fName: String,
    lName: String
});

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};
