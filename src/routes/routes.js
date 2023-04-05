import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Home from "../pages/Home/Home";
import AuthLayout from "../layout/AuthLayout";
import Main from "../layout/Main";
import Course from "../pages/Course/Course";
import Quiz from "../pages/Quiz/Quiz";
import QuizRules from "../pages/Quiz/QuizRules";
import QuizStart from "../pages/Quiz/QuizStart";
import QuizResult from "../pages/Quiz/QuizResult";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import Statistics from "../pages/Statistics";
import CourseDetails from "../pages/Course/CourseDetails";
import PaymentSteeps from "../pages/Course/PaymentSteeps";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/auth',
                element: <AuthLayout />,
                children: [
                    {
                        path: '/auth',
                        element: <Login />
                    },
                    {
                        path: '/auth/register',
                        element: <Register />
                    }
                ]
            },
            {
                path: '/course',
                element: <Course />
            },
            {
                path: '/course/:id',
                element: <CourseDetails />
            },
            {
                path: '/quiz',
                element: <Quiz />
            },
            {
                path: '/quiz/:id',
                element: <PrivateRoute><QuizRules /></PrivateRoute>
            },
            {
                path: '/quizStart',
                element: <QuizStart />
            },
            {
                path: '/quizResult',
                element: <PrivateRoute><QuizResult /></PrivateRoute>
            },
            {
                path: '/statistics',
                element: <PrivateRoute><Statistics /></PrivateRoute>
            },
            {
                path: '/payment/steps/:id',
                element: <PrivateRoute><PaymentSteeps /></PrivateRoute>
            }
        ]
    }
]);

export default router;


<BrowserRouter>
    <Routes>
        <Route path="/" element={<Main />}>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<AuthLayout />}>
                <Route path="/auth" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
            </Route>
            <Route path="/course" element={<Course />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quizStart" element={<QuizStart />} />
            <Route path="/quiz/:id" element={<PrivateRoute><QuizRules /></PrivateRoute>} />
            <Route path="/quizResult" element={<PrivateRoute><QuizResult /></PrivateRoute>} />
            <Route path="/statistics" element={<PrivateRoute><Statistics /></PrivateRoute>} />
            <Route path="/payment/steps/:id" element={<PrivateRoute><PaymentSteeps /></PrivateRoute>} />
        </Route>
    </Routes>
</BrowserRouter>