import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import profileImg from "../../assets/img/profile.jpg";
import { AUTH_CONTEXT } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { IoStatsChart } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { TbFileInvoice } from "react-icons/tb";

const Profile = ({ setShowProfile, handleLogOut }) => {
  const { user } = useContext(AUTH_CONTEXT);
  const navigate = useNavigate();
  const [file, setFile] = useState();

  // const changeProfile = () => {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="py-2 backdrop-blur-0 rounded-b-lg bg-white shadow-xl border dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-slate-100 absolute w-60 right-[67px] top-[48px] z-50"
    >
      <div className="border-b border-[#45C6B1]">
        <div className="group h-20 w-20 mt-5 mx-auto rounded-full transition-all hover:border-2 hover:border-[#45C6B1] relative">
          <img src={profileImg} className="h-full w-full rounded-full" alt="" />
          <div className="h-7 w-7 absolute -top-1 -right-5">
            <AiFillEdit className="invisible h-7 w-7 group-hover:visible transition-all text-[#45C6B1] absolute -top-1 -right-0" />
            <input
              onChange={(e) => setFile(e.target.files)}
              type="file"
              className="opacity-0 h-7 w-7"
            />
          </div>
        </div>
        <h3 className="text-sm text-center font-normal py-3 normal-case break-words">
          {user?.email}
        </h3>
      </div>
      <ul className="pt-3 space-y-1">
        <li
          onClick={() => setShowProfile(false)}
          className="px-5 py-1.5 cursor-pointer text-sm font-medium transition-all hover:bg-gray-200 dark:hover:bg-slate-900/50 flex items-center space-x-3"
        >
          <CgProfile className="text-xl" />
          <span>Profile</span>
        </li>
        <li
          onClick={() => {
            setShowProfile(false);
            navigate("/statistics");
          }}
          className="px-5 py-1.5 cursor-pointer text-sm font-medium transition-all hover:bg-gray-200 dark:hover:bg-slate-900/50 flex items-center space-x-3"
        >
          <IoStatsChart className="text-xl" />
          <span>Statistics</span>
        </li>
        <li
          onClick={() => {
            handleLogOut();
            setShowProfile(false);
          }}
          className="px-5 py-1.5 cursor-pointer text-sm font-medium transition-all hover:bg-gray-200 dark:hover:bg-slate-900/50 flex items-center space-x-3"
        >
          <BiLogIn className="text-xl" />
          <span>Log out</span>
        </li>
      </ul>
    </motion.div>
  );
};

export default Profile;
