import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import PersonClass from './Person.css';
import withClass from '../../../hoc/WithClass';

const Person = (props) => {
  return (
    <Fragment>
      <p onClick={props.click}>My name is {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} defaultValue={props.name} />
    </Fragment>
  );
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  changed: PropTypes.func,
}

export default withClass(Person, PersonClass.Person);