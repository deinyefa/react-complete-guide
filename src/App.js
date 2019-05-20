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

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: 'Tobi', age: 29 },
        { name: 'Toyin', age: 27 },
        { name: 'Tolu', age: 30 }
      ]
    })
  }

  changeNameHandler = event => {
    this.setState({
      persons: [
        { name: 'Fiyin', age: 23 },
        { name: event.target.value, age: 29 },
        { name: 'Toyin', age: 27 },
        { name: 'Tolu', age: 30 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid #ff8f00',
      padding: '8px 20px',
      cursor: 'pointer',
      borderRadius: '4px',
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App!</h1>
        <p>What's up?</p>
        <button onClick={() => this.switchNameHandler('Fiyinfoluwa')} style={style}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Folu')} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.changeNameHandler}>I love sailing!</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
      </div>
    );
  }
}

export default App;