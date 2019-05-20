import React from 'react';

const UserInput = props => {
  const styles = {
    height: '30px',
    font: 'inherit',
    borderRadius: '4px',
    padding: '5px',
    border: '1px solid #ccc',
  }

  return <input
    type="text"
    onChange={props.updateUsername}
    defaultValue={props.username}
    style={styles} />
}

export default UserInput;