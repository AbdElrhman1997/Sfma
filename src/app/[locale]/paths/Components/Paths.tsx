"use client"; // Required for client-side interactivity

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Paths({ from_home }) {
  const t = useTranslations("Training");
  const lang = useLocale();
  const [loadingPaths, setLoadingPaths] = useState(false);
  const [content, setContent]: any = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoadingPaths(true);
      const apiUrl = `${
        process.env.NEXT_PUBLIC_API_URL
      }courses/get-courses-category?is_featured=${from_home ? 1 : 0}`;

      try {
        const res = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Accept-Language": lang || "ar",
          },
          cache: "no-store",
        });

        const data = await res.json();
        setContent(data || []);
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
    idx == 2 && from_home ? (
      <Link
        key={path?.id}
        href={`/${lang}/paths`}
        className="group cursor-pointer hover:opacity-95 min-h-[360px] text-white bg-[var(--second_main)] rounded-lg shadow-md text-center h-full hover:scale-105 transition duration-300"
      >
        <div className="flex flex-col justify-center h-full text-start px-16">
          <p className="xl:text-8xl text-7xl font-bold">
            {content?.categories_count + 1}+
          </p>
          <p className="xl:text-4xl text-3xl font-bold">{t("paths")}</p>
        </div>
      </Link>
    ) : (
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
    );

  return (
    <div
      dir={lang === "en" ? "ltr" : "rtl"}
      className={` p-0 xl:py-12 lg:mt-8 bg-${
        from_home ? "[#F6F6F6] py-10" : "white"
      }`}
    >
      <div className="container mx-auto">
        <h2 className="lg:text-3xl text-xl font-bold text-[#1DAEE5] lg:mb-3 mb-2 text-center">
          {t("title")}
        </h2>
        <p className="text-[#555555] text-center lg:mb-8 mb-4 lg:text-base text-sm">
          {t("sub_title")}
        </p>

        <div
          className={`${
            content?.data?.length <= 2
              ? "flex justify-center flex-wrap gap-8 xl:gap-12 p-5 xl:p-0"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 p-5 xl:p-0"
          } items-stretch`}
        >
          {loadingPaths ? (
            renderLoadingCards()
          ) : (
            <>
              {content?.data?.map((path, idx) => {
                return renderCourseCard(path, idx);
              })}
            </>
          )}
        </div>

        {from_home ? (
          <Link
            href={`/${lang}/training`}
            className="mt-6 block cursor-pointer hover:opacity-85 bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white lg:px-12 px-6 lg:py-3 py-[6px] rounded-lg font-semibold lg:text-base text-[12px] mx-auto"
          >
            {t("read_more")}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
