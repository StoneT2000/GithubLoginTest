const express = require('express');
const router = express.Router();
const axios = require('axios');
router.post("/", (req, res) => {
  console.log("POST TO PAYLOAD HEADERS: ",req.headers);
});

module.exports = router;
