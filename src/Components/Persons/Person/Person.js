import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';

import PersonClass from './Person.css';
import withClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/auth-context';

const Person = (props) => {

  // needs to be a class-based component tho!
  //  static contextType = AuthContext;
  // Will let you access context in life cycle methods ex. componentDidMount
  //  componentDidMount = () => {
  //    console.log(this.context.authenticated)
  //  }

  const authContext = useContext(AuthContext);
  

  return (
    <Fragment>
        { authContext.authenticated ? <p>Authenticated!</p> : <p>Please Log in</p>}
        {/*OR -> { this.context.authenticated ? <p>Authenticated!</p> ... } */}
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