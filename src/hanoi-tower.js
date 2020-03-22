module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turnSpeedInSeconds = turnsSpeed / 3600;
  const x = 2 ** disksNumber - 1;
  return {
    turns: x,
    seconds: x / turnSpeedInSeconds
  };
};
