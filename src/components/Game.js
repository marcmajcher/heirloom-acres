import React from 'react';
import Garden from './Garden';
import { useSelector, useDispatch } from 'react-redux';
import { nextDay } from '../lib/actions';

export default function GameView(props) {
  const dispatch = useDispatch();
  const { date, gold, playerName, gardens, renovations } = useSelector(
    (store) => store
  );

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
      {renovations.RUNDOWN_HOUSE ? (
        <div>
          <h4>Rundown Farmhouse</h4>
          <div className="row">
            <div className="six columns">
              <p>Visitors: none</p>
            </div>
            <div className="six columns">
              <button className="u-pull-right">Upgrade</button>
            </div>
          </div>
        </div>
      ) : (
        'Something is terribly wrong.'
      )}

      {renovations.SMALL_GARDEN ? (
        <div>
          <h4>Small Garden</h4>
          <Garden plots={gardens.small} gardenId="small"></Garden>
        </div>
      ) : (
        'Something is terribly wrong.'
      )}

      {renovations.LARGE_GARDEN && (
        <div>
          <h4>Large Garden</h4>
          <Garden plots={gardens.large} gardenId="large"></Garden>
        </div>
      )}

      {renovations.COMPOST && (
        <div>
          <h4>Composting Pile</h4>
          <button className="u-pull-right">Buy Upgrade</button>
        </div>
      )}
      {renovations.FAIRY_SHRINE && (
        <div>
          <h4>Composting Pile</h4>
          <button className="u-pull-right">Buy Upgrade</button>
        </div>
      )}
    </div>
  );
}
