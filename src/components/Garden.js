import React from 'react';

export default function Garden(props) {
  return (
    <ul>
      {props.plots.map((e, i) => <li>Plot {i+1}: {e.crop.name}</li>)}
    </ul>
  );
}
