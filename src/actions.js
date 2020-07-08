export function harvest(gardenId, plotId) {
  return { type: 'HARVEST', gardenId, plotId };
}
export function nextDay(day) {
  return { type: 'NEXT_DAY' };
}
export function plantCrop(gardenId, plotId, crop) {
  return {type: 'PLANT_CROP', gardenId, plotId, crop}
}
export function resetGame() {
  return { type: 'RESET_GAME' };
}
export function setName(name) {
  return { type: 'SET_PLAYER_NAME', name };
}
export function startGame() {
  return { type: 'START_GAME' };
}
