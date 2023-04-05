import React, { createContext, useState } from 'react';
import Cookies from 'js-cookie';


export const AUTH_CONTEXT = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(
        Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null
    );
    const [token, setToken] = useState(
        Cookies.get("token") ? Cookies.get("token") : null
    );


    return (
        <AUTH_CONTEXT.Provider value={{ user, setUser, token, setToken }}>
            {children}
        </AUTH_CONTEXT.Provider>
    );
};

export default AuthProvider;