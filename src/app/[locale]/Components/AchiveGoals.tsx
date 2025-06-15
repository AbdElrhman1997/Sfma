import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const AchiveGoals = () => {
  const t = useTranslations("HomePage.AboutSection");
  const lang = useLocale();

  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-between gap-8 container mx-auto lg:mb-6 xl:mb-10 ${
        lang == "en" ? "md:text-left" : "md:text-right"
      } text-center`}
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="lg:text-4xl text-2xl font-bold text-[#1DAEE5] lg:mb-6 mb-2 leading-14">
          طوّر حياتك المهنية بسرعة غير مسبوقة{" "}
        </h2>

        <div className=" bg-[var(--main)] w-fit text-white lg:px-7 px-4 lg:py-[14px] py-2 font-bold lg:text-3xl text-base lg:mx-0 mx-auto">
          وحقق أهدافك بكفاءة أكبر!
        </div>
      </div>
      <div className="w-full md:w-1/3  md:max-w-[450px] max-w-[350px] ">
        <Image
          src="/images/common/AchiveGoals.png"
          alt="About Us"
          width={500}
          height={400}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default AchiveGoals;
