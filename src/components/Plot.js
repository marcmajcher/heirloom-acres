import React from 'react';
import Crop from '../Crop';

export default function Plot(props) {
  const crop = props.plot.crop;
  const cropInfo = Crop.cropInfo();

  return (
    <li>
      <b>{crop.name}</b>{' '}
      {crop.name === 'empty' ? (
        <div>
          <select>
            <option> -- choose --</option>
            {Object.values(cropInfo).map((e) => (
              <option key={e.id}>
                {e.name} - Cost {e.cost}
              </option>
            ))}
          </select>{' '}
          <button>Plant Crop</button>
        </div>
      ) : (
        '2423232'
      )}
    </li>
  );
}
