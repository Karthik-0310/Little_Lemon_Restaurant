import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Menu.css';

const Menu = () => {
    const navigate = useNavigate();

    // Check if user is logged in
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            // Redirect to login if not authenticated
            navigate('/login');
        }
    }, [navigate]);

    const products = [
        {
            id: 1,
            name: "Nike Air MX Super 5000",
            image: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            price: 249,
            rating: 5.0
        },
        {
            id: 2,
            name: "Adidas UltraBoost 2025",
            image: "https://images.unsplash.com/photo-1560347416-ec9b56fdf82f?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJlYWxlc3xlbnwwfHx8fDE2NTYwMzcwNzI&ixlib=rb-1.2.1&q=80&w=400",
            price: 199,
            rating: 4.5
        },
        // More products can be added here
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-black">Delicious Food at Little
                Lemon</h1>

            <div className="mb-8 flex justify-center space-x-4 mt-8 flex-wrap">
                <button
                    className="w-full sm:w-auto px-4 py-2 text-xs sm:text-sm md:text-base lg:text-lg bg-gray-900 text-white hover:bg-gray-800 rounded-lg mb-4 sm:mb-0">
                    Indian
                </button>
                <button
                    className="w-full sm:w-auto px-4 py-2 text-xs sm:text-sm md:text-base lg:text-lg bg-gray-900 text-white hover:bg-gray-800 rounded-lg mb-4 sm:mb-0">
                    American
                </button>
                <button
                    className="w-full sm:w-auto px-4 py-2 text-xs sm:text-sm md:text-base lg:text-lg bg-gray-900 text-white hover:bg-gray-800 rounded-lg mb-4 sm:mb-0">
                    Mexican
                </button>
                <button
                    className="w-full sm:w-auto px-4 py-2 text-xs sm:text-sm md:text-base lg:text-lg bg-gray-900 text-white hover:bg-gray-800 rounded-lg mb-4 sm:mb-0">
                    Italian
                </button>
                <button
                    className="w-full sm:w-auto px-4 py-2 text-xs sm:text-sm md:text-base lg:text-lg bg-gray-900 text-white hover:bg-gray-800 rounded-lg mb-4 sm:mb-0">
                    French
                </button>
            </div>

            <div
                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="p-8 rounded-t-lg" src="/docs/images/products/apple-watch.png" alt="product image"/>
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch
                            Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                        </div>
                        <span
                            className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                        <a href="#"
                           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                            to cart</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Menu;