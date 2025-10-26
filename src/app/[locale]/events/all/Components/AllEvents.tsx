"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AllEvents = () => {
  const lang = useLocale();
  const [content, setContent]: any = useState([]);
  const [loadingContent, setLoadingContent] = useState(false);

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
      <p className="text-[#555555] lg:text-start text-center lg:text-3xl text-xl font-bold lg:mt-8 mt-6">
        جميع فعاليات SFMA
      </p>
      <p className="text-[#555555] lg:text-start text-center mx-auto lg:mt-2 leading-7 lg:text-base text-[13px]">
        كن جزءًا من أهم الأحداث في مجال إدارة المرافق
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 justify-center items-center pt-4">
        {content?.map((item, index) => (
          <div
            key={index}
            className="max-w-sm lg:mx-0 mx-auto bg-white rounded-lg overflow-hidden shadow-md px-4 pt-4"
          >
            <div className="w-full">
              <img
                src={`${process.env.NEXT_PUBLIC_URL}${item?.cover_image}`}
                alt="About Us"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="p-4" style={{ minHeight: "100px" }}>
              <h3 className="text-lg font-bold leading-tight text-[#555555] truncate">
                {item?.title}
              </h3>

              <div className="flex items-center gap-3 mt-1">
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-4">
                    <Image
                      src="/images/logos/Date_Icon.png"
                      alt="date icon"
                      width={50}
                      height={50}
                      className="w-full h-auto translate-y-1"
                    />
                  </div>
                  <p className="lg:text-base text-sm mt-2">
                    {formatDate(item?.date_from)} - {formatDate(item?.date_to)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-5">
                    <Image
                      src="/images/logos/Vector (1).png"
                      alt="time icon"
                      width={50}
                      height={50}
                      className="w-full h-auto translate-y-1"
                    />
                  </div>
                  <p className="lg:text-base text-sm mt-2">
                    {formatTime(item?.time_from)} - {formatTime(item?.time_to)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-1 truncate">
                <div className="w-4">
                  <Image
                    src="/images/logos/location_main.png"
                    alt="location icon"
                    width={50}
                    height={50}
                    className="w-full h-auto translate-y-1.5"
                  />
                </div>
                <p className=" lg:text-base text-sm  mt-2">{item?.address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllEvents;
