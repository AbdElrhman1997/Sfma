"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const BannerSection = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const lang = useLocale();
  const t = useTranslations();
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}banners/get-banners`,
          {
            headers: {
              "Accept-Language": lang || "ar",
            },
            cache: "no-store",
          }
        );
        const data = await res.json();
        setBanners(data?.data || []);
      } catch (error) {
        console.error("Error fetching banners:", error);
        setBanners([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, [lang]);

  if (loading) {
    return (
      <div className="w-full">
        {/* Skeleton for the banner image */}
        <div className="relative w-full h-[500px] bg-gray-200 animate-pulse"></div>
        {/* Skeleton for pagination bullets */}
        <div className="flex justify-center mt-4 space-x-2">
          <div className="w-3 h-3 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (!banners.length) {
    return (
      <div className="w-full h-[500px] flex items-center justify-center">
        <p>No banners available.</p>
      </div>
    );
  }

  return (
    <div className="w-full relative" dir={lang === "en" ? "ltr" : "rtl"}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        speed={1300}
        loop
        pagination={{ clickable: true }}
        grabCursor
        className="w-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div
              className="
          relative w-full  h-[50vh] sm:h-[65vh] md:h-[75vh] lg:h-[70vh] xl:[70vh] 2xl:[70vh] max-h-[100vh]
        "
            >
              {/* Overlay + image */}
              <div className="absolute w-full h-full top-0 left-0">
                <div className="absolute w-full h-full bg-gradient-to-t from-black/70 to-transparent z-40"></div>
                <img
                  src={`https://sffma.fmexcon.com/storage/${banner.image}`}
                  alt={`Banner ${banner.id}`}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="container relative z-50 pt-10 pb-6 flex flex-col justify-center h-full">
                <div className="text-white xl:text-start text-center">
                  {/* Badge */}
                  {/* <div className="mb-3 xl:mb-5 mx-auto xl:mx-0 bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-semibold text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]">
                    {t("common.sfma_events")}
                  </div> */}

                  {/* Title */}
                  <h2 className="font-bold text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px] 2xl:text-[34px] leading-snug max-w-3xl mx-auto xl:mx-0">
                    {banner?.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-3 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[24px] leading-relaxed max-w-2xl mx-auto xl:mx-0">
                    {banner?.description}
                  </p>

                  {/* Button */}
                  {banner?.btn_url && (
                    <Link
                      href={banner.btn_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-5 bg-white text-[12px] sm:text-[14px] md:text-[16px] text-[var(--main)] font-semibold px-4 py-[6px] rounded-md w-fit mx-auto xl:mx-0 transition hover:opacity-85"
                    >
                      {banner?.btn_text || "تعرف على المزيد"}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSection;
