import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const ValuesSection = () => {
  const t = useTranslations("AboutPage.ValuesSection");
  const lang = useLocale();

  return (
    <section
      className="container mx-auto text-center md:pt-6 pt-2 mt-8 mb-12"
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
      <div className="flex items-center justify-center md:gap-y-8 md:gap-x-8 gap-x-10 gap-y-14 pt-4 flex-wrap">
        <div className="flex flex-col items-center mx-4">
          <div className="md:w-32 w-24 md:h-32 h-24 flex items-center justify-center bg-[#1DAEE5] text-white rounded-full text-4xl relative -top-4 shadow-lg border-10 border-white outline-10 outline-[#1DAEE5] p-5">
            <Image
              src="/images/about_page/Group (1).png"
              alt="About Us"
              width={500}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-[2px] h-6 bg-black"></div>
          <p className="text-lg font-bold text-black mt-2">{t("partners")}</p>
        </div>
        <div className="flex flex-col items-center mx-4">
          <p className="text-lg font-bold text-black mt-2">{t("education")}</p>
          <div className="w-[2px] h-6 bg-black"></div>
          <div className="md:w-32 w-24 md:h-32 h-24 mt-4 flex items-center justify-center bg-[#5FB69E] text-white rounded-full text-4xl relative shadow-lg border-10 border-white outline-10 outline-[#5FB69E] p-5">
            <Image
              src="/images/about_page/Group (2).png"
              alt="About Us"
              width={500}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mx-4">
          <div className="md:w-32 w-24 md:h-32 h-24 flex items-center justify-center bg-[#1DAEE5] text-white rounded-full text-4xl relative -top-4 shadow-lg border-10 border-white outline-10 outline-[#1DAEE5] p-5">
            <Image
              src="/images/about_page/Group (3).png"
              alt="About Us"
              width={500}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-[2px] h-6 bg-black"></div>
          <p className="text-lg font-bold text-black mt-2">
            {t("reliability")}
          </p>
        </div>
        <div className="flex flex-col items-center mx-4">
          <p className="text-lg font-bold text-black mt-2">{t("justice")}</p>
          <div className="w-[2px] h-6 bg-black"></div>
          <div className="md:w-32 w-24 md:h-32 h-24 mt-4 flex items-center justify-center bg-[#5FB69E] text-white rounded-full text-4xl relative shadow-lg border-10 border-white outline-10 outline-[#5FB69E] p-5">
            <Image
              src="/images/about_page/Group (2).png"
              alt="About Us"
              width={500}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mx-4">
          <div className="md:w-32 w-24 md:h-32 h-24 flex items-center justify-center bg-[#1DAEE5] text-white rounded-full text-4xl relative -top-4 shadow-lg border-10 border-white outline-10 outline-[#1DAEE5] p-5">
            <Image
              src="/images/about_page/Group (1).png"
              alt="About Us"
              width={500}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-[2px] h-6 bg-black"></div>
          <p className="text-lg font-bold text-black mt-2">
            {" "}
            {t("confidence")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
