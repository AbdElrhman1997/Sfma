"use client"; // Required for client-side interactivity

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Memberships() {
  const t = useTranslations("Training");
  const lang = useLocale();
  const content = [
    {
      id: 1,
      name: "عضويات مؤسسات",
      link: "institutions",
      src: "/images/common/memberships_1.png",
    },
    {
      id: 2,
      name: "عضويات أفراد",
      link: "individuals",
      src: "/images/common/memberships_2.png",
    },
    {
      id: 3,
      name: "عضويات متطوعين",
      link: "volunteers",
      src: "/images/common/memberships_3.png",
    },
  ];

  const renderCourseCard = (item) => (
    <div
      className="relative bg-[#F6F6F6] rounded-xl shadow-md text-center px-6 pt-10 pb-6 w-full max-w-xs mx-auto mb-12 border-b-4 border-[var(--main)]"
      dir="rtl"
    >
      {/* Top icon */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center z-10">
        <Image
          src={item.src} // replace with your icon
          alt="عضويات"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-[#1DAEE5] font-bold text-xl mb-4">{item.name}</h3>

      {/* Button */}
      <Link href={`/${lang}/${item.link}`}>
        <div className="cursor-pointer hover:opacity-85 bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white px-6 py-[6px] rounded-lg font-semibold lg:text-base text-[12px] mx-auto">
          قراءة المزيد
        </div>
      </Link>
    </div>
  );

  return (
    <div dir={lang === "en" ? "ltr" : "rtl"} className={`p-0 mt-8`}>
      <h2 className="text-[26px] font-bold text-[#1DAEE5] text-center">
        {t("title")}
      </h2>
      <h4 className="text-[18px] text-[#898989] mb-16 text-center">
        {t("sub_title")}
      </h4>

      <div className="flex flex-wrap justify-center gap-6">
        {content?.map((item) => {
          return renderCourseCard(item);
        })}
      </div>
    </div>
  );
}
