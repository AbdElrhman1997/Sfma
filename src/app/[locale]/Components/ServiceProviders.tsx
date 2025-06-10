"use client"; // Required for client-side interactivity

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ServiceProviders() {
  const t = useTranslations("Training");
  const lang = useLocale();
  const content = [
    {
      id: 1,
      name: "برايس ووترهاوس كوبرز",
      description:
        "نساعد المؤسسات على بناء الثقة وإعادة الابتكار، لتحويل التعقيد إلى ميزة تنافسية. وبينما يُعيد الشرق الأوسط تعريف النمو من خلال مبادرات طموحة.",
      link: "institutions",
      src: "/images/common/service_provider.png",
    },
    {
      id: 2,
      name: "برايس ووترهاوس كوبرز",
      description:
        "نساعد المؤسسات على بناء الثقة وإعادة الابتكار، لتحويل التعقيد إلى ميزة تنافسية. وبينما يُعيد الشرق الأوسط تعريف النمو من خلال مبادرات طموحة.",
      link: "individuals",
      src: "/images/common/service_provider.png",
    },
    {
      id: 3,
      name: "برايس ووترهاوس كوبرز",
      description:
        "نساعد المؤسسات على بناء الثقة وإعادة الابتكار، لتحويل التعقيد إلى ميزة تنافسية. وبينما يُعيد الشرق الأوسط تعريف النمو من خلال مبادرات طموحة.",
      link: "volunteers",
      src: "/images/common/service_provider.png",
    },
  ];

  const renderCourseCard = (item) => (
    <div
      className="relative bg-[#F6F6F6] rounded-xl shadow-md text-center px-6 pt-16 pb-6 w-full max-w-xs mx-auto mb-12 border-b-4 border-[var(--main)]"
      dir="rtl"
    >
      {/* Top icon */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 flex items-center justify-center z-10">
        <Image
          src={item.src} // replace with your icon
          alt="عضويات"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="font-bold lg:text-xl text-lg mb-2">{item.name}</h3>
      <h3 className="lg:text-sm text-xs mb-4">{item.description}</h3>

      {/* Button */}
      <Link href={`/${lang}/${item.link}`}>
        <div className="bg-transparent w-fit text-[var(--main)] font-bold p-2 text-md rounded-lg mx-auto mt-[2px] border-2 border-[var(--main)] text-[12px] md:text-[14px] transition-all duration-300 hover:border-[var(--main)] hover:bg-[var(--main)] hover:text-white hover:scale-105">
          قراءة المزيد
        </div>
      </Link>
    </div>
  );

  return (
    <div dir={lang === "en" ? "ltr" : "rtl"} className={`p-0 mt-8`}>
      <h2 className="text-[26px] font-bold text-[#1DAEE5] text-center">
        مقدّمو الخدمات المعتمدون
      </h2>
      <h4 className="text-[18px] text-[#898989] mb-16 text-center">
        تعرف على مقدّمي خدمات يساهمون في دعم المجتمع المهني عبر مجالات متخصصة
      </h4>

      <div className="flex flex-wrap justify-center gap-6">
        {content?.map((item) => {
          return renderCourseCard(item);
        })}
      </div>
    </div>
  );
}
