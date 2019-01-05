const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// Route to welcome.ejs
router.get('/', (req, res) => {
  res.render('welcome');
});
// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard')
);

module.exports = router;
