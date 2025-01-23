import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Cuisines.css';

const Cuisines = () => {
    const navigate = useNavigate();

    const onOrderNowClick = () =>{
        navigate('/Menu');
    }

    // Check if user is logged in
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            // Redirect to log in if not authenticated
            navigate('/login');
        }
    }, [navigate]);

    return (
        <div>
            <div className="flex flex-col items-center justify-center menu-background-1 h-screen">
                <h1 className="font-sf font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-amber-50 menu-text-1 text-center">
                    Little Lemon
                </h1>
                <h1 className="font-sf font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-amber-50 menu-text-1 text-center">
                    Menu
                </h1>
            </div>

            <div className="flex items-center justify-center bg-white px-4 sm:px-8 md:px-12">
                <div className="w-full sm:w-[40%] md:w-[40%] h-[30vh] sm:h-[45vh] md:h-[50vh] mt-10 mb-10">
                    <img src="/images/menu1.jpg" alt="menubg" className="w-full h-full object-cover rounded-lg"/>
                </div>
                <div
                    className="w-full sm:w-[60%] md:w-[60%] h-[50vh] flex flex-col items-center justify-center space-y-6 px-4 sm:px-8 md:px-12">
                    <h1 className="font-sf font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black text-center">
                        Experience Authentic Indian Flavors Order Now!
                    </h1>
                    <button
                        onClick={onOrderNowClick}
                        className="px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 bg-yellow-500 text-sm sm:text-base md:text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300">
                        Order Now!
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-center bg-white px-4 sm:px-8 md:px-12">
                <div
                    className="w-full sm:w-[60%] md:w-[60%] h-[50vh] flex flex-col items-center justify-center space-y-6 px-4 sm:px-8 md:px-12">
                    <h1 className="font-sf font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black text-center">
                        Indulge in Classic Italian Dishes Order Your Favorite Today!
                    </h1>
                    <button
                        onClick={onOrderNowClick}
                        className="px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 bg-yellow-500 text-sm sm:text-base md:text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300">
                        Order Now!
                    </button>
                </div>
                <div className="w-full sm:w-[40%] md:w-[40%] h-[30vh] sm:h-[45vh] md:h-[50vh] mt-10 mb-10">
                    <img src="/images/menu2.jpg" alt="menubg" className="w-full h-full object-cover rounded-lg"/>
                </div>
            </div>

            <div className="flex items-center justify-center bg-white px-4 sm:px-8 md:px-12">

                <div className="w-full sm:w-[40%] md:w-[40%] h-[30vh] sm:h-[45vh] md:h-[50vh] mt-10 mb-10">
                    <img src="/images/menu3.jpg" alt="menubg" className="w-full h-full object-cover rounded-lg"/>
                </div>

                <div
                    className="w-full sm:w-[60%] md:w-[60%] h-[50vh] flex flex-col items-center justify-center space-y-6 px-4 sm:px-8 md:px-12">
                    <h1 className="font-sf font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black text-center">
                        From Coast to Coast – Experience the Best of American Cuisine!
                    </h1>
                    <button
                        onClick={onOrderNowClick}
                        className="px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 bg-yellow-500 text-sm sm:text-base md:text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300">
                        Order Now!
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-center bg-white px-4 sm:px-8 md:px-12">
                <div
                    className="w-full sm:w-[60%] md:w-[60%] h-[50vh] flex flex-col items-center justify-center space-y-6 px-4 sm:px-8 md:px-12">
                    <h1 className="font-sf font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black text-center">
                        Taste the Fiesta – Bold, Flavorful Mexican Dishes!
                    </h1>
                    <button
                        onClick={onOrderNowClick}
                        className="px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 bg-yellow-500 text-sm sm:text-base md:text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300">
                        Order Now!
                    </button>
                </div>
                <div className="w-full sm:w-[40%] md:w-[40%] h-[30vh] sm:h-[45vh] md:h-[50vh] mt-10 mb-10">
                    <img src="/images/menu4.jpg" alt="menubg" className="w-full h-full object-cover rounded-lg"/>
                </div>
            </div>

        </div>
    );
};

export default Cuisines;