const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post("/", (req, res) => {
  console.log("POST TO PAYLOAD HEADERS: ",req.headers);
  res.send("Accepted");
  let event = req.headers['x-github-event'];
  if (event == 'push') {
    console.log("Hooked onto latest commit");
    console.log(req.data);
  }


  else if (event == 'pull_request') {
    pullRequestEvent(req);
  }
});
/**
 * Triggered when a pull request is assigned, unassigned, labeled, unlabeled, opened, edited,
 * closed, reopened, synchronize, ready_for_review, locked, unlocked or
 * when a pull request review is requested or removed.
 * @param req - the request object
 */
function pullRequestEvent(req) {
  console.log(req.data);
  console.log("ACTION: " + req.data.action);
}

module.exports = router;
