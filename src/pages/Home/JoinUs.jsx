import React from "react";
import Lottie from "lottie-react";
import lottieAnimate from "../../assets/lottie-animation/5- Team Consensus (2).json";
import { useNavigate } from "react-router-dom";

const JoinUs = () => {
  const navigate = useNavigate();

  return (
    <div className="container md:container-md mx-auto py-20 md:pb-40 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="" data-aos="zoom-in-up">
        <Lottie animationData={lottieAnimate} />
      </div>
      <div className="dark:text-slate-300 md:mt-20 flex items-center">
        <div>
          <h1 className="text-3xl font-bold">
            <span className="text-2xl text-[#45C6B1]">Join With Us</span> <br />{" "}
            Our Programming Course and Quiz!
          </h1>
          <div className="mt-6 space-y-6">
            <p>
              Are you ready to learn the basics of coding and start building
              your own projects? Join our programming course and quiz section
              today!
            </p>
            <p>
              Our experienced instructors will guide you through programming
              languages such as Python, Java, or JavaScript and provide
              practical examples and exercises to reinforce your knowledge.
              You'll learn about concepts such as variables, functions, loops,
              and more, and gain the skills you need to start coding on your
              own.
            </p>
            <button
              onClick={() => navigate("/auth")}
              className="px-16 py-1 bg-[#45C6B1] text-white font-semibold uppercase rounded-full hover:bg-[#45C6B1]"
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
