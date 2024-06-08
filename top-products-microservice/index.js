// index.js

const express = require('express');
const { registerWithCompanies } = require('./services/ecommerceService');
const productsRouter = require('./routes/products');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/categories', productsRouter);

app.listen(port, async () => {
    console.log(`Top Products Microservice listening at http://localhost:${port}`);
    await registerWithCompanies();
});
