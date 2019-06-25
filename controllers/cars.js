const express = require('express');
const cars = express.Router();
const Car = require('../models/Car');
const mongoose = require('mongoose');

cars.get('/', (req, res) => {
// get all the cars from the database and send to the Client
  Car.find({}, (error, allCars) => {
    if (error) {
      res.status(500).send('internal error, cannot fetch cars from the database')
    } else {
      res.status(200).send(allCars);
    }
  })
})

module.exports = cars;
