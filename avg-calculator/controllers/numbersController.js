const fetchNumbers = require('../utils/fetchNumbers');
const { updateNumbers, calculateAverage, numberStore } = require('../services/numberService');

const getNumbers = async (req, res) => {
  const type = req.params.type;
  if (!['p', 'P', 'e', 'r'].includes(type)) {
    return res.status(400).json({ error: 'Invalid type parameter' });
  }

  const newNumbers = await fetchNumbers(type);
  const prevState = [...numberStore[type]];
  const currState = updateNumbers(type, newNumbers);
  const average = calculateAverage(currState);

  res.json({
    numbers: newNumbers,
    windowPrevState: prevState,
    windowCurrState: currState,
    avg: average
  });
};

module.exports = {
  getNumbers
};
