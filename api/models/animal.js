const { Schema, model } = require('mongoose');

const animalSchema = new Schema({
  name: String,
  type: String,
  age: Number,
  attributes: [String],
  createdAt: Date,
  updatedAt: Date,
  diet: [
    {
      food: String,
      quantity: Number,
      frequency: String
    }
  ]
});

const Animal = model('Animal', animalSchema);

module.exports = Animal;
