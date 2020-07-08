import React from 'react';
import Plot from './Plot';
export default function Garden(props) {
  return (
    <div className="row">
      {props.plots.map((plot, plotId) => (
        <Plot
          key={plotId}
          gardenId={props.gardenId}
          plotId={plotId}
          plot={plot}
        ></Plot>
      ))}
    </div>
  );
}
