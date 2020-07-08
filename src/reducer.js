import Crop from './Crop';

const START_GOLD = 12;
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

const getDate = (day) => {
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
};

const DEFAULT_STATE = {
  date: getDate(1),
  day: 1,
  gardens: INITIAL_GARDENS,
  gold: START_GOLD,
  playerName: '',
  playing: false,
  renovations: INITIAL_RENOVATIONS,
};

export default function reducer(state = DEFAULT_STATE, action) {
  console.log('ACTION DISPATCHED TO REDUCER:', action);

  switch (action.type) {
    case 'HARVEST':
      const [newGardens, newGold] = harvest(state, action);
      return { ...state, gardens: newGardens, gold: newGold };
    case 'PLANT_CROP':
      return {
        ...state,
        gardens: plantCrop(state, action),
        gold: state.gold - action.crop.cost,
      };
    case 'NEXT_DAY':
      const dayGardens = { ...state.gardens };
      for (const gardenId in dayGardens) {
        dayGardens[gardenId] = dayGardens[gardenId].map((plot) => {
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
      return {
        ...state,
        gardens: dayGardens,
        day: state.day + 1,
        date: getDate(state.day + 1),
      };

    case 'RESET_GAME':
      return DEFAULT_STATE;
    case 'SET_GOLD':
      return { ...state, gold: action.gold };
    case 'SET_PLAYER_NAME':
      return { ...state, playerName: action.name };
    case 'START_GAME':
      return { ...state, playing: true };
    default:
      return state;
  }
}

function harvest(state, action) {
  const { gardenId, plotId } = action;
  const newGardens = { ...state.gardens };
  newGardens[gardenId] = [...newGardens[gardenId]];
  const cropYield = newGardens[gardenId][plotId].crop.yield;
  const newGold = state.gold + Math.floor(Math.random() * cropYield) + 1;
  newGardens[gardenId][plotId] = EMPTY_PLOT();
  return [newGardens, newGold];
}

function plantCrop(state, action) {
  const { gardenId, plotId, crop } = action;
  const newGardens = { ...state.gardens };
  newGardens[gardenId] = [...newGardens[gardenId]];
  newGardens[gardenId][plotId] = { crop: crop, growth: 0 };
  return newGardens;
}
