const axios = require('axios');

axios.post("http://localhost:8080/payload", {

}, {
  headers: {
    "X-GitHub-Event": "ISSUES"
  }
}).then(res => {
  console.log(res.data);
})
