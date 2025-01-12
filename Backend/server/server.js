// // server/server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();
//
// // Import controller functions
// const {
//     registerUser,
//     loginUser
// } = require('./controllers/LoginandRegister');
//
// // Initialize express app
// const app = express();
//
// // Middleware
// app.use(cors({
//     origin: 'http://localhost:3000'  // Allow requests only from your React app
// }));
// app.use(express.json());
//
// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => {
//         console.log('MongoDB connected successfully');
//     })
//     .catch(err => {
//         console.error('MongoDB connection error:', err);
//         process.exit(1);  // Exit process if DB connection fails
//     });
//
// // API Routes for Login and Register
// app.post('/register', registerUser);
// app.post('/login', loginUser);
//
// // Start the server
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import controller functions
const {
    registerUser,
    loginUser
} = require('./controllers/LoginandRegister');

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

// Start the server
const PORT = process.env.PORT || 5001;  // Use port 5001 as per your setup
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});