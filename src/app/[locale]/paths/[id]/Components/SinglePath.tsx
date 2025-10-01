"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const SinglePath = ({ translation, id }) => {
  const lang = useLocale();
  const dir = lang === "en" ? "ltr" : "rtl";
  const [path, setPath]: any = useState({});
  const [loadingPath, setLoadingPath] = useState(false);
  const t = useTranslations("Training");

  useEffect(() => {
    const fetchSinglePath = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}courses/get-courses-category-details/${id}`;
      setLoadingPath(true);
      try {
        const res = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Accept-Language": lang || "ar",
          },
          cache: "no-store",
        });
        const data = await res.json();
        setPath(data?.data || {});
        setLoadingPath(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoadingPath(false);
      }
    };

    fetchSinglePath();
  }, [lang, id]);

  const renderPathCard = (course) => {
    return (
      <div
        key={course?.id}
        className="group bg-white relative rounded-lg shadow-md text-center h-fit hover:scale-105 transition duration-300"
      >
        {/* Course Image and Title */}
        <div className="transition-shadow duration-300 overflow-hidden rounded-lg">
          <img
            src={`https://sffma.fmexcon.com/storage/${course?.image}`}
            alt="دورات في الأمن والسلامة"
            className="object-cover h-full max-h-[17rem] w-full transition duration-300 group-hover:scale-105 group-hover:opacity-85"
          />
          <p className="relative font-bold mt-[26px] mb-5 text-black">
            {course?.title}
          </p>
        </div>
        {/* Badge */}
        {/* <div className="absolute top-0 start-0 -translate-5 bg-[#1DAEE5] text-white py-2 px-4 rounded-lg font-bold text-[16px]">
          {new Date(course.date_from).getDate()} -{" "}
          {new Date(course.date_to).getDate()}{" "}
          {new Date(course.date_from).toLocaleDateString("ar-EG", {
            month: "long",
          })}
        </div> */}

        {/* Course Details Link */}
        <Link href={`/${lang}/training/${course?.id}`} className="inline-block">
          <div className="bg-[#61B8A0] text-white font-bold p-2 text-md rounded-lg mb-[18px] mt-[2px] border-2 border-white text-[14px] transition-all duration-300 hover:border-[#61B8A0] hover:bg-white hover:text-[#61B8A0]">
            {t("course_details")}
          </div>
        </Link>
      </div>
    );
  };

  const gridClass = useMemo(() => {
    if (!path?.course?.length) return "grid grid-cols-1";
    return path?.course.length === 1
      ? "grid grid-cols-1"
      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-12 gap-8";
  }, [path?.course]);

  return !loadingPath ? (
    <div className="min-h-screen container mx-auto">
      {/* Header Section */}
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-8 container mx-auto md:pt-12 pt-8 text-center"
        dir={dir}
      >
        {/* Title and Description */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="lg:text-3xl text-xl font-bold text-[#1DAEE5] mb-4 text-start">
            {path?.title}
          </h2>
          <p className="text-black text-justify mb-6">{path?.description}</p>
        </div>

        {/* Image */}
        <div className="w-3/5 md:w-2/5">
          <img
            src={`${process.env.NEXT_PUBLIC_URL}${path?.image}`}
            className="object-cover h-full w-full transition duration-300 rounded-xl"
            alt="path image"
          />
        </div>
      </div>

      {/* Courses Section */}
      {path?.course?.length ? (
        <div dir={dir} className="p-0 mt-8">
          <h2 className="text-[26px] font-bold text-[#1DAEE5] text-center">
            {t("path_courses")}
          </h2>

          <div
            dir={dir}
            className={
              gridClass +
              " justify-center items-stretch mb-10 container mx-auto gap-6 mt-9"
            }
          >
            {path?.course?.map((course) => renderPathCard(course))}
          </div>
        </div>
      ) : null}
    </div>
  ) : null;
};

export default SinglePath;
