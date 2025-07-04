"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Sfma_Paths() {
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

  const renderCourseCard = (path, idx) =>
    idx == 5 ? (
      <Link
        key={path?.id}
        href={`/${lang}/paths`}
        className="group cursor-pointer hover:opacity-95 min-h-[360px] text-white bg-[var(--second_main)] rounded-lg shadow-md text-center h-full hover:scale-105 transition duration-300"
      >
        <div className="flex flex-col justify-center h-full text-start px-16">
          <p className="xl:text-8xl text-3xl font-bold">
            {content?.length - 5}+
          </p>
          <p className="xl:text-4xl text-3xl font-bold">{t("paths")}</p>
        </div>
      </Link>
    ) : idx < 5 ? (
      <div
        key={path?.id}
        className="group  min-h-[360px] bg-[#61B8A0] rounded-lg shadow-md text-center h-fit hover:scale-105 transition duration-300"
      >
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
            {t("read_more_2")}
          </div>
        </Link>
      </div>
    ) : null;

  return (
    <div
      dir={lang === "en" ? "ltr" : "rtl"}
      className="p-0 lg:mt-8 mt-5 container mx-auto"
    >
      <h2 className="lg:text-3xl text-xl font-bold text-[#1DAEE5] lg:mb-3 mb-2 text-center">
        {t("title")}
      </h2>
      <p className="text-[#555555] text-center lg:text-base text-sm md:mb-8 mb-4">
        {t("sub_title")}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-12 gap-8 justify-center items-stretch xl:p-0 p-5">
        {loadingPaths ? (
          renderLoadingCards()
        ) : (
          <>
            {content?.map((path, idx) => {
              return renderCourseCard(path, idx);
            })}
          </>
        )}
      </div>
    </div>
  );
}
