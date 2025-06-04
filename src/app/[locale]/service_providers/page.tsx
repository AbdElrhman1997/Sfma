import { createTranslator } from "next-intl";
import Image from "next/image";
import React from "react";
import AlertSection from "./Components/AlertSection";
import SideBarFilter from "./Components/SideBarFilter";
import ProvidersCards from "./Components/ProvidersCards";
import SearchBar from "./Components/SearchBar";

const Page = async ({ params }) => {
  const { locale } = params;
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({
    locale,
    messages,
    namespace: "Training",
  });

  return (
    <section className="" dir={locale == "en" ? "ltr" : "rtl"}>
      <div className="relative w-full" dir={locale === "en" ? "ltr" : "rtl"}>
        <div className="w-full relative" dir={locale === "en" ? "ltr" : "rtl"}>
          <div className="w-full h-full absolute top-0 left-0 bg-[var(--main)] opacity-70"></div>
          <Image
            src="/images/common/news-bg.png"
            alt="About Us"
            width={1920}
            height={1080}
            className="w-full lg:h-[20rem] md:h-[18rem] h-[14rem] object-cover"
          />
        </div>

        <div className="absolute lg:bottom-13 bottom-14 lg:right-4 right-0 text-white container mx-auto flex flex-col gap-3 md:gap-5 md:text-start text-center">
          <p className="text-lg md:text-2xl lg:text-4xl font-bold">
            مزوّدي الخدمات
          </p>
          <p className="text-base md:text-lg lg:text-xl font-semibold">
            استعرض الشركات المتخصصة في خدمات إدارة المرافق، مصنّفة حسب مجال
            الخدمة
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 container mx-auto mt-16 relative">
        <SearchBar />
        <div className="lg:col-span-1">
          <SideBarFilter />
        </div>
        <div className="lg:col-span-3 col-span-4">
          <ProvidersCards />
        </div>
        <div className="col-span-4">
          <AlertSection />
        </div>
      </div>
    </section>
  );
};

export default Page;
