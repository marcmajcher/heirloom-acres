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
}

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
    case 'ADD_DAY':
      return { ...state, day: state.day + 1, date: getDate(state.day + 1) };
    case 'RESET_GAME':
      return DEFAULT_STATE;
    case 'SET_GOLD':
      return { ...state, gold: action.payload };
    case 'SET_PLAYER_NAME':
      return { ...state, playerName: action.payload };
    case 'START_GAME':
      return { ...state, playing: true };
    default:
      return state;
  }
}
