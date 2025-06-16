"use client";

import Link from "next/link";
import CustomCalendar from "../../Calendar/Components/CustomCalendar";
import Banner_Section from "./Banner_Section";
import CalenderSection from "./CalenderSection";
import Next_Courses from "./Next_Courses";
import PartenersSection from "./PartenersSection";
import Sfma_Paths from "./Sfma_Paths";
import { useTranslations } from "next-intl";

const TrainingPage = ({ translation, lang }) => {
  const t = useTranslations("common");

  return (
    <div className="w-full">
      <Banner_Section />
      <Sfma_Paths />
      <Next_Courses />

      <h2 className="lg:text-3xl text-xl font-bold text-[#1DAEE5] lg:mb-3 mb-2 text-center">
        {t("training_schedule_title")}
      </h2>
      <p className="text-[#555555] text-center lg:text-base text-sm md:mb-8 mb-4">
        {t("training_schedule_description")}
      </p>

      <CustomCalendar />

      <Link
        href={`/${lang}/Calendar`}
        className="block cursor-pointer hover:opacity-85 bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white lg:px-12 px-6 lg:py-3 py-[6px] rounded-lg font-semibold lg:text-base text-[12px] mt-6 mx-auto"
      >
        {t("view_2025_schedule")}
      </Link>

      <PartenersSection />
    </div>
  );
};

export default TrainingPage;
