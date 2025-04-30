import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const NewsSection = () => {
  const t = useTranslations("HomePage.NewsSection");
  const lang = useLocale();
  const courses = [{}, {}, {}];

  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-between gap-8 container mx-auto pt-10 ${
        lang == "en" ? "md:text-left" : "md:text-right"
      } text-center`}
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div className="w-full flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-[#1DAEE5] mb-4 text-center">{t("title")}</h2>
        <p className="text-black mb-6 text-center">{t("description")}</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center py-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="w-full h-48 bg-[#D9D9D9]"></div>
              <div className="p-4">
                <h3 className="text-lg font-bold leading-tight">
                  {t("title_placeholder")}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {t("description_placeholder")}
                </p>
                <div className="mt-4 flex items-center justify-start text-primary font-semibold cursor-pointer">
                  <span className="text-lg font-semibold">
                    {" "}
                    {t("read_more")}
                  </span>
                  <div className={`${lang == "en" ? "rotate-y-180" : ""}`}>
                    <Image
                      src="/images/home_page/Vector.svg"
                      alt="About Us"
                      width={24}
                      height={24}
                      className=" rounded-lg mx-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="flex items-center mx-auto bg-teal-500 text-white py-[2px] px-[2px] pe-4 rounded-full gap-3 hover:bg-teal-600 transition w-fit">
          <div className="w-12 h-12 bg-[#1DAEE5] text-white flex items-center justify-center rounded-full border-2 border-white">
            {lang == "en" ? (
              <BsArrowLeft className="font-bold" />
            ) : (
              <BsArrowRight className="font-bold" />
            )}
          </div>
          <span className="text-lg font-bold text-center">
            {t("read_more")}
          </span>
        </button>
      </div>
    </section>
  );
};

export default NewsSection;
