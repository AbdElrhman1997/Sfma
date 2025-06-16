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
    <div className="w-full" dir={lang == "en" ? "ltr" : "rtl"}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        speed={1300}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full min-h-[50vh] md:min-h-[30vh] xl:max-h-[80vh] 2xl:min-h-[70vh] 2xl:max-h-[90vh] custom-swiper"
        grabCursor={true}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full min-h-[50vh] md:min-h-[30vh] xl:max-h-[80vh] 2xl:min-h-[70vh] 2xl:max-h-[90vh]">
              {/* Full-width image and overlay */}
              <div className="absolute w-full h-full top-0 left-0">
                <div className="absolute w-full h-full bg-black opacity-70 z-40"></div>
                <img
                  src={`https://sfma.srv814693.hstgr.cloud/storage/${banner.image}`}
                  alt={`Banner ${banner.id}`}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Container for content */}
              <div className="container relative z-50 pt-16 pb-6">
                <div className="text-white xl:text-start text-center">
                  <div className="md:mt-8 xl:mt-10 mb-3 2xl:mb-5 xl:mx-0 mx-auto bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white lg:px-5 px-3 lg:py-2 py-1 rounded-lg font-semibold 2xl:text-lg xl:text-sm text-[13px]">
                    {t("common.sfma_events")}
                  </div>
                  <h2 className="lg:text-4xl md:text-2xl text-xl font-bold xl:max-w-7/12 2xl:max-w-9/12 w-full lg:leading-14 leading-8">
                    {banner?.title}
                  </h2>
                  <p className="2xl:text-2xl lg:text-lg md:text-base text-sm mt-4 xl:max-w-7/12 2xl:max-w-9/12 2xl:leading-12 md:leading-8 leading-6">
                    {banner?.description}
                  </p>
                  <Link
                    href={banner?.btn_url}
                    target="_blank"
                    className="block mb-12 bg-white 2xl:text-xl md:text-base text-sm text-[var(--main)] font-semibold lg:py-3 py-2 lg:px-6 px-4 rounded-lg hover:opacity-85 xl:mx-0 mx-auto transition duration-300 w-fit mt-6"
                  >
                    {banner?.btn_text || "تعرف على المزيد"}
                  </Link>
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
