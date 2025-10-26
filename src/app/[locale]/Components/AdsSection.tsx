"use client";

import React, { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const AdsSection = () => {
  const t = useTranslations("HomePage.AdsSection");
  const lang = useLocale();
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAds = async () => {
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

        // ✅ التعامل مع الاستجابة بهذا الشكل:
        // { data: [ {...}, {...} ], message: "..." }
        if (data?.data && Array.isArray(data.data) && data.data.length > 0) {
          const filtered = data.data.filter(
            (item) => item.type === "web_ads" && item.status
          );
          setAds(filtered);
        } else {
          setAds([]);
        }
      } catch (error) {
        console.error("Error fetching ads:", error);
        setAds([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, [lang]);

  // 🌀 حالة التحميل
  if (loading) {
    return (
      <div className="w-full">
        <div className="relative w-full h-[400px] bg-gray-200 animate-pulse"></div>
        <div className="flex justify-center mt-4 space-x-2">
          <div className="w-3 h-3 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  // 💤 لا توجد إعلانات
  if (!ads.length) {
    return (
      <section
        className="container mx-auto pt-10"
        dir={lang === "en" ? "ltr" : "rtl"}
      >
        <div className="bg-[#D9D9D9] min-h-[50vh] rounded-lg flex justify-center items-center text-center lg:text-4xl text-xl font-semibold relative">
          {t("no_ads_available")}
        </div>
        <Link
          href="mailto:info@sfma.sa"
          className="block cursor-pointer hover:opacity-85 bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white lg:px-12 px-6 lg:py-3 py-[6px] rounded-lg font-semibold lg:text-base text-[12px] mt-6 mx-auto"
        >
          {t("button_text")}
        </Link>
      </section>
    );
  }

  // 🎯 عرض السلايدر
  return (
    <section
      className="container mx-auto pt-10"
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1200}
        loop
        pagination={{ clickable: true }}
        grabCursor
        className="w-full rounded-lg overflow-hidden"
      >
        {ads.map((ad) => (
          <SwiperSlide key={ad.id}>
            <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[65vh]">
              <a
                href={ad.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}${ad.image}`}
                  alt={t("ad_alt_text")}
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
