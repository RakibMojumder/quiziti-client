import React from "react";
import { useNavigate } from "react-router-dom";

const QuizTopicCart = ({ topic }) => {
  const navigate = useNavigate();
  return (
    <div
      data-aos="zoom-in-down"
      data-aos-duration="400"
      onClick={() => navigate(`/quiz/${topic._id}`)}
      className="group h-28 border border-slate-300 dark:border-slate-700 hover:border-[#45C6B1] dark:hover:border-[#45C6B1] bg-white dark:bg-transparent flex flex-col justify-center items-center py-8 rounded-md relative cursor-pointer"
    >
      <div className="h-16 w-16 border border-slate-300 dark:border-[#abf0e5] group-hover:border-[#45C6B1] flex justify-center items-center rotate-45 absolute -top-8 bg-gray-100 dark:bg-gray-900 rounded-xl">
        <img className="h-10 -rotate-45" src={topic.image} alt="" />
      </div>
      <h1 className="text-3xl mt-10 dark:text-white">{topic.title}</h1>
    </div>
  );
};

export default QuizTopicCart;
