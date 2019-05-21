import React, { Fragment } from 'react';

import Classes from './Cockpit.css';

const Cockpit = props => {

  const classes = [];
  if (props.persons.length <= 2) {
    classes.push(Classes.red);
  }
  if (props.persons.length <= 1) {
    classes.push(Classes.bold);
  }

  let btnClass = '';
  if (props.showPersons) {
    btnClass = Classes.Red;
  }


  return (
    <div className={Classes.Cockpit}>
      <h1>Hi, I am a React App!</h1>
      <p className={classes.join(' ')}>What's up?</p>
      <button onClick={props.togglePersonsHandler} className={btnClass}>Toggle List</button>
    </div>
  )
}

export default Cockpit;