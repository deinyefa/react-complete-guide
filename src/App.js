import React, { Component } from 'react';

import Classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <ErrorBoundary key={person.id}>
              <Person
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler.bind(this, index)}
                changed={(event) => this.changeNameHandler(event, person.id)} />
            </ErrorBoundary>
          ))}
        </div>
      );

      btnClass = Classes.Red
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(Classes.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(Classes.bold);
    }

    return (
      <div className={Classes.App}>
        <h1>Hi, I am a React App!</h1>
        <p className={classes.join(' ')}>What's up?</p>
        <button onClick={this.togglePersonsHandler} className={btnClass}>Toggle List</button>
        {persons}
      </div>
    );
  }
}

export default App;