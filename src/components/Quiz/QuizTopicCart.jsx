import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const QuizTopicCart = ({ topic }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{
        boxShadow: "0px 0px 8px #45C6B1",
        transitionDuration: "500ms",
      }}
      data-aos="zoom-in-down"
      data-aos-duration="700"
      onClick={() => navigate(`/quiz/${topic._id}`)}
      className="h-28 dark:border border-slate-600 shadow-[0px_0px_4px_rgba(221,221,221,1)] dark:shadow-none bg-white dark:bg-transparent flex flex-col justify-center items-center py-8 rounded-md relative cursor-pointer"
    >
      <div className="h-16 w-16 border border-slate-300 dark:border-[#abf0e5] flex justify-center items-center rotate-45 absolute -top-8 bg-gray-100 dark:bg-gray-900 rounded-xl">
        <img className="h-10 -rotate-45" src={topic.image} alt="" />
      </div>
      <h1 className="text-3xl mt-10 dark:text-white">{topic.title}</h1>
    </motion.div>
  );
};

export default QuizTopicCart;
