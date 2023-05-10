

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    vehicalId:Number,
    bookingDate:Date,
    bookingTime:Date
});

const CarSchema = new mongoose.Schema({
    vehicalId:Number,
    section:String,
    type:String,
    model:String,
    available:String
 });
 
 exports.car = CarSchema
exports.user =  UserSchema
