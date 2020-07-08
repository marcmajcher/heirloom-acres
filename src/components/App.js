import React from 'react';
import StartGame from './StartGame';
import Game from './Game';
import { useSelector } from 'react-redux';
import Footer from './Footer';

export default function App() {
  const playing = useSelector((store) => store.playing);

  return (
    <div className="container">
      <h1>Heirloom Acres</h1>
      {playing ? <Game /> : <StartGame />}
      <Footer />
    </div>
  );
}
