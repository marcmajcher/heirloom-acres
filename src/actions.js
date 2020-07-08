export function addDay(day) {
  return { type: 'ADD_DAY'};
}
export function resetGame() {
  return { type: 'RESET_GAME' };
}
export function setGold(amount) {
  return { type: 'SET_GOLD', payload: amount };
}
export function setName(name) {
  return { type: 'SET_PLAYER_NAME', payload: name };
}
export function startGame() {
  return { type: 'START_GAME' };
}
