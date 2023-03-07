import React, { createContext, useContext, useEffect, useState } from 'react';

const THEME_CONTEXT = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        setTheme(JSON.parse(localStorage.getItem('theme')));

        if (!theme) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(!theme);

        localStorage.setItem('theme', !theme)
    }

    return (
        <THEME_CONTEXT.Provider value={{ theme, toggleTheme, showMenu, setShowMenu }}>
            {children}
        </THEME_CONTEXT.Provider>
    );
};

export const useTheme = () => {
    const { theme, toggleTheme, showMenu, setShowMenu } = useContext(THEME_CONTEXT);
    return { theme, toggleTheme, showMenu, setShowMenu }
}

export default ThemeProvider;