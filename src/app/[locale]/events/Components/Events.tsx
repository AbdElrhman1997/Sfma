"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Events = () => {
  const lang = useLocale();
  const [content, setContent]: any = useState([]);
  const [loadingContent, setLoadingContent] = useState(false);
  const t = useTranslations("HomePage.ActivitiesSection");
  useEffect(() => {
    const fetcEvents = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}sfma-events/get-sfma-events?is_featured=0`;
      try {
        setLoadingContent(true);
        const res = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Accept-Language": lang || "ar",
          },
          cache: "no-store",
        });
        const data = await res.json();
        setContent(data?.data || {});
        setLoadingContent(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoadingContent(false);
      }
    };

    fetcEvents();
  }, [lang]);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = date.getUTCFullYear();
    return `${day}/${month}`;
  };
  const formatTime = (isoTime) => {
    const dateObj = new Date(isoTime);
    const hours = dateObj.getUTCHours();
    const minutes = dateObj.getUTCMinutes();
    return `${hours}:${minutes.toString().padStart(2, "0")}`;
  };

  return (
    <section className="container mx-auto">
      <div>
        <h2 className="lg:text-3xl text-xl font-bold text-[#1DAEE5] lg:mb-3 mb-2 text-center mt-9">
          {t("title")}
        </h2>
        <p className="text-[#555555] text-center lg:text-base text-sm md:mb-8 mb-4">
          {t("description")}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 justify-center items-center pt-4">
        {content?.map((item, index) => (
          <div
            key={index}
            className="max-w-sm lg:mx-0 mx-auto bg-white rounded-lg overflow-hidden shadow-md px-4 pt-4"
          >
            <div className="w-full">
              <Image
                src="/images/common/events__card_bg.jpg"
                alt="About Us"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold leading-tight text-[#555555]">
                {item?.title}
              </h3>
              <div className="flex gap-x-10">
                <div className="flex items-center justify-start gap-3 mt-2">
                  <div className="w-4">
                    <Image
                      src="/images/logos/Date_Icon.png"
                      alt="About Us"
                      width={50}
                      height={50}
                      className="w-full h-auto translate-y-1"
                    />
                  </div>
                  <p className=" lg:text-lg text-base mt-2">
                    {formatDate(item?.date_from) +
                      " - " +
                      formatDate(item?.date_to)}
                  </p>
                </div>
                <div className="flex items-center justify-start gap-3 mt-2">
                  <div className="w-5">
                    <Image
                      src="/images/logos/Vector (1).png"
                      alt="About Us"
                      width={50}
                      height={50}
                      className="w-full h-auto rounded-lg translate-y-1"
                    />
                  </div>
                  <p className=" lg:text-lg text-base mt-2">
                    {" "}
                    {formatTime(item?.time_from) +
                      " - " +
                      formatTime(item?.time_to)}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-3 mt-2">
                <div className="w-4">
                  <Image
                    src="/images/logos/location_main.png"
                    alt="About Us"
                    width={50}
                    height={50}
                    className="w-full h-auto rounded-lg translate-y-1.5"
                  />
                </div>
                <p className=" lg:text-lg text-base mt-2">{item?.address}</p>
              </div>
              <Link
                href={`/${lang}/events/${item?.id}`}
                className="mt-4 text-[var(--main)] flex items-center justify-start text-primary font-semibold cursor-pointer"
              >
                <span className="lg:text-base text-[14px] font-bold">
                  {t("show_details")}
                </span>
                <div className={`${lang == "en" ? "rotate-y-180" : ""}`}>
                  <Image
                    src="/images/logos/arrow-left.svg"
                    alt="About Us"
                    width={16}
                    height={16}
                    className=" rounded-lg mx-2 translate-y-0.5"
                  />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link
        href={`/${lang}/events/all`}
        className="cursor-pointer block mx-auto hover:opacity-85 mt-8 text-center bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white px-3 py-2 rounded-lg font-semibold"
      >
        {t("show_events")}
      </Link>
    </section>
  );
};

export default Events;
