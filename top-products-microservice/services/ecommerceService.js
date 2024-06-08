const axios = require('axios');
const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 300 }); // Cache for 5 minutes

const ECOMMERCE_API_BASE = 'http://20.244.56.144/test';
const COMPANIES = ['ANE', 'ELP', 'SP', 'HYNT', 'AZO'];
const CATEGORIES = ['Phone', 'Computer', 'TV', 'Earphone', 'Tablet', 'Charger', 'House', 'Keypad', 'Bluetooth', 'Pendrive', 'Remote', 'Speaker', 'Headset', 'Laptop', 'PC'];

// Helper function to get top products from each company
async function getTopProducts(company, category, minPrice, maxPrice, topN) {
    try {
        const response = await axios.get(`${ECOMMERCE_API_BASE}/companies/${company}/categories/${category}/products/top-${topN}?minPrice=${minPrice}&maxPrice=${maxPrice}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data for ${company}:`, error);
        return [];
    }
}

// Register with e-commerce companies (Simulated for the example)
async function registerWithCompanies() {
    try {
        await axios.post(`${ECOMMERCE_API_BASE}/register`);
        console.log('Registered with e-commerce companies successfully');
    } catch (error) {
        console.error('Error registering with e-commerce companies:', error);
    }
}

// Fetch product details from each company
async function getProductDetails(category, productId) {
    const cacheKey = `product-${productId}`;
    if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
    }

    for (const company of COMPANIES) {
        try {
            const response = await axios.get(`${ECOMMERCE_API_BASE}/companies/${company}/categories/${category}/products/${productId}`);
            if (response.data) {
                cache.set(cacheKey, response.data);
                return response.data;
            }
        } catch (error) {
            console.error(`Error fetching product ${productId} for ${company}:`, error);
        }
    }

    return null;
}

module.exports = {
    registerWithCompanies,
    getTopProducts,
    getProductDetails
};
