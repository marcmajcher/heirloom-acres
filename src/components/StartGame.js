import React from 'react';

export default function StartGame(props) {
  return (
    <div>
      <form onSubmit={props.handleNameButton}>
        Please tell me your name:{' '}
        <input
          type="text"
          value={props.playerName}
          onChange={props.handleChangeName}
        />{' '}
        <input type="submit" value="OK"/>
      </form>
    </div>
  );
}
