"use client";
import Image from "next/image";
import { useState } from "react";

const ProvidersCards = () => {
  const [cards_list, set_cards_list] = useState([
    {
      id: 1,
      name: "شركة الحماية المتكاملة",
      description: "خدمات أمنية متكاملة للمنشآت التجارية والسكنية",
      icon_src: `/images/common/cards_icon.png`,
    },
    {
      id: 2,
      name: "شركة الحماية المتكاملة",
      description: "خدمات أمنية متكاملة للمنشآت التجارية والسكنية",
      icon_src: `/images/common/cards_icon.png`,
    },
    {
      id: 3,
      name: "شركة الحماية المتكاملة",
      description: "خدمات أمنية متكاملة للمنشآت التجارية والسكنية",
      icon_src: `/images/common/cards_icon.png`,
    },
    {
      id: 4,
      name: "شركة الحماية المتكاملة",
      description: "خدمات أمنية متكاملة للمنشآت التجارية والسكنية",
      icon_src: `/images/common/cards_icon.png`,
    },
    {
      id: 5,
      name: "شركة الحماية المتكاملة",
      description: "خدمات أمنية متكاملة للمنشآت التجارية والسكنية",
      icon_src: `/images/common/cards_icon.png`,
    },
    {
      id: 6,
      name: "شركة الحماية المتكاملة",
      description: "خدمات أمنية متكاملة للمنشآت التجارية والسكنية",
      icon_src: `/images/common/cards_icon.png`,
    },
    {
      id: 7,
      name: "شركة الحماية المتكاملة",
      description: "خدمات أمنية متكاملة للمنشآت التجارية والسكنية",
      icon_src: `/images/common/cards_icon.png`,
    },
    {
      id: 8,
      name: "شركة الحماية المتكاملة",
      description: "خدمات أمنية متكاملة للمنشآت التجارية والسكنية",
      icon_src: `/images/common/cards_icon.png`,
    },
    {
      id: 9,
      name: "شركة الحماية المتكاملة",
      description: "خدمات أمنية متكاملة للمنشآت التجارية والسكنية",
      icon_src: `/images/common/cards_icon.png`,
    },
  ]);

  return (
    <section className="flex flex-wrap gap-y-8 lg:gap-x-8 gap-x-0">
      {cards_list.map((item) => {
        return (
          <div
            className="bg-[#F6F6F6] shadow w-fit p-4 text-center lg:max-w-[30%] max-w-full mx-auto"
            key={item.id}
          >
            <div className="bg-white p-3 border-[1px] rounded-xl border-[var(--second_main)] w-fit mx-auto">
              <div className="w-10">
                <Image
                  src={item.icon_src}
                  alt="About Us"
                  width={50}
                  height={50}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <p className="font-bold lg:text-xl text-base mt-2">{item.name}</p>
            <p className="text-[#555555] lg:text-base text-[14px] my-1 leading-5 mb-3">
              {item.description}
            </p>
            <div className="cursor-pointer hover:opacity-85 bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white px-3 py-[6px] rounded-lg font-semibold md:min-w-[250px] min-w-full mx-auto">
              عرض التفاصيل
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProvidersCards;
