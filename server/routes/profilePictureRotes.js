const express = require('express');
const multer = require('multer');
const User = require('../models/userLogin');
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Make sure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

router.post('/profile-picture', upload.single('profilePicture'), async (req, res) => {
  const userId = req.user.id; // adjust as needed
  const profilePicturePath = req.file.path;
  await User.findByIdAndUpdate(userId, { profilePicture: profilePicturePath });
  // Fetch the updated user
  const updatedUser = await User.findById(userId);
  res.json({ message: 'Profile picture updated', user: updatedUser });
});

module.exports = router;