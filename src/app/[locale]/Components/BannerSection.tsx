"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { useLocale } from "next-intl";
import Link from "next/link";

const BannerSection = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const lang = useLocale();

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
        className="w-full min-h-[50vh] md:min-h-[60vh] lg:max-h-[90vh] 2xl:max-h-[90vh] custom-swiper"
        grabCursor={true}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full min-h-[50vh] md:min-h-[60vh] lg:max-h-[90vh] 2xl:max-h-[90vh]">
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
                <div className="text-white lg:text-start text-center">
                  <h2 className="lg:text-4xl text-xl font-bold lg:mt-12 lg:max-w-7/12 lg:leading-14 leading-8">
                    {banner?.title}
                  </h2>
                  <p className="lg:text-lg text-sm mt-4 lg:max-w-7/12 lg:leading-7 leading-6">
                    {banner?.description}
                  </p>
                  <Link
                    href={banner?.btn_url}
                    target="_blank"
                    className="block mb-12 bg-white lg:text-base text-sm text-[var(--main)] font-semibold lg:py-3 py-2 lg:px-6 px-4 rounded-lg hover:opacity-85 lg:mx-0 mx-auto transition duration-300 w-fit mt-6"
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
