import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "../../components/Quiz/Question";
import { QUIZ_QUESTIONS_CONTEXT } from "../../layout/Main";
import { FiChevronRight } from "react-icons/fi";

const QuizStart = () => {
  const { questions } = useContext(QUIZ_QUESTIONS_CONTEXT);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [wrongAnswerCount, setWrongAnswerCount] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (questions.length === 0) {
      navigate("/quiz");
    }
  }, [questions, navigate]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (minutes === 5) {
        clearInterval(timer);
        return navigate("/quizResult", {
          state: { correctAnswerCount, wrongAnswerCount },
          replace: true,
        });
      }

      setSeconds((prev) => prev + 1);
      if (seconds >= 59) {
        setMinutes((prev) => prev + 1);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, minutes]);

  const navigateToResultPage = () => {
    if (selectedAnswer === correctAnswer) {
      setCorrectAnswerCount((prev) => prev + 1);
    } else {
      setWrongAnswerCount((prev) => prev + 1);
    }

    if (currentQuestionIndex >= questions?.length - 1) {
      navigate("/quizResult", {
        state: { correctAnswerCount, wrongAnswerCount },
        replace: true,
      });
    } else {
      setSelectedIndex(null);
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };
  return (
    <div className="container md:container-md min-height lg:w-1/2 mx-auto dark:text-white pt-24">
      <div className="relative">
        <div className="absolute inset-1 bg-gradient-to-r from-pink-500 to-purple-500 blur"></div>
        <div className="relative bg-white dark:bg-gray-900 p-6 rounded-xl">
          <p className="text-3xl text-right text-[#32b7a1]">
            {" "}
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
          </p>
          {questions && (
            <Question
              questions={questions}
              setSelectedAnswer={setSelectedAnswer}
              setCorrectAnswer={setCorrectAnswer}
              currentQuestionIndex={currentQuestionIndex}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          )}
          <p className="text-center text-md mt-7">
            {currentQuestionIndex + 1} / {questions?.length}
          </p>
        </div>
      </div>
      <div className="text-right">
        <button
          disabled={selectedIndex === null}
          onClick={navigateToResultPage}
          className={`px-6 py-1 mt-6 text-white bg-[#20bca1] rounded-sm ${
            selectedIndex === null && "hidden"
          }`}
        >
          <span className="">Next</span>{" "}
          <FiChevronRight className="inline-block text-lg" />
        </button>
      </div>
    </div>
  );
};

export default QuizStart;
