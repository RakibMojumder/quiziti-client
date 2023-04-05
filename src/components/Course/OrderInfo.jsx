import React from "react";

const OrderInfo = ({ course, totalPrice, setCurrentSteps }) => {
  return (
    <div className="p-5 border border-gray-300 dark:border-slate-700 rounded-md mb-10">
      <div className="flex justify-between">
        <p>Course Price</p>
        <span className="font-medium dark:text-white">{course.price}</span>
      </div>
      <div className="flex justify-between pb-6 border-b dark:border-slate-800">
        <p>VAT</p>
        <span className="font-medium dark:text-white">15%</span>
      </div>
      <div className="flex justify-between mt-3 mb-7">
        <p>Total Price (Including VAT)</p>
        <span className="font-medium dark:text-white">$ {totalPrice}</span>
      </div>
      <button
        onClick={() => setCurrentSteps((prev) => prev + 1)}
        className="w-full py-2 bg-[#27c2a8] text-white font-semibold uppercase rounded-md"
      >
        Enroll Now
      </button>
    </div>
  );
};

export default OrderInfo;
