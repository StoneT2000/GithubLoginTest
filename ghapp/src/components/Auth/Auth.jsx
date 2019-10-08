//
import axios from 'axios';
import React, { Component } from 'react';
import queryString from 'query-string'
import './style.css';
class Auth extends Component {
  constructor(props) {
    super();
    this.state = {
      response: "",
      values: queryString.parse(props.location.search)
    }
  }
  //authenticate from server!
  authenticate(code) {
    axios.get("https://github-webhooks-stone.herokuapp.com/api/auth/code/" + code)
    .then(res =>{

      // Process the response from our API
      let resParams = res.data.split("&");
      let resObj = {};
      for (let i = 0; i < resParams.length; i++) {
        let args = resParams[i].split("=");
        resObj[args[0]] = args[1];
      }
      console.log(resObj);

      // Show the error if there is one, else show the data received (should be the access token, scope, and )
      if (resObj.error) {
        this.setState({response: <div className="AuthResponse"><p>Error: {resObj.error}</p><p>Description: {resObj.error_description}</p><p>Error URI: {resObj.error_uri}</p></div>});
      }
      else {
        // github gives us an access_token, allowing us to pretend like we are the user and do things!
        // This is also confirmation that their github login worked
        this.setState({response: <p>Access Token: {resObj.access_token}</p>});
      }

    })


    //suppose we get access token: 44c0cc6bf5dde707540f253f87eadae46cf09bdc

  }
  componentDidMount() {
    this.authenticate(this.state.values.code);
  }
  render() {
    return (

      <div className="Auth">


        <h1>Authenticating with code: {this.state.values.code}</h1>
        <h3>Response</h3>
        {this.state.response}
      </div>
    )
  }
}

export default Auth
