import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Our_Tasks = () => {
  const lang = useLocale();
  const t = useTranslations();

  return (
    <section
      className={` gap-8 container mx-auto mt-8 text-start`}
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div>
        <h2 className="lg:text-3xl text-xl font-bold text-[#1DAEE5] lg:mb-3 mb-2 text-center">
          {t("our_tasks.title")}
        </h2>
        <p className="text-[#555555] text-center lg:text-base text-sm md:mb-8 mb-4">
          {t("our_tasks.subtitle")}
        </p>
      </div>
      <section
        className={`flex flex-col md:flex-row items-center justify-between gap-8 container mx-auto ${
          lang == "en" ? "md:text-left" : "md:text-right"
        } text-center`}
        dir={lang == "en" ? "ltr" : "rtl"}
      >
        <div className="md:block hidden w-full md:w-1/2">
          <Image
            src="/images/about_page/Our_Tasks.png"
            alt={t("our_tasks.title")}
            width={500}
            height={400}
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-black text-justify md:mb-6 lg:text-base xl:text-lg lg:leading-6 xl:leading-8">
            {t("our_tasks.content")}
          </p>
        </div>
        <div className="md:hidden w-full md:w-1/2">
          <Image
            src="/images/about_page/Our_Tasks.png"
            alt={t("our_tasks.title")}
            width={500}
            height={400}
            className="w-full h-auto rounded-md"
          />
        </div>
      </section>
    </section>
  );
};

export default Our_Tasks;
