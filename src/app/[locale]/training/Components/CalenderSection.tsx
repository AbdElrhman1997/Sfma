import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const CalenderSection = () => {
  const t = useTranslations("common");
  const lang = useLocale();

  return (
    <section
      className="container mx-auto pt-4"
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div
        className={`bg-[#D9D9D9] rounded-lg h-[70vh] flex justify-center items-center ${
          lang == "en" ? "md:text-left" : "md:text-right"
        } text-center text-7xl font-semibold`}
        dir={lang == "en" ? "ltr" : "rtl"}
      >
        {t("Calender")}
      </div>
    </section>
  );
};

export default CalenderSection;
