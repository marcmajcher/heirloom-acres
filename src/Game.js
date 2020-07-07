import React from 'react';

export default function GameView(props) {
  
  return (
    <div>
      <p>
        <b>Welcome, {props.playerName}</b>
      </p>
      <p>Current Gold: {props.gold}</p>
      <hr />

      { props.renovations.SMALL_GARDEN &&
      <div>
        Small Garden
        <ul>
          <li>Plot 1</li>
          <li>Plot 2</li>
          <li>Plot 3</li>
          <li>Plot 4</li>
        </ul>
      </div>}

      { props.renovations.LARGE_GARDEN &&
      <div>
        Large Garden
        <ul>
          <li>Plot 1</li>
          <li>Plot 2</li>
          <li>Plot 3</li>
          <li>Plot 4</li>
        </ul>
      </div>}

      <hr />
      <button onClick={props.resetGame}>Reset Game</button>
    </div>
  );
}
