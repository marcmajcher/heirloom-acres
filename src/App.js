import React, { useState } from 'react';
import StartGame from './StartGame';
import Game from './Game';

const INITIAL_GOLD = 12;
const INITIAL_RENOVATIONS = {
  RUNDOWN_HOUSE: true,
  SMALL_GARDEN: true,
  COMPOST: false,
  LARGE_GARDEN: false,
  GREENHOUSE: false,
  COZY_HOUSE: false,
  FAIRY_SHRINE: false,
};

export default function App() {
  const [playing, setPlaying] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [gold, setGold] = useState(INITIAL_GOLD);
  const [renovations, setRenovations] = useState(INITIAL_RENOVATIONS);

  function resetGame() {
    setPlayerName('');
    setGold(INITIAL_GOLD);
    setRenovations(INITIAL_RENOVATIONS);
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
        <Game
          gold={gold}
          playerName={playerName}
          resetGame={resetGame}
          renovations={renovations}
        ></Game>
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
