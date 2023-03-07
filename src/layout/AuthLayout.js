import React from "react";
import { Outlet } from "react-router-dom";
import AuthNavbar from "../components/Auth/AuthNavbar";
import logo from "../assets/img/logo.png";
import logo1 from "../assets/img/logo1.png";
import { useTheme } from "../contexts/ThemeProvider";

const AuthLayout = () => {
  const { theme } = useTheme();
  return (
    <div className="min-h-screen md:flex justify-center">
      <div className="md:w-1/2 lg:w-1/3 py-14">
        <img className="h-20 mx-auto mb-8" src={theme ? logo : logo1} alt="" />
        <div className="border border-slate-300 dark:border-slate-600 rounded-md">
          <AuthNavbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
