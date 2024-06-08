const express = require('express');
const router = express.Router();
const { getTopProducts, getProductDetails } = require('../services/ecommerceService');

router.get('/:category/products', async (req, res) => {
    const { category } = req.params;
    const { minPrice, maxPrice, topN } = req.query;


    const topProducts = await getTopProducts(category, minPrice, maxPrice, topN);
    res.json(topProducts);
});

router.get('/:category/products/:productId', async (req, res) => {
    const { category, productId } = req.params;

    // Your validation logic for category, productId

    const productDetails = await getProductDetails(category, productId);
    if (productDetails) {
        res.json(productDetails);
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
});

module.exports = router;
