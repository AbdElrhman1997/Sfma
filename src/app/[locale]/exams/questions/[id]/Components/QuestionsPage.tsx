"use client";
import React, { useEffect, useState } from "react";
import QuestionsNumber from "./QuestionsNumber";
import QuestionArea from "./QuestionArea";
import { useLocale } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";

const QuestionsPage = ({ id }) => {
  const [examQuestions, setExamQuestions]: any = useState({});
  const [totalQuestions, setTotalQuestions] = useState([]);
  const [loadingCourse, setLoadingCourse] = useState(false);
  const [submitAnsowerLoading, setSubmitAnsowerLoading] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
  const [skippedQuestions, setSkippedQuestions] = useState(new Set()); // Track skipped questions
  const [answers, setAnswers] = useState({});
  const lang = useLocale();
  const router = useRouter();
  const searchParams: any = useSearchParams();

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
        if (res.status === 403) {
          router.push(`/${lang}/exams`);
          return;
        }
        const data = await res.json();
        setExamQuestions(data?.data || {});

        setTotalQuestions(
          data?.data?.questions.map((question: any, i: number) => ({
            id: question?.id,
            question_num: i + 1,
            text: `${i + 1}`,
          }))
        );

        setLoadingCourse(false);
      } catch (error) {
        console.error("Error fetching exam questions:", error);
        setLoadingCourse(false);
      }
    };

    fetchSinglePath();
  }, [lang, id]);

  const handleAnswerSubmit = async (answerData) => {
    const formData = new FormData();
    Object.entries(answerData).forEach(([key, value]: any) => {
      formData.append(key, value);
    });
    formData.append("exam_attempt_id", searchParams.get("exam_attempt_id"));
    try {
      const token = localStorage.getItem("auth_token");
      setSubmitAnsowerLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}exams/submit-answer`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
            "Accept-Language": lang || "ar",
          },
        }
      );
      const result = await res.json();
      if (res.ok) {
        setSubmitAnsowerLoading(false);
        setAnsweredQuestions((prev) =>
          new Set(prev).add(answerData.exam_question_id)
        );
        setAnswers((prev) => ({
          ...prev,
          [answerData.exam_question_id]: answerData.exam_question_option_id,
        }));
        setSkippedQuestions((prev) => {
          const newSkipped = new Set(prev);
          newSkipped.delete(answerData.exam_question_id); // Remove from skipped if answered
          return newSkipped;
        });
      }
      return result;
    } catch (error) {
      console.error("Error submitting answer:", error);
      setSubmitAnsowerLoading(false);
      return { error: true };
    }
  };

  const handleQuestionChange = (index) => {
    setCurrentQuestionIndex(index);
  };

  return (
    <div className="grid lg:grid-cols-12 container mx-auto lg:mt-12 mt-10 gap-x-12 mb-6">
      <div className="lg:col-span-5">
        <QuestionsNumber
          totalQuestions={totalQuestions || 0}
          answeredQuestions={answeredQuestions}
          skippedQuestions={skippedQuestions} // Pass skipped questions
          currentQuestionIndex={currentQuestionIndex}
          onQuestionChange={handleQuestionChange}
        />
      </div>
      <div className="lg:col-span-7">
        <QuestionArea
          questions={examQuestions.questions || []}
          currentQuestionIndex={currentQuestionIndex}
          onQuestionChange={handleQuestionChange}
          onAnswerSubmit={handleAnswerSubmit}
          submitAnsowerLoading={submitAnsowerLoading}
          answeredQuestions={answeredQuestions}
          answers={answers}
          setAnswers={setAnswers}
          setSkippedQuestions={setSkippedQuestions} // Pass setSkippedQuestions
        />
      </div>
    </div>
  );
};

export default QuestionsPage;
