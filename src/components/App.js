import React, { useState } from 'react';
import StartGame from './StartGame';
import Game from './Game';

export default function App() {
  const [playing, setPlaying] = useState(true) // only for testing (false);
  const [playerName, setPlayerName] = useState('Marc') // only for testing ('');

  function resetGame() {
    setPlayerName('');
    setPlaying(false);
  }
  function handleChangeName(e) {
    setPlayerName(e.target.value);
  }
  function handleNameButton() {
    setPlaying(true);
  }

  return (
    <div className="container">
      <h1>Heirloom Acres</h1>
      {playing ? (
        <Game playerName={playerName} resetGame={resetGame}></Game>
      ) : (
        <StartGame
          playerName={playerName}
          handleChangeName={handleChangeName}
          handleNameButton={handleNameButton}
        ></StartGame>
      )}
    </div>
  );
}
