import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AUTH_CONTEXT } from "../../contexts/AuthProvider";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTheme } from "../../contexts/ThemeProvider";

const CustomerInfo = ({ setCurrentSteps, phone, setPhone }) => {
  const { user } = useContext(AUTH_CONTEXT);
  const { theme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentSteps((prev) => prev + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
      className="border dark:border-slate-700 rounded-md p-4 md:p-8"
    >
      <h1 className="font-bold text-2xl text-center mb-5">Customer Info</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          className="py-1.5 pl-3 w-full dark:bg-gray-800/80 border dark:border-gray-700 rounded-sm focus:outline-none"
          type="text"
          placeholder="Name"
          defaultValue={user?.username}
          readOnly
        />
        <input
          className="py-1.5 pl-3 w-full dark:bg-gray-800/80 border dark:border-gray-700 rounded-sm focus:outline-none"
          type="email"
          placeholder="Email"
          defaultValue={user?.email}
          readOnly
        />
        <PhoneInput
          country={"bd"}
          value={phone}
          onChange={(phone) => setPhone(phone)}
          containerStyle={{
            borderRadius: "0.125rem",
          }}
          inputStyle={{
            width: "100%",
            backgroundColor: theme && "rgba(31,41,55,0.8)",
            border: theme && "1px solid rgba(55,65,81,1)",
            fontSize: "15px",
          }}
          buttonStyle={{
            backgroundColor: theme && "rgba(31,41,55,0.8)",
            border: theme && "1px solid rgba(55,65,81,1)",
          }}
          dropdownStyle={{
            color: "black",
          }}
        />
        <button className="w-full py-1.5 rounded-sm bg-[#27c2a8] text-white uppercase font-bold">
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default CustomerInfo;
