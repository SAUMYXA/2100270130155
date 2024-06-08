const express = require('express');
const config = require('./config/config');
const numbersRoutes = require('./routes/numbersRoutes');

const app = express();

app.use('/', numbersRoutes);

app.listen(config.PORT, () => {
  console.log(`Average Calculator microservice running on http://localhost:${config.PORT}`);
});
