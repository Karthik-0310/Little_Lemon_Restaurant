import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState(""); // State for error message
    const navigate = useNavigate(); // useNavigate hook for navigation

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Email and password are required.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5001/login", {
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            // Check if the response contains the expected data
            if (response.data && response.data.user && response.data.user.userId && response.data.authToken) {
                // On success, store the auth token and user id in localStorage
                localStorage.setItem('authToken', response.data.authToken);  // Store the JWT token
                localStorage.setItem('userId', response.data.user.userId);  // Store the userId

                // Redirect to the Menu page
                navigate("/menu");

                // Refresh the page after successful login
                window.location.reload();
            } else {
                setError("Unexpected response format from server.");
            }
        } catch (err) {
            if (err.response) {
                setError("Invalid email or password.");
            } else if (err.request) {
                setError("Server not responding, please try again later.");
            } else {
                setError("An error occurred, please try again.");
            }
        }
    };

    return (
        <div className="font-[sans-serif]">
            <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
                <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl max-md:max-w-md w-full">
                    <div>
                        <h2 className="lg:text-5xl text-3xl font-extrabold lg:leading-[55px] text-gray-800">
                            Login for Exclusive Dining Experience at Little Lemon Restaurant
                        </h2>
                        <p className="text-sm mt-6 text-gray-800">
                            Enjoy a hassle-free login process to easily make reservations and access your exclusive
                            dining experience at Little Lemon Restaurant. Let us serve you with the finest flavors.
                        </p>
                        <p className="text-sm mt-12 text-gray-800">
                            Don't have an account{' '}
                            <Link to="/register" className="text-blue-600 font-semibold hover:underline ml-1">
                                Register here
                            </Link>
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="max-w-md md:ml-auto w-full">
                        <h3 className="text-gray-800 text-3xl font-extrabold mb-8">
                            Sign in
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <input
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} // Set the state on change
                                    autoComplete="email"
                                    required
                                    className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <input
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} // Set the state on change
                                    autoComplete="current-password"
                                    required
                                    className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)} // Handle checkbox state change
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <a href="javascript:void(0);"
                                       className="text-blue-600 hover:text-blue-500 font-semibold">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>
                        </div>

                        {error && (
                            <div className="mt-4 text-red-500 text-sm">
                                {error}
                            </div>
                        )}

                        <div className="!mt-8">
                            <button type="submit"
                                    className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                                Log in
                            </button>
                        </div>

                        <div className="my-4 flex items-center gap-4">
                            <hr className="w-full border-gray-300"/>
                            <p className="text-sm text-gray-800 text-center">or</p>
                            <hr className="w-full border-gray-300"/>
                        </div>

                        <div className="space-x-6 flex justify-center">
                            {/* Add social login buttons here */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;