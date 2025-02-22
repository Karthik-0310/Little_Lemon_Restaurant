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

                // Redirect to the Cuisines page
                navigate("/cuisines");

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

                        <div className="space-x-8 flex justify-center">
                            {/* Add social login buttons here */}
                            <button
                                className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                                <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_17_40)">
                                        <path
                                            d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                                            fill="#4285F4"/>
                                        <path
                                            d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                                            fill="#34A853"/>
                                        <path
                                            d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                                            fill="#FBBC04"/>
                                        <path
                                            d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                                            fill="#EA4335"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_17_40">
                                            <rect width="48" height="48" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                Continue with Google
                            </button>


                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;