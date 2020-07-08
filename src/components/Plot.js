import React, { useState } from 'react';
import Crop from '../Crop';
import { useDispatch, useSelector } from 'react-redux';
import { harvest, plantCrop } from '../actions';

export default function Plot({ gardenId, plotId, plot }) {
  const [selectedCropId, setSelectedCropId] = useState(undefined);

  const crop = plot.crop;
  const cropInfo = Crop.cropInfo();
  const dispatch = useDispatch();
  const gold = useSelector((s) => s.gold);

  function handleCropChange(e) {
    setSelectedCropId(parseInt(e.target.value));
  }

  function handlePlantCrop() {
    const crop = Crop.cropById(selectedCropId);
    if (gold >= crop.cost) {
      dispatch(plantCrop(gardenId, plotId, crop));
    }
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
          <button onClick={handlePlantCrop}>Plant Crop</button>
        </div>
      ) : (
        <div>
          {plot.growth >= crop.maturity ? (
            <button onClick={() => dispatch(harvest(gardenId, plotId))}>
              HARVEST
            </button>
          ) : (
            <p>
              Growth: {plot.growth} / {crop.maturity}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
