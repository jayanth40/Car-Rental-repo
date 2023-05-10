
const mongoURI = "mongodb://localhost:27017/cars"

let mongoose = require('mongoose');
const { car } = require('./schema')
const { user } = require('./schema')
const { data } = require('./data')
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connected to DB"); })
    .catch(err => {
        console.log("error while connection", err)
    });
let cars = mongoose.model('car', car)
let users = mongoose.model('user', user)
const refreshAll = async () => {
    await cars.deleteMany({})
    await users.deleteMany({})
   
    await cars.insertMany(data)
}
refreshAll()
exports.cars = cars;
exports.users = users;
