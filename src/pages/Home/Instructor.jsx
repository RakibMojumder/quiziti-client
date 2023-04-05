import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const Instructor = () => {
  const { data: instructors, isLoading } = useQuery(
    ["instructor"],
    async () => {
      const res = await axios.get("https://quiziti.vercel.app/instructor");
      if (res.data.success) {
        return res.data.instructors;
      }
    }
  );

  if (isLoading) {
    return;
  }
  return (
    <div className="bg-gradient dark:bg-none dark:bg-[#0B1120] border-b dark:border-slate-800">
      <div className="container md:container-md mx-auto py-24">
        <div className="mb-12 text-center space-y-2">
          <h5 className="text-4xl text-[#45C6B1] font-bold">Our Instructor</h5>
          <h1 className="text-xl font-bold text-slate-700 dark:text-slate-300">
            Learn from the experts and take your skills to the next level
          </h1>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {instructors.map((instructor) => (
            <div
              key={instructor._id}
              className="bg-white dark:bg-gray-900 dark:text-slate-200 border border-slate-200 dark:border-slate-800 break-inside-avoid p-5 rounded-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src={instructor.image}
                  alt=""
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-4">
                  <h1 className="text-lg font-semibold">{instructor.name}</h1>
                  <p className="text-sm">{instructor.title}</p>
                </div>
              </div>
              <p className="text-justify text-sm">{instructor.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructor;
