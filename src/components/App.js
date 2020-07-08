import React from 'react';
import StartGame from './StartGame';
import Game from './Game';
import { useDispatch, useSelector } from 'react-redux';
import { setName, startGame } from '../actions';
import Footer from './Footer';

export default function App() {
  const dispatch = useDispatch();
  const playing = useSelector((store) => store.playing);
  const playerName = useSelector((store) => store.playerName);

  function handleChangeName(e) {
    dispatch(setName(e.target.value));
  }

  function handleNameButton() {
    dispatch(startGame());
  }

  return (
    <div className="container">
      <h1>Heirloom Acres</h1>
      {playing ? (
        <Game/>
      ) : (
        <StartGame
          playerName={playerName}
          handleChangeName={handleChangeName}
          handleNameButton={handleNameButton}
        ></StartGame>
      )}
      <Footer />
    </div>
  );
}
