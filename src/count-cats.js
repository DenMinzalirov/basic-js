module.exports = function countCats(matrix) {
  return matrix.flat(2).reduce((ct, el) => {
    if (el === "^^") ct++;
    return ct;
  }, 0)
};
