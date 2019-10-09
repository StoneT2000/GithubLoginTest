# Integrating Github

Basic integration.

First fork this repository

Run the react app by running

```cmd
npm start --prefix ghapp
```

Run the backend which is **required** by running

```cmd
node app.js
```



## Login with GitHub

When the react app is running, by going to `localhost:3000/`, you can see a button to sign in with GitHub. Once signing in is complete and authorization is given, the app will return to a new page showing the access token given by GitHub that we can use to make requests on behalf of the user to the GitHub API.

## Webhooks

`app.js` and `payload.js` are the frameworks for processing GitHub events such as new Pull Requests, closing PRs, new issues, new push, deployment etc.

Full list here: https://developer.github.com/webhooks/

For webhooks to work, you need this framework and you need to setup a webhook that posts to your endpoint with this framework.

