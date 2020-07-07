import React, { useState } from 'react';
import './App.css';
import StartGame from './StartGame';
import GameView from './GameView';

const INITIAL_GOLD = 12;

export default function App() {
  const [playing, setPlaying] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [gold, setGold] = useState(INITIAL_GOLD);

  function resetGame() {
    setPlayerName('');
    setGold(INITIAL_GOLD);
    setPlaying(false);
  }
  function handleChangeName(e) {
    setPlayerName(e.target.value);
  }
  function handleNameButton() {
    setPlaying(true);
  }

  return (
    <div className="App">
      <h1>Heirloom Acres</h1>
      {playing ? (
        <GameView gold={gold} playerName={playerName} resetGame={resetGame}></GameView>
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
