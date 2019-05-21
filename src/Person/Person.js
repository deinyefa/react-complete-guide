import React from 'react';

import PersonClass from './Person.css';

const Person = (props) => {
  const rnd = Math.random();

  if (rnd > 0.7) {
    throw new Error('Something went wrong!')
  }
  return (
    <div className={PersonClass.Person}>
      <p onClick={props.click}>My name is {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} defaultValue={props.name} />
    </div>
  );
}

export default Person;