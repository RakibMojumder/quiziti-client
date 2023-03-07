import React from "react";
import { NavLink } from "react-router-dom";

const AuthNavbar = () => {
  return (
    <div className="flex dark:text-white border-b border-b-slate-300 dark:border-b-slate-600 text-center">
      <NavLink
        to="/auth"
        end
        className={({ isActive }) =>
          `flex-1 py-1.5 uppercase font-semibold rounded-tl-md ${
            isActive && "bg-[#45C6B1] text-white"
          }`
        }
      >
        Login
      </NavLink>
      <NavLink
        to="/auth/register"
        className={({ isActive }) =>
          `flex-1 py-1.5 uppercase font-semibold rounded-tr-md ${
            isActive && "bg-[#45C6B1] text-white"
          }`
        }
      >
        Register
      </NavLink>
    </div>
  );
};

export default AuthNavbar;
