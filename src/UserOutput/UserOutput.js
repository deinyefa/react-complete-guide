import React from 'react';

import UserInput from '../UserInput/UserInput';
import './UserOutput.css';

const UserOutput = props => {
  return (
    <div className="UserOutput">
      <p>Username: {props.username}</p>
      <UserInput updateUsername={props.updateUsername} username={props.username} />
    </div>
  )
}

export default UserOutput;