const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { type } = require('os');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const restaurantSchema = new mongoose.Schema({
  restaurant: String,
  restaurantId: Number,
  location: String,
  address: String,
  contact: String,
  cuisine: String,
  rating: Number,
  timings: String,
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
      stock: Number,
      type: { type: String },
      reviews: [
        {
          user: String,
          comment: String,
          rating: Number,
          date: String
        }
      ]
    }
  ]
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema, 'hungerbox');

// Data import logic is now disabled. To re-enable, uncomment the code below.

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('Connected to MongoDB');
  const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'foodData.json'), 'utf-8'));
  await Restaurant.deleteMany({}); // Optional: clear existing data
  await Restaurant.insertMany(data);
  console.log('Data imported successfully!');
  mongoose.disconnect();
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

