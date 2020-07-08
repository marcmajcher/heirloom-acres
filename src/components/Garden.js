import React from 'react';
import Plot from './Plot';

export default function Garden(props) {
  return (
    <ul>
      {props.plots.map(e => <Plot key={Math.random()} plot={e}></Plot> )}
    </ul>
  );
}
