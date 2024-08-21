const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const hireRoutes = require('./routes/HireRoutes');

// Load environment variables
require('dotenv').config();

// Initialize Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

// Define models
const Hire = require('./models/Hire')(sequelize, Sequelize.DataTypes);

// Sync database
sequelize.sync().then(() => console.log('Database synced'));

// Set up Express app
const app = express();
const port = 5000;

// Set up CORS
app.use(cors());

// Set up body parsing
app.use(bodyParser.json());

// Use routes
app.use('/api/hire', hireRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

module.exports = { app, sequelize, Hire };
