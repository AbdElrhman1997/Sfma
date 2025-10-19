"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function WorkshopPage() {
  const t = useTranslations("");
  const [loadingWorkshops, setLoadingWorkshops] = useState(false);
  const [content, setContent] = useState([]);
  const lang = useLocale();

  function formatArabicDate(dateStr: string): string {
    const months = [
      "يناير",
      "فبراير",
      "مارس",
      "أبريل",
      "مايو",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "أكتوبر",
      "نوفمبر",
      "ديسمبر",
    ];

    const [year, month, day] = dateStr.split("-").map(Number);
    const monthName = months[month - 1];

    return `${day} ${monthName} ${year}`;
  }

  function formatArabicTime(timeStr: string): string {
    const [hourStr, ,] = timeStr.split(":");
    let hour = parseInt(hourStr);

    const period = hour >= 12 ? "مساءً" : "صباحاً";
    if (hour === 0) hour = 12;
    else if (hour > 12) hour -= 12;

    return `${hour} ${period}`;
  }

  useEffect(() => {
    const fetchCourses = async () => {
      setLoadingWorkshops(true);
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}workshops/get-workshops`;

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
        setLoadingWorkshops(false);
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

  function DateItem({ src, text, size = "w-4" }) {
    return (
      <div className="flex items-center justify-start gap-3 mt-1">
        <div className={size}>
          <Image
            src={src}
            alt="icon"
            width={50}
            height={50}
            className="w-full h-auto translate-y-1 "
          />
        </div>
        <p className="lg:text-base text-sm mt-2">{text}</p>
      </div>
    );
  }

  const renderWorkshopCard = (workshop) => {
    if (!workshop) return null;

    const hasImage = Boolean(workshop?.image);
    const hasDate = Boolean(workshop?.date);
    const hasTime = Boolean(workshop?.time);
    const hasLocation =
      Array.isArray(workshop?.location) && workshop.location.length > 0;

    return (
      <div
        key={workshop?.id || Math.random()}
        className="max-w-sm lg:mx-0 mx-auto bg-[#F6F6F6] rounded-lg overflow-hidden shadow-md px-4 pt-4 flex flex-col justify-between"
      >
        {/* الصورة */}
        {hasImage && (
          <div className="w-full">
            <img
              src={`${process.env.NEXT_PUBLIC_URL}${workshop?.image}`}
              alt={workshop?.title || "Workshop"}
              width={500}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}

        <div className="py-4 px-1 text-[#555555] text-start">
          {/* العنوان */}
          {workshop?.title && (
            <h3 className="text-lg font-bold leading-tight">
              {workshop.title}
            </h3>
          )}

          {/* التاريخ والوقت */}
          {(hasDate || hasTime) && (
            <div className="flex gap-x-7 mt-2">
              {hasDate && (
                <DateItem
                  src="/images/logos/Date_Icon.png"
                  text={formatArabicDate(workshop.date)}
                />
              )}
              {hasTime && (
                <DateItem
                  src="/images/logos/Vector (1).png"
                  text={formatArabicTime(workshop.time)}
                  size="w-5"
                />
              )}
            </div>
          )}

          {/* الموقع */}
          {hasLocation && (
            <DateItem
              src="/images/logos/location_main.png"
              text={workshop.location.join(" - ")}
            />
          )}

          {/* الزر */}
          {workshop?.id && (
            <Link
              href={`/${lang}/workshops/${workshop.id}`}
              className="mt-3 text-[var(--main)] flex items-center justify-start font-semibold"
            >
              <span className="lg:text-base text-[14px] font-bold">
                {t("common.see")}
              </span>
              <div className={`${lang === "en" ? "rotate-y-180" : ""}`}>
                <Image
                  src="/images/logos/arrow-left.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="rounded-lg mx-2 translate-y-0.5"
                />
              </div>
            </Link>
          )}
        </div>
      </div>
    );
  };

  return (
    <section
      className="p-0 mt-10 container mx-auto"
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <p className="text-[#555555] lg:text-start text-center lg:text-3xl text-xl font-bold lg:mt-8 mt-6">
        {t("common.title_2")}
      </p>
      <p className="text-[#555555] lg:text-start text-center mx-auto lg:mt-2 leading-7 lg:text-base text-[13px]">
        {t("common.description_2")}
      </p>

      <div className="flex flex-wrap justify-center gap-6 my-10">
        {loadingWorkshops ? (
          renderLoadingCards()
        ) : (
          <>
            {content?.map((workshop) => {
              return renderWorkshopCard(workshop);
            })}
          </>
        )}
      </div>
    </section>
  );
}
