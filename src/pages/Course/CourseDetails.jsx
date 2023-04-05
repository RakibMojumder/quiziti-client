import React, { useState } from "react";
import AnimatePage from "../../components/Helper/AnimatePage";
import CoursePurchase from "../../components/Course/CoursePurchase";
import { VscLayers } from "react-icons/vsc";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FiChevronDown } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";
import Loader from "../../components/Loaders/Loader";
import CourseTopicCart from "../../components/Course/CourseTopicCart";

const CourseDetails = () => {
  const { id } = useParams();
  const [showId, setShowId] = useState(null);
  const course = useQuery(["courses", id], async () => {
    const res = await axios.get(`https://quiziti.vercel.app/courses/${id}`);
    if (res.data.success) {
      return res.data.course;
    }
  });

  const otherCourses = useQuery(["courseTopic", id], async () => {
    const res = await axios.get(`https://quiziti.vercel.app/courseTopic/${id}`);
    if (res.data.success) {
      return res.data.courses;
    }
  });

  if (course.isLoading) return <Loader isLoading={course.isLoading} />;
  if (otherCourses.isLoading)
    return <Loader isLoading={otherCourses.isLoading} />;

  const handleShow = (id) => {
    if (showId === id) {
      return setShowId(null);
    }

    return setShowId(id);
  };

  return (
    <AnimatePage>
      <div className="container md:container-md mx-auto pt-12 pb-32">
        <div className="grid grid-cols-12 gap-5 lg:gap-10">
          <div className="course-details col-span-12 md:col-span-7 lg:col-span-8 lg:pr-10">
            <h1 className="text-xl md:text-2xl lg:text-3xl dark:text-slate-200 font-semibold">
              {course.data.courseTitle}
            </h1>
            {/* Course Curriculum */}
            <div className="mt-5">
              <h2 className="text-lg md:text-xl lg:text-2xl dark:text-white mb-3">
                Course Curriculum
              </h2>
              <div
                id="scrollbar"
                className="max-h-[500px] py-3 px-3 lg:px-6 bg-white dark:bg-slate-800/50 overflow-y-scroll border dark:border-slate-800 rounded-md cursor-pointer"
              >
                {course.data.milestones?.map((milestone, idx) => (
                  <div key={idx} className="dark:text-white py-3 font-medium">
                    <div
                      onClick={() => handleShow(milestone._id)}
                      className="flex items-center justify-between"
                    >
                      <h3
                        onClick={() => handleShow(milestone._id)}
                        className="flex-1"
                      >
                        {milestone.name}
                      </h3>
                      {showId === milestone._id ? (
                        <IoIosArrowUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </div>
                    <div
                      className={`${
                        showId === milestone._id
                          ? "transition-all duration-300 ease-in-out mt-3 max-h-screen"
                          : "overflow-hidden transition-all duration-300 ease-in-out max-h-0"
                      } space-y-2 ml-3`}
                    >
                      {milestone.modules.map((module) => (
                        <p
                          key={module._id}
                          className="text-sm dark:text-slate-300"
                        >
                          {module.title}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Course Instructor */}
            <div className="mt-10">
              <h2 className="text-lg md:text-xl lg:text-2xl dark:text-white mb-3">
                Course Instructor
              </h2>
              <div className="grid lg:grid-cols-2 gap-6 items-center mt-5 py-6 px-8 bg-white dark:bg-slate-800/50 dark:text-slate-200 rounded-md border dark:border-slate-800">
                {course.data.instructor.map((teacher, idx) => (
                  <div key={idx} className="flex space-x-3 items-center">
                    <img
                      src={teacher.img}
                      alt=""
                      className="h-12 w-12 rounded-full"
                    />
                    <div>
                      <h1 className="font-medium">{teacher.name}</h1>
                      <p className="text-sm">Senior Web Instructor</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Needed for class */}
            <div className="mt-14">
              <h3 className="text-lg md:text-xl lg:text-2xl dark:text-white mb-3">
                Needed for Class
              </h3>
              <ul className="py-6 px-8 bg-white dark:bg-slate-800/50 dark:text-slate-200 rounded-md border dark:border-slate-800 space-y-2">
                <li className="flex items-center space-x-3">
                  <VscLayers className="text-[#45C6B1] text-lg" />
                  <p>Internet Connectivity (Wireless or Mobile Internet)</p>
                </li>
                <li className="flex items-center space-x-3">
                  <VscLayers className="text-[#45C6B1] text-lg" />
                  <p>Smartphone / PC / Laptop</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="course-purchase col-span-12 md:col-span-5 lg:col-span-4 sticky top-20 self-baseline bg-white dark:bg-slate-800/50 rounded-md border dark:border-slate-700">
            <CoursePurchase course={course.data} />
          </div>
        </div>
        <div className="mt-40">
          <h3 className="text-3xl dark:text-slate-300 font-bold mb-6">
            Related Courses
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {otherCourses.data.map((topic) => (
              <CourseTopicCart key={topic._id} topic={topic} />
            ))}
          </div>
        </div>
      </div>
    </AnimatePage>
  );
};

export default CourseDetails;
