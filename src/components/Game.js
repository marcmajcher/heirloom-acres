import React from 'react';
import Garden from './Garden';
import { useSelector, useDispatch } from 'react-redux';
import { nextDay } from '../actions';

export default function GameView(props) {
  const dispatch = useDispatch();
  const { date, gold, playerName, gardens, renovations } = useSelector(store => store);

  return (
    <div>
      <p>
        <b>Welcome to the farm, {playerName}!</b>
      </p>
      <div className="row">
        <div className="one-third column">{date}</div>
        <div className="one-third column text-center">
          Current Gold: {gold} {gold < 2 ? <b>OH NO!</b> : ''}
        </div>
        <div className="one-third column text-right">
          <button onClick={() => dispatch(nextDay())}>Go to Next Day</button>
        </div>
      </div>

      <hr />

      {renovations.SMALL_GARDEN && (
        <div>
          <h4>Small Garden</h4>
          <Garden plots={gardens.small} gardenId="small"></Garden>
        </div>
      )}

      {renovations.LARGE_GARDEN && (
        <div>
          <h4>Large Garden</h4>
          <Garden plots={gardens.large}></Garden>
        </div>
      )}
    </div>
  );
}
