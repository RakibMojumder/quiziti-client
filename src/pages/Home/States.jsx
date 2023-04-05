import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { FaUserGraduate } from "react-icons/fa";
import { BsPeopleFill, BsFillCameraVideoFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";

const States = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="container md:container-md mx-auto py-20 md:py-40 dark:text-gray-100">
        <div className="bg-white dark:bg-[#0B1120]/50 grid grid-cols-1 mx-auto sm:grid-cols-2 xl:grid-cols-4 border border-slate-300 dark:border-slate-700 rounded-md">
          <div className="flex px-5 py-10 md:py-20 space-x-4 md:space-x-6 dark:text-gray-100 border-r border-slate-300 dark:border-x-slate-700">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4">
              <BsPeopleFill className="text-5xl dark:text-[#45C6B1]" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <div className="text-4xl font-semibold leading-none">
                {counterOn && <CountUp start={0} end={9} duration={2} />}
              </div>
              <p className="capitalize">Instructor</p>
            </div>
          </div>
          <div className="flex px-5 py-10 md:py-20 space-x-4 md:space-x-6 dark:text-gray-100 border-r border-slate-300 dark:border-x-slate-700">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4">
              <FaUserGraduate className="text-5xl dark:text-[#45C6B1]" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <h2 className="text-4xl font-semibold leading-none">
                {counterOn && <CountUp start={0} end={7500} duration={2} />}+
              </h2>
              <p className="capitalize">Total Students</p>
            </div>
          </div>
          <div className="flex px-5 py-10 md:py-20 space-x-4 md:space-x-6 dark:text-gray-100 border-r border-slate-300 dark:border-x-slate-700">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4">
              <HiUsers className="text-5xl dark:text-[#45C6B1]" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <h2 className="text-4xl font-semibold leading-none">
                {counterOn && <CountUp start={0} end={17000} duration={2} />}+
              </h2>
              <p className="capitalize">Quiz Participant</p>
            </div>
          </div>
          <div className="flex px-5 py-10 md:py-20 space-x-4 md:space-x-6 dark:text-gray-100">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4">
              <BsFillCameraVideoFill className="text-5xl dark:text-[#45C6B1]" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <h2 className="text-4xl font-semibold leading-none">
                {counterOn && <CountUp start={0} end={990} duration={2} />}+
              </h2>
              <p className="capitalize">Learning Content</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>

    // <div className="grid grid-cols-2 gap-7 items-center container md:container-md mx-auto py-20 md:pt-12 md:pb-20 dark:text-gray-100">
    //   <div>
    //     <Lottie animationData={lottie} loop={true} />
    //   </div>
    //   <ScrollTrigger
    //     onEnter={() => setCounterOn(true)}
    //     onExit={() => setCounterOn(false)}
    //   >
    //     <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 mt-20">
    //       <div className=" flex px-5 py-10 md:py-20 space-x-4 md:space-x-6 dark:text-gray-100 dark:bg-[#0B1120]">
    //         <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4">
    //           <BsPeopleFill className="text-5xl dark:text-[#45C6B1]" />
    //         </div>
    //         <div className="flex flex-col justify-center align-middle">
    //           <div className="text-4xl font-semibold leading-none">
    //             {counterOn && <CountUp start={0} end={9} duration={2} />}
    //           </div>
    //           <p className="capitalize">Instructor</p>
    //         </div>
    //       </div>
    //       <div className="flex px-5 py-10 md:py-20 space-x-4 md:space-x-6 dark:text-gray-100 dark:bg-[#0B1120]">
    //         <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4">
    //           <FaUserGraduate className="text-5xl dark:text-[#45C6B1]" />
    //         </div>
    //         <div className="flex flex-col justify-center align-middle">
    //           <h2 className="text-4xl font-semibold leading-none">
    //             {counterOn && <CountUp start={0} end={7500} duration={2} />}+
    //           </h2>
    //           <p className="capitalize">Total Students</p>
    //         </div>
    //       </div>
    //       <div className="flex px-5 py-10 md:py-20 space-x-4 md:space-x-6 dark:text-gray-100 dark:bg-[#0B1120]">
    //         <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4">
    //           <HiUsers className="text-5xl dark:text-[#45C6B1]" />
    //         </div>
    //         <div className="flex flex-col justify-center align-middle">
    //           <h2 className="text-4xl font-semibold leading-none">
    //             {counterOn && <CountUp start={0} end={17000} duration={2} />}+
    //           </h2>
    //           <p className="capitalize">Quiz Participant</p>
    //         </div>
    //       </div>
    //       <div className="flex px-5 py-10 md:py-20 space-x-4 md:space-x-6 dark:text-gray-100 dark:bg-[#0B1120]">
    //         <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4">
    //           <BsFillCameraVideoFill className="text-5xl dark:text-[#45C6B1]" />
    //         </div>
    //         <div className="flex flex-col justify-center align-middle">
    //           <h2 className="text-4xl font-semibold leading-none">
    //             {counterOn && <CountUp start={0} end={990} duration={2} />}+
    //           </h2>
    //           <p className="capitalize">Learning Content</p>
    //         </div>
    //       </div>
    //     </div>
    //   </ScrollTrigger>
    // </div>
  );
};

export default States;
