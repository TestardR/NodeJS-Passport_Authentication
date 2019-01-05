const express = require('express');
const router = express.Router();

// Login Page with ejs template
router.get('/login', (req, res) => {
  res.render('login');
});

// Register Page with ejs template
router.get('/register', (req, res) => {
  res.render('register');
});

module.exports = router;
