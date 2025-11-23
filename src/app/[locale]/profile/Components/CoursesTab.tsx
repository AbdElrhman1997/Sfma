"use client";
import { formatDate } from "@/utils/formatDate";
import translateCities from "@/utils/offline_ccities";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const CoursesTab = () => {
  const t = useTranslations("CoursesTab");
  const lang = useLocale();
  const [data, setData]: any = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("auth_token");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}user-courses-workshops`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Accept-Language": lang || "ar",
          },
        }
      );

      const data = await res.json();
      setData(data?.data || []);
    };

    fetchProfile();
  }, [lang]);

  const CourseCard = ({ course, sectionType, isWorkshop }) => {
    const lang = useLocale();
    const borderColor =
      sectionType === "ended"
        ? "#555555"
        : sectionType === "next"
        ? "var(--main)"
        : "var(--second_main)";
    const gradientFrom =
      sectionType === "ended"
        ? "#888888"
        : sectionType === "next"
        ? "var(--main_gradiant)"
        : sectionType === "now"
        ? "#7ADEC2"
        : "";
    const gradientTo =
      sectionType === "ended"
        ? "#555555"
        : sectionType === "next"
        ? "var(--main)"
        : sectionType === "now"
        ? "#61B8A0"
        : "";

    return (
      <div
        key={course?.id}
        className={`max-w-sm bg-[#F6F6F6] rounded-lg shadow-md p-4 flex flex-col gap-3 border-r-4 border-[${borderColor}] pt-6 pb-5 font-semibold`}
        dir={lang === "en" ? "ltr" : "rtl"}
      >
        {/* Title */}
        <h2 className="text-lg font-bold text-[#555555] truncate">
          {course?.title}
        </h2>

        {/* Date Range */}
        <div className="flex items-center gap-3 text-right">
          <div className="w-5">
            <Image
              src={"/images/logos/date_icon_2.png"}
              alt="session icon"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <p>
            {course?.date
              ? course?.date
              : formatDate(course?.date_from) +
                " - " +
                formatDate(course?.date_to)}
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3 text-right">
          <div className="w-5">
            <Image
              src={"/images/logos/Frame 274 (1).png"}
              alt="session icon"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <p>
            {t("attend_type")} :{" "}
            {course?.type == "offline" ? t("offline") : t("online")}
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3 text-right mb-2">
          <div className="w-5">
            <FaLocationDot className="text-[#555555] text-xl" />
          </div>
          <p>{translateCities(lang)}</p>
        </div>

        {/* Button */}
        <Link
          href={`/${lang}/${
            isWorkshop ? "workshops" : "training"
          }/subscription_${isWorkshop ? "workshop" : "course"}/${course?.id}`}
          className={`block text-center bg-gradient-to-r from-[${gradientFrom}] to-[${gradientTo}] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer`}
        >
          {isWorkshop ? t("go_to_workshop") : t("go_to_course")}
        </Link>
      </div>
    );
  };

  return (
    <section dir={lang === "en" ? "ltr" : "rtl"}>
      {data?.workshop?.now_workshop?.length ||
      data?.course?.now_courses?.length ? (
        <div className="">
          <div className="flex items-center gap-x-5">
            <p className="text-lg md:text-xl lg:text-2xl font-bold">
              {t("currentCoursesWorkshops")}
            </p>
            <div className="bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white px-3 py-[6px] rounded-full lg:text-base text-sm">
              {(data?.course?.now_courses ?? []).length +
                (data?.workshop?.now_workshop ?? []).length}
            </div>
          </div>
          <div className="mt-6 grid lg:grid-cols-3 gap-6">
            {data?.course?.now_courses?.map((course) => (
              <CourseCard
                key={course?.id}
                course={course}
                sectionType="now"
                isWorkshop={false}
              />
            ))}
            {data?.workshop?.now_workshop?.map((course) => (
              <CourseCard
                key={course?.id}
                course={course}
                sectionType="now"
                isWorkshop={true}
              />
            ))}
          </div>
        </div>
      ) : null}

      {data?.workshop?.next_workshop?.length ||
      data?.course?.next_course?.length ? (
        <div className="mb-10">
          <div className="flex items-center gap-x-5">
            <p className="text-lg md:text-xl lg:text-2xl font-bold">
              {t("upcomingCourses")}
            </p>
            <div className="bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white px-3 py-[6px] rounded-full text-[14px]">
              {(data?.course?.next_course ?? []).length +
                (data?.workshop?.next_workshop ?? []).length}
            </div>
          </div>
          <div className="mt-6 grid lg:grid-cols-3 gap-6">
            {data?.course?.next_course?.map((course) => (
              <CourseCard
                key={course?.id}
                course={course}
                sectionType="next"
                isWorkshop={false}
              />
            ))}
            {data?.workshop?.next_workshop?.map((course) => (
              <CourseCard
                key={course?.id}
                course={course}
                sectionType="next"
                isWorkshop={true}
              />
            ))}
          </div>
        </div>
      ) : null}

      {data?.workshop?.ended_workshop?.length ||
      data?.course?.ended_courses?.length ? (
        <div className="mt-10 mb-16">
          <div className="flex items-center gap-x-5">
            <p className="text-lg md:text-xl lg:text-2xl font-bold">
              {t("completedCourses")}
            </p>
            <div className="bg-gradient-to-r from-[#888888] to-[#555555] w-fit text-white px-3 py-[6px] rounded-full text-[14px]">
              {(data?.course?.ended_courses ?? []).length +
                (data?.workshop?.ended_workshop ?? []).length}
            </div>
          </div>
          <div className="mt-6 grid lg:grid-cols-3 gap-6">
            {data?.course?.ended_courses?.map((course) => (
              <CourseCard
                key={course?.id}
                course={course}
                sectionType="ended"
                isWorkshop={false}
              />
            ))}
            {data?.workshop?.ended_workshop?.map((course) => (
              <CourseCard
                key={course?.id}
                course={course}
                sectionType="ended"
                isWorkshop={true}
              />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default CoursesTab;
