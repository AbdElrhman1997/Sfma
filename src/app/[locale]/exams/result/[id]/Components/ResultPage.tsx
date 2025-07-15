"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CircularProgress from "./CircularProgress";
import { useLocale, useTranslations } from "next-intl";
import { XCircle } from "lucide-react";

const ResultPage = ({ id }) => {
  const [exam, setCourse]: any = useState({});
  const lang = useLocale();
  const t = useTranslations("result_page");

  useEffect(() => {
    const fetchSinglePath = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}exams/get-exam-results/${id}`;
      const token = localStorage.getItem("auth_token");

      try {
        const res = await fetch(apiUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Accept-Language": lang || "ar",
          },
          cache: "no-store",
        });
        const data = await res.json();
        setCourse(data?.data || {});
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchSinglePath();
  }, [lang, id]);

  const rawDate = exam[0]?.started_at;
  let formattedDate = "";
  if (rawDate) {
    const date = new Date(rawDate);
    if (!isNaN(date.getTime())) {
      formattedDate = new Intl.DateTimeFormat("ar-EG-u-nu-latn", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(date);
    }
  }

  const exam_details = [
    {
      id: 1,
      title: exam[0]?.exam?.title,
      icon_src: "/images/common/Vector (3).png",
    },
    {
      id: 2,
      title: t("questions_count"),
      content: `20 ${t("multiple_choice_question")}`,
      icon_src: "/images/common/icon_1.png",
    },
    {
      id: 3,
      title: t("exam_category"),
      content: exam[0]?.exam?.category || "",
      icon_src: "/images/common/providers_icon.png",
    },
  ];

  const more_details = [
    {
      id: 1,
      title: t("passing_score"),
      content: `${exam[0]?.exam?.passing_score || 0} %`,
      icon_src: "/images/common/Vector (3).png",
    },
    {
      id: 2,
      title: t("wrong_answers"),
      content: `18`,
      icon_src: "/images/common/icon_1.png",
    },
    {
      id: 3,
      title: t("exam_date"),
      content: `${formattedDate}`,
      icon_src: "/images/logos/icon_4.png",
    },
  ];

  return (
    <section className="container mx-auto">
      <div
        className="w-full flex flex-col items-center lg:py-20 py-7 lg:mt-10 mt-5 rounded-xl"
        style={{
          background:
            exam[0]?.percentage > 50
              ? "linear-gradient(to right, var(--second_main_gradiant), var(--second_main))"
              : "linear-gradient(to right, #dc4d4d, #ef4444)",
        }}
      >
        {+exam[0]?.percentage > 50 ? (
          <>
            <div className="lg:w-28 w-14">
              <Image
                src={"/images/common/pass_icon.png"}
                alt="pass_icon"
                width={100}
                height={100}
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="lg:text-4xl text-xl text-white text-center font-bold lg:mt-5 mt-3">
              {t("congrats_passed")}
            </p>
          </>
        ) : (
          <div className="lg:py-0 py-5">
            <div className="flex justify-center -mt-4">
              <XCircle
                className="lg:w-24 w-12 lg:h-24 h-12 text-white"
                strokeWidth={1.5}
              />
            </div>
            <p className="lg:text-4xl text-xl text-white text-center font-bold lg:mt-5">
              {t("sorry_failed")}
            </p>
          </div>
        )}
      </div>
      <div className="grid lg:grid-cols-3 gap-x-10">
        <div className="lg:col-span-1 bg-[#F6F6F6] flex flex-col items-center lg:mt-10 mt-5 rounded-xl py-6">
          <CircularProgress
            percentage={+exam[0]?.percentage ? +exam[0]?.percentage : 0}
          />
        </div>
        <div className="bg-[#F6F6F6] px-6 lg:col-span-2 flex flex-col items-center lg:pt-5 pt-3 lg:pb-8 pb-5 lg:mt-10 mt-5 rounded-xl">
          <h1 className="text-lg lg:text-[27px] font-bold mb-5 text-start w-full">
            {t("exam_details")}
          </h1>
          <div className="w-full space-y-5">
            {exam_details?.map((item, index) => (
              <div
                key={index}
                className="bg-[#DFDFDF] gap-3 px-3 rounded-lg flex items-center lg:py-2 py-1"
              >
                <div
                  className={`flex justify-center items-center ${
                    item?.id != 1
                      ? "bg-[var(--second_main)] rounded-full w-8 h-8 p-1"
                      : ""
                  }`}
                >
                  <img
                    src={`${item?.icon_src}`}
                    className={`object-cover h-auto ${
                      item?.id == 1 ? "w-8 p-1" : item?.id != 2 ? "w-4" : "w-2"
                    } transition duration-300`}
                    alt="path image"
                  />
                </div>
                <div className="text-[13px] md:text-base lg:text-lg">
                  <span className="font-bold">{item?.title}</span>
                  <span>: {item?.content}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#F6F6F6] lg:mt-10 mt-5 rounded-xl p-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {more_details?.map((item, index) => (
            <div
              key={index}
              className="bg-[#DFDFDF] gap-3 px-3 rounded-lg flex items-center lg:py-2 py-1"
            >
              <div
                className={`flex justify-center items-center ${
                  item?.id != 1
                    ? "bg-[var(--second_main)] rounded-full w-8 h-8 p-1"
                    : ""
                }`}
              >
                <img
                  src={`${item?.icon_src}`}
                  className={`object-cover h-auto ${
                    item?.id == 1 ? "w-8 p-1" : item?.id != 2 ? "w-4" : "w-2"
                  } transition duration-300`}
                  alt="path image"
                />
              </div>
              <div className="text-[13px] md:text-base lg:text-lg">
                <span className="font-bold">{item?.title}</span>
                <span>: {item?.content}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultPage;
