import React from 'react';
import Plot from './Plot';
export default function Garden(props) {
  return (
    <div className="row">
      {props.plots.map((plot, cropId) => (
        <Plot
          key={cropId}
          gardenId={props.gardenId}
          plotId={cropId}
          plot={plot}
        ></Plot>
      ))}
    </div>
  );
}
