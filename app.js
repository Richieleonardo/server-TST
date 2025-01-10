const cors = require('cors');
const express = require('express');
const connectDB = require('./database/db');
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/encrypt');

// Swagger documentation
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger/swaggerConfig');

// Initialize
const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-type', 'Authorization', 'furina-encryption-service'],
    credentials: false,
}));

// Handle preflight requests
app.options('*', cors());

// Connect to database
connectDB();

app.use(express.json());

app.use('/api', apiRoutes); // For Encryption
app.use('/auth', authRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs)); // API documentation

const PORT = 8071;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
module.exports = app;