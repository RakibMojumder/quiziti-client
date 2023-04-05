import React from "react";
import Lottie from "lottie-react";
import bannerLottie from "../../assets/lottie-animation/programning.json";
import { useTheme } from "../../contexts/ThemeProvider";
import { BsChevronRight } from "react-icons/bs";
import AnimatePage from "../../components/Helper/AnimatePage";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const { showMenu } = useTheme();
  const navigate = useNavigate();
  return (
    <AnimatePage>
      <div className="bg-pattern bg-white dark:bg-black/20 dark:bg-dark-pattern lg:min-height border-b dark:border-slate-800">
        <div className="container md:container-md mx-auto relative">
          {/* blur shadow */}
          <div className="md:h-[600px] lg:min-h-screen md:w-[65%] relative">
            <div className="hidden dark:block h-60 w-20 bg-blue-500 rotate-45 blur-[120px] absolute bottom-[500px] lg:bottom-52 left-20"></div>
            <div className="hidden dark:block h-60 md:h-80 w-32 md:w-48 bg-indigo-500 md:bg-sky-700 rotate-[-35deg] filter opacity-50 dark:blur-[90px] absolute -top-20 right-20"></div>
            <div className="dark:hidden border h-[500px] w-4 md:w-5 bg-sky-500 rotate-45 absolute md:bottom-32 md:left-56 blur-[44px] md:blur-[50px]"></div>
            <div className="dark:hidden border h-[500px] w-4 md:w-5 bg-purple-400 rotate-45 absolute md:bottom-40 left-40 md:left-80 blur-[44px] md:blur-[45px]"></div>
          </div>
          <div className="pt-10 md:pt-0 md:absolute top-0 left-0  mb-10 md:my-20 flex flex-col-reverse md:flex-row gap-10 md:gap-20">
            <div className="md:w-3/5 pb-8 md:pb-0 dark:text-white flex flex-col justify-center">
              <h4 className="text-sm md:text-base text-[#45C6B1] font-bold uppercase">
                Test Your Coding Chops
              </h4>
              <h1 className="text-2xl md:text-4xl font-bold my-3">
                Join the Ultimate <br />
                Programming Quiz Destination
              </h1>
              <p className="text-sm md:w-[95%] text-justify text-slate-700 dark:text-slate-300">
                Challenge your coding skills and take your knowledge to the next
                level! Our programming quiz website is designed for coders of
                all levels, from beginners to experts. With a wide range of
                categories, including algorithms, data structures, web
                development, and more, you'll never run out of new and exciting
                quizzes to take. Join now and test your skills against the best
                of the best. Let the coding commence!
              </p>
              <button
                onClick={() => navigate("/quiz")}
                className="group w-3/5 lg:w-[30%] py-1 my-10 bg-[#45C6B1] text-white rounded-full flex items-center justify-center transition-all hover:bg-[#45C6B1]"
              >
                <span className="mr-2">Explore Quiz</span>{" "}
                <BsChevronRight className="transition-all duration-300 group-hover:translate-x-2.5" />
              </button>
            </div>
            <div className={`block md:w-2/5 ${showMenu && "-z-10 md:z-0"}`}>
              <Lottie
                animationData={bannerLottie}
                loop={true}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatePage>
  );
};

export default Banner;

// #45C6B1
