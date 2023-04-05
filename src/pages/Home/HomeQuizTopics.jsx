import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import QuizTopicCart from "../../components/Quiz/QuizTopicCart";

const HomeQuizTopics = () => {
  const { data: quizTopics } = useQuery([""], async () => {
    const { data } = await axios.get("https://quiziti.vercel.app/quizTopics");
    if (data.success) {
      return data.quizTopics;
    }
  });

  return (
    <div className="border-b dark:border-slate-800">
      <div className="container md:container-md mx-auto pt-20 pb-32 dark:text-white">
        <div className="mb-28 text-center space-y-2">
          <h5 className="text-4xl text-[#45C6B1] font-bold">Quiz Topic</h5>
          <h1 className="text-xl font-bold text-slate-700 dark:text-slate-300">
            Dive into Your Favorite Topic with Quizzes
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-24">
          {quizTopics?.map((topic) => (
            <QuizTopicCart key={topic._id} topic={topic} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeQuizTopics;
