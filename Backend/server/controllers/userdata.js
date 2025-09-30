const mongoose = require('mongoose');
const { User } = require('./LoginandRegister'); // Import the User model
const express = require('express');
const router = express.Router();

// --- Existing: fetch all users ---
async function fetchUserData() {
    try {
        const users = await User.find({});
        return users;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}

// --- New: fetch single user's fullName by userId ---
async function fetchUserFullName(userId) {
    try {
        const user = await User.findOne({ userId }).select('fullName'); // only fullName
        return user; // { _id, fullName }
    } catch (error) {
        console.error('Error fetching user fullName:', error);
        throw error;
    }
}

// --- Route to get fullName by userId ---
router.get('/users/fullname/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await fetchUserFullName(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user); // { _id, fullName }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = { fetchUserData, fetchUserFullName, userRouter: router };