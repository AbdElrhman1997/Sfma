import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const ValuesSection = () => {
  const t = useTranslations("AboutPage.ValuesSection");
  const lang = useLocale();

  return (
    <section
      className="container mx-auto text-center mt-8 md:mb-8 mb-12"
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      {/* العنوان الرئيسي */}
      <h2 className="lg:text-3xl text-xl font-bold text-[#1DAEE5] lg:mb-3 mb-2 text-center">
        {t("title")}
      </h2>
      <p className="text-[#555555] text-center lg:text-base text-sm md:mb-12 mb-4">
        {t("sub_title")}
      </p>

      {/* المخطط الدائري */}
      <div className="flex flex-wrap justify-center items-start lg:gap-y-8 gap-y-10 lg:gap-x-12 gap-x-6 pt-4">
        {[
          {
            img: "/images/about_page/Group_5.png",
            label: t("partners"),
            bg: "#1DAEE5",
          },
          {
            img: "/images/about_page/Group (3).png",
            label: t("education"),
            bg: "#5FB69E",
          },
          {
            img: "/images/about_page/Group (2).png",
            label: t("reliability"),
            bg: "#1DAEE5",
          },
          {
            img: "/images/about_page/Group.png",
            label: t("fairness"),
            bg: "#5FB69E",
          },
          {
            img: "/images/about_page/Group (1).png",
            label: t("confidence"),
            bg: "#1DAEE5",
          },
        ].map((item, idx) => {
          const isGreen = item.bg === "#5FB69E"; // التعليم والعدل

          return (
            <div
              key={idx}
              className={`w-1/3 md:w-auto flex flex-col items-center px-2 ${
                isGreen ? "md:flex-col-reverse" : ""
              }`}
            >
              {/* Text */}
              <p className="md:text-lg text-sm font-bold text-black md:mt-2 mt-1 text-center min-w-[100px]">
                {item.label}
              </p>

              {/* Line */}
              <div className="w-[2px] md:h-6 h-3 bg-black"></div>

              {/* Icon Circle */}
              <div
                className={`lg:w-32 md:w-24 w-16 lg:h-32 md:h-24 h-16 flex items-center justify-center text-white rounded-full text-4xl relative ${
                  idx % 2 == 1 ? "md:-top-4 top-4" : "top-4"
                } shadow-lg md:border-[10px] border-[6px] border-white lg:p-5 md:p-4 p-3`}
                style={{
                  backgroundColor: item.bg,
                  outline: `10px solid ${item.bg}`,
                }}
              >
                <Image
                  src={item.img}
                  alt={item.label}
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ValuesSection;
