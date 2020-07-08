import React, { useState } from 'react';
import Crop from '../Crop';

export default function Plot(props) {
  const [selectedCrop, setSelectedCrop] = useState(undefined);
  const crop = props.plot.crop;
  const cropInfo = Crop.cropInfo();

  function handleCropChange(e) {
    setSelectedCrop(parseInt(e.target.value));
  }

  return (
    <li>
      <b>{crop.name}</b>{' '}
      {crop.name === 'empty' ? (
        <div>
          <select onChange={handleCropChange}>
            <option> -- choose --</option>
            {Object.values(cropInfo).map((e) => (
              <option value={e.id} key={e.id}>
                {e.name} - Cost {e.cost}
              </option>
            ))}
          </select>{' '}
          <button onClick={() => props.plantCrop(selectedCrop)}>
            Plant Crop
          </button>
        </div>
      ) : (
      <div>Growth: {props.plot.growth}</div>
      )}
    </li>
  );
}
