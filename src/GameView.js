import React from 'react';

export default function GameView(props) {
  return (
    <div>
      <p>
        <b>Welcome, {props.playerName}</b>
      </p>
      <p>Current Gold: {props.gold}</p>
      <hr />
      <button onClick={props.resetGame}>Reset Game</button>

    </div>
  );
}
