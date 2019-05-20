import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    // state = {
    persons: [
      { name: 'Fiyin', age: 22 },
      { name: 'Tobi', age: 29 },
      { name: 'Toyin', age: 27 },
      { name: 'Tolu', age: 26 }
    ]
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Fiyinfoluwa', age: 23 },
        { name: 'Tobi', age: 29 },
        { name: 'Toyin', age: 27 },
        { name: 'Tolu', age: 30 }
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I am a React App!</h1>
      <p>What's up?</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      <Person name={personsState.persons[3].name} age={personsState.persons[3].age} />
    </div>
  );

}

export default App;




