"use client";

import Banner_Section from "./Banner_Section";
import CalenderSection from "./CalenderSection";
import Next_Courses from "./Next_Courses";
import PartenersSection from "./PartenersSection";
import Sfma_Paths from "./Sfma_Paths";

const TrainingPage = ({ translation, lang }) => {
  return (
    <div className="w-full">
      <Banner_Section />
      <Sfma_Paths />
      <Next_Courses />
      {/* <CalenderSection /> */}
      <PartenersSection />
    </div>
  );
};

export default TrainingPage;
