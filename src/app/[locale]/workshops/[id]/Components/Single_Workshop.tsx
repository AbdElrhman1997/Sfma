"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Single_Workshop = ({ translation, id }) => {
  const lang = useLocale();

  const [workshop, setWorkshop]: any = useState({});
  const [loadingWorkshop, setLoadingWorkshop] = useState(false);
  useEffect(() => {
    const fetchSinglePath = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}workshops/get-workshop-details/${id}`;
      try {
        setLoadingWorkshop(true);
        const res = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Accept-Language": lang || "ar",
          },
          cache: "no-store",
        });
        const data = await res.json();
        setWorkshop(data?.data || {});
        setLoadingWorkshop(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoadingWorkshop(false);
      }
    };

    fetchSinglePath();
  }, [lang, id]);

  const courseDetails = [
    {
      icon: "/images/logos/streamline_class-lesson-solid (1).png",
      label: "نوع الحضور : ",
      value: workshop?.type,
    },
    {
      icon: "/images/logos/Group 107.png",
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
      <div className="relative w-full" dir={lang === "en" ? "ltr" : "rtl"}>
        <div className=" text-white flex flex-col relative bg-[#1DAEE5D9]">
          <div className="w-full" dir={lang === "en" ? "ltr" : "rtl"}>
            <div className="absolute top-0 left-0 w-full -z-10">
              <Image
                src="/images/training/Single_Course_Bg.png"
                alt="About Us"
                width={1920}
                height={1080}
                className="w-full h-52 md:h-60 lg:h-72 xl:h-80 xl:max-h-96 object-cover"
              />
            </div>
          </div>
          <div className="container mx-auto h-52 md:h-60 lg:h-72 xl:min-h-80 flex flex-col justify-end">
            <p className="text-lg md:text-2xl lg:text-4xl font-bold ">
              {workshop?.title}
            </p>
            <p className="lg:text-xl md:text-lg text-[11px] font-semibold lg:my-6 my-3">
              {t("p_1")}
            </p>
            <div className="flex gap-4 mb-10">
              <Link
                href={`/${lang}/workshops/workshop_register`}
                className="inline-block"
                onClick={() => {
                  localStorage.setItem(
                    "choosed_workshop",
                    JSON.stringify(workshop)
                  );
                }}
              >
                <div className="bg-white w-fit text-[var(--main)] font-bold lg:p-2 p-1 text-md rounded-lg mb-[18px] mt-[2px] border-2 border-white text-[10px] md:text-[14px] transition-all duration-300  hover:scale-105">
                  {t("p_12")}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
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
      <div className="flex flex-col items-center  text-center mt-8 mb-16">
        <Link
          className="block cursor-pointer hover:opacity-85 bg-gradient-to-r from-[#7ADEC2] to-[#61B8A0] text-white font-bold py-2 px-6 rounded-md text-base lg:text-xl"
          href={`/${lang}/workshops/workshop_register`}
          onClick={() => {
            localStorage.setItem("choosed_workshop", JSON.stringify(workshop));
          }}
        >
          {t("p_15")}
        </Link>
        <p className="text-base lg:text-xl mt-3 text-[#555555]">
          {t("p_17")} {workshop?.seats} {t("p_16")}
        </p>
      </div>
    </section>
  ) : null;
};

export default Single_Workshop;
