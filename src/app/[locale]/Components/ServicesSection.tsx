import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const ServicesSection = () => {
  const t = useTranslations("HomePage.ServicesSection");
  const lang = useLocale();

  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between gap-8 container mx-auto py-12 ${
        lang == "en" ? "md:text-left" : "md:text-right"
      } text-center`}
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-[#1DAEE5] mb-4">{t("title")}</h2>
        <p className="text-black text-justify mb-6">{t("description")}</p>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 rounded-xl bg-[#1DAEE5] flex flex-col items-center py-10">
            <Image
              src="/images/home_page/services_1.png"
              alt="About Us"
              width={100}
              height={100}
              className="rounded-lg mb-3"
            />
            <p className="font-bold text-2xl text-white text-center">
              {t("services_1")}
            </p>
          </div>
          <div className="col-span-6 rounded-xl bg-[#61B8A0] flex flex-col items-center py-10">
            <Image
              src="/images/home_page/services_2.png"
              alt="About Us"
              width={100}
              height={100}
              className="rounded-lg mb-3"
            />
            <p className="font-bold text-2xl text-white text-center">
              {t("services_2")}
            </p>
          </div>
          <div className="col-span-6 rounded-xl bg-[#61B8A0] flex flex-col items-center py-10">
            <Image
              src="/images/home_page/services_3.png"
              alt="About Us"
              width={100}
              height={100}
              className="rounded-lg mb-3"
            />
            <p className="font-bold text-2xl text-white text-center">
              {t("services_3")}
            </p>
          </div>
          <div className="col-span-6 rounded-xl bg-[#1DAEE5] flex flex-col items-center py-10">
            <Image
              src="/images/home_page/services_4.png"
              alt="About Us"
              width={100}
              height={100}
              className="rounded-lg mb-3"
            />
            <p className="font-bold text-2xl text-white text-center">
              {t("services_4")}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
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
