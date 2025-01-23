const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import controller functions
const { registerUser, loginUser } = require('./controllers/LoginandRegister');
const { getMenuItems } = require("./controllers/menuItem");

// Initialize express app
const app = express();

// CORS setup
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);  // Exit process if DB connection fails
    });

// API Routes for Login and Register
app.post('/register', registerUser);
app.post('/login', loginUser);

// API Route to get Menu items
app.get("/menu", async (req, res) => {
    try {
        const menuItems = await getMenuItems(); // Fetch all menu items from the controller
        res.json(menuItems); // Send the menu items in the response
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 5001;  // Use port 5001 as per your setup
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});