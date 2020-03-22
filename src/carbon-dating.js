const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let variable;
  if (typeof sampleActivity === "string") {
    variable = parseFloat(sampleActivity);
  } else return false;

  if (variable > 0 && variable < MODERN_ACTIVITY) {
    return Math.ceil(
      (Math.log(MODERN_ACTIVITY / variable) * HALF_LIFE_PERIOD) / 0.693
    );
  }
  return false;
};
