const mongoose = require('mongoose');

// Define MenuItem schema
const menuItemsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    rating: { type: Number, required: true },
    category: { type: String, required: true },
});

// Create a model from the schema and explicitly set the collection name to 'Menu items'
const MenuItem = mongoose.model('MenuItem', menuItemsSchema, 'Menuitems');  // Explicitly set collection name

// Controller logic to fetch menu items
const getMenuItems = async () => {
    try {
        // Fetch all menu items from the database
        const menuItems = await MenuItem.find();

        // Ensure menuItems is an array before using map
        if (!Array.isArray(menuItems)) {
            throw new Error('Fetched data is not an array');
        }

        // Map over the menu items to remove _id and add id
        return menuItems.map(item => ({
            id: item._id.toString(),  // Use MongoDB _id as the id in the response
            name: item.name,
            image: item.image,
            price: item.price,
            rating: item.rating,
            category: item.category,
        }));
    } catch (error) {
        console.error('Error fetching menu items:', error); // Log any errors
        throw new Error(error.message);  // Throw an error if the database fetch fails
    }
};

module.exports = { getMenuItems };