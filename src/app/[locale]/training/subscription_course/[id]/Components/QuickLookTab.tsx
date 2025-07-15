import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const QuickLookTab = ({ loadingCourse, course }) => {
  const lang = useLocale();
  const t = useTranslations("common");

  const nextSessions = [
    {
      icon: "/images/logos/Date_Icon.png",
      label: "تاريخ بداية الدورة القادمة :",
      value: "15 يونيو 2025",
    },
    {
      icon: "/images/logos/Vector (1).png",
      label: "أخر موعد للتسجيل :",
      value: "12 يونيو 2025",
    },
  ];

  return !loadingCourse ? (
    <section>
      {/* Course Overview */}
      <div className="grid lg:grid-cols-2 mt-10 gap-x-5">
        <div className="">
          <h1 className="text-xl lg:text-3xl font-bold">المدرب</h1>

          <div className="bg-[#F6F6F6] lg:p-6 py-3 px-6 gap-6 mt-6 rounded-lg flex items-center justify-between lg:min-h-40">
            <div className="flex items-center lg:gap-x-5 gap-x-4">
              <div className="rounded-lg">
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}${"content?.user?.logo"}`}
                  alt="About Us"
                  width={500}
                  height={500}
                  className="lg:w-20 w-10 lg:h-20 h-10 object-cover rounded-lg "
                />
              </div>
              <div className="lg:ms-4 text-start">
                <p className="font-bold lg:text-xl text-xs">
                  م. سعيد بن علي القحطاني
                </p>
                <div className="lg:h-[1.5px] h-[1px] bg-black lg:w-14 w-8 my-2"></div>
                <p className="lg:text-base text-[10px] text-[#555555] font-semibold">
                  خبير في إدارة المرافق
                </p>
              </div>
            </div>
            <div className="bg-[var(--second_main)] lg:text-base text-xs lg:w-fit w-32 text-center font-semibold text-white rounded-lg lg:px-3 px-1 py-3 hover:opacity-90 cursor-pointer">
              المزيد عن المدرب
            </div>
          </div>
        </div>
        <div className="lg:mt-0 mt-6">
          <h1 className="text-xl lg:text-3xl font-bold">تقدمك في الدورة</h1>

          <div className="bg-[#F6F6F6] p-6 gap-6 mt-6 rounded-lg space-y-3 lg:min-h-40 font-bold">
            <div className="space-y-2">
              <div className="flex items-center justify-between lg:text-lg text-sm">
                <div>أيام الدورة</div>
                <div>3 يوم</div>
              </div>
              <div className="bg-[var(--second_main)] rounded-2xl w-full lg:h-4 h-3"></div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between lg:text-lg text-sm">
                <div>نسبة حضورك</div>
                <div>100%</div>
              </div>
              <div className="bg-[var(--second_main)] rounded-2xl w-full lg:h-4 h-3"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Contents */}
      <div className="lg:my-8 my-6">
        <h1 className="text-xl lg:text-3xl font-bold mb-3">{t("p_5")}</h1>
        <div className="bg-[#F6F6F6] p-6 grid gap-6 mt-6 rounded-lg">
          {course?.section?.map((item, index) => (
            <div
              key={index}
              className="bg-[#DFDFDF] gap-3 px-2 lg:px-4 py-3 lg:py-5 rounded-lg"
            >
              <div className="text-[14px] md:text-xl lg:text-2xl font-bold mb-1 lg:mb-2">
                {item?.title}
              </div>
              <div className="text-[13px] md:text-lg lg:text-xl">
                {item?.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Objectives */}
      <div>
        <h1 className="text-xl lg:text-3xl font-bold mb-3">{t("p_4")}</h1>
        <div className="bg-[#F6F6F6] p-6 grid lg:grid-cols-2 gap-6 mt-6 mb-8 rounded-lg">
          {course?.meta_data?.goals?.map((item, index) => (
            <div
              key={index}
              className="bg-[#DFDFDF] gap-3 p-3 rounded-lg flex items-center"
            >
              <div className="w-7">
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}${item?.image}`}
                  className="object-cover h-full w-full transition duration-300"
                  alt="path image"
                />
              </div>
              <div className="text-[13px] md:text-base lg:text-lg">
                <span>{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ) : null;
};

export default QuickLookTab;
