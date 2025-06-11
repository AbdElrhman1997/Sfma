import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const AdsSection = () => {
  const t = useTranslations("HomePage.AdsSection");
  const lang = useLocale();

  return (
    <section
      className="container mx-auto pt-10"
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div
        className={`bg-[#D9D9D9] rounded-lg lg:h-[70vh] h-[40vh] flex justify-center items-center ${
          lang == "en" ? "md:text-left" : "md:text-right"
        } text-center text-4xl font-semibold`}
        dir={lang == "en" ? "ltr" : "rtl"}
      >
        {t("title")}
      </div>
      <div className="cursor-pointer hover:opacity-85 bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white lg:px-12 px-6 lg:py-3 py-[6px] rounded-lg font-semibold lg:text-base text-[12px] mt-6 mx-auto">
        {t("button_text")}
      </div>
    </section>
  );
};

export default AdsSection;
