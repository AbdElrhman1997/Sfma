"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMessage } from "react-icons/ai";
import { useLocale, useTranslations } from "next-intl";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [conversation, setConversation] = useState([]);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const t = useTranslations("Chatbot");
  const lang = useLocale();

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setConversation([]); // Reset conversation when closing
      setSelectedQuestionId(null);
    }
  };

  // Animation variants for the button and chat panel
  const buttonVariants = {
    closed: { scale: 1, y: 0 },
    open: { scale: 1.1, y: -50, transition: { duration: 0.3 } },
  };

  const panelVariants: any = {
    hidden: { opacity: 0, y: "100%", scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: "100%",
      scale: 0.8,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  // Pre-defined questions and answers
  const questions = [
    {
      id: 1,
      text: t("question1"),
      answer: t("answer1"),
    },
    {
      id: 2,
      text: t("question2"),
      answer: t("answer2"),
    },
    {
      id: 3,
      text: t("question3"),
      answer: t("answer3"),
    },
    {
      id: 4,
      text: t("question4"),
      answer: t("answer4"),
    },
  ];

  const handleQuestionClick = (question) => {
    if (selectedQuestionId === question.id) return; // Prevent duplicate clicks
    setSelectedQuestionId(question.id);
    setConversation((prev) => [
      ...prev,
      { text: question.text, sender: "user" },
    ]);

    // Simulate sending and receiving answer after a delay
    setTimeout(() => {
      setConversation((prev) => [
        ...prev,
        { text: question.answer, sender: "bot" },
      ]);
    }, 1000); // 1-second delay to mimic response time
  };

  return (
    <div
      className="fixed bottom-4 left-4 z-50"
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      {/* Chat Button */}
      <motion.button
        onClick={toggleChatbot}
        className="bg-[#1DAEE5] text-white cursor-pointer rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-[#1699c5] transition-colors duration-200"
        variants={buttonVariants}
        animate={isOpen ? "open" : "closed"}
      >
        <AiOutlineMessage size={24} />
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 left-4 w-80 bg-white rounded-lg shadow-xl p-4 border border-gray-200"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {t("title")}
            </h3>
            <div className="h-64 overflow-y-auto bg-gray-100 px-2 py-3 rounded mb-4 space-y-3">
              {conversation.map((msg, index) => (
                <div
                  key={index}
                  className={`text-sm ${
                    msg.sender === "user"
                      ? "text-blue-600 ml-auto max-w-[70%]"
                      : "text-gray-800"
                  } p-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-blue-100"
                      : "bg-gray-200 max-w-[90%] ms-auto"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {selectedQuestionId &&
                !conversation.find(
                  (msg) =>
                    msg.text ===
                    questions.find((q) => q.id === selectedQuestionId).answer
                ) && (
                  <div className="text-sm text-gray-500 italic mt-2">
                    {t("waiting")}
                  </div>
                )}
            </div>
            <div className="space-y-2">
              {questions.map((q) => (
                <button
                  key={q.id}
                  onClick={() => handleQuestionClick(q)}
                  className="text-sm text-[var(--main)] hover:underline cursor-pointer w-full text-start"
                  disabled={
                    selectedQuestionId === q.id && conversation.length % 2 === 0
                  } // Disable while waiting for answer
                >
                  {q.text}
                </button>
              ))}
            </div>
            <button
              onClick={toggleChatbot}
              className="mt-4 cursor-pointer w-full bg-[#1DAEE5] text-white py-2 rounded hover:bg-[#1699c5] transition-colors duration-200"
            >
              {t("close")}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
