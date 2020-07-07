import React from 'react';

export default function StartGame(props) {
  return (
    <div>
      Please tell me your name:{' '}
      <input
        type="text"
        value={props.playerName}
        onChange={props.handleChangeName}
      />{' '}
      <button onClick={props.handleNameButton}>OK</button>
    </div>
  );
}
