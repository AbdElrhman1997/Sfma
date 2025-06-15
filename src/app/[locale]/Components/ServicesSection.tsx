"use client";
import { useState } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import Link from "next/link";

const services = [
  { id: 1, text: "التدريب والتطوير", link: "training" },
  { id: 2, text: "العضويات", link: "institutions" },
  { id: 3, text: "التقارير والدراسات", link: "data_library" },
  { id: 4, text: "إدارة الفعاليات", link: "events" },
  { id: 5, text: "الاستشارات", link: "consultants" },
];

export default function ServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const lang = useLocale();

  return (
    <section
      className=" py-10 px-4 relative"
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div className="bg-[#F6F6F6] absolute left-0 top-0 w-full lg:h-[65%] h-full -z-10"></div>
      <div className="container mx-auto">
        <h2 className="lg:text-3xl text-xl font-bold text-[#1DAEE5] lg:mb-3 mb-2 text-center md:pt-4">
          خدماتنا
        </h2>
        <p className="text-[#555555] text-center mb-8 lg:text-base text-sm">
          نقدّم لك حلولاً متكاملة لدعمك في تحقيق أعلى مستويات الكفاءة
          والاحترافية.
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-10 gap-4">
          {services.map((service, index) => {
            return (
              <Link
                key={service.id}
                href={`/${lang}/${service.link}`}
                className={`col-span-10 md:col-span-5 lg:col-span-2 rounded-xl flex flex-col items-center justify-center py-7 cursor-pointer shadow-lg transform transition duration-300 hover:scale-105 bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] hover:from-[var(--second_main_gradiant)] hover:to-[var(--second_main)]`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  src={`/images/home_page/services_${service.id}.png`}
                  alt={service.text}
                  width={60}
                  height={60}
                  className="mb-4"
                />
                <p className="font-bold text-white text-center text-base md:text-lg lg:text-xl">
                  {service.text}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
