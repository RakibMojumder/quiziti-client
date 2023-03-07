import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Home from "../pages/Home/Home";
import AuthLayout from "../layout/AuthLayout";
import Main from "../layout/Main";
import Course from "../pages/Course";
import Quiz from "../pages/Quiz/Quiz";
import QuizRules from "../pages/Quiz/QuizRules";
import QuizStart from "../pages/Quiz/QuizStart";
import QuizResult from "../pages/Quiz/QuizResult";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
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
                element: <QuizResult />
            }
        ]
    }
]);

export default router;