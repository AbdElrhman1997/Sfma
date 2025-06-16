"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Memberships() {
  const t = useTranslations("memberships");
  const lang = useLocale();

  const content = [
    {
      id: 1,
      key: "institutions",
      link: "institutions",
      src: "/images/common/memberships_1.png",
    },
    {
      id: 2,
      key: "individuals",
      link: "individuals",
      src: "/images/common/memberships_2.png",
    },
    {
      id: 3,
      key: "volunteers",
      link: "volunteers",
      src: "/images/common/memberships_3.png",
    },
  ];

  const renderCourseCard = (item) => (
    <div
      className="relative bg-[#F6F6F6] rounded-xl shadow-md text-center px-6 pt-10 pb-6 w-full max-w-xs mb-12 border-b-4 border-[var(--main)] md:mx-0 mx-auto lg:min-w-[32%]"
      key={item.id}
      dir="rtl"
    >
      {/* Top icon */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center z-10">
        <Image
          src={item.src}
          alt={t(item.key)}
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-[#1DAEE5] font-bold text-xl xl:mb-8 xl:mt-4 mt-0 mb-4">
        {t(item.key)}
      </h3>

      {/* Button */}
      <Link href={`/${lang}/${item.link}`}>
        <div className="cursor-pointer hover:opacity-85 bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white px-6 py-[6px] rounded-lg font-semibold lg:text-base text-[12px] mx-auto">
          {t("read_more")}
        </div>
      </Link>
    </div>
  );

  return (
    <div
      className={`p-0 xl:mt-14 xl:mb-8 mt-8 container mx-auto`}
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <h2 className="lg:text-3xl text-xl font-bold text-[#1DAEE5] lg:mb-3 mb-2 text-center">
        {t("title")}
      </h2>
      <p className="text-[#555555] text-center mb-16 lg:text-base text-sm">
        {t("description")}
      </p>

      <div className="flex flex-wrap justify-between gap-6">
        {content.map((item) => renderCourseCard(item))}
      </div>
    </div>
  );
}
