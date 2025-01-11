import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'; // Ensure App.css is imported

function App() {
    // Array of background image classes
    const backgroundClasses = [
        'hero-bg-1',
        'hero-bg-2',
        'hero-bg-3',
    ];

    // Set the initial background index
    const [currentBackground, setCurrentBackground] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBackground((prevIndex) => (prevIndex + 1) % backgroundClasses.length);
        }, 3000); // Change every 3 seconds

        // Cleanup interval when component unmounts
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Full-Screen Hero Section */}
            <section
                className={`hero-section ${backgroundClasses[currentBackground]}`}
            >
                <h1 className="hero-title text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 px-4 sm:px-0 leading-snug sm:leading-normal">
                    Welcome to Little Lemon
                </h1>
                <button
                    type="submit"
                    className="px-6 py-3 bg-yellow-500 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
                >
                    Book Now!
                </button>
            </section>

            {/* Main Content */}
            <main className="main-content">
                <div className="p-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-800">About Us</h2>
                    <p className="text-lg text-gray-500 mt-4">
                        At Little Lemon, we’re passionate about creating memorable dining experiences for you and your loved ones. Located in the heart of Chicago, our restaurant brings together a vibrant atmosphere, exceptional service, and a menu that celebrates flavors from around the globe.

                        Our talented chefs craft each dish with the freshest ingredients, offering a delightful mix of cuisines to satisfy every palate. Whether you’re craving the bold spices of Indian dishes, the zest of Mexican flavors, the elegance of Italian classics, the savory charm of Chinese delicacies, or the comforting taste of American favorites, we have something special just for you.

                        Little Lemon is not just a restaurant—it’s a destination for food enthusiasts who appreciate culinary diversity and quality. Join us for a family dinner, a romantic evening, or a casual lunch with friends. Whatever the occasion, we promise to make it extraordinary.

                        Come, indulge in a world of flavors at Little Lemon.
                    </p>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;