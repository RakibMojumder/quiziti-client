import axios from "axios";
import React, { useContext } from "react";
import { useQuery } from "react-query";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import AnimatePage from "../components/Helper/AnimatePage";
import Loader from "../components/Loaders/Loader";
import { AUTH_CONTEXT } from "../contexts/AuthProvider";

const Statistics = () => {
  const { token } = useContext(AUTH_CONTEXT);
  const { data, isLoading } = useQuery(["statistics"], async () => {
    const res = await axios.get("https://quiziti.vercel.app/statistics", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.data.success) {
      return res.data.statistics;
    }
  });

  if (isLoading) return <Loader loading={isLoading} />;

  return (
    <AnimatePage>
      <div className="container md:container-md mx-auto min-height w-full dark:text-slate-300 pt-20">
        <ResponsiveContainer width={"100%"} height={300}>
          <BarChart width={500} height={300} data={data}>
            <XAxis dataKey="topic" />
            <YAxis gridLineWidth={0} />
            <Legend />
            <Bar dataKey="score" fill="#45C6B1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </AnimatePage>
  );
};

export default Statistics;
