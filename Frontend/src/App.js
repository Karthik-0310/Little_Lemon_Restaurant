import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';
import RegisterUser from './Pages/Registeruser';
import Cuisines from './Pages/Cuisines';
import ProtectedRoute from './Utils/ProtectedRoute';
import Menu from './Pages/Menu';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                {/* Navbar */}
                <Navbar />

                {/* Routing for different pages */}
                <main className="flex-grow bg-white">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<RegisterUser />} />
                        <Route
                            path="/Cuisines"
                            element={
                                <ProtectedRoute>
                                    <Cuisines />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/Menu"
                            element={
                                <ProtectedRoute>
                                    <Menu />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;