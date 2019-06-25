const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 3001;
const app = express();

// require donenv
require('dotenv').config();

// Database connection
const MONGODB_URI = process.env.MONGODB_URI ||'mongodb://localhost:27017/cars';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('connected to mongoose...')
});

// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));


const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Controllers
const carsController = require('./controllers/cars');
// app.use('/cars', carsController);

// index route for testing purposes
app.get('/', (req, res) => {
  console.log(req.headers);
  res.send('hello cars');
})


app.listen(port, () => {
  console.log('selling cars on port', port);
})
