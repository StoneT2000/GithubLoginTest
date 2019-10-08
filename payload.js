const express = require('express');
const router = express.Router();
const axios = require('axios');


// TODO: Add secret to prevent 3rd party posts not from github
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
 * @param req - the request object. Note that the actual data is in req.body
 */
function pullRequestEvent(req) {
  console.log("Initator of Pull Request: " + req.body.pull_request.user.login);
}
/**
 *
 *
 */
function pushEvent(req) {
  console.log(`SHA of latest commit at ${req.body.commits[0].timestamp}: ${req.body.commits[0].id}`);
  console.log("Who Pushed: " + req.body.pusher.name);
}

function deploymentEvent(req) {
  console.log("Deployment created at: " + req.body.deployment.created_at);
}

module.exports = router;
