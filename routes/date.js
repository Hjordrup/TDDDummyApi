const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    date: new Date().toISOString().slice(0, 10),
  });
});

module.exports = router;
