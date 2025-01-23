import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Home.css'; // Styles for Home page if needed

function Home() {
    const backgroundClasses = [
        'hero-bg-1',
        'hero-bg-2',
        'hero-bg-3',
    ];

    const [currentBackground, setCurrentBackground] = useState(0);
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBackground((prevIndex) => (prevIndex + 1) % backgroundClasses.length);
        }, 3000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    const handleOrderNowClick = () => {
        const authToken = localStorage.getItem('authToken'); // Check for token in localStorage

        if (authToken) {
            navigate('/Cuisines'); // Navigate to Cuisines if authenticated
        } else {
            navigate('/Login'); // Navigate to Login if not authenticated
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Full-Screen Hero Section */}
            <section
                className={`hero-section ${backgroundClasses[currentBackground]} flex items-center justify-center text-center py-12`}>
                <h1 className="hero-title text-white text-[3rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[5rem] font-bold mb-6 px-4 sm:px-8 leading-snug sm:leading-normal">
                    Welcome to Little Lemon
                </h1>
                <button
                    onClick={handleOrderNowClick} // Add click handler
                    className="px-4 py-2 sm:px-6 sm:py-3 bg-yellow-500 text-white text-base sm:text-xl font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
                >
                    Order Now!
                </button>
            </section>

            {/* Main Content */}
            <main className="main-content bg-white">
                {/* About Us Section */}
                <div className="p-4 sm:px-6 md:px-8 text-center bg-gray-100">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                        About Us
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 mt-4 sm:mt-6 px-4 sm:px-8">
                        At LemonTree, we believe food is more than just a meal — it’s an experience. Located in the
                        vibrant
                        neighborhood of Chicago, our restaurant offers a unique blend of Indian, American, and Mexican
                        cuisines,
                        carefully curated to create an unforgettable dining journey.

                        Our chefs bring together the finest ingredients, whether it’s the bold spices of India, the
                        hearty comfort
                        food of America, or the vibrant flavors of Mexico. From our sizzling tandoori platters to our
                        mouthwatering
                        burgers and tacos, each dish is a celebration of flavor, culture, and tradition.

                        We strive to provide not only exceptional food but also a warm, welcoming atmosphere where you
                        can relax,
                        enjoy, and make memories with friends and family. Whether you're here for a quick bite or a
                        leisurely
                        meal, LemonTree is the perfect place to unwind and savor the diverse flavors we offer.

                        Join us for a meal that’s not just about food, but about connecting with loved ones and
                        experiencing the
                        joy that comes from sharing great flavors and good times. At LemonTree, we’re more than just a
                        restaurant
                        — we’re a place where flavors, memories, and friendships are made.
                    </p>
                </div>

                {/* Reviews Section */}
                <div className="text-gray-600 pt-8 bg-gray-100" id="reviews">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                        <div className="mb-10 space-y-4 px-6 md:px-0">
                            <h2 className="text-center text-2xl font-bold text-gray-800 md:text-4xl">
                                Our Guests Love Us!
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                            <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10">
                                <div className="flex gap-4">
                                    <img className="w-12 h-12 rounded-full"
                                         src="https://randomuser.me/api/portraits/women/12.jpg" alt="user avatar"
                                         width="400" height="400" loading="lazy"/>
                                    <div>
                                        <h6 className="text-lg font-medium text-gray-700">Priya Sharma</h6>
                                        <p className="text-sm text-gray-500">Food Blogger</p>
                                    </div>
                                </div>
                                <p className="mt-8">The Indian dishes at LemonTree are absolutely authentic! I tried
                                    their Paneer Tikka and Butter Chicken, and both were full of flavor. The spices were
                                    perfectly balanced, and the naan was so soft and fresh. A must-try for anyone
                                    craving real Indian cuisine!</p>
                            </div>

                            <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10">
                                <div className="flex gap-4">
                                    <img className="w-12 h-12 rounded-full"
                                         src="https://randomuser.me/api/portraits/women/14.jpg" alt="user avatar"
                                         width="200" height="200" loading="lazy"/>
                                    <div>
                                        <h6 className="text-lg font-medium text-gray-700">John Doe</h6>
                                        <p className="text-sm text-gray-500">Chef</p>
                                    </div>
                                </div>
                                <p className="mt-8">I’ve been to LemonTree a few times, and their American-style burgers
                                    are the best! I love their classic cheeseburger with crispy fries on the side. The
                                    meat is always perfectly cooked, and the flavors are spot on. Highly recommend it to
                                    anyone who loves a good burger!</p>
                            </div>

                            <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10">
                                <div className="flex gap-4">
                                    <img className="w-12 h-12 rounded-full"
                                         src="https://randomuser.me/api/portraits/women/18.jpg" alt="user avatar"
                                         width="200" height="200" loading="lazy"/>
                                    <div>
                                        <h6 className="text-lg font-medium text-gray-700">Carlos Mendez</h6>
                                        <p className="text-sm text-gray-500">Food Enthusiast</p>
                                    </div>
                                </div>
                                <p className="mt-8">The Mexican tacos here are incredible! I had their Carne Asada Tacos
                                    with a side of guacamole and chips, and everything was so fresh. The salsa had just
                                    the right amount of kick, and the tortillas were soft and warm. Perfect for a quick
                                    and delicious meal.</p>
                            </div>

                            <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10">
                                <div className="flex gap-4">
                                    <img className="w-12 h-12 rounded-full"
                                         src="https://randomuser.me/api/portraits/women/2.jpg" alt="user avatar"
                                         width="200" height="200" loading="lazy"/>
                                    <div>
                                        <h6 className="text-lg font-medium text-gray-700">Sarah Lee</h6>
                                        <p className="text-sm text-gray-500">Restaurant Critic</p>
                                    </div>
                                </div>
                                <p className="mt-8">LemonTree’s combination of Indian and American dishes is fantastic!
                                    I had the Chicken Korma paired with a side of their famous LemonTree Fries. The
                                    fusion of flavors was unexpected but amazing. It’s an experience you won’t find at
                                    other restaurants!</p>
                            </div>

                            <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10">
                                <div className="flex gap-4">
                                    <img className="w-12 h-12 rounded-full"
                                         src="https://randomuser.me/api/portraits/women/62.jpg" alt="user avatar"
                                         width="200" height="200" loading="lazy"/>
                                    <div>
                                        <h6 className="text-lg font-medium text-gray-700">Amy Thompson</h6>
                                        <p className="text-sm text-gray-500">Business Owner</p>
                                    </div>
                                </div>
                                <p className="mt-8">If you're in the mood for something spicy and flavorful, I highly
                                    recommend LemonTree's Indian cuisine. The Samosas are crispy, and the Dal Tadka is
                                    just the right level of heat. I could eat here every day!</p>
                            </div>

                            <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10">
                                <div className="flex gap-4">
                                    <img className="w-12 h-12 rounded-full"
                                         src="https://randomuser.me/api/portraits/women/19.jpg" alt="user avatar"
                                         width="400" height="400" loading="lazy"/>
                                    <div>
                                        <h6 className="text-lg font-medium text-gray-700">David Green</h6>
                                        <p className="text-sm text-gray-500">Food Lover</p>
                                    </div>
                                </div>
                                <p className="mt-8">I had the best burritos at LemonTree! Their Mexican dishes are on
                                    par with the best places in town. The seasoned beef was so tender, and the rice and
                                    beans were the perfect complement. Can’t wait to come back for more!</p>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;