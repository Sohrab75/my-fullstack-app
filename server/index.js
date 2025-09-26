const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Restaurant = require("./models/restaurants");
require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());




//route
app.get("/api/hello", (req, res) => {
  try {
    res.send("Hello World!");
  } catch (err) {
    console.error("Error in /api/hello:", err);
    res.status(500).send("Internal Server Error");
  }
});


// Use restaurants router
const restaurantRoutes = require('./routes/restaurants');
app.use('/api/restaurants', restaurantRoutes);

// Use auth router
const authRoutes = require('./routes/loginRoute');
app.use('/api/auth', authRoutes);

const profilePictureRoutes = require('./routes/profilePictureRotes');
app.use('/api/user', profilePictureRoutes);
// ...existing code...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    // Do not exit the process, just log the error
  });
