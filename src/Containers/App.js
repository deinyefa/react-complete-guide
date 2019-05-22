import React, { Component, Fragment } from 'react';

import Classes from './App.css';
// import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context';

class App extends Component {
  state = {
    persons: [
      { id: 'fv', name: 'Fiyin', age: 22 },
      { id: 'gbz', name: 'Tobi', age: 29 },
      { id: 'zgfb', name: 'Toyin', age: 27 },
      { id: 'bgdzb', name: 'Tolu', age: 26 }
    ],
    showPersons: false,
    authenticated: false,
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
    });

    // Best practice for state updates that depend on the old state (counters, etc)
    // this.setState((prevState, props) => {
    //   return {
    //     persons: persons
    //   }
    // })
  }

  loginHangler = () => {
    this.setState((prevState, props) => {
      return { authenticated: !prevState.authenticated }
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.changeNameHandler}
        isAuthenticated={this.state.authenticated} />;
    }

    return (
      <Fragment>
        <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHangler }}>
          <Cockpit
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            togglePersonsHandler={this.togglePersonsHandler}
            login={this.loginHangler} />
          {persons}
        </AuthContext.Provider>
      </Fragment>
    );
  }
}

export default withClass(App, Classes.App);