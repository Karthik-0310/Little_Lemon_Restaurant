import React from "react";
import { useCart } from "../CartContext";
import "./CSS/Cart.css"

const Cart = () => {
    const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();

    // Calculate the subtotal
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <section className="py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
                <h2 className="font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
                    Shopping Cart
                </h2>

                {/* Cart Items */}
                {cartItems.length === 0 ? (
                    <div className="text-center">
                        <p className="text-lg">Your cart is empty.</p>
                    </div>
                ) : (
                    <>
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4"
                            >
                                {/* Product Image */}
                                <div className="col-span-12 lg:col-span-2">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="max-lg:w-full lg:w-[180px] rounded-lg object-cover"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="col-span-12 lg:col-span-10 w-full lg:pl-3">
                                    <div className="flex items-center justify-between w-full mb-4">
                                        <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
                                            {item.name}
                                        </h5>
                                        <button
                                            className="rounded-full group flex items-center justify-center focus:outline-red-500"
                                            title="Remove Item"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            <svg
                                                width="34"
                                                height="34"
                                                viewBox="0 0 34 34"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    className="fill-red-50 group-hover:fill-red-400 transition duration-300"
                                                    cx="17"
                                                    cy="17"
                                                    r="17"
                                                />
                                                <path
                                                    className="stroke-red-500 group-hover:stroke-white transition duration-300"
                                                    d="M14.167 13.6V12.59c0-.7.56-1.26 1.26-1.26h3.15c.7 0 1.26.56 1.26 1.26V13.6M12.467 13.6h9.067V18.89c0 1.78 0 2.67-.55 3.22-.55.55-1.44.55-3.22.55h-1.51c-1.78 0-2.67 0-3.22-.55-.55-.55-.55-1.44-.55-3.22V13.6Z"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </button>
                                    </div>

                                    <p className="text-base leading-7 text-gray-500 mb-6">
                                        {item.description}{" "}
                                        <a href="#" className="text-indigo-600">
                                            More...
                                        </a>
                                    </p>

                                    {/* Quantity and Price */}
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <button
                                                className="group rounded-full border border-gray-200 p-2.5 bg-white hover:bg-gray-50 focus:outline-gray-300 transition"
                                                title="Decrease Quantity"
                                                onClick={() => decrementQuantity(item.id)}
                                            >
                                                <svg
                                                    className="stroke-gray-900 group-hover:stroke-black"
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M4.5 9h9" strokeWidth="1.6" strokeLinecap="round"/>
                                                </svg>
                                            </button>

                                            <input
                                                type="text"
                                                value={item.quantity}
                                                readOnly
                                                className="border border-gray-200 rounded-full w-10 text-center font-semibold text-sm py-1.5 bg-gray-100 outline-none"
                                            />

                                            <button
                                                className="group rounded-full border border-gray-200 p-2.5 bg-white hover:bg-gray-50 focus:outline-gray-300 transition"
                                                title="Increase Quantity"
                                                onClick={() => incrementQuantity(item.id)}
                                            >
                                                <svg
                                                    className="stroke-gray-900 group-hover:stroke-black"
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M9 4.5v9M4.5 9h9" strokeWidth="1.6" strokeLinecap="round"/>
                                                </svg>
                                            </button>
                                        </div>
                                        <h6 className="text-indigo-600 font-manrope font-bold text-2xl">
                                            ${item.price}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Subtotal */}
                        <div className="flex justify-end text-2xl font-bold">
                            <span className="font-manrope">Subtotal: ${subtotal.toFixed(2)}</span>
                        </div>

                        <div className="button-container">
                                <button className="checkout-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    Checkout
                                </button>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Cart;