const express = require('express');
const { rawListeners } = require('superagent');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    time: new Date().toLocaleTimeString(),
  });
});

router.post('/', (req, res) => {
  let seconds = req.body.time;
  const hours = Math.floor(seconds / (60 * 60));
  const minute = Math.floor((seconds - hours * (60 * 60)) / 60);
  const sec = seconds - (hours * (60 * 60) + minute * 60);
  const convertedValue = `${hours}:Hour ${minute}:Minute ${sec}:Second`;
  res.status(200).json({
    convertedTime: convertedValue,
  });
});

module.exports = router;
