import React from 'react';
import Plot from './Plot';

export default function Garden(props) {
  return (
    <div className="row">
      {props.plots.map((e, i) => (
        <Plot
          key={i}
          plantCrop={(cropId) => props.plantCrop(props.gardenId, i, cropId)}
          harvest={() => props.harvest(props.gardenId, i)}
          plot={e}
        ></Plot>
      ))}
    </div>
  );
}
