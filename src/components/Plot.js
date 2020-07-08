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
    <div className="three columns text-center">
      <h5>{crop.name}</h5>{' '}
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
      <div>
        {props.plot.growth >= crop.maturity ?
        <button onClick={props.harvest}>HARVEST</button>
        :
        <p>Growth: {props.plot.growth} / {crop.maturity}</p>
      }
      </div>
      )}
    </div>
  );
}
