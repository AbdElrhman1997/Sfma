"use client";
import React, { useState } from "react";

const QuestionsNumber = () => {
  const questions = [
    { id: 1, text: "1", checked: false },
    { id: 2, text: "2", checked: false },
    { id: 3, text: "3", checked: false },
    { id: 4, text: "4", checked: false },
    { id: 5, text: "5", checked: false },
    { id: 6, text: "6", checked: false },
    { id: 7, text: "7", checked: false },
    { id: 8, text: "8", checked: false },
    { id: 9, text: "9", checked: false },
    { id: 10, text: "10", checked: false },
    { id: 11, text: "11", checked: false },
    { id: 12, text: "12", checked: false },
    { id: 13, text: "13", checked: false },
    { id: 14, text: "14", checked: false },
    { id: 15, text: "15", checked: false },
    { id: 16, text: "16", checked: false },
    { id: 17, text: "17", checked: false },
    { id: 18, text: "18", checked: false },
    { id: 19, text: "19", checked: false },
    { id: 20, text: "20", checked: false },
  ];

  const [selected, setSelected] = useState([]);

  const handleCheckboxChange = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col items-center justify-start bg-gray-100 p-4 h-fit lg:pb-10 lg:mb-0 mb-8 lg:mx-0 mx-auto">
      <h1 className="lg:text-2xl text-lg font-bold mb-2 text-gray-800">
        أسئلة الاختبار
      </h1>
      <p className="lg:text-sm text-xs text-gray-500 lg:mb-6 mb-2">
        20 سؤال | يجب الإجابة على جميع الأسئلة
      </p>
      <div className="grid grid-cols-5 gap-5 lg:mb-6 mb-2">
        {questions.map((q) => (
          <div
            key={q.id}
            className={`flex flex-wrap items-center justify-center lg:w-16 w-10 lg:h-16 h-10 rounded-full border font-bold  lg:text-xl text-base ${
              selected.includes(q.id)
                ? "bg-[#61B8A05E] text-white"
                : "bg-[#61B8A05E] text-gray-700 border-[var(--second_main)]"
            }`}
          >
            <input
              type="checkbox"
              id={`question-${q.id}`}
              checked={selected.includes(q.id)}
              onChange={() => handleCheckboxChange(q.id)}
              className="hidden"
            />
            <label
              htmlFor={`question-${q.id}`}
              className="cursor-pointer text-center"
            >
              {q.text}
            </label>
          </div>
        ))}
      </div>
      <div className="w-full max-w-md mb-4">
        <div className="flex justify-between lg:text-sm text-xs text-gray-600 mb-1 mt-2">
          <span>20 من 11</span>
          <span>الأسئلة المتبقية</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-[#61B8A05E] h-2.5 rounded-full"
            style={{ width: "55%" }}
          ></div>
        </div>
      </div>
      <button className="bg-[var(--second_main)] text-white px-6 py-2 rounded-lg hover:bg-teal-600 lg:text-base text-sm">
        تقديم وانهاء الاختبار
      </button>
    </div>
  );
};

export default QuestionsNumber;
