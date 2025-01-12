import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Check for user authentication status on initial load
    useEffect(() => {
        const storedUser = localStorage.getItem('userId');
        if (storedUser) {
            setUser({ id: storedUser });
        }
    }, []);

    const login = (userId) => {
        setUser({ id: userId });
        localStorage.setItem('userId', userId);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('userId');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};