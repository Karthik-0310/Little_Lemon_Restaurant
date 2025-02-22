import React, { createContext, useState, useEffect, useContext } from "react";

// Create CartContext
const CartContext = createContext();

// CartProvider component to wrap the app and provide context
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Save cart to local storage
    const saveCartToLocalStorage = (items) => {
        localStorage.setItem("cartItems", JSON.stringify(items));
    };

    // Load cart from local storage
    const loadCartFromLocalStorage = () => {
        const storedCartItems = localStorage.getItem("cartItems");
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    };

    useEffect(() => {
        loadCartFromLocalStorage();
    }, []);

    useEffect(() => {
        saveCartToLocalStorage(cartItems);
    }, [cartItems]);

    // Add item to cart
    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                // If item already exists, increase the quantity
                return prevItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                // Otherwise, add new item to the cart
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    // Remove item from cart
    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    // Increment item quantity
    const incrementQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((cartItem) =>
                cartItem.id === id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
        );
    };

    // Decrement item quantity
    const decrementQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.reduce((acc, cartItem) => {
                if (cartItem.id === id) {
                    if (cartItem.quantity > 1) {
                        acc.push({ ...cartItem, quantity: cartItem.quantity - 1 });
                    }
                } else {
                    acc.push(cartItem);
                }
                return acc;
            }, [])
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, incrementQuantity, decrementQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to access cart context
export const useCart = () => useContext(CartContext);