import React, { useContext } from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/img/profile.jpg";
import { AUTH_CONTEXT } from "../contexts/AuthProvider";

const Profile = () => {
  const { user } = useContext(AUTH_CONTEXT);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="py-2 backdrop-blur-0 bg-slate-50 shadow-md dark:bg-slate-800 text-slate-800 dark:text-slate-100 absolute w-56 right-[67px] top-[53px]"
    >
      <div className="clip-style h-4 w-7 bg-slate-50 dark:bg-slate-800 absolute right-0 -top-4"></div>
      <div className="border-b border-[#45C6B1]">
        <img
          src={profileImg}
          className="h-20 mt-5 mx-auto rounded-full"
          alt=""
        />
        <h3 className="text-sm text-center font-normal py-3 normal-case">
          {user?.email}
        </h3>
      </div>
      <ul className="text-sm pt-2">
        <li className="px-5 py-1.5 cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700">
          Profile
        </li>
        <li className="px-5 py-1.5 cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700">
          Statistics
        </li>
        <li className="px-5 py-1.5 cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700">
          Log Out
        </li>
      </ul>
    </motion.div>
  );
};

export default Profile;
