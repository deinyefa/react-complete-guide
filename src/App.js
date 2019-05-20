import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Fiyin', age: 22 },
      { name: 'Tobi', age: 29 },
      { name: 'Toyin', age: 27 },
      { name: 'Tolu', age: 26 }
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Fiyinfoluwa', age: 23 },
        { name: 'Tobi', age: 29 },
        { name: 'Toyin', age: 27 },
        { name: 'Tolu', age: 30 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App!</h1>
        <p>What's up?</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
      </div>
    );
  }
}

export default App;