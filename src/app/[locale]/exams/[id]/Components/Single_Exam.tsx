"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CommonQuestions from "../../Components/CommonQuestions";

const Single_Exam = ({ id }) => {
  const lang = useLocale();
  const [exam, setCourse]: any = useState({});
  const [loadingCourse, setLoadingCourse] = useState(false);

  useEffect(() => {
    const fetchSinglePath = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}exams/get-exam-details/${id}`;
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
        setLoadingCourse(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoadingCourse(false);
      }
    };

    fetchSinglePath();
  }, [lang, id]);

  const t = useTranslations("common");

  const quick_look = [
    {
      id: 1,
      title: " الرسوم ",
      content: exam?.is_free ? "مجاني" : `${exam?.price} ر.س`,
      icon_src: "/images/logos/money.png",
    },
    {
      id: 2,
      title: " عدد الأسئلة ",
      content: `${exam?.total_questions} سؤال اختيار متعدد`,
      icon_src: "/images/common/icon_1.png",
    },
    {
      id: 3,
      title: " درجة النجاح ",
      content: `درجة النجاح : ${exam?.passing_score}%`,
      icon_src: "/images/common/icon_2.png",
    },
    {
      id: 4,
      title: " مدة الاتاحة ",
      content: ` ${exam?.duration_minutes} ساعة من تاريخ سداد الرسوم`,
      icon_src: "/images/logos/icon_4.png",
    },
  ];

  return !loadingCourse ? (
    <section className="lg:pb-10">
      <div className="relative w-full" dir={lang === "en" ? "ltr" : "rtl"}>
        <div className=" text-[#555555] flex flex-col relative lg:mt-16 mt-8 xl:text-start text-center">
          <div className="container mx-auto flex flex-col justify-end">
            <p className="text-lg md:text-2xl lg:text-4xl font-bold ">
              {exam?.title}
            </p>
            <p className="lg:text-xl md:text-lg text-[11px] font-semibold lg:my-6 my-3">
              {t("p_1")}
            </p>
            <div className="flex gap-4 lg:mb-2 xl:mx-0 mx-auto">
              <Link href={`/${lang}/exams/questions`} className="inline-block">
                <div className="bg-white w-fit text-[var(--main)] border-[[var(--main)]] font-bold lg:p-2 p-1 text-md rounded-lg mb-[18px] mt-[2px] border-2 text-[10px] md:text-[14px] transition-all duration-300  hover:scale-105">
                  اطلب الاختبار الآن
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        {/* Course Overview */}
        <div className="mt-6">
          <h1 className="text-lg lg:text-3xl font-bold mb-3">
            نظرة شاملة عن الاختبار :
          </h1>
          <h3 className="text-[#555555] font-semibold text-sm lg:text-base">
            {exam?.description}
          </h3>

          <div className="bg-[#F6F6F6] p-6 grid lg:grid-cols-2 gap-6 mt-6 mb-8">
            {quick_look?.map((item, index) => (
              <div
                key={index}
                className="bg-[#DFDFDF] gap-3 px-3 rounded-lg flex items-center py-2"
              >
                <div
                  className={` flex justify-center items-center   ${
                    item?.id != 1
                      ? "bg-[var(--second_main)] rounded-full w-8 h-8 p-1"
                      : ""
                  }`}
                >
                  <img
                    src={`${item?.icon_src}`}
                    className={`object-cover h-auto ${
                      item?.id == 1 ? "w-8 p-1" : item?.id != 2 ? "w-4" : "w-2"
                    } transition duration-300`}
                    alt="path image"
                  />
                </div>
                <div className="text-[13px] md:text-base lg:text-lg">
                  <span className="font-bold">{item?.title}: </span>
                  <span>{item?.content}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="mt-6">
          <h1 className="text-lg lg:text-3xl font-bold mb-3">
            الموضوعات التي يغطيها الاختبار تشمل:
          </h1>
          <div className="bg-[#F6F6F6] p-6 grid lg:grid-cols-2 gap-6 mt-6 mb-8">
            {exam?.meta_data?.goals?.map((item, index) => (
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
      </div>

      <div className="flex flex-col items-center  text-center mt-8 ">
        <Link
          className="cursor-pointer hover:opacity-85 bg-gradient-to-r from-[#7ADEC2] to-[#61B8A0] text-white font-bold py-2 px-6 rounded-md text-lg lg:text-2xl"
          href={`/${lang}/exams/questions`}
          onClick={() => {
            localStorage.setItem("choosed_course", JSON.stringify(exam));
          }}
        >
          اطلب الاختبار الآن
        </Link>
        <p className="text-base lg:text-xl mt-3 text-[#555555]">
          سيتم إضافة هذا الاختبار إلى ملفك الشخصي ضمن قسم
          &rdquo;الاختبارات&rdquo; بعد إتمام الدفع بنجاح.
        </p>
      </div>
      <CommonQuestions />
    </section>
  ) : null;
};

export default Single_Exam;
