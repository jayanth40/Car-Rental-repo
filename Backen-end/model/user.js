const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    vehicalId:Number,
    bookingDate:Date,
    bookingTime:Date
});
const User = mongoose.model('user',UserSchema)
module.exports = User