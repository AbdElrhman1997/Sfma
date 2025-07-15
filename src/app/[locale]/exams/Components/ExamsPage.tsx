"use client";
import Banner_Section from "./Banner_Section";
import CommonQuestions from "./CommonQuestions";
import Exams from "./Exams";

const ExamsPage = () => {
  return (
    <div className="w-full">
      <Banner_Section />
      <Exams />
      {/* <CommonQuestions /> */}
    </div>
  );
};

export default ExamsPage;
