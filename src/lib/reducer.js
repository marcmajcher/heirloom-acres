import Crop from '../model/Crop';
import { getDate, getWeekDay } from '../lib/util';
import produce from 'immer';

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
  playerName: 'Marc',
  playing: true,
  renovations: INITIAL_RENOVATIONS,
};

export default function reducer(state = DEFAULT_STATE, action) {
  console.log('ACTION DISPATCHED TO REDUCER:', action);

  switch (action.type) {
    case 'HARVEST':
      // increase gold by harvest dice, empty out plot
      return produce(state, (draft) => {
        const { gardenId, plotId } = action;
        draft.gold =
          state.gold +
          Math.floor(
            Math.random() * state.gardens[gardenId][plotId].crop.yield
          ) +
          1;
        draft.gardens[gardenId][plotId] = EMPTY_PLOT();
      });

    case 'PLANT_CROP':
      return produce(state, (draft) => {
        const { gardenId, plotId, crop } = action;
        draft.gardens[gardenId][plotId] = { crop, growth: 1 };
        draft.gold = state.gold - crop.cost;
      });

    case 'NEXT_DAY':
      // increase day/date, increase maturity for all crops
      return produce(state, (draft) => {
        draft.day += 1;
        draft.date = getDate(draft.day);
        const weekday = getWeekDay(draft.day);

        if (weekday === 'Saturday') {
        } else if (weekday === 'Sunday') {
        } else {
          for (const plotId in draft.gardens) {
            draft.gardens[plotId].forEach((plot) => {
              if (
                plot.crop.id !== undefined &&
                plot.growth < plot.crop.maturity
              ) {
                plot.growth += 1;
              }
            });
          }
        }
      });

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
