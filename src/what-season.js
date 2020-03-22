module.exports = function getSeason(date) {
  if (arguments.length == 0) return 'Unable to determine the time of year!';
  try {
    date.getTime();
  } catch (e) {
    throw new Error();
  }
  let month = date.getMonth()+1;

  switch(month) {
    case 3:
    case 4:
    case 5:
      return 'spring';
    case 6:
    case 7:
    case 8:
      return 'summer';
    case 9:
    case 10:
    case 11:
      return 'autumn';
    default:
      return 'winter'
  }
};
