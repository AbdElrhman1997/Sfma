"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const QuickLookTab = ({ workshop, loadingWorkshop }) => {
  const lang = useLocale();

  const courseDetails = [
    {
      icon: "/images/logos/streamline_class-lesson-solid (1).png",
      label: "نوع الحضور : ",
      value: workshop?.type,
    },
    {
      icon: "/images/logos/money.png",
      label: "سعر الدورة : ",
      value: workshop?.price + " ريال سعودي ",
    },
    // {
    //   icon: "/images/logos/Vector (1).png",
    //   label: "مدة الدورة : ",
    //   value: "3 أيام ( 12 ساعة إجمالي )",
    // },
    // {
    //   icon: "/images/logos/Vector (2).png",
    //   label: "لغة التدريب : ",
    //   value: "العربية",
    // },
  ];
  const t = useTranslations("common");

  return !loadingWorkshop ? (
    <section>
      <div className="">
        <div className="mt-6">
          <div className="bg-[#F6F6F6] p-6 grid lg:grid-cols-2 gap-6 mt-6 mb-8">
            {courseDetails.map((item, index) => (
              <div
                key={index}
                className="bg-[#DFDFDF] gap-3 p-3 rounded-lg flex items-center"
              >
                <div className="w-7">
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <div className="text-[13px] md:text-base lg:text-lg">
                  <span className="font-bold">{item.label}</span>
                  <span>{item.value}</span>
                  {/* {item.mid && <span className="font-bold">{item.mid}</span>}
                  {item.value2 && <span>{item.value2}</span>} */}
                </div>
              </div>
            ))}
          </div>
        </div>
        {workshop?.description ? (
          <div className="mt-6 bg-[#F6F6F6] p-6">
            <p className="font-bold lg:text-xl">{t("p_13")}</p>
            <p className="text-justify mt-3 leading-7 font-semibold lg:text-base text-[14px]">
              {workshop?.description}
            </p>
          </div>
        ) : null}

        {workshop?.workshop_details ? (
          <div className="mt-6 lg:p-6 p-2">
            <p className="font-extrabold lg:text-xl mb-6"> {t("p_14")}</p>
            <div className="flex justify-start flex-wrap xl:gap-16 gap-4">
              {workshop?.workshop_details?.map((workshop) => {
                return (
                  <div className="flex gap-4" key={workshop?.id}>
                    <div className="bg-[var(--main)] p-4 lg:w-13 w-10 lg:h-13 h-10 text-white lg:text-3xl text-lg flex items-center justify-center rounded-full">
                      {workshop?.id}
                    </div>
                    <div>
                      <p className="font-bold lg:text-lg text-[14px]">
                        {workshop?.title}
                      </p>
                      <p className="lg:text-base text-[13px]">
                        {workshop?.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  ) : null;
};

export default QuickLookTab;
