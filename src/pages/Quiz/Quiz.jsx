import axios from "axios";
import React from "react";
import AnimatePage from "../../components/Auth/AnimatePage";
import { useQuery } from "react-query";
import QuizTopicCart from "../../components/Quiz/QuizTopicCart";
import Loader from "../../components/Loaders/Loader";

const Quiz = () => {
  const { data: quizTopics, isLoading } = useQuery([""], async () => {
    const { data } = await axios.get("http://localhost:5000/quizTopics");
    if (data.success) {
      return data.quizTopics;
    }
  });

  if (isLoading) {
    return <Loader loading={isLoading} />;
  }

  return (
    <AnimatePage>
      <div className="min-h-[calc(100vh_-_52px)] py-8 md:py-16">
        <div className="text-center mt-6">
          <h1 className="text-[#07b396] font-semibold">Quiz Topics!</h1>
          <p className="text-2xl md:text-4xl font-bold text-slate-700 dark:text-slate-300">
            Dive into Your Favorite Topic with Quizzes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 mt-28 gap-y-24">
          {quizTopics?.map((topic) => (
            <QuizTopicCart key={topic._id} topic={topic} />
          ))}
        </div>
      </div>
    </AnimatePage>
  );
};

export default Quiz;
