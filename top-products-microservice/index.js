const express = require('express');
const { registerWithCompanies, getTopProducts, getProductDetails } = require('./services/ecommerceService');

const app = express();
const port = 3000;


app.use(express.json());


const productsRouter = require('./routes/products');
app.use('/categories', productsRouter);

app.listen(port, async () => {
    console.log(`Top Products Microservice listening at http://localhost:${port}`);
    await registerWithCompanies();
});
