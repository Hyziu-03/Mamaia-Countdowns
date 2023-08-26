// React
import React, { createContext, useState, useEffect } from 'react';
// Auth
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './App';

const AuthContext = createContext();

function AuthProvider ({ children }) {
    const [id, setId] = useState(null);

    useEffect(function () {
        const unsubscribe = onAuthStateChanged(auth, function (user) {
            try {
                if (user) setId(user.uid);
                else setId(null);
            } catch (error) {
                console.log("⚠️ Failed to set user ID");
            }
        });

        return () => unsubscribe();
    }, [id]);

    return (
        <AuthContext.Provider value={id}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
