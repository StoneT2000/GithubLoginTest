const axios  = require('axios');


axios.post("https://github.com/login/oauth/access_token", {
  client_id: "5b51d07e53faaf6cc5d2",
  client_secret: "8ef9599703f441e01439807ee090d56abe97354e",
  code:"55ab5a93cf1f6958876b" // pass in the code retrieved earlier from authorization
}).then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

//suppose we get access token: 44c0cc6bf5dde707540f253f87eadae46cf09bdc
