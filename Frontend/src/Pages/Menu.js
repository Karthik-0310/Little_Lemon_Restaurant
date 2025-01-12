import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

    const menuItems = [
        {
            name: "Spaghetti Carbonara",
            description: "Classic Italian pasta with creamy egg sauce, pancetta, and parmesan.",
            price: "$15.99"
        },
        {
            name: "Margherita Pizza",
            description: "Wood-fired pizza with tomato, mozzarella, and fresh basil.",
            price: "$12.99"
        },
        {
            name: "Grilled Salmon",
            description: "Grilled salmon fillet served with lemon butter and seasonal vegetables.",
            price: "$18.99"
        },
        {
            name: "Caesar Salad",
            description: "Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing.",
            price: "$9.99"
        },
        {
            name: "Tiramisu",
            description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
            price: "$7.99"
        }
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8">Little Lemon Restaurant Menu</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold">{item.name}</h2>
                        <p className="text-gray-600">{item.description}</p>
                        <p className="mt-4 text-lg font-bold">{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;