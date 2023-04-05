import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Main from "./layout/Main";
import Home from "./pages/Home/Home";
import AuthLayout from "./layout/AuthLayout";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Course from "./pages/Course/Course";
import CourseDetails from "./pages/Course/CourseDetails";
import Quiz from "./pages/Quiz/Quiz";
import QuizStart from "./pages/Quiz/QuizStart";
import PrivateRoute from "./routes/PrivateRoute";
import QuizRules from "./pages/Quiz/QuizRules";
import QuizResult from "./pages/Quiz/QuizResult";
import Statistics from "./pages/Statistics";
import PaymentSteeps from "./pages/Course/PaymentSteeps";
import ScrollToTop from "./components/Helper/ScrollToTop";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import CourseContent from "./pages/Dashboard/CourseContent";
import Invoice from "./pages/Course/Invoice";


const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <div className="bg-[#F7F9FB] dark:bg-gray-900 font-maven">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Home />} />

            {/*  AUTH ROUTE */}
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="/auth" element={<Login />} />
              <Route path="/auth/register" element={<Register />} />
            </Route>
            {/*  AUTH ROUTE */}


            <Route path="/course" element={<Course />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quiz/:id" element={<QuizRules />} />


            {/*  PRIVATE ROUTE */}
            <Route path="/quizStart" element={<PrivateRoute><QuizStart /></PrivateRoute>} />
            <Route path="/quizResult" element={<PrivateRoute><QuizResult /></PrivateRoute>} />
            <Route path="/statistics" element={<PrivateRoute><Statistics /></PrivateRoute>} />
            <Route path="/invoice" element={<PrivateRoute><Invoice /></PrivateRoute>} />
            <Route path="/payment/steps/:id" element={<PrivateRoute><PaymentSteeps /></PrivateRoute>} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/dashboard/course/:courseName" element={<PrivateRoute><CourseContent /></PrivateRoute>} />
            {/*  PRIVATE ROUTE */}

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
