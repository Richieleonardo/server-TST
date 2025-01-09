const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

const API_BASE_URL = process.env.API_BASE_URL;

// POST to retrieve API keys
router.post('/keys', async (req, res) => {
    try {
        const { service_name, expires_in_days } = req.body;

        if (!service_name || !expires_in_days) {
            return res.status(400).json({
                message: "Both 'service_name' and 'expires_in_days' are required.",
            });
        }

        const response = await axios.post(
            'https://furina-encryption-service.codebloop.my.id/api/keys',
            { service_name, expires_in_days },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching API keys:', error.message);
        res.status(error.response?.status || 500).json({
            message: 'Failed to fetch API keys.',
            error: error.response?.data || error.message,
        });
    }
});

// ENCRYPT data
router.post('/encrypt', async (req, res) => {
    try {
        const apiKey = req.headers['furina-encryption-service'];
        const response = await axios.post(`${API_BASE_URL}/encrypt`, req.body, {
            headers: {
                'furina-encryption-service': apiKey,
                'Content-Type': 'application/json',
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).send(error.message);
    }
});

// DECRYPT data
router.post('/decrypt', async (req, res) => {
    try {
        const apiKey = req.headers['furina-encryption-service'];
        const response = await axios.post(`${API_BASE_URL}/decrypt`, req.body, {
            headers: {
                'furina-encryption-service': apiKey,
                'Content-Type': 'application/json',
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).send(error.message);
    }
});

module.exports = router;