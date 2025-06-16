import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const ActivitiesSection = () => {
  const t = useTranslations("HomePage.ActivitiesSection");
  const lang = useLocale();

  return (
    <section
      dir={lang == "en" ? "ltr" : "rtl"}
      className="bg-[#F6F6F6] pb-10 pt-8"
    >
      <h2 className="lg:text-3xl text-xl font-bold text-[#1DAEE5] lg:mb-3 mb-2 text-center">
        {t("title")}
      </h2>
      <p className="text-[#555555] text-center lg:text-base text-sm md:mb-12 mb-4">
        {t("description")}
      </p>
      <div
        className={`flex flex-col md:flex-row items-center container mx-auto text-start`}
        dir={lang == "en" ? "ltr" : "rtl"}
      >
        <div>
          <h2 className="text-xl md:text-xl font-bold mb-2 leading-relaxed">
            {t("p_1")}
          </h2>

          <p className="font-semibold text-lg mb-6">{t("p_2")}</p>

          <div className="flex flex-col md:flex-row md:justify-start justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-[#1DAEE5] text-white md:px-1 px-2 py-[11px] lg:w-[300px] w-full md:mx-0 mx-auto ">
              <FaMapMarkerAlt className=" text-lg" />
              <span className="text-sm">{t("location")}</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1DAEE5] text-white md:px-1 px-2 py-[11px] lg:w-[300px] w-full md:mx-0 mx-auto ">
              <FaCalendarAlt className=" text-lg" />
              <span className="text-sm"> {t("date")}</span>
            </div>
          </div>

          <a
            href="https://fmexcon.com/"
            className="block bg-[#013047] hover:bg-[#014b6d] text-white py-[11px] px-3 font-semibold text-center transition-all duration-300 transform hover:scale-[104%] lg:mb-0 mb-6"
            target="_blank"
          >
            {t("visit_site")}
          </a>
        </div>
        <div className="w-full md:w-5/12 h-[350px] mx-auto">
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
      <Link
        href={`/${lang}/events`}
        className="mt-6 block cursor-pointer hover:opacity-85 bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white lg:px-12 px-6 lg:py-3 py-[6px] rounded-lg font-semibold lg:text-base text-[12px] mx-auto"
      >
        {t("read_more")}
      </Link>
      {/* <button className="cursor-pointer flex items-center mx-auto bg-[#61B8A0] text-white py-[2px] px-[2px] pe-4 rounded-full gap-3 hover:bg-[#5d9887] transition w-fit my-4 mt-7">
        <div className="w-12 h-12 bg-[#1DAEE5] text-white flex items-center justify-center rounded-full border-2 border-white">
          {lang == "en" ? (
            <BsArrowLeft className="font-bold" />
          ) : (
            <BsArrowRight className="font-bold" />
          )}
        </div>
        <span className="text-lg font-bold text-center">{t("read_more")}</span>
      </button> */}
    </section>
  );
};

export default ActivitiesSection;
