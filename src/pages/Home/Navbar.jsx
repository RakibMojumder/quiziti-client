import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/img/logo.png";
import logo1 from "../../assets/img/logo1.png";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { BsMoon } from "react-icons/bs";
import { IoIosSunny } from "react-icons/io";
import { useTheme } from "../../contexts/ThemeProvider";
import { AUTH_CONTEXT } from "../../contexts/AuthProvider";
import { HiDotsVertical } from "react-icons/hi";
import Profile from "../../components/Profile";

const Navbar = () => {
  const { theme, toggleTheme, showMenu, setShowMenu } = useTheme();
  const [vw, setVw] = useState(window.innerWidth);
  const { user } = useContext(AUTH_CONTEXT);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const cleanUp = () => setVw(window.innerWidth);
    return () => cleanUp();
  });

  return (
    <div className="dark:text-white shadow-[0px_4px_2px_-3px_#ddd] dark:shadow-none">
      <div className="md:flex justify-between items-center rounded-md w-[93%] md:w-[90%] mx-auto py-2 md:py-0 overflow-hidden">
        <div className="md:w-1/2 flex justify-between items-center">
          <div className="logo">
            <img className="h-10" src={theme ? logo : logo1} alt="" />
          </div>
          <div className="flex items-center md:hidden transition-all duration-1000 ease-linear">
            <button
              onClick={toggleTheme}
              className="mr-3 text-sm flex md:hidden items-center uppercase"
            >
              <span className="mr-3 text-2xl">
                {theme ? (
                  <BsMoon className="text-lg" />
                ) : (
                  <IoIosSunny className="text-yellow-400" />
                )}
              </span>
            </button>
            <span>
              {showMenu ? (
                <RxCross2
                  className="text-2xl"
                  onClick={() => setShowMenu(!showMenu)}
                />
              ) : (
                <FiMenu
                  className="text-2xl"
                  onClick={() => setShowMenu(!showMenu)}
                />
              )}
            </span>
          </div>
        </div>
        <div
          className={`absolute top-10 left-0 z-[1000] md:static md:flex justify-end h-screen md:h-auto mt-3 md:mt-0 ml-auto md:ml-0 shadow-xl bg-slate-100 dark:bg-slate-900 md:bg-transparent md:dark:bg-transparent md:shadow-none uppercase font-semibold transition-all duration-500 ease-out ${
            showMenu
              ? "w-full opacity-100"
              : "w-0 opacity-0 md:opacity-100 md:w-full"
          }`}
        >
          {showProfile && <Profile />}
          <ul className="py-4 md:space-x-7 w-full flex flex-col md:flex-row md:justify-end text-center text-xl space-y-5 md:space-y-0 md:text-sm">
            <li
              onClick={toggleTheme}
              className="hidden md:flex items-center uppercase cursor-pointer"
            >
              <span className="mr-1 text-2xl">
                {theme ? (
                  <BsMoon className="text-lg" />
                ) : (
                  <IoIosSunny className="text-yellow-400" />
                )}
              </span>
            </li>
            <li
              onClick={() => vw < 768 && setShowMenu(!showMenu)}
              className="text-slate-800 dark:text-slate-200 before:transition-all before:duration-300 before:ease-linear md:relative md:before:absolute before:h-[2px] before:w-0 before:-bottom-2 before:left-0 md:before:bg-[#45C6B1] md:hover:before:w-1/2 after:transition-all after:duration-300 md:after:absolute after:h-[2px] after:w-0 after:-bottom-2 after:right-0 md:after:bg-[#45C6B1] md:after:hover:w-1/2"
            >
              <NavLink to="/">Home</NavLink>
            </li>
            <li
              onClick={() => vw < 768 && setShowMenu(!showMenu)}
              className="text-slate-800 dark:text-slate-200 before:transition-all before:duration-300 before:ease-linear md:relative md:before:absolute before:h-[2px] before:w-0 before:-bottom-2 before:left-0 md:before:bg-[#45C6B1] md:hover:before:w-1/2 after:transition-all after:duration-300 md:after:absolute after:h-[2px] after:w-0 after:-bottom-2 after:right-0 md:after:bg-[#45C6B1] md:after:hover:w-1/2"
            >
              <NavLink to="/course">Course</NavLink>
            </li>
            <li
              onClick={() => vw < 768 && setShowMenu(!showMenu)}
              className="text-slate-800 dark:text-slate-200 before:transition-all before:duration-300 before:ease-linear md:relative md:before:absolute before:h-[2px] before:w-0 before:-bottom-2 before:left-0 md:before:bg-[#45C6B1] md:hover:before:w-1/2 after:transition-all after:duration-300 md:after:absolute after:h-[2px] after:w-0 after:-bottom-2 after:right-0 md:after:bg-[#45C6B1] md:after:hover:w-1/2"
            >
              <NavLink to="/quiz">Quiz</NavLink>
            </li>
            {user ? (
              <li
                onClick={() => setShowProfile(!showProfile)}
                className="text-lg text-slate-800 dark:text-slate-200"
              >
                <HiDotsVertical />
              </li>
            ) : (
              <li
                onClick={() => vw < 768 && setShowMenu(!showMenu)}
                className="text-slate-800 dark:text-slate-200 before:transition-all before:duration-300 before:ease-linear md:relative md:before:absolute before:h-[2px] before:w-0 before:-bottom-2 before:left-0 md:before:bg-[#45C6B1] md:hover:before:w-1/2 after:transition-all after:duration-300 md:after:absolute after:h-[2px] after:w-0 after:-bottom-2 after:right-0 md:after:bg-[#45C6B1] md:after:hover:w-1/2"
              >
                <NavLink to="/auth">Login</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
