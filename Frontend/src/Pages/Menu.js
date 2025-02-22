import React, { useEffect, useState } from "react";
import { useCart } from "../CartContext";

const Menu = () => {
    // State to store menu items
    const [menuItems, setMenuItems] = useState([]);

    // State for loading state
    const [loading, setLoading] = useState(true);

    // State for error handling
    const [error, setError] = useState(null);

    // State for current page and items per page
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const { addToCart, cartItems, incrementQuantity, decrementQuantity } = useCart();

    // Fetch menu items from API
    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await fetch('http://localhost:5001/menu');
                if (!response.ok) throw new Error('Failed to fetch menu items');
                const data = await response.json();
                setMenuItems(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchMenuItems();
    }, []);

    // Calculate current page items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = menuItems.slice(indexOfFirstItem, indexOfLastItem);

    // Handle page navigation
    const nextPage = () => {
        if (currentPage < Math.ceil(menuItems.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    if (loading) {
        return <div>Loading...</div>; // Show loading message while fetching data
    }

    if (error) {
        return <div>Error: {error}</div>; // Show error message if there's an error
    }

    return (
        <div className="menu-container">
            {/* Search Bar */}
            <div className="search-bar px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
                <form className="max-w-full md:max-w-lg lg:max-w-2xl mx-auto mt-4 lg:mt-8">
                    <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search products..."
                            required
                        />
                        <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-6 m-6">
                {currentItems.map((product) => {
                    const cartItem = cartItems.find(item => item.id === product.id);
                    const quantity = cartItem ? cartItem.quantity : 0;

                    return (
                        <div
                            key={product.id}
                            className="relative flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
                        >
                            <a
                                className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                                href="#"
                            >
                                <img
                                    className="object-cover w-full h-full"
                                    src={product.image}
                                    alt={product.name}
                                />
                            </a>
                            <div className="mt-4 px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl tracking-tight text-slate-900">
                                        {product.name}
                                    </h5>
                                </a>
                                <div className="mt-2 mb-5 flex items-center justify-between">
                                    <p>
                                        <span className="text-2xl font-bold text-slate-900">
                                            ${product.price}
                                        </span>
                                    </p>
                                    <div className="flex items-center">
                                        {[...Array(Math.round(product.rating))].map((_, index) => (
                                            <svg
                                                key={index}
                                                aria-hidden="true"
                                                className="h-5 w-5 text-yellow-300"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        ))}
                                        <span className="ml-2 rounded bg-yellow-200 px-1.5 py-0.25 text-[10px] font-medium">
                                            {product.rating}
                                        </span>
                                    </div>
                                </div>

                                {/* Conditionally render the Add to Cart button or quantity controls */}
                                {quantity === 0 ? (
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            addToCart(product);
                                        }} // Add to cart logic
                                        className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                        <button>
                                            Add to cart
                                        </button>
                                    </a>
                                ) : (
                                    <div className="flex justify-center">
                                        <div
                                            className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700">
                                            <div className="flex items-center gap-x-1.5">
                                                <button
                                                    onClick={() => decrementQuantity(product.id)}
                                                    type="button"
                                                    className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                                    tabIndex="-1"
                                                    aria-label="Decrease"
                                                >
                                                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                                                         width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                         strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                    </svg>
                                                </button>

                                                {/* Display quantity */}
                                                <span className="text-lg text-gray-900 dark:text-white">
                                                    {quantity}
                                                </span>

                                                <button
                                                    onClick={() => incrementQuantity(product.id)}
                                                    type="button"
                                                    className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                                    tabIndex="-1"
                                                    aria-label="Increase"
                                                >
                                                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                                                         width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                         strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5v14"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Pagination */}
            <nav aria-label="Page navigation example" className="flex justify-center">
                <ul className="flex items-center -space-x-px h-10 text-base">
                    <li>
                        <button
                            onClick={prevPage}
                            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            <span className="sr-only">Previous</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="M5 1 1 5l4 4"/>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <span
                            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{currentPage}</span>
                    </li>
                    <li>
                        <button
                            onClick={nextPage}
                            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            <span className="sr-only">Next</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
