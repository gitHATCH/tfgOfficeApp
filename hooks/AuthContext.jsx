import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const loadAuth = async () => {
            const token = await AsyncStorage.getItem('authToken');
            if (token) {
                setAuth({ token });
            }
        };
        loadAuth();
    }, []);

    const loginUser = async (token) => {
        await AsyncStorage.setItem('authToken', token);
        setAuth({ token });
    };

    const logoutUser = async () => {
        await AsyncStorage.removeItem('authToken');
        setAuth(null);
    };

    return (
        <AuthContext.Provider value={{ auth, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
