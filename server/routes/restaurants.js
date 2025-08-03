const express = require('express');
const Restaurant = require('../models/restaurants');
const router = express.Router();

// Get all restaurants, or filter by restaurantId, name, or itemId using query params
router.get('/', async (req, res) => {
  try {
    const filter = {};
    if (req.query.restaurantId) {
      filter.restaurantId = Number(req.query.restaurantId);
    }
    if (req.query.name) {
      filter.restaurant = { $regex: new RegExp('^' + req.query.name + '$', 'i') };
    }
    if (req.query.itemId) {
      filter['items.itemId'] = Number(req.query.itemId);
      const restaurants = await Restaurant.find(filter);
      const itemId = Number(req.query.itemId);
      // Only return the matching item(s) per restaurant
      const result = restaurants.map(r => {
        const item = r.items.find(i => i.itemId === itemId);
        return item ? { restaurant: r.get('restaurant'), restaurantId: r.get('restaurantId'), location: r.get('location'), item } : null;
      }).filter(Boolean);
      return res.json(result);
    }
    const restaurants = await Restaurant.find(filter);
    res.json(restaurants);
  } catch (err) {
    console.error('Error fetching restaurants:', err);
    res.status(500).send('Internal Server Error');
  }
});


// Get all restaurants and the item by itemId
router.get('/itemId/:itemId', async (req, res) => {
  try {
    const itemId = Number(req.params.itemId);
    const restaurants = await Restaurant.find({ 'items.itemId': itemId });
    console.log('Found restaurants:', restaurants);
    if (!restaurants.length) {
      console.log('No items found with itemId:', itemId, restaurants);
      return res.status(404).send('Not found');
    }
    // Find the unique item with the given itemId across all restaurants
    let found = null;
    for (const r of restaurants) {
      const item = r.items.find(i => i.itemId === itemId);
      if (item) {
        found = { restaurant: r.get('restaurant'), restaurantName: r.get('restaurantName'), restaurantId: r.get('restaurantId'), location: r.get('location'), item };
        break;
      }
    }
    if (!found) {
      return res.status(404).send('Item not found');
    }
    res.json(found);
  } catch (err) {
    console.error('Error fetching restaurant by itemId:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Get a single restaurant by restaurantId
router.get('/restaurantId/:restaurantId', async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({ restaurantId: Number(req.params.restaurantId) });
    if (!restaurant) return res.status(404).send('Not found');
    res.json(restaurant);
  } catch (err) {
    console.error('Error fetching restaurant by restaurantId:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Get a single restaurant by name (case-insensitive)
router.get('/name/:name', async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({ restaurant: { $regex: new RegExp('^' + req.params.name + '$', 'i') } });
    if (!restaurant) return res.status(404).send('Not found');
    res.json(restaurant);
  } catch (err) {
    console.error('Error fetching restaurant by name:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Create a new restaurant
router.post('/', async (req, res) => {
  try {
    const newRestaurant = new Restaurant(req.body);
    await newRestaurant.save();
    res.status(201).json(newRestaurant);
  } catch (err) {
    console.error('Error creating restaurant:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Update a restaurant by ID
router.put('/:id', async (req, res) => {
  try {
    const updated = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).send('Not found');
    res.json(updated);
  } catch (err) {
    console.error('Error updating restaurant:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Delete a restaurant by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Restaurant.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).send('Not found');
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error('Error deleting restaurant:', err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
