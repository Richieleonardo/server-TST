const cors = require('cors');
const express = require('express');
const connectDB = require('./database/db');
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/encrypt');

// Initialize
const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-type', 'Authorization', 'furina-is-so-beautiful'],
    credentials: false,
}));

// Handle preflight requests
app.options('*', cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-type', '  Authorization', 'furina-is-so-beautiful'],
}));

// Connect to database
connectDB();

app.use(express.json());

app.use('/api', apiRoutes); // For Encryption
app.use('/auth', authRoutes);

module.exports = app;