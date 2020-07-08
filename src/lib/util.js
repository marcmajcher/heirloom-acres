import Crop from '../model/Crop';

export function getDate(day) {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const seasons = ['Spring', 'Summer', 'Fall', 'Winter'];

  const inday = day - 1;
  return `Year ${Math.floor(inday / (7 * 4 * 4)) + 1}: ${days[inday % 7]}, ${
    seasons[Math.floor(inday / 28) % 4]
  } ${(inday % 28) + 1}`;
}

export function isWeekDay(day) {
  return day % 7 < 5;
}

export function growCrops(state) {
  const gardens = { ...state.gardens };
  if (isWeekDay(state.day)) {
    // don't mature on weekends
    for (const gardenId in gardens) {
      gardens[gardenId] = gardens[gardenId].map((plot) => {
        const newPlot = { ...plot };
        if (
          newPlot.crop.id !== undefined &&
          newPlot.growth < newPlot.crop.maturity
        ) {
          newPlot.growth += 1;
        }
        return newPlot;
      });
    }
  }

  return gardens;
}

export function harvest(state, action) {
  const { gardenId, plotId } = action;
  const newGardens = { ...state.gardens };
  newGardens[gardenId] = [...newGardens[gardenId]];
  const cropYield = newGardens[gardenId][plotId].crop.yield;
  const newGold = state.gold + Math.floor(Math.random() * cropYield) + 1;
  newGardens[gardenId][plotId] = { crop: new Crop(), growth: 0 };
  return [newGardens, newGold];
}

export function plantCrop(state, action) {
  const { gardenId, plotId, crop } = action;
  const newGardens = { ...state.gardens };
  newGardens[gardenId] = [...newGardens[gardenId]];
  newGardens[gardenId][plotId] = { crop: crop, growth: 1 };
  return newGardens;
}
