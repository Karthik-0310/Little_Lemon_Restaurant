import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);   // stores { _id, fullName }
    const [isLoading, setIsLoading] = useState(true);

    const fetchUser = async () => {
        const userId = localStorage.getItem("userId");
        if (!userId) {
            setUser(null);
            setIsLoading(false);
            return;
        }

        try {
            const res = await fetch(`http://localhost:5001/api/users/fullname/${userId}`);
            if (res.ok) {
                const data = await res.json();
                setUser(data); // { _id, fullName }
            } else {
                setUser(null);
            }
        } catch (err) {
            console.error("Error fetching user:", err);
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, isLoading }}>
            {children}
        </UserContext.Provider>
    );
};