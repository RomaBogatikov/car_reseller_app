const mongoose = require('mongoose');

const carsSchema = mongoose.Schema({
  model: {type: String, required: true},
  year: {type: Number, required: true},
  producer: {type: String, required: true},
  price: {type: Number, required: true},
  owner: {type: String, required: true},
  'tel/mobile': {type: String, required: true},
  mileage: {type: Number, required: true},
  registered: {type: String, required: true},
  image: {type: String, required: true},
});

module.exports = mongoose.model('Car', carsSchema);
