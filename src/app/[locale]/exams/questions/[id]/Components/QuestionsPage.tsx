"use client";
import React, { useEffect, useState } from "react";
import QuestionsNumber from "./QuestionsNumber";
import QuestionArea from "./QuestionArea";
import { useLocale } from "next-intl";

const QuestionsPage = ({ id }) => {
  const [examQuestions, setExamQuestions]: any = useState({});
  const [loadingCourse, setLoadingCourse] = useState(false);
  const lang = useLocale();

  useEffect(() => {
    const fetchSinglePath = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}exams/get-exam-questions/${id}`;
      try {
        const token = localStorage.getItem("auth_token");
        setLoadingCourse(true);
        const res = await fetch(apiUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Accept-Language": lang || "ar",
          },
          cache: "no-store",
        });
        const data = await res.json();
        setExamQuestions(data?.data || {});
        setLoadingCourse(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoadingCourse(false);
      }
    };

    fetchSinglePath();
  }, [lang, id]);

  return (
    <div className="grid grid-cols-12 container mx-auto lg:mt-12 mt-10 gap-x-12 mb-6">
      <div className="lg:col-span-5 col-span-12">
        <QuestionsNumber />
      </div>
      <div className="lg:col-span-7 col-span-12">
        <QuestionArea />
      </div>
    </div>
  );
};

export default QuestionsPage;
