import React from "react";
import { Link, useLocation } from "react-router-dom";
import congratulations from "../../assets/lottie-animation/112854-congratulations.json";
import Lottie from "lottie-react";
import AnimatePage from "../../components/Auth/AnimatePage";

const QuizResult = () => {
  const { state } = useLocation();
  const score = ((state.correctAnswerCount / 15) * 100).toFixed(1);
  return (
    <div className="min-h-[calc(100vh_-_52px)] overflow-hidden relative">
      <Lottie
        animationData={congratulations}
        loop={false}
        className="h-[calc(100vh_-_52px)] w-full"
      />
      <AnimatePage>
        <div className="bg-white dark:bg-gray-800 text-slate-800 dark:text-white shadow-md p-8 mx-auto rounded-lg space-y-3 absolute w-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <h1 className="text-3xl text-center font-bold">Congratulation</h1>
          <h2 className="text-lg font-semibold uppercase text-center">
            Your Score <span className="text-[#45C6B1] ml-2">{score}%</span>
          </h2>
          <div className="flex items-center justify-center space-x-7 text-white">
            <Link
              to="/quiz"
              className="px-8 py-1 bg-blue-600 cursor-pointer rounded-md"
            >
              Retake
            </Link>
            <button className="px-8 py-1 bg-blue-600 cursor-pointer rounded-md">
              Done
            </button>
          </div>
        </div>
      </AnimatePage>
    </div>
  );
};

export default QuizResult;
