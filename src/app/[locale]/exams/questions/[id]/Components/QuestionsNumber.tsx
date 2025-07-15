"use client";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

const QuestionsNumber = ({
  totalQuestions,
  answeredQuestions,
  currentQuestionIndex,
  onQuestionChange,
  skippedQuestions,
}) => {
  const lang = useLocale();
  const router = useRouter();
  const t = useTranslations("exam_questions");

  const handleFinishExam = async () => {
    try {
      const token = localStorage.getItem("auth_token");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}exams/submit-exam/41`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Accept-Language": lang || "ar",
          },
        }
      );
      const result = await res.json();
      if (res.ok) {
        router.push(`/${lang}/profile`);
      }
      return result;
    } catch (error) {
      console.error("Error submitting answer:", error);
      return { error: true };
    }
  };

  return (
    <div className="flex flex-col items-center justify-start bg-gray-100 lg:p-4 px-8 py-4 h-fit lg:pb-10 lg:mb-0 mb-5 lg:mx-0 mx-auto lg:w-full w-fit">
      <h1 className="lg:text-2xl text-lg font-bold mb-2 text-gray-800">
        {t("title")}
      </h1>
      <p className="lg:text-sm text-xs text-gray-500 lg:mb-6 mb-2">
        {totalQuestions?.length} {t("question_label")} | {t("must_answer_all")}
      </p>
      <div className="grid grid-cols-5 lg:gap-5 gap-3 lg:mb-6 mb-2">
        {totalQuestions?.map((q) => (
          <div
            key={q.id}
            className={`relative flex items-center justify-center lg:w-16 w-10 lg:h-16 h-10 rounded-full border font-bold lg:text-xl text-base cursor-pointer ${
              currentQuestionIndex + 1 === q.question_num
                ? "bg-[#1DAEE5] text-white border-[#1DAEE5]"
                : answeredQuestions.has(q.id)
                ? "bg-[#61B8A05E] text-[var(--second_main)] border-[var(--second_main)]"
                : "bg-[#DFDFDF] text-[#555555] border-[#555555]"
            }`}
            onClick={() => onQuestionChange(q.question_num - 1)}
          >
            {q.text}
            {answeredQuestions.has(q.id) &&
              currentQuestionIndex + 1 !== q.question_num && (
                <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-[var(--second_main)] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  ✓
                </span>
              )}
          </div>
        ))}
      </div>
      <div className="w-full max-w-md mb-4">
        <div className="flex justify-between lg:text-sm text-xs text-gray-600 mb-1 mt-2">
          <span>
            {answeredQuestions.size} {t("out_of")} {totalQuestions?.length}
          </span>
          <span>{t("remaining")}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-[#61B8A0] h-2.5 rounded-full"
            style={{
              width: `${
                (answeredQuestions.size / totalQuestions?.length) * 100
              }%`,
            }}
          ></div>
        </div>
      </div>
      <div
        onClick={handleFinishExam}
        className="cursor-pointer bg-[var(--second_main)] text-white px-6 py-2 rounded-lg hover:bg-teal-600 lg:text-base text-sm"
      >
        {t("submit_exam")}
      </div>
    </div>
  );
};

export default QuestionsNumber;
