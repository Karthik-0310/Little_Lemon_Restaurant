// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
//
// const RegisterUser = () => {
//     const navigate = useNavigate();
//
//     const [fullName, setFullName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [address, setAddress] = useState("");
//     const [city, setCity] = useState("");
//     const [country, setCountry] = useState("");
//     const [state, setState] = useState("");
//     const [zipcode, setZipcode] = useState("");
//     const [error, setError] = useState("");  // To store any error message
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//
//         // Password validation
//         if (password !== confirmPassword) {
//             setError("Passwords do not match.");
//             return; // Stop further execution if passwords don't match
//         }
//
//         const userData = {
//             fullName,
//             email,
//             password,
//             address,
//             city,
//             country,
//             state,
//             zipcode,
//         };
//
//         try {
//             // Make a POST request to your backend to register the user
//             const response = await axios.post("http://localhost:5001/register", userData);
//
//             if (response.status === 201) {
//                 // On success, redirect the user to the login page or another route
//                 navigate("/login");
//             }
//         } catch (error) {
//             console.error("Registration error:", error.response ? error.response.data : error);
//             setError("There was an issue with your registration. Please try again.");
//         }
//     };
//
//     return (
//         <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
//             <div className="container max-w-screen-lg mx-auto">
//                 <div>
//                     <h2 className="font-semibold text-xl text-gray-600">Create Your Account</h2>
//                     <p className="text-gray-500 mb-6">Join us and start enjoying exclusive perks. Please complete the
//                         form below to register.</p>
//
//                     <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
//                         <form onSubmit={handleSubmit} className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
//                             <div className="text-gray-600">
//                                 <p className="font-medium text-lg">Personal Information</p>
//                                 <p>We value your time! Fill out all fields to complete your registration and unlock a
//                                     world of exclusive offers.</p>
//                             </div>
//
//                             <div className="lg:col-span-2">
//                                 <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
//                                     {/* Full Name */}
//                                     <div className="md:col-span-5">
//                                         <label htmlFor="full_name">Full Name</label>
//                                         <input
//                                             type="text"
//                                             name="full_name"
//                                             id="full_name"
//                                             className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                                             value={fullName}
//                                             onChange={(e) => setFullName(e.target.value)}
//                                         />
//                                     </div>
//
//                                     {/* Email Address */}
//                                     <div className="md:col-span-5">
//                                         <label htmlFor="email">Email Address</label>
//                                         <input
//                                             type="text"
//                                             name="email"
//                                             id="email"
//                                             className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                                             value={email}
//                                             onChange={(e) => setEmail(e.target.value)}
//                                             placeholder="email@domain.com"
//                                         />
//                                     </div>
//
//                                     {/*Password*/}
//                                     <div className="md:col-span-5">
//                                         <label htmlFor="password">Password</label>
//                                         <input
//                                             type="password"
//                                             name="password"
//                                             id="password"
//                                             className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                                             value={password}
//                                             onChange={(e) => setPassword(e.target.value)}
//                                             placeholder="Password"
//                                         />
//                                     </div>
//
//                                     {/* Confirm Password */}
//                                     <div className="md:col-span-5">
//                                         <label htmlFor="confirmPassword">Confirm Password</label>
//                                         <input
//                                             type="password"
//                                             name="confirmPassword"
//                                             id="confirmPassword"
//                                             className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                                             value={confirmPassword} // Correct state binding
//                                             onChange={(e) => setConfirmPassword(e.target.value)}
//                                             placeholder="Confirm Password"
//                                         />
//                                     </div>
//
//                                     {/* Address */}
//                                     <div className="md:col-span-3">
//                                         <label htmlFor="address">Address / Street</label>
//                                         <input
//                                             type="text"
//                                             name="address"
//                                             id="address"
//                                             className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                                             value={address}
//                                             onChange={(e) => setAddress(e.target.value)}
//                                         />
//                                     </div>
//
//                                     {/* City */}
//                                     <div className="md:col-span-2">
//                                         <label htmlFor="city">City</label>
//                                         <input
//                                             type="text"
//                                             name="city"
//                                             id="city"
//                                             className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                                             value={city}
//                                             onChange={(e) => setCity(e.target.value)}
//                                         />
//                                     </div>
//
//                                     {/* Country */}
//                                     <div className="md:col-span-2">
//                                         <label htmlFor="country">Country / Region</label>
//                                         <input
//                                             type="text"
//                                             name="country"
//                                             id="country"
//                                             className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                                             value={country}
//                                             onChange={(e) => setCountry(e.target.value)}
//                                         />
//                                     </div>
//
//                                     {/* State */}
//                                     <div className="md:col-span-2">
//                                         <label htmlFor="state">State / Province</label>
//                                         <input
//                                             type="text"
//                                             name="state"
//                                             id="state"
//                                             className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                                             value={state}
//                                             onChange={(e) => setState(e.target.value)}
//                                         />
//                                     </div>
//
//                                     {/* Zipcode */}
//                                     <div className="md:col-span-1">
//                                         <label htmlFor="zipcode">Zipcode</label>
//                                         <input
//                                             type="text"
//                                             name="zipcode"
//                                             id="zipcode"
//                                             className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                                             value={zipcode}
//                                             onChange={(e) => setZipcode(e.target.value)}
//                                         />
//                                     </div>
//
//                                     {/* Submit Button */}
//                                     <div className="md:col-span-5 text-right">
//                                         <div className="inline-flex items-end mt-3">
//                                             <button type="submit"
//                                                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//
//                 {error && <p className="text-red-500 text-center mt-4">{error}</p>}
//             </div>
//         </div>
//     );
// };
//
// export default RegisterUser;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterUser = () => {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [error, setError] = useState("");  // To store any error message
    const [successMessage, setSuccessMessage] = useState("");  // To store success message
    const [isLoading, setIsLoading] = useState(false);  // For showing loading state

    // Function to validate email format
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Password validation
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return; // Stop further execution if passwords don't match
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        const userData = {
            fullName,
            email,
            password,
            address,
            city,
            country,
            state,
            zipcode,
        };

        setIsLoading(true);  // Set loading state to true

        try {
            // Make a POST request to your backend to register the user
            const response = await axios.post("http://localhost:5001/register", userData);

            if (response.status === 201) {
                // On successful registration, show success message and redirect after a delay
                setSuccessMessage("Registration successful! Redirecting to login page...");
                setTimeout(() => {
                    navigate("/login");
                }, 3000);  // Redirect to login after 3 seconds
            }
        } catch (error) {
            console.error("Registration error:", error.response ? error.response.data : error);

            // Check for specific backend error
            if (error.response && error.response.status === 400) {
                setError(error.response.data.message || "There was an issue with your registration. Please try again.");
            } else {
                setError("There was an issue with your registration. Please try again.");
            }
        } finally {
            setIsLoading(false);  // Set loading state back to false
        }
    };

    return (
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
            <div className="container max-w-screen-lg mx-auto">
                <div>
                    <h2 className="font-semibold text-xl text-gray-600">Create Your Account</h2>
                    <p className="text-gray-500 mb-6">Join us and start enjoying exclusive perks. Please complete the
                        form below to register.</p>

                    <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                        <form onSubmit={handleSubmit} className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                            <div className="text-gray-600">
                                <p className="font-medium text-lg">Personal Information</p>
                                <p>We value your time! Fill out all fields to complete your registration and unlock a
                                    world of exclusive offers.</p>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                    {/* Full Name */}
                                    <div className="md:col-span-5">
                                        <label htmlFor="full_name">Full Name</label>
                                        <input
                                            type="text"
                                            name="full_name"
                                            id="full_name"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>

                                    {/* Email Address */}
                                    <div className="md:col-span-5">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="email@domain.com"
                                        />
                                    </div>

                                    {/*Password*/}
                                    <div className="md:col-span-5">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Password"
                                        />
                                    </div>

                                    {/* Confirm Password */}
                                    <div className="md:col-span-5">
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            id="confirmPassword"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            value={confirmPassword} // Correct state binding
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder="Confirm Password"
                                        />
                                    </div>

                                    {/* Address */}
                                    <div className="md:col-span-3">
                                        <label htmlFor="address">Address / Street</label>
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </div>

                                    {/* City */}
                                    <div className="md:col-span-2">
                                        <label htmlFor="city">City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                        />
                                    </div>

                                    {/* Country */}
                                    <div className="md:col-span-2">
                                        <label htmlFor="country">Country / Region</label>
                                        <input
                                            type="text"
                                            name="country"
                                            id="country"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                        />
                                    </div>

                                    {/* State */}
                                    <div className="md:col-span-2">
                                        <label htmlFor="state">State / Province</label>
                                        <input
                                            type="text"
                                            name="state"
                                            id="state"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            value={state}
                                            onChange={(e) => setState(e.target.value)}
                                        />
                                    </div>

                                    {/* Zipcode */}
                                    <div className="md:col-span-1">
                                        <label htmlFor="zipcode">Zipcode</label>
                                        <input
                                            type="text"
                                            name="zipcode"
                                            id="zipcode"
                                            className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            value={zipcode}
                                            onChange={(e) => setZipcode(e.target.value)}
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="md:col-span-5 text-right">
                                        <div className="inline-flex items-end mt-3">
                                            <button
                                                type="submit"
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                disabled={isLoading} // Disable button when loading
                                            >
                                                {isLoading ? "Registering..." : "Register"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>} {/* Success message */}
            </div>
        </div>
    );
};

export default RegisterUser;