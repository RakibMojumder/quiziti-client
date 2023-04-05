import React from "react";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const CourseTopicCart = ({ topic }) => {
  const navigate = useNavigate();
  return (
    <div
      key={topic._id}
      className="group rounded-md border border-slate-300 dark:border-slate-700 shrink-0 hover:border-teal-600 dark:hover:border-teal-600 cursor-pointer"
    >
      <div className="w-full">
        <img src={topic.image} alt="" className="h-40 w-full rounded-t-md" />
        <div className="p-3 text-slate-700 dark:text-slate-300">
          <h1 className="text-md h-[72px] mb-2">{topic.title}</h1>
          <div className="flex justify-between items-center">
            <p className="text-2xl text-[#07b396] font-bold">${topic.price}</p>
            <HiOutlineArrowNarrowUp
              onClick={() => navigate(`/course/${topic._id}`)}
              className="rotate-90 text-3xl text-slate-400 dark:text-slate-700 group-hover:text-[#19b69c]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTopicCart;
