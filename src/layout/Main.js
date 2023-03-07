import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Home/Navbar';

export const QUIZ_QUESTIONS_CONTEXT = createContext();

const Main = () => {
    const [stickyHeader, setStickyHeader] = useState(false);
    const [questions, setQuestions] = useState([]);

    const changeBackground = () => {
        if (window.scrollY >= 400) {
            setStickyHeader(true);
        } else {
            setStickyHeader(false)
        }
    }

    useEffect(() => {
        changeBackground();
        window.addEventListener('scroll', changeBackground)
    }, [])

    return (
        <>
            <div className={`bg-white dark:bg-[#0B1120] dark:border-b border-slate-800 sticky top-0 z-50 md:static ${stickyHeader && 'md:sticky top-0 z-50'}`}><Navbar /></div>
            <QUIZ_QUESTIONS_CONTEXT.Provider value={{ questions, setQuestions }}>
                <div className="w-[93%] md:w-[90%] mx-auto"><Outlet /></div>
            </QUIZ_QUESTIONS_CONTEXT.Provider>
        </>
    );
};

export default Main;