const config = require('../config/config');

const numberStore = {
  p: [],
  P: [],
  e: [],
  r: []
};

const updateNumbers = (type, newNumbers) => {
  numberStore[type] = [...new Set([...numberStore[type], ...newNumbers])].slice(-config.WINDOW_SIZE);
  return numberStore[type];
};

const calculateAverage = (numbers) => {
  return numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
};

module.exports = {
  updateNumbers,
  calculateAverage,
  numberStore
};
