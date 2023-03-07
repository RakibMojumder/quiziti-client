import React from "react";

const QuizTimeLine = () => {
  return (
    <div className="mt-8">
      <ul>
        <li className="">
          <div className="flex items-baseline gap-6 pb-6 relative before:absolute before:h-full before:w-[1px] before:left-[11px] before:top-0 before:bg-[#45C6B1]">
            <div className="w-6 h-6 border border-[#45C6B1] rotate-45 flex justify-center items-center bg-white dark:bg-black z-50">
              <span className="-rotate-45 text-sm">1</span>
            </div>
            <div className="flex-1">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Fugiat, itaque!
              </p>
            </div>
          </div>
        </li>
        <li className="">
          <div className="flex items-baseline gap-6 pb-6 relative before:absolute before:h-full before:w-[1px] before:left-[11px] before:top-0 before:bg-[#45C6B1]">
            <div className="w-6 h-6 border border-[#45C6B1] rotate-45 flex justify-center items-center bg-white dark:bg-black z-50">
              <span className="-rotate-45 text-sm">2</span>
            </div>
            <div className="flex-1">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Fugiat, itaque! Lorem ipsum dolor sit,
              </p>
            </div>
          </div>
        </li>
        <li className="">
          <div className="flex items-baseline gap-6 pb-6 relative before:absolute before:h-full before:w-[1px] before:left-[11px] before:top-0 before:bg-[#45C6B1]">
            <div className="w-6 h-6 border border-[#45C6B1] rotate-45 flex justify-center items-center bg-white dark:bg-black z-50">
              <span className="-rotate-45 text-sm">3</span>
            </div>
            <div className="flex-1">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Fugiat, itaque!
              </p>
            </div>
          </div>
        </li>
        <li className="">
          <div className="flex items-baseline gap-6 pb-6">
            <div className="w-6 h-6 border border-[#45C6B1] rotate-45 flex justify-center items-center bg-white dark:bg-black z-50">
              <span className="-rotate-45 text-sm">4</span>
            </div>
            <div className="flex-1">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Fugiat, itaque! Lorem ipsum dolor sit,
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default QuizTimeLine;
