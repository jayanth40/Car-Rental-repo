const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
   vehicalId:Number,
   section:String,
   type:String,
   model:String,
   available:String
});

const Car = mongoose.model('car',CarSchema)




module.exports = Car