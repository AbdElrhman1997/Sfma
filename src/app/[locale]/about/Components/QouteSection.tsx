import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const QouteSection = () => {
  const t = useTranslations("HomePage.AboutSection");
  const lang = useLocale();

  return (
    <div className="relative md:mt-16 mt-0" dir={lang == "en" ? "ltr" : "rtl"}>
      <Image
        src="/images/logos/quate_section.svg"
        alt="About Us"
        width={500}
        height={500}
        className="w-full h-auto mt-10 max-h-[270px]"
      />
      <p className="absolute top-1/2 left-1/2 -translate-1/2 lg:px-20 px-3 lg:py-5 py-3 lg:text-[24px] text-[14px] font-semibold md:leading-[3rem] leading-relaxed text-white text-center w-full">
        {t("QouteSection")}
      </p>
    </div>
  );
};

export default QouteSection;
