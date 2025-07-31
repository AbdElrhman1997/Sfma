"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const QuestionArea = ({
  questions,
  currentQuestionIndex,
  onQuestionChange,
  onAnswerSubmit,
  answeredQuestions,
  answers,
  setAnswers,
  setSkippedQuestions,
  submitAnsowerLoading,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const t = useTranslations("question");
  useEffect(() => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion) {
      const lastAnswer = answers[currentQuestion.id];
      setSelectedOption(lastAnswer || null);
    }
  }, [currentQuestionIndex, questions, answers]);

  const currentQuestion = questions[currentQuestionIndex] || {};
  console.log(questions?.length, currentQuestion, currentQuestionIndex);
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  const handleOptionChange = (optionId) => {
    setSelectedOption(optionId);
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  const handleSubmit = async () => {
    if (selectedOption !== null) {
      const answerData = {
        answer_text:
          currentQuestion.options.find((opt) => opt.id === selectedOption)
            ?.option || "",
        exam_question_option_id: selectedOption,
        exam_question_id: currentQuestion.id,
      };
      await onAnswerSubmit(answerData);
      if (!isLastQuestion) {
        onQuestionChange(currentQuestionIndex + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (!isFirstQuestion) {
      onQuestionChange(currentQuestionIndex - 1);
    }
  };

  const handleSkip = () => {
    if (!isLastQuestion) {
      setSkippedQuestions((prev) => new Set(prev).add(currentQuestion.id));
      onQuestionChange(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="flex flex-col items-start bg-[#F6F6F6] lg:p-4 px-8 py-4 rounded-lg lg:w-full w-fit mx-auto">
      {/* <div className="flex justify-between w-full mb-4">
        <span className="lg:text-lg text-base font-bold">
          السؤال {currentQuestionIndex + 1} من {questions.length}
        </span>
        <button
          className="bg-yellow-300 font-semibold px-5 py-1 rounded-lg"
          onClick={handleSkip}
        >
          تخطي السؤال الآن
        </button>
      </div> */}
      <div className="lg:w-full rounded-lg">
        <p className="font-semibold mb-1 lg:text-lg text-[13px]">
          {currentQuestion.question}
        </p>
        <p className="text-[#555555] mb-1 lg:text-lg text-[13px]">
          {t("choose_one")}
        </p>
        <div className="space-y-2">
          {currentQuestion.options?.map((option) => (
            <div
              key={option.id}
              className="border-[1px] mt-4 border-[#B1B1B1] px-4 py-3 w-full rounded-lg bg-[#EDEDED]"
            >
              <label className="flex items-center gap-x-2 lg:gap-x-5">
                <input
                  type="radio"
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={() => handleOptionChange(option.id)}
                  className="accent-black w-4 lg:w-[22px] h-4 lg:h-[22px] cursor-pointer"
                />
                <div>
                  <p className="text-[13px] lg:text-[17px] font-semibold">
                    {option.option}
                  </p>
                </div>
              </label>
            </div>
          ))}
        </div>
        <div className="flex space-x-4 lg:mt-5 mt-2">
          {currentQuestionIndex != 0 ? (
            <button
              onClick={handlePrevious}
              className="mt-4 lg:w-[140px] w-[120px] lg:text-base text-[13px] bg-transparent border-2 border-[#898989] text-[#898989] cursor-pointer lg:px-4 px-3 py-2 rounded-lg hover:bg-[#898989] hover:text-white"
              disabled={isFirstQuestion}
            >
              {t("prev")}
            </button>
          ) : null}
          {questions?.length ==
          currentQuestionIndex + 1 ? null : submitAnsowerLoading ? (
            <div className="mt-4 lg:w-[140px] w-[120px] lg:text-base text-[13px] cursor-pointer bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] text-white lg:px-4 px-3 py-2 rounded-lg hover:opacity-85 flex items-center justify-center">
              <div className="w-5 h-5 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
            </div>
          ) : (
            <button
              onClick={handleSubmit}
              className="mt-4 lg:w-[140px] w-[120px] lg:text-base text-[13px] cursor-pointer bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] text-white lg:px-4 px-3 py-2 rounded-lg hover:opacity-85"
              disabled={selectedOption === null}
            >
              {t("next")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionArea;
