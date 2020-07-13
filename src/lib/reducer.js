import Crop from '../model/Crop';
import { getDate, harvest, plantCrop, growCrops } from '../lib/util';

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
      return {
        ...state,
        gardens: growCrops(state),
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
