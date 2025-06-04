// app/[locale]/institutions/[id]/page.tsx

import { createTranslator } from "next-intl";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import EventPlanning from "./Components/EventPlanning";
import Events from "./Components/Events";

export default async function Page({ params: { locale } }: any) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  const t = createTranslator({
    locale,
    messages,
    namespace: "Trainings",
  });

  return (
    <div dir={locale === "en" ? "ltr" : "rtl"}>
      <div className="relative w-full" dir={locale === "en" ? "ltr" : "rtl"}>
        <div className="w-full" dir={locale === "en" ? "ltr" : "rtl"}>
          <div className="hidden lg:block">
            <Image
              src="/images/training/Single_Course_Bg.png"
              alt="About Us"
              width={1920}
              height={1080}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="block md:hidden">
            <Image
              src="/images/training/Single_Course_Bg_Mobile.png"
              alt="About Us"
              width={768}
              height={432}
              className="w-full h-[13.6rem]"
            />
          </div>
        </div>

        <div className="absolute bottom-6 right-0 text-white container mx-auto flex flex-col gap-3 md:gap-5">
          <p className="text-lg md:text-2xl lg:text-4xl font-bold">
            الفعاليات في SFMA
          </p>
          <p className="lg:text-xl md:text-lg text-[14px] font-semibold">
            تنظم الجمعية فعاليات قيادية في مجال إدارة المرافق، وتوفر خدمات
            متكاملة لإدارة فعاليات الجهات الأخرى.
          </p>
          <div className="flex gap-4">
            <Link
              href={`/${locale}/data_library/`}
              target="_blank"
              className="inline-block"
            >
              <div className="bg-white w-fit text-[var(--main)] font-bold p-2 text-md rounded-lg mb-[18px] mt-[2px] border-2 border-white text-[12px] md:text-[14px] transition-all duration-300 hover:border-[var(--main)] hover:bg-transparent hover:text-white hover:scale-105">
                استكشف فعالياتنا
              </div>
            </Link>
            <Link
              href={`/${locale}/data_library/`}
              target="_blank"
              className="inline-block"
            >
              <div className="bg-transparent w-fit text-white font-bold p-2 text-md rounded-lg mb-[18px] mt-[2px] border-2 border-white text-[12px] md:text-[14px] transition-all duration-300 hover:border-[#61B8A0] hover:bg-white hover:text-[var(--main)] hover:scale-105">
                اطلب إدارة فعالية
              </div>
            </Link>
          </div>
        </div>
      </div>
      <EventPlanning />
      <Events />
    </div>
  );
}
