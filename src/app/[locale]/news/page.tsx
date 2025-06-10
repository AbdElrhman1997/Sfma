import { createTranslator } from "next-intl";
import React from "react";
import NewsSection from "../Components/NewsSection";
import Image from "next/image";

const Page = async ({ params }) => {
  const { locale } = params;
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({
    locale,
    messages,
    namespace: "AboutPage",
  });

  return (
    <div className="">
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

        <div className="absolute lg:bottom-10 bottom-13 lg:right-4 right-0 text-white container mx-auto flex flex-col gap-3 md:gap-5 md:text-start text-center">
          <p className="text-lg md:text-2xl lg:text-4xl font-bold">
            آخر مستجدات SFMA وقطاع إدارة المرافق
          </p>
          <p className="text-base md:text-lg lg:text-xl font-semibold">
            اكتشف آخر أخبار الجمعية وأبرز التطورات في مجال إدارة المرافق، وكن
            دائمًا في قلب الحدث
          </p>
        </div>
      </div>
      <NewsSection from_home={false} />
    </div>
  );
};

export default Page;
