import React from "react";
import { useNavigate } from "react-router-dom";
import ErrorImg from "../assets/img/error.png";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen p-8 pt-0 flex justify-center items-center">
      <div className="text-center">
        <img src={ErrorImg} alt="" className="h-96" />
        <h1 className="text-3xl text-slate-800 dark:text-slate-300 font-bold">
          Error!!
        </h1>
        <p className="text-xl text-slate-800 dark:text-slate-300 font-semibold">
          Page not found
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-8 py-1 mt-3 bg-[#45C6B1] text-white rounded-md uppercase"
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
