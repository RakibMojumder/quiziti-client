import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Home/Footer';
import Navbar from '../pages/Home/Navbar';

export const QUIZ_QUESTIONS_CONTEXT = createContext();

const Main = () => {
    const [stickyHeader, setStickyHeader] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [topicId, setTopicId] = useState('');

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
            <div className={`dark:bg-[#0B1120] dark:border-b border-slate-800 sticky top-0 z-50 md:static ${stickyHeader && 'md:sticky top-0 z-50'}`}><Navbar /></div>
            <QUIZ_QUESTIONS_CONTEXT.Provider value={{ questions, topicId, setQuestions, setTopicId }}>
                <Outlet />
            </QUIZ_QUESTIONS_CONTEXT.Provider>
            <Footer />
        </>
    );
};

export default Main;