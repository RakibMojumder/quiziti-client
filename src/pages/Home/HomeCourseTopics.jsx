import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const HomeCourseTopics = () => {
  const navigate = useNavigate();
  const { data: courseTopics, isLoading } = useQuery(
    ["courseTopic"],
    async () => {
      const res = await axios.get("https://quiziti.vercel.app/courseTopic");
      if (res.data.success) {
        return res.data.topics;
      }
    }
  );

  if (isLoading) {
    return;
  }

  return (
    <div className="pt-24 pb-32 overflow-hidden bg-white dark:bg-[#0B1120]">
      <div className="mb-12 text-center space-y-2">
        <h5 className="text-4xl text-[#45C6B1] font-bold">Our Courses</h5>
        <h1 className="text-xl font-bold text-slate-700 dark:text-slate-300">
          Dive into Your Favorite Courses
        </h1>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-row gap-6 shrink-0 animate-scroll">
          {courseTopics.map((topic) => (
            <div
              key={topic._id}
              onClick={() => navigate(`/course/${topic._id}`)}
              className="group rounded-md bg-white dark:bg-transparent border border-slate-300 dark:border-slate-700 w-64 shrink-0 hover:border-teal-700 dark:hover:border-teal-700 cursor-pointer"
            >
              <div className="w-full">
                <img
                  src={topic.image}
                  alt=""
                  className="h-40 w-full rounded-t-md"
                />
                <div className="p-3 text-slate-700 dark:text-slate-300">
                  <h1 className="text-md h-[72px] mb-2">{topic.title}</h1>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl text-[#19b69c] font-bold">
                      ${topic.price}
                    </p>
                    <HiOutlineArrowNarrowUp className="rotate-90 text-3xl text-slate-400 dark:text-slate-700 group-hover:text-[#19b69c]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-6 shrink-0 animate-scroll">
          {courseTopics.map((topic) => (
            <div
              key={topic._id}
              onClick={() => navigate(`/course/${topic._id}`)}
              className="group rounded-md bg-white dark:bg-transparent border border-slate-300 dark:border-slate-700 w-64 shrink-0 hover:border-teal-700 dark:hover:border-teal-700 cursor-pointer"
            >
              <div className="w-full">
                <img
                  src={topic.image}
                  alt=""
                  className="h-40 w-full rounded-t-md"
                />
                <div className="p-3 text-slate-700 dark:text-slate-300">
                  <h1 className="text-md h-[72px] mb-2">{topic.title}</h1>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl text-[#19b69c] font-bold">
                      ${topic.price}
                    </p>
                    <HiOutlineArrowNarrowUp className="rotate-90 text-3xl text-slate-400 dark:text-slate-700 group-hover:text-[#19b69c]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCourseTopics;
