import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, Route
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home'; // Import Home page component
import Login from './Pages/Login'; // Import Login page component
import RegisterUser from "./Pages/Registeruser";
import Menu from './Pages/Menu';

function App() {
    return (
        <Router> {/* Wrap the entire app in BrowserRouter */}
            <div className="flex flex-col min-h-screen">
                {/* Navbar */}
                <Navbar />

                {/* Routing for different pages */}
                <main className="flex-grow bg-white"> {/* Ensure main content area grows to fill space */}
                    <Routes>
                        <Route path="/" element={<Home />} /> {/* Home Page route */}
                        <Route path="/login" element={<Login />} /> {/* Login Page route */}
                        <Route path="/register" element={<RegisterUser />} />
                        <Route path="/menu" element={<Menu />} />
                    </Routes>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;