import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import congratulations from "../../assets/lottie-animation/112854-congratulations.json";
import Lottie from "lottie-react";
import AnimatePage from "../../components/Helper/AnimatePage";
import axios from "axios";
import { QUIZ_QUESTIONS_CONTEXT } from "../../layout/Main";
import { AUTH_CONTEXT } from "../../contexts/AuthProvider";

const QuizResult = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { token } = useContext(AUTH_CONTEXT);
  const { topicId } = useContext(QUIZ_QUESTIONS_CONTEXT);
  const score = ((state.correctAnswerCount / 15) * 100).toFixed(1);

  useEffect(() => {
    if (!state) {
      navigate("/error");
    }
  }, [state, navigate]);

  const handleQuizDone = async () => {
    const res = await axios.post(
      `https://quiziti.vercel.app/statistics/${topicId}`,
      { score },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.data.success) {
      navigate("/statistics", { replace: true });
    }
  };

  return (
    <div className="min-height overflow-hidden relative">
      <Lottie
        animationData={congratulations}
        loop={false}
        className="h-[calc(100vh_-_49px)] w-full"
      />
      <AnimatePage>
        <div className="bg-white dark:bg-gray-800 text-slate-800 dark:text-white shadow-md p-8 mx-auto rounded-lg space-y-3 absolute w-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <h1 className="text-3xl text-center font-bold">Congratulation</h1>
          <h2 className="text-lg font-semibold uppercase text-center">
            Your Score <span className="text-[#45C6B1] ml-2">{score}%</span>
          </h2>
          <div className="flex items-center justify-center space-x-7 text-white">
            <button
              onClick={() => navigate(-1)}
              replace
              className="px-8 py-1 bg-blue-600 cursor-pointer rounded-md"
            >
              Retake
            </button>
            <button
              onClick={handleQuizDone}
              className="px-8 py-1 bg-blue-600 cursor-pointer rounded-md"
            >
              Done
            </button>
          </div>
        </div>
      </AnimatePage>
    </div>
  );
};

export default QuizResult;
