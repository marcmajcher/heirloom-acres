import React from 'react';
import { resetGame } from '../actions';
import { useDispatch } from 'react-redux';

export default function Footer(props) {
  const dispatch = useDispatch();

  return (
    <div className="footer">
      <hr />
      <button className="u-pull-right" onClick={() => dispatch(resetGame())}>
        Reset Game
      </button>
    </div>
  );
}
