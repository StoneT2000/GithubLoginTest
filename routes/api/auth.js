const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/hey', (req, res) => res.send('Hey!'));

const client_secret = process.env.client_secret;

router.get('/code/:code', (req, res) => {
  let code = req.params.code;
  console.log(req.params.code);
  axios.post("https://github.com/login/oauth/access_token", {
    client_id: "5b51d07e53faaf6cc5d2",
    client_secret: client_secret,
    code:code // pass in the code retrieved earlier from authorization
  }).then(function (response) {
    res.send(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

});

module.exports = router;
