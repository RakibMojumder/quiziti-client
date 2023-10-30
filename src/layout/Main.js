import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Home/Footer';
import Navbar from '../pages/Home/Navbar';
import { useTheme } from '../contexts/ThemeProvider';

export const QUIZ_QUESTIONS_CONTEXT = createContext();

const Main = () => {
    const [stickyHeader, setStickyHeader] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [topicId, setTopicId] = useState('');
    const { showMenu } = useTheme();

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
        <div className={`${showMenu && 'h-screen overflow-hidden'}`}>
            <div className={`dark:border-b border-slate-800 sticky top-0 z-50`}><Navbar /></div>
            <QUIZ_QUESTIONS_CONTEXT.Provider value={{ questions, topicId, setQuestions, setTopicId }}>
                <Outlet />
            </QUIZ_QUESTIONS_CONTEXT.Provider>
            <Footer />
        </div>);
};

export default Main;