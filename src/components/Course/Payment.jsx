import { motion } from "framer-motion";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useTheme } from "../../contexts/ThemeProvider";
import { AUTH_CONTEXT } from "../../contexts/AuthProvider";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../Loaders/Spinner";

const Payment = ({ course, totalPrice, phone }) => {
  const { user, token } = useContext(AUTH_CONTEXT);
  const { theme } = useTheme();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [intentError, setIntentError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    const getClientSecret = async () => {
      const res = await axios.post(
        "https://quiziti.vercel.app/create-payment-intent",
        { totalPrice },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        setClientSecret(res.data.clientSecret);
      }
    };
    getClientSecret();
  }, [totalPrice, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (elements == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setError(error);
    } else {
      setError("");
    }

    setProcessing(true);
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.name,
            email: user.email,
          },
        },
      });

    if (intentError) {
      setIntentError(intentError);
      console.log(intentError);
      setProcessing(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      const payment = {
        price: course.price,
        totalPrice,
        tax: "15%",
        studentName: user.username,
        studentEmail: user.email,
        phone,
        courseId: course._id,
        courseTitle: course.courseTitle,
        transactionId: paymentIntent.id,
      };

      const res = await axios.post(
        "https://quiziti.vercel.app/payment",
        payment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data.success) {
        setProcessing(false);
        console.log(res.data);
        navigate("/invoice", { state: payment });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
      className="px-5 py-7 border border-gray-300 dark:border-slate-700 rounded-md"
    >
      <h1 className="font-bold text-2xl text-center mb-5">Payment</h1>
      <form onSubmit={handleSubmit}>
        <div className="py-4 px-2 bg-white dark:bg-gray-800/80 shadow-[0_0_6px_2px_#eeee] dark:shadow-none rounded-md">
          <CardElement
            options={{
              style: {
                base: {
                  color: theme ? "white" : "black",
                  fontSize: "15px",
                  "::placeholder": {
                    color: theme ? "white" : "black",
                  },
                },
              },
            }}
          />
        </div>
        <button
          className={`w-full mt-5 py-2 text-white rounded-sm font-bold bg-[#45C6B1] uppercase ${
            processing && "bg-transparent border border-slate-700"
          }`}
          type="submit"
          disabled={!stripe || processing}
        >
          {processing ? <Spinner /> : "Pay"}
        </button>
        {error && <p className="text-red-500 mt-4 text-sm">{error.message}</p>}
      </form>
    </motion.div>
  );
};

export default Payment;
