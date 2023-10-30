import React from "react";
import logoOne from "../../assets/img/logo.png";
import logoTwo from "../../assets/img/logo1.png";
import { useTheme } from "../../contexts/ThemeProvider";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className=" dark:text-slate-200 dark:bg-[#0B1120] border-t border-b border-slate-300 dark:border-slate-900 mt-32">
        <div className="container md:container-md mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 space-y-8 md:gap-3 py-20 md:py-28">
            <div className="col-span-2 lg:col-span-3 lg:pr-0">
              <img src={!theme ? logoTwo : logoOne} alt="" className="h-14" />
              <h1 className="font-semibold mt-6">
                Unlock your potential with engaging our courses and quizzes.
              </h1>
            </div>
            <div className="col-span-2 lg:col-span-5 flex flex-col justify-between items-center">
              <h3 className="font-semibold uppercase text-sm mb-6">
                Get in touch with us to share your feedback, suggestions, or
                questions about our courses and quizzes.
              </h3>
              <div className="w-full flex flex-col sm:flex-row sm:space-x-5">
                <input
                  type="email"
                  className="sm:w-2/3 py-2 pl-3 mb-3 sm:mb-0 border border-slate-300 dark:border-slate-700 bg-transparent focus:outline-none focus:border-[#33b09c] dark:focus:border-[#33b09c] placeholder:uppercase"
                  placeholder="Enter Your Email"
                />
                <button className="sm:w-1/3 py-2 sm:py-0 text-white bg-[#33b09c] uppercase">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 lg:col-span-2 lg:text-center">
              <h5 className="text-sm mb-5 uppercase font-semibold">
                Follow us
              </h5>
              <div className="flex items-center lg:justify-center text-2xl">
                <BsFacebook />
                <BsInstagram className="mx-4" />
                <BsTwitter />
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 lg:col-span-2 lg:text-center">
              <h5 className="text-sm mb-5 uppercase font-semibold">Call us</h5>
              <p className="text-xl font-medium">+9304938221</p>
            </div>
          </div>
        </div>
      </div>
      <p className="dark:bg-[#0B1120] text-center py-8 text-slate-400">
        Copyright © 2023 Quiziti. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
