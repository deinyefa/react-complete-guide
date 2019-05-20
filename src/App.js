import React, { Component } from 'react';
import './App.css';

import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    username: 'doglover'
  }

  updateUsernameHandler = event => {
    this.setState({ username: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App!</h1>
        <p>What's up?</p>
        <UserOutput 
          username={this.state.username}
          updateUsername={this.updateUsernameHandler.bind(this)} />
        <UserOutput 
          username={this.state.username}
          updateUsername={this.updateUsernameHandler.bind(this)} />
        <UserOutput 
          username={this.state.username} 
          updateUsername={this.updateUsernameHandler.bind(this)} />
      </div>
    );
  }
}

export default App;