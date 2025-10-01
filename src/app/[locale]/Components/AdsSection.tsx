"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const AdsSection = () => {
  const t = useTranslations("HomePage.AdsSection");
  const lang = useLocale();
  const [ad, setAd] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAd = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}ads-spaces`,
          {
            method: "GET",
            headers: {
              "Accept-Language": lang || "ar",
            },
            cache: "no-store",
          }
        );
        const data = await res.json();
        if (data.status === "success" && data.data.length > 0) {
          setAd(data.data[0]); // Use the first ad for simplicity
        }
      } catch (error) {
        console.error("Error fetching ad:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAd();
  }, [lang]);

  if (loading) return <div className="bg-[#D9D9D9] min-h-2/3"></div>; // Simple loading state
  if (!ad)
    return (
      <section
        className="container mx-auto pt-10"
        dir={lang == "en" ? "ltr" : "rtl"}
      >
        <div
          className={`bg-[#D9D9D9] 2xl:min-h-[70vh] lg:min-h-[80vh] min-h-[50vh] rounded-lg flex justify-center items-center ${
            lang == "en" ? "md:text-left" : "md:text-right"
          } text-center lg:text-4xl text-xl font-semibold relative`}
          dir={lang == "en" ? "ltr" : "rtl"}
        >
          {t("no_ads_available")}
        </div>
        <Link
          href="mailto:info@sfma.sa"
          className="block cursor-pointer hover:opacity-85 bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white lg:px-12 px-6 lg:py-3 py-[6px] rounded-lg font-semibold lg:text-base text-[12px] mt-6 mx-auto"
        >
          {t("button_text")}
        </Link>
      </section>
    ); // Fallback if no ad is fetched

  return (
    <section
      className="container mx-auto pt-10"
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div
        className={`bg-[#D9D9D9] rounded-lg flex justify-center items-center ${
          lang == "en" ? "md:text-left" : "md:text-right"
        } text-center text-4xl font-semibold relative`}
        dir={lang == "en" ? "ltr" : "rtl"}
      >
        <a
          href={ad.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inset-0 flex justify-center items-center"
        >
          <img
            src={`${process.env.NEXT_PUBLIC_URL}${ad.image}`}
            alt={t("ad_alt_text")}
            className="w-full lg:min-h-[80%] object-cover"
          />
        </a>
      </div>
      <Link
        href="mailto:info@sfma.sa"
        className="block cursor-pointer hover:opacity-85 bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white lg:px-12 px-6 lg:py-3 py-[6px] rounded-lg font-semibold lg:text-base text-[12px] mt-6 mx-auto"
      >
        {t("button_text")}
      </Link>
    </section>
  );
};

export default AdsSection;
