import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import {
  MdAssignment,
  MdOutlineLiveTv,
  MdOutlineVideoSettings,
  MdQuiz,
} from "react-icons/md";
import { Link } from "react-router-dom";

const CoursePurchase = ({ course }) => {
  return (
    <>
      <img src={course.image} alt="" className="w-full h-52 rounded-t-md" />
      <div className="p-3 lg:p-5">
        <p className="text-3xl font-medium dark:text-slate-300">
          ${course.price}
        </p>
        <Link to={`/payment/steps/${course.courseId}`} state={{ course }}>
          <button className="py-2 my-6 w-full bg-[#35bfa8] text-white rounded-sm font-semibold uppercase">
            Book Now
          </button>
        </Link>
        <div className="space-y-2 dark:text-slate-300">
          <div className="flex items-center space-x-3">
            <FaUserGraduate className="text-lg text-[#35bfa8]" />
            <p className="dark:text-slate-200">
              <span className="font-semibold">{course.enrolled}</span> Enrolled
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <MdOutlineVideoSettings className="text-lg text-[#35bfa8]" />
            <p className="dark:text-slate-200">
              <span className="font-semibold">{course.recordClass}</span>{" "}
              Recorded Class
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <MdOutlineLiveTv className="text-lg text-[#35bfa8]" />
            <p className="dark:text-slate-200">
              <span className="font-semibold">{course.liveClass}</span> Live
              Class
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <MdQuiz className="text-lg text-[#35bfa8]" />
            <p className="dark:text-slate-200">
              <span className="font-semibold">{course.quiz}</span> Quizzes
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <MdAssignment className="text-lg text-[#35bfa8]" />
            <p className="dark:text-slate-200">
              <span className="font-semibold">{course.assignment}</span>{" "}
              Assignment
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePurchase;
