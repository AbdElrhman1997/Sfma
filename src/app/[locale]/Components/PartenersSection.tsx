"use client";

import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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

  return (
    <section
      className={`container mx-auto py-6 mt-10 text-center bg-[#F6F6F6]`}
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-bold text-[#1DAEE5] mb-3">{t("title")}</h2>
        <p className="text-black mb-3">{t("description")}</p>

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
              <div className="rounded-lg w-[150px] h-[150px] md:w-[170px] md:h-[170px] mx-auto flex items-center justify-center overflow-hidden">
                <img
                  src={`https://sfma.srv814693.hstgr.cloud/storage/${partner?.logo}`}
                  alt={`Partner ${index}`}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <style jsx global>{`
          .swiper-pagination-bullet {
            background: #d1d1d1;
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background: #61b8a0;
          }
        `}</style> */}
      </div>
    </section>
  );
};

export default PartenersSection;
