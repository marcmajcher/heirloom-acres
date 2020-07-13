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