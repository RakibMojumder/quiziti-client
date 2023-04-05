import axios from "axios";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import AnimatePage from "../../components/Helper/AnimatePage";
import Loader from "../../components/Loaders/Loader";
import { AUTH_CONTEXT } from "../../contexts/AuthProvider";

const Dashboard = () => {
  const { token, user } = useContext(AUTH_CONTEXT);
  const [userCourses, setUserCourses] = useState(null);
  const { isLoading } = useQuery(["courses", user.email, token], async () => {
    const res = await axios.get(
      `https://quiziti.vercel.app/auth/user?email=${user.email}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.data.success) {
      setUserCourses(res.data.data.courses);
    }
  });

  if (isLoading) return <Loader loading={isLoading} />;

  if (userCourses?.length < 1) {
    return (
      <div className="min-h-screen container md:container-md mx-auto">
        <h1 className="text-3xl font-bold mt-20 text-center dark:text-slate-300">
          You have not purchased any courses yet
        </h1>
      </div>
    );
  }

  return (
    <AnimatePage>
      <div className="min-h-screen container md:container-md mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 mb-20">
          {userCourses?.map((course) => (
            <div
              key={course._id}
              className="flex flex-col sm:flex-row gap-7 bg-white dark:bg-gray-800/60 shadow-lg rounded-md p-5"
            >
              <div>
                <img
                  className="rounded-md w-full h-44"
                  src={course.image}
                  alt=""
                />
              </div>
              <div className="space-y-5">
                <h1 className="text-xl font-bold dark:text-slate-300">
                  {course.courseTitle}
                </h1>
                <div className="dark:text-slate-400">
                  {course.instructor.map((teacher, index) => (
                    <p key={index} className="inline-block">
                      <span>{teacher.name}</span>{" "}
                      <span>
                        {course.instructor.length - 1 === index ? "" : " & "}
                      </span>
                    </p>
                  ))}
                </div>
                <Link
                  to={`/dashboard/course/${course.courseTitle}`}
                  state={course}
                >
                  <button className="w-full mt-5 py-2 rounded-md bg-[#45C6B1] text-white font-semibold">
                    Continue Course
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatePage>
  );
};

export default Dashboard;
