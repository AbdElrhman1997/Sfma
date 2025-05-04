"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const ServicesSection = () => {
  const t = useTranslations("HomePage.ServicesSection");
  const lang = useLocale();

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    { id: 1, text: t("services_1"), image: "/images/home_page/services_1.png" },
    { id: 2, text: t("services_2"), image: "/images/home_page/services_2.png" },
    { id: 3, text: t("services_3"), image: "/images/home_page/services_3.png" },
    { id: 4, text: t("services_4"), image: "/images/home_page/services_4.png" },
  ];

  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between gap-8 container mx-auto md:py-12 py-0 ${
        lang == "en" ? "md:text-left" : "md:text-right"
      } text-center`}
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-[#1DAEE5] mb-4">{t("title")}</h2>
        <p className="text-black text-justify mb-6">{t("description")}</p>
        <div className="grid grid-cols-12 gap-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`col-span-6 rounded-xl flex flex-col items-center py-7 transform hover:scale-105 transition duration-300 shadow-lg cursor-pointer
              ${
                hoveredIndex === null
                  ? service.id === 2 || service.id === 3
                    ? "bg-[#61B8A0]"
                    : "bg-[#1DAEE5]"
                  : hoveredIndex === index
                  ? "bg-[#61B8A0]"
                  : "bg-[#1DAEE5]"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={`/images/home_page/services_${service?.id}.png`}
                alt="About Us"
                width={60}
                height={60}
                className="rounded-lg mb-3"
              />
              <p className="font-bold md:text-xl text-lg text-white text-center">
                {service?.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 md:max-w-[500px] max-w-[400px]">
        <Image
          src="/images/home_page/services_section.png"
          alt="About Us"
          width={500}
          height={300}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default ServicesSection;
