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
      className={`flex flex-col md:flex-row items-center justify-between gap-8 container mx-auto pt-12 md:mt-8 mt-0 mb-4 ${
        lang == "en" ? "md:text-left" : "md:text-right"
      } text-center`}
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-[#1DAEE5] mb-4">{t("title")}</h2>
        <p className="text-black text-justify mb-6 leading-8">
          {t("description")}
        </p>
        <Link
          className="cursor-pointer hover:opacity-85 bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white px-6 py-[7px] rounded-lg font-semibold lg:text-base text-[12px]"
          href={`/${lang}/about`}
        >
          {t("read_more")}
        </Link>
      </div>
      <div className="w-full md:w-1/2  md:max-w-[450px] max-w-[350px] ">
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
