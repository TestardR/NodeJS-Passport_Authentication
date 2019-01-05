const express = require('express');
const router = express.Router();

// Load User model
const User = require('../models/User');

// Login Page with ejs template
router.get('/login', (req, res) => {
  res.render('login');
});

// Register Page with ejs template
router.get('/register', (req, res) => {
  res.render('register');
});

// Register Handle
router.post('/register', (req, res) => {
  // Destructuring
  const { name, email, password, password2 } = req.body;
  let errors = [];

  // Check required fields
  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please fill in all fields' });
  }

  // Check passwords match
  if (password !== password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  // Check pass length
  if (password.length < 8) {
    errors.push({ msg: 'Password should be at least 8 characters' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    res.send('pass');
  }
});

module.exports = router;
