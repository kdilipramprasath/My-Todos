export const idGen = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();
