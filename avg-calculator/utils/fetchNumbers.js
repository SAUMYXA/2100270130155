const axios = require('axios');
const config = require('../config/config');

const fetchNumbers = async (type) => {
  try {
    const response = await axios.get(config.testServerUrls[type], { timeout: config.TIMEOUT });
    if (Array.isArray(response.data.numbers)) {
      return response.data.numbers;
    } else {
      throw new Error('Invalid response format');
    }
  } catch (error) {
    console.error(`Error fetching numbers: ${error.message}`);
    return [];
  }
};

module.exports = fetchNumbers;
