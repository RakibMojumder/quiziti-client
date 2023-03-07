import { useFormik } from "formik";
import React, { useState } from "react";
import { BiErrorCircle } from "react-icons/bi";
import { registerSchema } from "../../YupSchema/YupSchema";
import { motion } from "framer-motion";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Spinner from "../Loaders/Spinner";

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      delete values.confirmPassword;
      setLoading(true);
      const res = await axios.post(
        "http://localhost:5000/auth/register",
        values
      );
      if (res.data.success) {
        setLoading(false);
        navigate("/auth");
      } else {
        setLoading(false);
        setRegisterError(res.data.message);
      }
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="dark:text-white p-4 md:p-8 md:pt-0"
    >
      <motion.button
        whileHover={{
          boxShadow: "0px 0px 4px #45C6B1",
          transitionDuration: "100ms",
        }}
        className="w-full border border-slate-300 dark:border-slate-600 dark:text-white text-sm py-2 mt-7 rounded-sm flex items-center justify-center uppercase"
      >
        <FcGoogle className="mr-4 text-xl" /> sign in with google
      </motion.button>
      <div className="flex items-center justify-between my-5">
        <span className="w-[42%] h-[1px] bg-slate-400"></span>
        <span>or</span>
        <span className="w-[42%] h-[1px] bg-slate-400"></span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <input
            className={`w-full pl-3 py-1.5 rounded-sm dark:bg-gray-800/80 border border-slate-200 dark:border-gray-700 focus:outline-none focus:border-[#45C6B1] dark:focus:border-[#45C6B1] ${
              errors?.username &&
              "border-rose-500 focus:border-rose-500 dark:border-rose-500 dark:focus:border-rose-500"
            }`}
            type="text"
            name="username"
            placeholder="Name"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors?.username && (
            <div className="flex items-center text-rose-500 dark:text-rose-500 mt-1.5">
              <BiErrorCircle />
              <p className="text-xs tracking-wider ml-1">{errors.username}</p>
            </div>
          )}
        </div>
        <div className="mb-5">
          <input
            className={`w-full pl-3 py-1.5 rounded-sm dark:bg-gray-800/80 border border-slate-200 dark:border-gray-700 focus:outline-none focus:border-[#45C6B1] dark:focus:border-[#45C6B1] ${
              errors?.email &&
              "border-rose-500 focus:border-rose-500 dark:border-rose-500 dark:focus:border-rose-500"
            }`}
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors?.email && (
            <div className="flex items-center text-rose-500 dark:text-rose-500 mt-1.5">
              <BiErrorCircle />
              <p className="text-xs tracking-wider ml-1">{errors.email}</p>
            </div>
          )}
        </div>
        <div className="mb-5">
          <div className="relative">
            <input
              className={`w-full pl-3 py-1.5 rounded-sm dark:bg-gray-800/80 border border-slate-200 dark:border-gray-700 focus:outline-none focus:border-[#45C6B1] dark:focus:border-[#45C6B1] ${
                errors?.password &&
                "border-rose-500 focus:border-rose-500 dark:border-rose-500 dark:focus:border-rose-500"
              }`}
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              autoComplete="off"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {showPass ? (
              <FaRegEyeSlash
                onClick={() => setShowPass(!showPass)}
                className="text-slate-700 dark:text-slate-200 absolute right-1.5 top-1.5 h-7 w-8 p-1.5 rounded-md transition-all duration-500 hover:bg-gray-200 dark:hover:bg-gray-600"
              />
            ) : (
              <FaRegEye
                onClick={() => setShowPass(!showPass)}
                className="text-slate-700 dark:text-slate-200 absolute right-1.5 top-1.5 h-7 w-8 p-1.5 rounded-md transition-all duration-500 hover:bg-gray-200 dark:hover:bg-gray-600"
              />
            )}
          </div>
          {errors?.password && (
            <div className="flex items-center text-rose-500 dark:text-rose-500 mt-1.5">
              <BiErrorCircle />
              <p className="text-xs tracking-wider ml-1">{errors.password}</p>
            </div>
          )}
        </div>
        <div className="mb-5">
          <div className="relative">
            <input
              className={`w-full pl-3 py-1.5 rounded-sm dark:bg-gray-800/80 border border-slate-200 dark:border-gray-700 focus:outline-none focus:border-[#45C6B1] dark:focus:border-[#45C6B1] ${
                errors?.confirmPassword &&
                "border-rose-500 focus:border-rose-500 dark:border-rose-500 dark:focus:border-rose-500"
              }`}
              type={showConfirmPass ? "text" : "password"}
              name="confirmPassword"
              placeholder="Password"
              autoComplete="off"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {showConfirmPass ? (
              <FaRegEyeSlash
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="text-slate-700 dark:text-slate-200 absolute right-1.5 top-1.5 h-7 w-8 p-1.5 rounded-md transition-all duration-500 hover:bg-gray-200 dark:hover:bg-gray-600"
              />
            ) : (
              <FaRegEye
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="text-slate-700 dark:text-slate-200 absolute right-1.5 top-1.5 h-7 w-8 p-1.5 rounded-md transition-all duration-500 hover:bg-gray-200 dark:hover:bg-gray-600"
              />
            )}
          </div>
          {errors?.confirmPassword && (
            <div className="flex items-center text-rose-500 dark:text-rose-500 mt-1.5">
              <BiErrorCircle />
              <p className="text-xs tracking-wider ml-1">
                {errors.confirmPassword}
              </p>
            </div>
          )}
          {registerError && (
            <p className="text-rose-500 dark:text-rose-500 mt-2">
              {registerError}
            </p>
          )}
        </div>
        <button
          type="submit"
          className={`w-full py-1.5 bg-[#45C6B1] transition-all hover:bg-[#07b396] text-white rounded-sm font-semibold uppercase ${
            loading && "bg-transparent border border-slate-700"
          }`}
        >
          {loading ? <Spinner /> : <span>Register</span>}
        </button>
      </form>
    </motion.div>
  );
};

export default Register;
