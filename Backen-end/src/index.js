const express = require('express')
const app = express()
const port = 8080
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const { cars } = require('./connector')
const { users } = require('./connector')
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/cars',async (req,res)=>{
    const data = await cars.find({available:"Yes",section:"Car"})
    res.json(data)
})

app.get('/bikes',async (req,res)=>{
    const data = await cars.find({available:"Yes",section:"Bike"})
    res.json(data)
})
app.post('/user',async(req,res)=>{
    const{ firstName,
        lastName,
        vehicalId,
        bookingDate,
        bookingTime} = req.body
const newUser = new users({
        firstName,
        lastName,
        vehicalId,
        bookingDate,
        bookingTime
    })
   try{newUser.save()
    res.json(newUser)
    }catch(err){
    console.log(err)
    res.status(400).json("Booking Unsuccessful")
    }
})

app.listen(port, () => console.log(`App Running on PORT ${port}!`))

module.exports = app;