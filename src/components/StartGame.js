import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setName, startGame } from '../actions';

export default function StartGame(props) {
  const [playerName, setPlayerName] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setName(playerName));
    dispatch(startGame());
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Please tell me your name:{' '}
        <input
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />{' '}
        <input type="submit" value="OK" />
      </form>
    </div>
  );
}
