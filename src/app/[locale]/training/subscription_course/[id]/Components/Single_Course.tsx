"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import QuickLookTab from "./QuickLookTab";
import CoursesTab from "./CoursesTab";
import ExamsTab from "./ExamsTab";
import CertificatesTab from "./CertificatesTab";

const Single_Course = ({ translation, id }) => {
  const lang = useLocale();
  const [course, setCourse]: any = useState({});
  const [loadingCourse, setLoadingCourse] = useState(false);

  useEffect(() => {
    const fetchSinglePath = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}courses/get-courses-details/${id}`;
      const token = localStorage.getItem("auth_token");

      try {
        setLoadingCourse(true);
        const res = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Accept-Language": lang || "ar",
            Authorization: `Bearer ${token}`,
          },
          cache: "no-store",
        });
        const data = await res.json();
        setCourse(data?.data || {});
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

  const t = useTranslations("common");

  const [activeTab, setActiveTab] = useState("quick_look");

  const tabs = [
    { id: "quick_look", label: "نظرة عامة" },
    // { id: "courses", label: "المواد الدراسية" },
    // { id: "exams", label: "الاختبار النهائي" },
    // { id: "certifications", label: "الشهادات" },
  ];

  return !loadingCourse ? (
    <section className="">
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
              {t("p_1")}
            </p>
            <div className="flex gap-4 mb-10">
              <div className="inline-block">
                <div className="bg-transparent w-fit text-white font-bold lg:p-2 p-1 text-md rounded-lg mb-[18px] mt-[2px] border-2 border-white text-[10px] md:text-[14px] transition-all duration-300 hover:border-[var(--main)] hover:bg-white hover:text-[var(--main)] hover:scale-105">
                  أنت مشترك
                </div>
              </div>
              <div className="inline-block">
                <div className="bg-white w-fit text-[var(--main)] font-bold lg:p-2 p-1 text-md rounded-lg mb-[18px] mt-[2px] border-2 border-white text-[10px] md:text-[14px] transition-all duration-300  hover:scale-105">
                  حضورك : 100%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white  shadow-md">
        <nav className=" lg:h-14 h-10 container flex justify-start items-end w-full">
          <div className="flex space-x-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-[#898989] hover:text-black lg:text-lg text-sm  lg:pb-2 pb-1 px-1 font-bold transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? "text-black border-b-[3px] border-[var(--second_main)]"
                    : ""
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
      <div className="container mx-auto">
        {activeTab == "quick_look" ? (
          <QuickLookTab course={course} loadingCourse={loadingCourse} />
        ) : activeTab == "courses" ? (
          <CoursesTab />
        ) : activeTab == "exams" ? (
          <ExamsTab />
        ) : (
          <CertificatesTab />
        )}
      </div>
    </section>
  ) : null;
};

export default Single_Course;
