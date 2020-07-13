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

export function getDate(day) {
  return `Year ${getYear(day)}: ${getWeekDay(day)}, ${getSeason(day)} ${getDayNum(day)}`;
}

export function isWeekDay(day) {
  return day % 7 < 5;
}

export function getWeekDay(day) {
  return days[(day - 1) % 7];
}

export function getDayNum(day) {
  return ((day - 1) % 28) + 1;
}

export function getSeason(day) {
  return seasons[Math.floor((day - 1) / 28) % 4];
}

export function getYear(day) {
  return Math.floor((day - 1) / (7 * 4 * 4)) + 1;
}
