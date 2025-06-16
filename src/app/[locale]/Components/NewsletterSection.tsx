import { useLocale, useTranslations } from "next-intl";
import React from "react";

const NewsletterSection = () => {
  const lang = useLocale();
  const t = useTranslations("NewsletterSection");

  return (
    <div
      className="flex flex-col gap-3 container mx-auto"
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <div className="lg:min-w-[600px] w-[97%] flex flex-wrap mx-auto justify-between items-center gap-3 lg:mt-12 mt-6">
        <p className="lg:text-2xl text-lg font-bold mx-auto lg:mb-0 mb-2">
          {t("title")}
        </p>
        <div className="flex items-center lg:w-[70%] w-full lg:gap-6 gap-3">
          <input
            id="certificate-input"
            type="text"
            className="mx-auto bg-[#F6F6F6] outline-0 border-[1px] border-[#797979] px-2 lg:py-[14px] py-[6px] rounded-lg lg:text-base text-[13px] w-full"
          />
          <div className="mx-auto cursor-pointer hover:opacity-85 bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white lg:px-12 px-6 lg:py-[14px] py-[6px] rounded-lg font-semibold lg:text-lg text-sm">
            {t("button")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
