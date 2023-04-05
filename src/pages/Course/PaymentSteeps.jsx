import React, { useContext } from "react";
import { useState } from "react";
import { GoCheck } from "react-icons/go";
import AnimatePage from "../../components/Helper/AnimatePage";
import CustomerInfo from "../../components/Course/CustomerInfo";
import OrderInfo from "../../components/Course/OrderInfo";
import Payment from "../../components/Course/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "react-query";
import axios from "axios";
import Loader from "../../components/Loaders/Loader";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(process.env.REACT_APP_Stripe_pk);

const PaymentSteeps = () => {
  const steps = ["Order Info", "Customer Info", "Payment"];
  const [currentSteps, setCurrentSteps] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [phone, setPhone] = useState(0);

  const { id } = useParams();
  const { data: course, isLoading } = useQuery(["courses", id], async () => {
    try {
      const res = await axios.get(`https://quiziti.vercel.app/courses/${id}`);
      if (res.data.success) {
        setTotalPrice(
          parseFloat(res.data.course.price) +
            (parseFloat(res.data.course.price) / 100) * 15
        );
        return res.data.course;
      }
    } catch (error) {
      console.log(error.message);
    }
  });

  if (isLoading) return <Loader isLoading={isLoading} />;

  return (
    <AnimatePage>
      <div className="container min-h-screen md:container-md mx-auto pt-12 pb-32">
        <div className="md:w-[80%] mx-auto">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`w-full space-y-2 flex flex-col justify-center items-center relative [&:not(:first-child)]:before:absolute [&:not(:first-child)]:before:top-1/3 [&:not(:first-child)]:before:-translate-y-[200%] [&:not(:first-child)]:before:right-1/2 [&:not(:first-child)]:before:w-full [&:not(:first-child)]:before:h-[2px] ${
                  currentSteps >= index
                    ? "before:bg-[#45C6B1]"
                    : "before:bg-gray-300 dark:before:bg-gray-600"
                }`}
              >
                <div
                  className={`text-center z-10 h-8 w-8 rounded-full flex justify-center items-center text-lg font-semibold text-white ${
                    currentSteps === index
                      ? "bg-sky-500"
                      : currentSteps > index
                      ? "bg-[#45C6B1]"
                      : "bg-slate-700"
                  } `}
                >
                  {currentSteps > index ? (
                    <GoCheck className="text-xl" />
                  ) : (
                    index + 1
                  )}
                </div>
                <p
                  className={`text-sm sm:text-base font-medium ${
                    currentSteps === index
                      ? "text-sky-500"
                      : currentSteps > index
                      ? "text-[#45C6B1]"
                      : "dark:text-slate-300"
                  }`}
                >
                  {step}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 md:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 dark:text-slate-300">
              <div className="md:w-[90%] p-5 border border-gray-300 dark:border-slate-700 rounded-md">
                <img className="w-full rounded-md" src={course?.image} alt="" />
                <div className="">
                  <h1 className="dark:text-white text-xl font-medium mt-4">
                    {course?.courseTitle}
                  </h1>
                  {/* <p className="text-2xl font-semibold text-slate-600 dark:text-slate-300">
                    ${course.price}
                  </p> */}
                </div>
              </div>
              <div className="w-full h-3 mb-20">
                {currentSteps === 0 && (
                  <OrderInfo
                    course={course}
                    totalPrice={totalPrice}
                    setCurrentSteps={setCurrentSteps}
                  />
                )}
                {currentSteps === 1 && (
                  <CustomerInfo
                    setCurrentSteps={setCurrentSteps}
                    phone={phone}
                    setPhone={setPhone}
                  />
                )}
                {currentSteps === 2 && (
                  <Elements stripe={stripePromise}>
                    <Payment
                      course={course}
                      totalPrice={totalPrice}
                      phone={phone}
                    />
                  </Elements>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePage>
  );
};

export default PaymentSteeps;
