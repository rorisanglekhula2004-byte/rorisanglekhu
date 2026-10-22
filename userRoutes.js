const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/User');

// GET all users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// POST create a user
router.post('/', async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const savedUser = await new User({ name, email }).save();
    res.status(201).json(savedUser);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({
        message: Object.values(err.errors).map((e) => e.message).join(', '),
      });
    }
    next(err);
  }
});

// DELETE a user
router.delete('/:id', async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: 'Invalid user id' });
    }
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
