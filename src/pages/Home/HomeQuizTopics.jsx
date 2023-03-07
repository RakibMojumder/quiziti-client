import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import QuizTopicCart from "../../components/Quiz/QuizTopicCart";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const HomeQuizTopics = () => {
  const { data: quizTopics } = useQuery([""], async () => {
    const { data } = await axios.get(
      "http://localhost:5000/quizTopics?&limit=4"
    );
    if (data.success) {
      return data.quizTopics;
    }
  });

  return (
    <>
      <div className="pt-20 pb-32 dark:text-white">
        <div className="mb-28 text-center space-y-2">
          <h5 className="text-[#45C6B1] font-semibold">Quiz Topic</h5>
          <h1 className="text-xl md:text-3xl font-bold text-slate-700 dark:text-slate-300">
            Dive into Your Favorite Topic with Quizzes
          </h1>
          {/* <p className="md:w-3/4 mx-auto text-sm text-justify md:text-center">
            Take your programming skills to the next level with our challenging
            and educational quizzes. Whether you're a beginner or a seasoned
            pro, our quizzes will help you brush up on your skills and stay
            ahead of the curve.
          </p> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-24">
          {quizTopics?.map((topic) => (
            <QuizTopicCart key={topic._id} topic={topic} />
          ))}
        </div>
        <Link
          to="/quiz"
          className="mt-8 group w-32 ml-auto px-8 py-1 bg-[#45C6B1] text-white rounded-full flex items-center justify-center transition-all hover:bg-[#07b396]"
        >
          <span className="mr-2">More</span>{" "}
          <BsChevronRight className="transition-all duration-300 group-hover:translate-x-2.5" />
        </Link>
      </div>
    </>
  );
};

export default HomeQuizTopics;
