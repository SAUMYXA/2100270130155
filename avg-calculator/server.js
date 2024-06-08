const express = require('express');
const config = require('./config/config');
const app = express();

app.listen(config.PORT, () => {
  console.log(`Average Calculator microservice running on http://localhost:${config.PORT}`);
});
