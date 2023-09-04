// React
import React, { createContext, useContext, useState, useEffect } from 'react';
// Firestore
import { db } from '../components/App';
import { getCountFromServer, collection } from 'firebase/firestore';
// Context
import { AuthContext } from './AuthContext';

const CountContext = createContext();

function CountProvider({ children }) {
    const [count, setCount] = useState(0);
    const id = useContext(AuthContext);

    useEffect(function () {
        const unsubscribe = async function () {
            try {
                if(id === null) return;
                const snapshot = await getCountFromServer(
                    collection(db, id)
                );
                const documentCount = snapshot.data().count;
                setCount(documentCount);                
            } catch(error) {
                console.log("⚠️ Error getting document count")
            }
        }

        return unsubscribe();
    }, [count, id]);

    return (
        <CountContext.Provider value={count}>
            {children}
        </CountContext.Provider>
    );
};

export { CountContext, CountProvider };
