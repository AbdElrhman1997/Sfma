"use client"; // Required for client-side interactivity

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function Next_Courses() {
  const t = useTranslations("Training");
  const [loadingPaths, setLoadingPaths] = useState(false);
  const [content, setContent] = useState([]);
  const lang = useLocale();

  useEffect(() => {
    const fetchCourses = async () => {
      setLoadingPaths(true);
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}courses/get-next-courses`;

      try {
        const res = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Accept-Language": lang || "ar",
          },
          cache: "no-store",
        });

        const data = await res.json();
        setContent(data?.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoadingPaths(false);
      }
    };

    fetchCourses();
  }, [lang]);

  const renderLoadingCards = () =>
    [1, 2, 3].map((index) => (
      <div
        key={index}
        className="bg-[#F6F6F6] p-4 rounded-lg shadow-md w-64 text-center animate-pulse"
      >
        <div className="bg-[#EDEDED] text-white font-bold text-lg rounded-lg p-20 relative flex items-center justify-center">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-white/30" />
          </div>
        </div>
        <div className="mt-4 h-4 bg-gray-300 rounded w-1/2 mx-auto" />
      </div>
    ));

  const renderCourseCard = (course) => (
    <div className="group bg-white relative rounded-lg shadow-md text-center h-fit hover:scale-105 transition duration-300">
      <div className="transition-shadow duration-300 overflow-hidden rounded-lg">
        <img
          src={`${process.env.NEXT_PUBLIC_URL}${course?.image}`}
          alt={course?.name}
          className="object-cover h-full max-h-[17rem] w-full transition duration-300 group-hover:scale-105 group-hover:opacity-85"
        />
        <p className="relative font-bold mt-[26px] mb-5 text-black">
          {course?.title}
        </p>
      </div>
      <div className="absolute top-0 start-0 -translate-5 bg-[var(--main)] text-white py-2 px-4 rounded-lg">
        {new Date(course.date_from).getDate()} -{" "}
        {new Date(course.date_to).getDate()}{" "}
        {new Date(course.date_from).toLocaleDateString("ar-EG", {
          month: "long",
        })}
      </div>

      <Link href={`/${lang}/training/${course?.id}`} className="inline-block">
        <div className="bg-[#61B8A0] text-white font-bold p-2 text-md rounded-lg mb-[18px] mt-[2px] border-2 border-white text-[14px] transition-all duration-300 hover:border-[#61B8A0] hover:bg-white hover:text-[#61B8A0]">
          {t("read_more_3")}
        </div>
      </Link>
    </div>
  );

  const gridClass = useMemo(() => {
    if (!content?.length) return "grid grid-cols-1";
    return content.length === 1
      ? "grid grid-cols-1"
      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-12 gap-8";
  }, [content]);

  return (
    <div
      dir={lang === "en" ? "ltr" : "rtl"}
      className="p-0 lg:mt-8 mt-4 container mx-auto"
    >
      <h2 className="lg:text-3xl text-xl font-bold text-[#1DAEE5] lg:mb-3 mb-2 text-center">
        {t("next_courses")}
      </h2>
      <p className="text-[#555555] text-center lg:text-base text-sm md:mb-8 mb-4">
        {t("sub_title")}
      </p>

      <div
        className={
          gridClass + " justify-center items-stretch mb-10 container mx-auto"
        }
      >
        {loadingPaths ? (
          renderLoadingCards()
        ) : (
          <>
            {content?.map((course, index) => (
              <div key={index} className="flex justify-center mt-6">
                {renderCourseCard(course)}
              </div>
            ))}
          </>
        )}
      </div>

      {/* <Link
        href={`/${lang}/data_library/`}
        target="_blank"
        className="block w-fit mx-auto mt-8"
      >
        <div className="bg-[#61B8A0] text-white font-bold p-3 px-5 text-md rounded-lg mb-[18px] mt-[2px] border-2 border-white text-[16px] transition-all duration-300 hover:border-[#61B8A0] hover:bg-white hover:text-[#61B8A0]">
          اطلع على جدول دورات SFMA
        </div>
      </Link> */}
    </div>
  );
}
