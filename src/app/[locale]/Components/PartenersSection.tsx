"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import { useLocale, useTranslations } from "next-intl";

const PartenersSection = () => {
  const t = useTranslations("HomePage.PartenersSection");
  const lang = useLocale();
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}partners/get-partners`,
          {
            headers: {
              "Accept-Language": lang || "ar",
            },
            cache: "no-store",
          }
        );
        const data = await res.json();
        setPartners(data?.data || []);
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };

    fetchPartners();
  }, [lang]);

  if (!partners.length) return null;

  return (
    <section
      className="xl:py-10 py-6 mt-10 text-center bg-[#F6F6F6]"
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <div className="w-full flex flex-col items-center">
        <h2 className="lg:text-3xl text-xl font-bold text-[var(--main)] text-center lg:mb-3 mb-2">
          {t("title")}
        </h2>
        <h4 className="text-[#555555] text-center mb-4 lg:text-base text-sm">
          {t("description")}
        </h4>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          // pagination={{ clickable: true }}
          speed={800}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg w-[150px] h-[150px] mx-auto flex items-center justify-center overflow-hidden">
                <img
                  src={`https://sffma.fmexcon.com/storage/${partner?.logo}`}
                  alt={`Partner ${index}`}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartenersSection;
