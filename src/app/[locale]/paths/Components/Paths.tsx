"use client"; // Required for client-side interactivity

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Paths({ from_home }) {
  const t = useTranslations("Training");
  const lang = useLocale();
  const [loadingPaths, setLoadingPaths] = useState(false);
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoadingPaths(true);
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}courses/get-courses-category`;

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
        console.log(data?.data);
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

  const renderCourseCard = (path) => (
    <div className="group bg-[#61B8A0] rounded-lg shadow-md w-72 text-center h-fit hover:scale-105 transition duration-300">
      <div className="transition-shadow duration-300 overflow-hidden rounded-lg">
        <img
          src={`${process.env.NEXT_PUBLIC_URL}${path?.image}`}
          className="object-cover h-full max-h-[17rem] w-full transition duration-300 group-hover:scale-105 group-hover:opacity-85"
          alt="patn image"
        />
        <p className="relative font-bold mt-[26px] mb-5 text-white">
          {path?.title}
        </p>
      </div>

      <Link href={`/${lang}/paths/${path?.id}`} className="inline-block">
        <div className="bg-[#61B8A0] text-white font-bold p-2 text-md rounded-lg mb-[18px] mt-[2px] border-2 border-white text-[14px] transition-all duration-300 hover:border-[#61B8A0] hover:bg-white hover:text-[#61B8A0]">
          تصفح الدورات
        </div>
      </Link>
    </div>
  );

  return (
    <div
      dir={lang === "en" ? "ltr" : "rtl"}
      className={`p-0 xl:py-12 lg:mt-8 bg-${
        from_home ? "[#F6F6F6] py-10" : "white"
      }`}
    >
      <h2 className="lg:text-3xl text-xl font-bold text-[#1DAEE5] lg:mb-3 mb-2 text-center">
        {t("title")}
      </h2>
      <p className="text-[#555555] text-center mb-8 lg:text-base text-sm">
        {t("sub_title")}
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {loadingPaths ? (
          renderLoadingCards()
        ) : (
          <>
            {content?.map((path) => {
              return renderCourseCard(path);
            })}
          </>
        )}
      </div>
      {from_home ? (
        <Link
          href={`/${lang}/training`}
          className="mt-6 block cursor-pointer hover:opacity-85 bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white lg:px-12 px-6 lg:py-3 py-[6px] rounded-lg font-semibold lg:text-base text-[12px] mx-auto"
        >
          قراءة المزيد
        </Link>
      ) : null}
    </div>
  );
}
