import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const CoursesSection = () => {
  const t = useTranslations("HomePage.CoursesSection");
  const lang = useLocale();
  const courses = [
    {
      code: "SSFP",
      titleAr: "دورة محترف استدامة المرافق",
      titleEn: "SFMA Sustainability Facility Professional",
    },
    {
      code: "SCFM",
      titleAr: "دورة مدير مرافق معتمد",
      titleEn: "SFMA Certified Facility Manager",
    },
    {
      code: "SFMP",
      titleAr: "دورة مدير مرافق محترف",
      titleEn: "SFMA Facility Management Professional",
    },
  ];

  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-between gap-8 container mx-auto pt-10 ${
        lang == "en" ? "md:text-left" : "md:text-right"
      } text-center`}
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div className="w-full flex flex-col justify-center text-center">
        <h2 className="text-4xl font-bold text-[#1DAEE5] mb-4">{t("title")}</h2>
        <p className="text-black text-center mb-6">{t("description")}</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center py-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-[#1DAEE5] text-white rounded-lg w-full md:w-1/3 shadow-lg overflow-hidden"
            >
              <div className="p-6 flex flex-col items-center justify-center py-20">
                <h2 className="text-4xl font-bold">{course.code}</h2>
              </div>
              <div className="bg-[#61B8A0] text-center py-3">
                <p className="text-sm font-semibold text-white">
                  {course.titleAr}
                </p>
                <p className="text-xs text-white">{course.titleEn}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="cursor-pointer flex items-center mx-auto bg-teal-500 text-white py-[2px] px-[2px] pe-4 rounded-full gap-3 hover:bg-teal-600 transition w-fit">
          <div className="w-12 h-12 bg-[#1DAEE5] text-white flex items-center justify-center rounded-full border-2 border-white">
            {lang == "en" ? (
              <BsArrowLeft className="font-bold" />
            ) : (
              <BsArrowRight className="font-bold" />
            )}
          </div>
          <span className="text-lg font-bold text-center">
            {t("read_more")}
          </span>
        </button>
      </div>
    </section>
  );
};

export default CoursesSection;
