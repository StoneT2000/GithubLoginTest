const express = require('express');
const router = express.Router();
const axios = require('axios');
router.post("/", (req, res) => {
  console.log("POST TO PAYLOAD HEADERS: ",req.headers);
  res.send("Accepted");
  if (req.headers['x-github-event'] == 'push') {
    console.log("Hooked onto latest commit");
    console.log(req.data);

  }
});

module.exports = router;
