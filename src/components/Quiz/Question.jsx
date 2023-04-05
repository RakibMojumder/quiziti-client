import React from "react";

const Question = ({
  questions,
  setSelectedAnswer,
  setCorrectAnswer,
  currentQuestionIndex,
  selectedIndex,
  setSelectedIndex,
}) => {
  return (
    <div className="mt-3">
      <h2 className="text-xl mb-4 text-center">
        <span className="font-bold text-2xl mr-2">Q:</span>
        {questions[currentQuestionIndex]?.question.replace(
          /(<([^>]+)>)/gi,
          " "
        )}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7">
        {questions[currentQuestionIndex]?.options?.map((option, index) => (
          <button
            onClick={(e) => {
              setSelectedIndex(index);
              setSelectedAnswer(e.target.innerText);
              setCorrectAnswer(questions[currentQuestionIndex]?.correctAnswer);
            }}
            className={`transition-all duration-300 p-3 rounded-md text-left text-sm ${
              selectedIndex === index
                ? "text-white bg-[#20bca1]"
                : "bg-[#f5f7f9] dark:bg-gray-800"
            }`}
            key={index}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
