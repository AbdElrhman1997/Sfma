import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const ActivitiesSection = () => {
  const t = useTranslations("HomePage.ActivitiesSection");
  const lang = useLocale();

  return (
    <section dir={lang == "en" ? "ltr" : "rtl"}>
      <h2 className="text-4xl font-bold text-[#1DAEE5] mb-4 text-center md:pt-4">
        {t("title")}
      </h2>
      <p className="text-black text-center md:mb-6">{t("description")}</p>
      <div
        className={`flex flex-col md:flex-row items-center justify-between gap-8 container mx-auto ${
          lang == "en" ? "md:text-left" : "md:text-right"
        } text-center`}
        dir={lang == "en" ? "ltr" : "rtl"}
      >
        <div className={` bg-white`}>
          <h2 className="text-xl md:text-2xl font-bold mb-2 leading-relaxed">
            {t("p_1")}
          </h2>

          <p className="font-semibold text-lg mb-6">{t("p_2")}</p>

          <div className="flex flex-col md:flex-row md:justify-start justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-[#1DAEE5] text-white md:px-1 px-2 py-[11px] md:w-1/2 w-full md:mx-0 mx-auto ">
              <FaMapMarkerAlt className=" text-lg" />
              <span className="text-sm">{t("location")}</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1DAEE5] text-white md:px-1 px-2 py-[11px] md:w-1/2 w-full md:mx-0 mx-auto ">
              <FaCalendarAlt className=" text-lg" />
              <span className="text-sm"> {t("date")}</span>
            </div>
          </div>

          <a
            href="https://fmexcon.com/"
            className="block bg-[#013047] text-white py-[11px] px-3 font-semibold transition text-center"
            target="_blank"
          >
            {t("visit_site")}
          </a>
        </div>
        <div className="w-full md:w-1/2 h-[250px]">
          <iframe
            src="https://www.youtube.com/embed/j6fitq7Vvfs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full rounded-lg"
            style={{ display: "block" }}
          ></iframe>
        </div>
      </div>
      <button className="cursor-pointer flex items-center mx-auto bg-[#61B8A0] text-white py-[2px] px-[2px] pe-4 rounded-full gap-3 hover:bg-[#5d9887] transition w-fit my-4 mt-7">
        <div className="w-12 h-12 bg-[#1DAEE5] text-white flex items-center justify-center rounded-full border-2 border-white">
          {lang == "en" ? (
            <BsArrowLeft className="font-bold" />
          ) : (
            <BsArrowRight className="font-bold" />
          )}
        </div>
        <span className="text-lg font-bold text-center">{t("read_more")}</span>
      </button>
    </section>
  );
};

export default ActivitiesSection;
