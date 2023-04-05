import axios from "axios";
import React, { useContext } from "react";
import { BsChevronRight } from "react-icons/bs";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import AnimatePage from "../../components/Helper/AnimatePage";
import Loader from "../../components/Loaders/Loader";
import QuizTimeLine from "../../components/Quiz/QuizTimeLine";
import { useTheme } from "../../contexts/ThemeProvider";
import { QUIZ_QUESTIONS_CONTEXT } from "../../layout/Main";

const QuizRules = () => {
  const { id } = useParams();
  const { showMenu } = useTheme();
  const { questions, setQuestions, setTopicId } = useContext(
    QUIZ_QUESTIONS_CONTEXT
  );
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery(["questions", id], async () => {
    const { data } = await axios.get(
      `https://quiziti.vercel.app/questions/${id}`
    );
    if (data.success) {
      setTopicId(data.questions.id);
      const result = [];
      for (let i = 0; i < 15; i++) {
        let item = Math.floor(Math.random() * data.questions.questions.length);
        let isExists = result.find(
          (question) => question._id === data.questions.questions[item]._id
        );
        if (isExists) {
          let item = Math.floor(
            Math.random() * data.questions.questions.length
          );
          result.push(data.questions.questions[item]);
          setQuestions(result);
        } else {
          result.push(data.questions.questions[item]);
          setQuestions(result);
        }
      }
      return data.questions;
    }
  });

  if (isLoading) {
    return <Loader loading={isLoading} />;
  }

  if (isError) {
    // Cookies.remove("user");
    // setUser(null);
    // navigate("/auth");
    // console.log("error");
  }

  if (!data) {
    return (
      <div className="min-h-screen container md:container-md mx-auto">
        <h1 className="text-3xl font-bold mt-20 text-center dark:text-slate-300">
          No questions for this topic try another one
        </h1>
      </div>
    );
  }

  return (
    <AnimatePage>
      <div className="container md:container-md mx-auto min-height dark:text-white grid grid-cols-12 justify-between items-center gap-5 pb-20">
        <div
          className={`col-span-12 md:col-span-7 md:border-r border-slate-600 md:pr-8 ${
            showMenu && "-z-10"
          }`}
        >
          <h1 className="text-xl md:text-3xl font-bold text-[#45C6B1] pt-5 pb-3 relative after:absolute after:h-[4px] after:w-[10%] after:bottom-0 after:left-0 after:bg-[#45C6B1] after:rounded-full">
            Quiz rules
          </h1>
          <QuizTimeLine />
        </div>

        <div className="col-span-12 md:col-span-5 pl-10 md:pl-20 space-y-2 text-center md:text-left">
          <img className="h-44 mx-auto md:mx-0" src={data?.image} alt="" />
          <h2>Topic: {data?.title}</h2>
          <p className="mx-auto">Total Question: {questions.length}</p>
          <p>Duration: 5 minutes</p>
          <button
            onClick={() => navigate("/quizStart")}
            className="group px-10 md:px-20 py-1 mx-auto md:mx-0 bg-[#45C6B1] text-white rounded-full flex items-center justify-center transition-all"
          >
            <span className="mr-2">Begin Quiz</span>{" "}
            <BsChevronRight className="transition-all duration-300 group-hover:translate-x-2.5" />
          </button>
        </div>
      </div>
    </AnimatePage>
  );
};

export default QuizRules;
