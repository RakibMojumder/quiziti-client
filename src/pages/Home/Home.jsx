import React from "react";
import Banner from "./Banner";
import HomeCourseTopics from "./HomeCourseTopics";
import HomeQuizTopics from "./HomeQuizTopics";
import Instructor from "./Instructor";
import JoinUs from "./JoinUs";
import States from "./States";

const Home = () => {
  return (
    <>
      <Banner />
      <HomeQuizTopics />
      <HomeCourseTopics />
      <Instructor />
      <JoinUs />
      <States />
    </>
  );
};

export default Home;
