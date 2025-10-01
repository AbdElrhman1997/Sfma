"use client";
import { createTranslator, useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import AlertSection from "./Components/AlertSection";
import SideBarFilter from "./Components/SideBarFilter";
import ProvidersCards from "./Components/ProvidersCards";

const Page = ({ params }) => {
  const { locale } = params;
  const t = useTranslations("");
  const [content, setContent]: any = useState([]);

  return (
    <section className="" dir={locale == "en" ? "ltr" : "rtl"}>
      <div className="relative w-full" dir={locale === "en" ? "ltr" : "rtl"}>
        <div className=" text-white flex flex-col relative bg-[#1DAEE5D9]">
          <div className="w-full" dir={locale === "en" ? "ltr" : "rtl"}>
            <div className="absolute top-0 left-0 w-full -z-10">
              <Image
                src="/images/common/service_provider_bg.png"
                alt="About Us"
                width={1920}
                height={1080}
                className="w-full h-52 md:h-60 lg:h-72 xl:h-80 xl:max-h-96 object-cover"
              />
            </div>
          </div>
          <div className="lg:text-start text-center container mx-auto h-52 md:h-60 lg:h-72 xl:min-h-80 flex flex-col justify-center">
            <p className="text-lg md:text-2xl lg:text-4xl font-bold">
              {t("providers.title")}
            </p>
            <p className="lg:text-xl md:text-lg text-[11px] font-semibold lg:my-6 my-3">
              {t("providers.subtitle")}
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 container mx-auto mt-16 relative xl:gap-x-8">
        <div className="xl:col-span-1 col-span-4">
          <SideBarFilter setContent={setContent} />
        </div>
        <div className="xl:col-span-3 col-span-4">
          <ProvidersCards content={content} setContent={setContent} />
        </div>
        <div className="col-span-4">
          <AlertSection />
        </div>
      </div>
    </section>
  );
};

export default Page;
