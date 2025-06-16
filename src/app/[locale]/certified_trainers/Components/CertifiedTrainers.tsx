"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CertifiedTrainers = () => {
  const lang = useLocale();
  const [content, setContent]: any = useState([]);
  const [loadingContent, setLoadingContent] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    const fetchSinglePath = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}courses/get-instructors`;
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

    fetchSinglePath();
  }, [lang]);

  const Card = ({ trainer }) => {
    return (
      <div className="bg-[#F6F6F6] shadow lg:col-span-1 md:col-span-2 col-span-3 border-b-4 border-[var(--second_main)] rounded-lg px-4 text-center">
        <div className="w-32 border-2 border-[var(--second_main)] rounded-lg mx-auto -translate-y-7">
          <img
            src={`${process.env.NEXT_PUBLIC_URL}${trainer?.user?.logo}`}
            alt="About Us"
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-lg "
          />
        </div>
        <p className="text-[#555555] font-bold text-xl mt-3 -translate-y-6">
          {trainer?.user?.name}
        </p>
        <Link
          href={`/${lang}/certified_trainers/${trainer?.id}`}
          className="block cursor-pointer mx-auto hover:opacity-85 -translate-y-6 bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white px-4 py-[6px] rounded-lg font-semibold text-[15px]"
        >
          {t("common.learn_more")}
        </Link>
      </div>
    );
  };

  return (
    <section dir={lang == "en" ? "ltr" : "rtl"}>
      {loadingContent ? (
        <div className="flex flex-wrap justify-center gap-6">
          {[1, 2, 3].map((index) => (
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
          ))}
        </div>
      ) : content?.length ? (
        <div className="grid grid-cols-3 gap-x-8 gap-y-16 container mx-auto lg:mt-24 mt-16 mb-12">
          {content?.map((trainer, index) => (
            <Card key={trainer?.id} trainer={trainer} />
          ))}
        </div>
      ) : (
        <p className="text-center lg:text-3xl text-2xl lg:mt-16 mt-8">
          {t("common.no_image")}
        </p>
      )}
    </section>
  );
};

export default CertifiedTrainers;
