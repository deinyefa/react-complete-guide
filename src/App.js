import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';

import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'fv', name: 'Fiyin', age: 22 },
      { id: 'gbz', name: 'Tobi', age: 29 },
      { id: 'zgfb', name: 'Toyin', age: 27 },
      { id: 'bgdzb', name: 'Tolu', age: 26 }
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: '#21638c',
      font: 'inherit',
      border: '1px solid #21638c',
      padding: '8px 20px',
      cursor: 'pointer',
      borderRadius: '4px',
      color: 'white',
      boxShadow: '0 2px 3px #ccc',
      ':hover': {
        backgroundColor: '#4c8634'
      }
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={this.deletePersonHandler.bind(this, index)}
              changed={(event) => this.changeNameHandler(event, person.id)} />
          ))}
        </div>
      );

      style.backgroundColor = '#8e0000';
      style[':hover'] = {
        backgroundColor: '#5d1313',
        color: 'white'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I am a React App!</h1>
          <p className={classes.join(' ')}>What's up?</p>
          <button onClick={this.togglePersonsHandler} style={style}>Toggle List</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);