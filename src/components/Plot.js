import React, { useState } from 'react';
import Crop from '../model/Crop';
import { useDispatch, useSelector } from 'react-redux';
import { harvest, plantCrop } from '../lib/actions';

export default function Plot({ gardenId, plotId, plot }) {
  const [selectedCropId, setSelectedCropId] = useState(undefined);
  const dispatch = useDispatch();
  const gold = useSelector((s) => s.gold);

  const crop = plot.crop;
  const cropInfo = Crop.cropInfo();

  function handleCropChange(e) {
    setSelectedCropId(e.target.value ? parseInt(e.target.value) : undefined);
  }

  function handlePlantCrop() {
    const crop = Crop.cropById(selectedCropId);
    if (gold >= crop.cost) {
      dispatch(plantCrop(gardenId, plotId, crop));
    }
    setSelectedCropId(undefined);
  }

  return (
    <div className="three columns text-center">
      <h5>{crop.name}</h5>{' '}
      {crop.name === 'empty' ? (
        <div>
          <select onChange={handleCropChange}>
            <option value=""> -- choose -- </option>
            {Object.values(cropInfo).map((e) => (
              <option value={e.id} key={e.id} disabled={e.cost > gold}>
                {e.name} - Cost {e.cost}
              </option>
            ))}
          </select>{' '}
          {selectedCropId && (
            <button onClick={handlePlantCrop}>Plant Crop</button>
          )}
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
