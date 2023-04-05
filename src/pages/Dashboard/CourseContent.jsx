import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";
import { useLocation } from "react-router-dom";
import videoImg from "../../assets/img/istockphoto-1252447446-612x612.jpg";
import AnimatePage from "../../components/Helper/AnimatePage";

const CourseContent = () => {
  const { state: course } = useLocation();
  const [showId, setShowId] = useState(null);
  const [selectedPlayback, setSelectedPlayback] = useState(
    course.milestones[0].modules[0]
  );

  const handleShow = (id) => {
    if (showId === id) {
      return setShowId(null);
    }

    return setShowId(id);
  };
  return (
    <AnimatePage>
      <div className="container min-h-screen md:container-md mx-auto my-10 grid grid-cols-1 md:grid-cols-6 gap-6">
        <div className="course-video md:col-span-3 lg:col-span-4 lg:pr-10">
          <img
            className="w-full h-[230px] sm:h-[300px] md:h-[200px] lg:h-[450px]"
            src={videoImg}
            alt="video_img"
          />
          <h1 className="text-2xl dark:text-white mt-5 font-medium">
            {selectedPlayback.title}
          </h1>
          <div className="flex justify-between items-center mt-5">
            <button className="px-12 py-1 bg-green-500 text-white rounded-md">
              Prev
            </button>
            <button className="px-12 py-1 bg-green-500 text-white rounded-md">
              Next
            </button>
          </div>
        </div>
        <div className="course-content md:col-span-3 lg:col-span-2 self-baseline shadow-md dark:shadow-xl rounded-md mt-8 md:mt-0">
          <div
            id="scrollbar"
            className="max-h-[550px] py-3 px-3 lg:px-6 bg-white dark:bg-slate-800/50 overflow-y-scroll border dark:border-slate-800 rounded-md cursor-pointer"
          >
            {course.milestones?.map((milestone, idx) => (
              <div key={idx} className="dark:text-white py-3 font-medium">
                <div
                  onClick={() => handleShow(milestone._id)}
                  className="flex items-center justify-between"
                >
                  <h3 className="flex-1 text-lg">{milestone.name}</h3>
                  {showId === milestone._id ? (
                    <IoIosArrowUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </div>
                <div
                  className={`${
                    showId === milestone._id
                      ? "transition-all duration-300 ease-in-out mt-3 py-3 max-h-screen"
                      : "overflow-hidden transition-all duration-300 ease-in-out max-h-0"
                  } space-y-2 px-3 bg-slate-50 dark:bg-gray-800 rounded-md`}
                >
                  {milestone.modules.map((module) => (
                    <p
                      onClick={() => setSelectedPlayback(module)}
                      key={module._id}
                      className="dark:text-slate-200"
                    >
                      {module.title}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatePage>
  );
};

export default CourseContent;
