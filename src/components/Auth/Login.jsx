import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { BiErrorCircle } from "react-icons/bi";
import { loginSchema } from "../../YupSchema/YupSchema";
import { motion } from "framer-motion";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";
import { AUTH_CONTEXT } from "../../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../Loaders/Spinner";
import Cookies from "js-cookie";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { setUser, setToken } = useContext(AUTH_CONTEXT);
  const [showPass, setShowPass] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setLoading(true);
      const res = await axios.post(
        "https://quiziti.vercel.app/auth/login",
        values,
        {
          withCredentials: true,
          credentials: "include",
        }
      );

      if (res.data.success) {
        Cookies.set("user", JSON.stringify(res.data.userInfo), {
          expires: 2,
        });

        Cookies.set("token", res.data.token, { expires: 2 });
        setUser(res.data.userInfo);
        setToken(res.data.token);
        setLoading(false);
        navigate(from, { replace: true });
      } else {
        setLoading(false);
        setLoginError(res.data.message);
      }
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="dark:text-white p-4 md:p-8 md:pt-0"
    >
      <form onSubmit={handleSubmit} className="mt-10">
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
          <div className="mt-1.5 flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="accent-[#45C6B1] h-5 cursor-pointer"
              />
              <label
                className="text-[13px] ml-1 tracking-wider cursor-pointer"
                htmlFor="remember"
              >
                Remember me
              </label>
            </div>
            <p className="text-xs tracking-wider hover:underline cursor-pointer">
              Forget password?
            </p>
          </div>
          {loginError && (
            <p className="text-rose-500 dark:text-rose-500 mt-2">
              {loginError}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-1.5 bg-[#45C6B1] transition-all hover:bg-[#07b396] text-white rounded-sm font-semibold uppercase ${
            loading && "bg-transparent border border-slate-700"
          }`}
        >
          {loading ? <Spinner /> : <span>Login</span>}
        </button>
      </form>
    </motion.div>
  );
};

export default Login;
