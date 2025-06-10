"use client";
import { useState } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";

const services = [
  { id: 1, text: "التدريب والتطوير" },
  { id: 2, text: "العضويات" },
  { id: 3, text: "التقارير والدراسات" },
  { id: 4, text: "إدارة الفعاليات" },
  { id: 5, text: "الاستشارات" },
];

export default function ServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const lang = useLocale();

  return (
    <section
      className="bg-gradient-to-b from-[#f6f6f6ad] to-white py-10 px-4  "
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div className="container mx-auto">
        <h2 className="lg:text-3xl text-xl font-bold text-[#1DAEE5] mb-2 text-center md:pt-4">
          خدماتنا
        </h2>
        <p className="text-[#555555] text-center mb-8 lg:text-base text-sm">
          نقدّم لك حلولاً متكاملة لدعمك في تحقيق أعلى مستويات الكفاءة
          والاحترافية.
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-10 gap-4">
          {services.map((service, index) => {
            const isGreen =
              hoveredIndex === null
                ? service.id % 2 == 0
                : hoveredIndex === index;

            return (
              <div
                key={service.id}
                className={`col-span-10 md:col-span-5 lg:col-span-2 rounded-xl flex flex-col items-center justify-center py-7 cursor-pointer shadow-lg transform transition duration-300 hover:scale-105
              ${isGreen ? "bg-[#61B8A0]" : "bg-[#1DAEE5]"}`}
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
