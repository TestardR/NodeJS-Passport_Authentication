const express = require('express');
const router = express.Router();

// Route to welcome.ejs
router.get('/', (req, res) => {
  res.render('welcome');
});

module.exports = router;
