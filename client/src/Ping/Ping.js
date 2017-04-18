import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { API_URL } from './../constants';

class Home extends Component {
  componentWillMount() {
    this.setState({ message: '' });
  }
  login() {
    this.props.route.auth.login();
  }
  ping() {
    fetch(`${API_URL}/ping`)
      .then(res => res.json())
      .then(data => this.setState({ message: data.message }));
  }
  securedPing() {
    const { authFetch } = this.props.route.auth;
    authFetch(`${API_URL}/secured/ping`)
      .then(data => this.setState({ message: data.message }))
      .catch(error => this.setState({ message: error.message }));
  }
  render() {
    const { isAuthenticated } = this.props.route.auth;
    const { message } = this.state;
    return (
      <div>
        <h1>Make a Call to the Server</h1>
        {
          !isAuthenticated() &&
            <p>Log in to call a private (secured) server endpoint.</p>
        }
        <Button bsStyle="primary" onClick={this.ping.bind(this)}>Ping</Button>
        {' '}
        {
          isAuthenticated() && (
              <Button bsStyle="primary" onClick={this.securedPing.bind(this)}>
                Call Private
              </Button>
            )
        }
        <h2>{message}</h2>
      </div>
    );
  }
}

export default Home;
