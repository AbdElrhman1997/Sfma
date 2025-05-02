"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { useLocale } from "next-intl";

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
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={1000}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="w-full h-auto custom-swiper"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-[500px]">
              <Image
                src={`https://just.isamstore.com/storage/${banner.image}`}
                alt={`Banner ${banner.id}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Bullet Style */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #d1d1d1;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #61b8a0;
        }
      `}</style>
    </div>
  );
};

export default BannerSection;
