const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json());


// const carRoute = require('./routes/signup');

// app.use('/', carRoute);

module.exports = app;