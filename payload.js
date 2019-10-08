const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post("/", (req, res) => {
  // console.log("POST TO PAYLOAD HEADERS: ",req.headers);

  res.send("Accepted");
  let event = req.headers['x-github-event'];
  if (event == 'push') {
    pushEvent(req);
  }
  else if (event == 'pull_request') {
    pullRequestEvent(req);
  }
  else if (event == 'deployment') {
    deploymentEvent(req);
  }
});

/**
 * Triggered when a pull request is assigned, unassigned, labeled, unlabeled, opened, edited,
 * closed, reopened, synchronize, ready_for_review, locked, unlocked or
 * when a pull request review is requested or removed.
 * @param req - the request object
 */
function pullRequestEvent(req) {
  console.log("Initator of Pull Request: " + req.pull_request.user.login);
}

function pushEvent(req) {
  console.log("Who Pushed: " + req.pusher.name);
}

function deploymentEvent(req) {
  console.log("Deployment created at: " + req.deployment.created_at);
}

module.exports = router;
