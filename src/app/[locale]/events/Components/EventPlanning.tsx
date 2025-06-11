"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const EventPlanning = () => {
  const lang = useLocale();
  const [cards_list, set_cards_list] = useState([
    {
      id: 1,
      name: "تخطيط وتنفيذ شامل",
      description: "نتولى جميع مراحل تنظيم الفعالية بدقة واحترافية عالية",
      icon_src: `/images/common/event_icon_1.png`,
    },
    {
      id: 2,
      name: "فريق متخصص في إدارة الفعاليات",
      description: "نتولى جميع مراحل تنظيم الفعالية بدقة واحترافية عالية",
      icon_src: `/images/common/event_icon_2.png`,
    },
    {
      id: 3,
      name: "تنظيم وفق أعلى المعايير",
      description: "التزام بمعايير الجودة العالمية في تنظيم الفعاليات",
      icon_src: `/images/common/event_icon_3.png`,
    },
  ]);

  return (
    <section className="container mx-auto mt-4">
      <div>
        <h2 className="lg:text-3xl text-xl font-bold text-[#1DAEE5] lg:mb-3 mb-2 text-center mt-9">
          خدمة تنظيم الفعاليات
        </h2>
        <p className="text-[#555555] text-center lg:text-base text-sm md:mb-8 mb-4">
          تمتلك الجمعية السعودية لإدارة المرافق خبرة واسعة في تخطيط وتنفيذ
          الفعاليات بمختلف أنواعها، بما في ذلك المؤتمرات، المعارض، الورش،
          والندوات. نوفّر حلولًا متكاملة لإدارة الحدث من الفكرة حتى الإنجاز.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 mt-8 gap-8">
        {cards_list.map((item) => {
          return (
            <div
              className="bg-[#F6F6F6] shadow p-4 text-center mx-auto w-full"
              key={item.id}
            >
              <div className="w-16 mx-auto">
                <Image
                  src={item.icon_src}
                  alt="About Us"
                  width={50}
                  height={50}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="font-bold lg:text-xl text-base mt-4 mb-2">
                {item.name}
              </p>
              <p className="text-[#555555] lg:text-base text-[14px] my-1 leading-5 mb-3">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
      <Link
        href="mailto:example@sfma.org"
        className="cursor-pointer block mx-auto hover:opacity-85 mt-8 text-center bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white px-3 py-2 rounded-lg font-semibold"
      >
        اطلب تنظيم فعالية
      </Link>
    </section>
  );
};

export default EventPlanning;
