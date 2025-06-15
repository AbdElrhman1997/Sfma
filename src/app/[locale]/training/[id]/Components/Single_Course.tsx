"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Single_Course = ({ translation, id }) => {
  const lang = useLocale();
  const [course, setCourse]: any = useState({});
  const [loadingCourse, setLoadingCourse] = useState(false);

  useEffect(() => {
    const fetchSinglePath = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}courses/get-courses-details/${id}`;
      try {
        setLoadingCourse(true);
        const res = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Accept-Language": lang || "ar",
          },
          cache: "no-store",
        });
        const data = await res.json();
        setCourse(data?.data || {});
        console.log(data?.data);
        setLoadingCourse(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoadingCourse(false);
      }
    };

    fetchSinglePath();
  }, [lang, id]);

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
              {course?.title}
            </p>
            <p className="lg:text-xl md:text-lg text-[11px] font-semibold lg:my-6 my-3">
              مقدمة من جمعية إدارة المرافق السعودية
            </p>
            <div className="flex gap-4 mb-10">
              <Link href={`/${lang}/events/all`} className="inline-block">
                <div className="bg-white w-fit text-[var(--main)] font-bold lg:p-2 p-1 text-md rounded-lg mb-[18px] mt-[2px] border-2 border-white text-[10px] md:text-[14px] transition-all duration-300  hover:scale-105">
                  سجل في الدورة الآن!
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        {/* Course Overview */}
        <div className="mt-6">
          <h1 className="text-xl lg:text-3xl font-bold mb-3">
            نظرة شاملة عن الدورة :
          </h1>
          <h3 className="text-[#555555] font-semibold text-sm lg:text-base">
            {course?.description}
          </h3>

          <div className="bg-[#F6F6F6] p-6 grid lg:grid-cols-2 gap-6 mt-6 mb-8">
            {course?.meta_data?.general?.map((item, index) => (
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
                  <span className="font-bold">{item?.title}: </span>
                  <span>{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="mt-6">
          <h1 className="text-xl lg:text-3xl font-bold mb-3">أهداف التعلم :</h1>
          <div className="bg-[#F6F6F6] p-6 grid lg:grid-cols-2 gap-6 mt-6 mb-8">
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

        {/* Course Contents */}
        <div className="mt-6">
          <h1 className="text-xl lg:text-3xl font-bold mb-3">
            محتويات الدورة :
          </h1>
          <div className="bg-[#F6F6F6] p-6 grid gap-6 mt-6 mb-8">
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

        {/* Next Session Dates */}
        <div className="mt-6">
          <h1 className="text-xl lg:text-3xl font-bold mb-3">
            مواعيد الدورة القادمة :
          </h1>
          <div className="bg-[#F6F6F6] p-6 grid lg:grid-cols-2 gap-6 mt-6 mb-8">
            {nextSessions.map((item, index) => (
              <div
                key={index}
                className="bg-[#DFDFDF] gap-3 p-3 rounded-lg flex items-center"
              >
                <div className="w-7">
                  <Image
                    src={item.icon}
                    alt="session icon"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <div className="text-[13px] md:text-base lg:text-lg">
                  <span className="font-bold">{item.label}</span>
                  <span>
                    {index == 0 ? course?.date_from : course?.date_to}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Dates */}
        <div className="mt-6">
          <h1 className="text-xl lg:text-3xl font-bold mb-3">الشهادات :</h1>
          <div className="bg-[#F6F6F6] p-6 grid gap-6 mt-6 mb-8">
            {course?.certificates?.map((item, index) => (
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
      </div>
      <div className="bg-[#F6F6F6] py-10 flex flex-col items-center text-center">
        <p className="text-2xl lg:text-4xl mb-3">
          <span className="font-bold">{course?.online_price}</span> ر.س
        </p>
        <p className="text-base lg:text-xl mb-4 text-[#555555]">
          شامل المواد التدريبية والشهادات المعتمدة
        </p>
        <div className="flex items-center gap-5">
          <div className="w-14">
            <Image
              src={"/images/logos/Visa_Inc._logo 1.png"}
              alt="session icon"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <div className="w-11">
            <Image
              src={"/images/logos/Mastercard-logo 1.png"}
              alt="session icon"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <div className="w-14">
            <Image
              src={"/images/logos/Apple_Pay_logo 1.png"}
              alt="session icon"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
        <p className="text-base lg:text-xl mt-3 text-[#555555]">
          يوجد خصم للمجموعات
        </p>
      </div>
      <div className="flex flex-col items-center  text-center mt-8 mb-16">
        <Link
          className="cursor-pointer hover:opacity-85 bg-gradient-to-r from-[#7ADEC2] to-[#61B8A0] text-white font-bold py-2 px-6 rounded-md text-lg lg:text-2xl"
          href={`/${lang}/training/course_register`}
          onClick={() => {
            localStorage.setItem("choosed_course", JSON.stringify(course));
          }}
        >
          سجل الآن
        </Link>
        <p className="text-base lg:text-xl mt-3 text-[#555555]">
          المقاعد محدودة - احجز مقعدك الآن!
        </p>
      </div>
    </section>
  ) : null;
};

export default Single_Course;
