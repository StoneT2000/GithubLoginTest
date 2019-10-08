const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/hey', (req, res) => res.send('Hey!'));

router.get('/code/:code', (req, res) => {
  let code = req.params.code;
  console.log(req.params.code);
  axios.post("https://github.com/login/oauth/access_token", {
    client_id: "5b51d07e53faaf6cc5d2",
    client_secret: "8ef9599703f441e01439807ee090d56abe97354e",
    code:code // pass in the code retrieved earlier from authorization
  }).then(function (response) {
    res.send(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

});

module.exports = router;
