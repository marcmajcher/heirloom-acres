import React, { useState } from 'react';
import Garden from './Garden';
import Crop from '../Crop';

const INITIAL_DAY = 1;
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
const EMPTY_PLOT = () => ({ crop: new Crop(), growth: 0 });
const INITIAL_GARDENS = {
  small: [EMPTY_PLOT(), EMPTY_PLOT(), EMPTY_PLOT(), EMPTY_PLOT()],
  large: [EMPTY_PLOT(), EMPTY_PLOT(), EMPTY_PLOT(), EMPTY_PLOT()],
  greenhouse: [EMPTY_PLOT(), EMPTY_PLOT(), EMPTY_PLOT(), EMPTY_PLOT()],
};

export default function GameView(props) {
  const [gold, setGold] = useState(INITIAL_GOLD);
  const [renovations, setRenovations] = useState(INITIAL_RENOVATIONS);
  const [day, setDay] = useState(INITIAL_DAY);
  const [gardens, setGardens] = useState(INITIAL_GARDENS);

  function resetGame() {
    setGold(INITIAL_GOLD);
    setRenovations(INITIAL_RENOVATIONS);
    setGardens(INITIAL_GARDENS);
    props.resetGame();
  }

  function nextDay() {
    setDay(day + 1);
    processMorning();
  }
  function getDate(day) {
    const days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    const seasons = ['Spring', 'Summer', 'Fall', 'Winter'];

    const inday = day - 1;
    return `Year ${Math.floor(inday / (7 * 4 * 4)) + 1}: ${days[inday % 7]}, ${
      seasons[Math.floor(inday / 28) % 4]
    } ${(inday % 28) + 1}`;
  }
  function processMorning() {}

  return (
    <div>
      <p>
        <b>Welcome to the farm, {props.playerName}!</b>
      </p>
      <p>{getDate(day)}</p>
      <p>Current Gold: {gold}</p>
      <button onClick={nextDay}>Go to Next Day</button>
      <hr />

      {renovations.SMALL_GARDEN && (
        <div>
          <h4>Small Garden</h4>
          <Garden plots={gardens.small}></Garden>
        </div>
      )}

      {renovations.LARGE_GARDEN && (
        <div>
          <h4>Large Garden</h4>
          <Garden plots={gardens.large}></Garden>
        </div>
      )}

      <hr />
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}
