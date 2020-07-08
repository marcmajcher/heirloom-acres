import React from 'react';

export default function Footer(props) {
  return (
    <div className="footer">
      <hr />
      <button className="u-pull-right" onClick={props.resetGame}>
        Reset Game
      </button>
    </div>
  );
}
