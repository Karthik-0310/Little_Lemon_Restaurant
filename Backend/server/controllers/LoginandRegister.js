const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require('uuid');  // Importing uuid for unique userId

// Define the schema for User registration (User details)
const userSchema = new mongoose.Schema({
    userId: { type: String, unique: true, required: true }, // Add userId
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    zipcode: { type: String, required: true },
});

// Define the schema for Login Credentials (Email and Hashed Password)
const loginCredentialsSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userId: { type: String, required: true }, // Add userId in login credentials
});

// Create the User model
const User = mongoose.model("User", userSchema, "Users");

// Create the Login_Credentials model
const LoginCredentials = mongoose.model("Login_Credentials", loginCredentialsSchema, "Login_Credentials");

// Register new user (POST)
const registerUser = async (req, res) => {
    const {
        fullName,
        email,
        password,
        address,
        city,
        country,
        state,
        zipcode,
    } = req.body;

    // Basic validation
    if (!fullName || !email || !password || !address || !city || !country || !state || !zipcode) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Check if the email already exists in the Users collection
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists in Users collection" });
        }

        // Check if the email already exists in the Login_Credentials collection
        const existingLoginCredentials = await LoginCredentials.findOne({ email });
        if (existingLoginCredentials) {
            return res.status(400).json({ message: "Email already registered in Login_Credentials" });
        }

        // Hash password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a unique userId (optional: you can use MongoDB's default _id)
        const userId = uuidv4(); // Generate a unique userId using uuid

        // Create a new user with all the provided details and save in Users collection
        const newUser = new User({
            userId, // Add userId
            fullName,
            email,
            address,
            city,
            country,
            state,
            zipcode,
        });

        const savedUser = await newUser.save();

        // Store the email, hashed password, and userId in Login_Credentials collection
        const newLoginCredentials = new LoginCredentials({
            email,
            password: hashedPassword,
            userId, // Add userId
        });

        await newLoginCredentials.save();

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: savedUser._id,
                userId: savedUser.userId,  // Return the userId
                fullName: savedUser.fullName,
                email: savedUser.email,
                address: savedUser.address,
                city: savedUser.city,
                country: savedUser.country,
                state: savedUser.state,
                zipcode: savedUser.zipcode
            },
        });
    } catch (err) {
        res.status(500).json({ message: "Error registering user", error: err.message });
    }
};

// Validate user login
const jwt = require('jsonwebtoken');  // Import JWT to generate token

// Validate user login
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        // Find the login credentials by email from Login_Credentials collection
        const loginCredentials = await LoginCredentials.findOne({ email });
        if (!loginCredentials) {
            return res.status(400).json({ message: "User not found in Login_Credentials" });
        }

        // Check if the password matches the hashed password
        const isPasswordValid = await bcrypt.compare(password, loginCredentials.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Find the user details from Users collection based on email
        const user = await User.findOne({ email }).select('-password');  // Exclude password from response
        if (!user) {
            return res.status(400).json({ message: "User not found in Users collection" });
        }

        // Generate JWT token
        const authToken = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Respond with user details and JWT token
        res.status(200).json({
            message: "Login successful",
            authToken,  // Include the JWT token in the response
            user: {
                id: user._id,
                userId: user.userId,  // Return the userId
                fullName: user.fullName,
                email: user.email,
                address: user.address,
                city: user.city,
                country: user.country,
                state: user.state,
                zipcode: user.zipcode
            },
        });
    } catch (err) {
        res.status(500).json({ message: "Error logging in", error: err.message });
    }
};



// const loginUser = async (req, res) => {
//     const { email, password } = req.body;
//
//     // Basic validation
//     if (!email || !password) {
//         return res.status(400).json({ message: "Email and password are required" });
//     }
//
//     try {
//         // Find the login credentials by email from Login_Credentials collection
//         const loginCredentials = await LoginCredentials.findOne({ email });
//         if (!loginCredentials) {
//             return res.status(400).json({ message: "User not found in Login_Credentials" });
//         }
//
//         // Check if the password matches the hashed password
//         const isPasswordValid = await bcrypt.compare(password, loginCredentials.password);
//         if (!isPasswordValid) {
//             return res.status(400).json({ message: "Invalid credentials" });
//         }
//
//         // Find the user details from Users collection based on email
//         const user = await User.findOne({ email }).select('-password');  // Exclude password from response
//         if (!user) {
//             return res.status(400).json({ message: "User not found in Users collection" });
//         }
//
//         // Respond with user details (from Users collection) if login is successful
//         res.status(200).json({
//             message: "Login successful",
//             user: {
//                 id: user._id,
//                 userId: user.userId,  // Return the userId
//                 fullName: user.fullName,
//                 email: user.email,
//                 address: user.address,
//                 city: user.city,
//                 country: user.country,
//                 state: user.state,
//                 zipcode: user.zipcode
//             },
//         });
//     } catch (err) {
//         res.status(500).json({ message: "Error logging in", error: err.message });
//     }
// };

// Export the functions for use in routes
module.exports = { registerUser, loginUser };