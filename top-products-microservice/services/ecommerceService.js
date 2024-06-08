// services/ecommerceService.js

const axios = require('axios');
const { clientID, clientSecret } = require('./config');

const ECOMMERCE_API_BASE = 'http://20.244.56.144/test';

async function registerWithCompanies() {
    try {
        const requestData = {
            client_id: clientID,
            client_secret: clientSecret
        };

        const response = await axios.post(`${ECOMMERCE_API_BASE}/register`, requestData, {
            headers: {
                'Content-Type': 'application/json' // Make sure Content-Type is set to JSON
            }
        });

        console.log('Registered with e-commerce companies successfully:', response.data);
    } catch (error) {
        console.error('Error registering with e-commerce companies:', error.response.data);
    }
}


module.exports = {
    registerWithCompanies
};
