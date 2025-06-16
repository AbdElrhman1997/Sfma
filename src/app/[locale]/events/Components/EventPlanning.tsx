"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const EventPlanning = () => {
  const lang = useLocale();
  const t = useTranslations("event_planning");

  const [cards_list] = useState([
    {
      id: 1,
      name: t("card_1_title"),
      description: t("card_1_desc"),
      icon_src: `/images/common/event_icon_1.png`,
    },
    {
      id: 2,
      name: t("card_2_title"),
      description: t("card_2_desc"),
      icon_src: `/images/common/event_icon_2.png`,
    },
    {
      id: 3,
      name: t("card_3_title"),
      description: t("card_3_desc"),
      icon_src: `/images/common/event_icon_3.png`,
    },
  ]);

  return (
    <section
      className="container mx-auto mt-4"
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <div>
        <h2 className="lg:text-3xl text-xl font-bold text-[#1DAEE5] lg:mb-3 mb-2 text-center mt-9">
          {t("title")}
        </h2>
        <p className="text-[#555555] text-center lg:text-base text-sm md:mb-8 mb-4">
          {t("description")}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 mt-8 gap-8">
        {cards_list.map((item) => (
          <div
            className="bg-[#F6F6F6] shadow p-4 text-center mx-auto w-full"
            key={item.id}
          >
            <div className="w-16 mx-auto">
              <Image
                src={item.icon_src}
                alt="Event Icon"
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
        ))}
      </div>
      <Link
        href="mailto:example@sfma.org"
        className="cursor-pointer block mx-auto hover:opacity-85 mt-8 text-center bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white px-3 py-2 rounded-lg font-semibold"
      >
        {t("cta")}
      </Link>
    </section>
  );
};

export default EventPlanning;
