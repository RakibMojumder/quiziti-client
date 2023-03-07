import React, { createContext, useEffect, useState } from 'react';
export const AUTH_CONTEXT = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('quiziti-user')));
        setLoading(false);
    }, [])

    return (
        <AUTH_CONTEXT.Provider value={{ user, setUser, loading }}>
            {children}
        </AUTH_CONTEXT.Provider>
    );
};

export default AuthProvider;