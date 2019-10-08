//
import axios from 'axios';
import React, { Component } from 'react';
import queryString from 'query-string'

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
    axios.get("http://localhost:8080/api/auth/code/" + code)
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
        this.setState({response: "Error: " + resObj.error + "; Description: " + resObj.error_description + "; " + resObj.error_uri});
      }
      else {
        this.setState({response: res.data});
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


        <h2>Authenticating with code: {this.state.values.code}</h2>
        <p>Response: {this.state.response}</p>
      </div>
    )
  }
}

export default Auth
