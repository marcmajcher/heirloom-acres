import React from 'react';
import Plot from './Plot';

export default function Garden(props) {
  return (
    <ul>
      {props.plots.map((e, i) => (
        <Plot
          key={i}
          plantCrop={(cropId) => props.plantCrop(props.gardenId, i, cropId)}
          plot={e}
        ></Plot>
      ))}
    </ul>
  );
}
