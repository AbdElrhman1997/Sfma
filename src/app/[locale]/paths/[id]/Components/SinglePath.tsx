"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

const SinglePath = ({ translation, id }) => {
  const lang = useLocale();
  const dir = lang === "en" ? "ltr" : "rtl";
  const [path, setPath]: any = useState({});
  const [loadingPath, setLoadingPath] = useState(false);

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
        className="group bg-white relative rounded-lg shadow-md w-72 text-center h-fit hover:scale-105 transition duration-300"
      >
        {/* Course Image and Title */}
        <div className="transition-shadow duration-300 overflow-hidden rounded-lg">
          <img
            src="/images/training/training_1.png"
            alt="دورات في الأمن والسلامة"
            className="object-cover h-full max-h-[17rem] w-full transition duration-300 group-hover:scale-105 group-hover:opacity-85"
          />
          <p className="relative font-bold mt-[26px] mb-5 text-black">
            {course?.title}
          </p>
        </div>
        {/* Badge */}
        <div className="absolute top-0 start-0 -translate-5 bg-[#1DAEE5] text-white py-2 px-4 rounded-lg font-bold text-[16px]">
          {new Date(course.date_from).getDate()} -{" "}
          {new Date(course.date_to).getDate()}{" "}
          {new Date(course.date_from).toLocaleDateString("ar-EG", {
            month: "long",
          })}
        </div>

        {/* Course Details Link */}
        <Link href={`/${lang}/training/${course?.id}`} className="inline-block">
          <div className="bg-[#61B8A0] text-white font-bold p-2 text-md rounded-lg mb-[18px] mt-[2px] border-2 border-white text-[14px] transition-all duration-300 hover:border-[#61B8A0] hover:bg-white hover:text-[#61B8A0]">
            تفاصيل الدورة
          </div>
        </Link>
      </div>
    );
  };

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
            className="object-cover h-full w-full transition duration-300"
            alt="path image"
          />
        </div>
      </div>

      {/* Courses Section */}
      <div dir={dir} className="p-0 mt-8">
        <h2 className="text-[26px] font-bold text-[#1DAEE5] text-center">
          دورات المسار
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mt-9">
          {path?.course?.map((course) => {
            console.log(course);
            return renderPathCard(course);
          })}
        </div>
      </div>
    </div>
  ) : null;
};

export default SinglePath;
