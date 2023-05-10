const app = require('./app');

const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://car:car@cluster0.0ifbynj.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true }).
then(()=>{console.log("connected To DB")}).catch((err)=>{console.log(err);})

const User = require("./model/user")
const Car = require("./model/model")
const data = [
    {vehicalId:1,
    section:"Car",
    type:"Hackbag",
    model:"",
    available:"Yes"},
    
    {vehicalId:2,
     section:"Car",
    type:"SUV",
    model:"",
    available:"Yes"},
    
    {vehicalId:3,
    section:"Car",
    type:"Sedan",
    model:"",
    available:"Yes"},
    
    {vehicalId:4,
    section:"Bike",
    type:"Sports",
    model:"",
available:"Yes"}]
app.listen(8080, () => {console.log('Server running......')

});

const refreshAll = async () => {
    await User.deleteMany({})
    await Car.deleteMany({})
    
    await Car.insertMany(data)
}
refreshAll()