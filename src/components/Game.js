import React, { useState } from 'react';
import Garden from './Garden';
import Crop from '../Crop';
import { useSelector, useDispatch } from 'react-redux';
import { addDay, setGold } from '../actions';

const INITIAL_RENOVATIONS = {
  RUNDOWN_HOUSE: true,
  SMALL_GARDEN: true,
  COMPOST: false,
  LARGE_GARDEN: false,
  GREENHOUSE: false,
  COZY_HOUSE: false,
  FAIRY_SHRINE: false,
};
const EMPTY_PLOT = () => ({ crop: new Crop(), growth: 0 });
const INITIAL_GARDENS = {
  small: [EMPTY_PLOT(), EMPTY_PLOT(), EMPTY_PLOT(), EMPTY_PLOT()],
  large: [EMPTY_PLOT(), EMPTY_PLOT(), EMPTY_PLOT(), EMPTY_PLOT()],
  greenhouse: [EMPTY_PLOT(), EMPTY_PLOT(), EMPTY_PLOT(), EMPTY_PLOT()],
};

export default function GameView(props) {
  const dispatch = useDispatch();
  const playerName = useSelector((store) => store.playerName);
  const gold = useSelector((store) => store.gold);
  const date = useSelector((store) => store.date);

  const [renovations, setRenovations] = useState(INITIAL_RENOVATIONS);
  const [gardens, setGardens] = useState(INITIAL_GARDENS);

  function nextDay() {
    dispatch(addDay());
    processMorning();
  }

  function processMorning() {
    const newGardens = { ...gardens };
    for (const gardenId in newGardens) {
      newGardens[gardenId] = newGardens[gardenId].map((plot) => {
        const newPlot = plot;
        // const newPlot =  {...plot }; // wtf
        if (plot.crop.id !== undefined && plot.growth < plot.crop.maturity) {
          newPlot.growth += 1;
          // console.log(plot);
          // console.log(newPlot);
        }
        return newPlot;
      });
    }
  }

  function harvest(gardenId, plotNumber) {
    const newGardens = { ...gardens };
    newGardens[gardenId] = [...newGardens[gardenId]];

    const cropYield = gardens[gardenId][plotNumber].crop.yield;
    const harvestGold = Math.floor(Math.random() * cropYield) + 1;
    setGold(gold + harvestGold);

    newGardens[gardenId][plotNumber] = EMPTY_PLOT();
    setGardens(newGardens);
  }

  function plantCrop(gardenId, plotNumber, cropId) {
    const crop = Crop.cropById(cropId);
    if (gold >= crop.cost) {
      const newGardens = { ...gardens };
      newGardens[gardenId] = [...newGardens[gardenId]];
      newGardens[gardenId][plotNumber] = { crop, growth: 0 };
      setGardens(newGardens);
      setGold(gold - crop.cost);
    }
  }

  return (
    <div>
      <p>
        <b>Welcome to the farm, {playerName}!</b>
      </p>
      <div className="row">
        <div className="one-third column">{date}</div>
        <div className="one-third column text-center">
          Current Gold: {gold} {gold < 2 ? <b>OH NO!</b> : ''}
        </div>
        <div className="one-third column text-right">
          <button onClick={nextDay}>Go to Next Day</button>
        </div>
      </div>

      <hr />

      {renovations.SMALL_GARDEN && (
        <div>
          <h4>Small Garden</h4>
          <Garden
            plots={gardens.small}
            gardenId="small"
            plantCrop={plantCrop}
            harvest={harvest}
          ></Garden>
        </div>
      )}

      {renovations.LARGE_GARDEN && (
        <div>
          <h4>Large Garden</h4>
          <Garden plots={gardens.large}></Garden>
        </div>
      )}
    </div>
  );
}
