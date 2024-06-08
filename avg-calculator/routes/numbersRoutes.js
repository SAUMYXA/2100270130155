const express = require('express');

const router = express.Router();

router.get('/numbers/:type', getNumbers);

module.exports = router;
