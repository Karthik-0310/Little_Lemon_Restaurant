const express = require('express');
const { userRouter, fetchUserData } = require('./controllers/userdata');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import controller functions
const { registerUser, loginUser } = require('./controllers/LoginandRegister');
const { getMenuItems } = require('./controllers/menuItem');

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

// Use userRouter for /api routes
app.use('/api', userRouter);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

// API Routes for Login and Register
app.post('/register', registerUser);
app.post('/login', loginUser);

// API Route to get all Users (existing functionality)
app.get('/api/users', async (req, res) => {
    try {
        const users = await fetchUserData();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// API Route to get Menu items
app.get('/menu', async (req, res) => {
    try {
        const menuItems = await getMenuItems();
        res.json(menuItems);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));