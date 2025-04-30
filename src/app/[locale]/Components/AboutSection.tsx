import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const AboutSection = () => {
  const t = useTranslations("HomePage.AboutSection");
  const lang = useLocale();

  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-between gap-8 container mx-auto pt-12 mt-8 mb-4 ${
        lang == "en" ? "md:text-left" : "md:text-right"
      } text-center`}
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-[#1DAEE5] mb-4">{t("title")}</h2>
        <p className="text-black text-justify mb-6">{t("description")}</p>
        <Link href={`/${lang}/about`} className="block">
          <button className="cursor-pointer flex items-center md:mx-0 mx-auto bg-teal-500 text-white py-[2px] px-[2px] pe-4 rounded-full gap-3 hover:bg-teal-600 transition w-fit">
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
        </Link>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src="/images/home_page/about_section.png"
          alt="About Us"
          width={500}
          height={400}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default AboutSection;
