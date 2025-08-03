const mongoose = require("mongoose");
// Restaurant model
const restaurantSchema = new mongoose.Schema({
   restaurantId: Number,
    location: String,
    items: [
      {
        itemId: Number,
        name: String,
        category: String,
        price: Number,
        description: String,
        image: String,
        rating: Number,
        available: Boolean,
        stock: Number
      }
    ]
});
const Restaurant = mongoose.model('Restaurant', restaurantSchema, 'hungerbox');

module.exports = Restaurant;
