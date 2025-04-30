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
        className={`bg-[#D9D9D9] rounded-lg h-[70vh] flex justify-center items-center ${
          lang == "en" ? "md:text-left" : "md:text-right"
        } text-center text-4xl font-semibold`}
        dir={lang == "en" ? "ltr" : "rtl"}
      >
        {t("title")}
      </div>
      <button className="flex items-center mx-auto bg-[#61B8A0] hover:bg-[#5d9887]  text-white rounded-lg gap-3 transition w-fit mt-4 px-4 py-[9px] text-lg cursor-pointer">
        {t("button_text")}
      </button>
    </section>
  );
};

export default AdsSection;
