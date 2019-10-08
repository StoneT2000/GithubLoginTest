import React, { Component } from 'react';
import './style.css';
class Main extends Component {
  signIn() {
    const client_id = '5b51d07e53faaf6cc5d2'
    const redirect_uri = 'http://localhost:3000/auth/';
    // %26 is &, but this way its not treated as a param
    window.location = `https://github.com/login?client_id=${client_id}&return_to=/login/oauth/authorize?client_id=${client_id}%26redirect_uri=${redirect_uri}`;
  }
  render() {

    return (

      <div className="Main">
        <div className="card">
        <h2>Hello</h2>
        <button onClick={this.signIn}>Sign In</button>
        </div>
      </div>
    )
  }
}

export default Main
