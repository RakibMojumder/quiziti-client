import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import AnimatePage from "../../components/Helper/AnimatePage";
import CourseTopicCart from "../../components/Course/CourseTopicCart";

const Course = () => {
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
    <AnimatePage>
      <div className="container md:container-md mx-auto py-16">
        <div className="mb-12 text-center space-y-2">
          <h5 className="text-4xl text-[#45C6B1] font-bold">Our Courses</h5>
          <h1 className="text-xl font-bold text-slate-700 dark:text-slate-300">
            Dive into Your Favorite Courses
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {courseTopics.map((topic) => (
            <CourseTopicCart topic={topic} key={topic._id} />
          ))}
        </div>
      </div>
    </AnimatePage>
  );
};

export default Course;
