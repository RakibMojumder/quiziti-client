import axios from "axios";
import React from "react";
import AnimatePage from "../../components/Helper/AnimatePage";
import { useQuery } from "react-query";
import QuizTopicCart from "../../components/Quiz/QuizTopicCart";
import Loader from "../../components/Loaders/Loader";

const Quiz = () => {
  const { data: quizTopics, isLoading } = useQuery(["quizTopics"], async () => {
    const { data } = await axios.get("https://quiziti.vercel.app/quizTopics");
    if (data.success) {
      return data.quizTopics;
    }
  });

  if (isLoading) {
    return <Loader loading={isLoading} />;
  }

  return (
    <AnimatePage>
      <div className="min-h-[calc(100vh_-_49px)] container md:container-md mx-auto py-8 md:pt-16 pb-28">
        <div className="mb-28 text-center space-y-2">
          <h5 className="text-4xl text-[#45C6B1] font-bold">Quiz Topic</h5>
          <h1 className="text-xl font-bold text-slate-700 dark:text-slate-300">
            Dive into Your Favorite Topic with Quizzes
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 mt-28 gap-y-24">
          {quizTopics?.map((topic) => (
            <QuizTopicCart key={topic._id} topic={topic} />
          ))}
        </div>
      </div>
    </AnimatePage>
  );
};

export default Quiz;
