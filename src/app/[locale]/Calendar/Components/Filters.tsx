"use client";

import { useState } from "react";
import Select from "react-select";
import { useTranslations } from "next-intl";

const Filters = () => {
  const t = useTranslations();

  const categories = [
    {
      value: t("categories.training_courses"),
      label: t("categories.training_courses"),
    },
    {
      value: t("categories.workshops"),
      label: t("categories.workshops"),
    },
  ];

  const paths = [
    {
      value: t("paths.all_paths"),
      label: t("paths.all_paths"),
    },
    {
      value: t("paths.safety_path"),
      label: t("paths.safety_path"),
    },
    {
      value: t("paths.environment_path"),
      label: t("paths.environment_path"),
    },
  ];

  const attendance_state = [
    {
      value: t("attendance_state.both"),
      label: t("attendance_state.both"),
    },
    {
      value: t("attendance_state.in_person"),
      label: t("attendance_state.in_person"),
    },
    {
      value: t("attendance_state.online"),
      label: t("attendance_state.online"),
    },
  ];

  const cities = [
    {
      value: t("cities.all_cities"),
      label: t("cities.all_cities"),
    },
    {
      value: t("cities.riyadh"),
      label: t("cities.riyadh"),
    },
    {
      value: t("cities.jeddah"),
      label: t("cities.jeddah"),
    },
    {
      value: t("cities.dammam"),
      label: t("cities.dammam"),
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPath, setSelectedPath] = useState(null);
  const [selectedAttendanceState, setSelectedAttendanceState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <section className="container mx-auto mt-8">
      <div className="flex flex-wrap gap-x-3 justify-center mt-7 mb-3">
        <Select
          options={categories}
          placeholder={t("placeholders.category")}
          onChange={(option) => setSelectedCategory(option)}
          className="md:w-[24%] w-full md:mb-0 mb-2"
          isClearable
        />

        <Select
          options={attendance_state}
          placeholder={t("placeholders.attendance")}
          onChange={(option) => setSelectedAttendanceState(option)}
          className="md:w-[24%] w-full md:mt-0 mt-4 md:mb-0 mb-2"
          isClearable
        />

        <Select
          options={cities}
          placeholder={t("placeholders.city")}
          onChange={(option) => setSelectedCity(option)}
          className="md:w-[24%] w-full md:mt-0 mt-4 md:mb-0 mb-2"
          isClearable
        />

        <Select
          options={paths}
          placeholder={t("placeholders.path")}
          onChange={(option) => setSelectedPath(option)}
          className="md:w-[24%] w-full md:mt-0 mt-4 md:mb-0 mb-2"
          isClearable
        />
      </div>
    </section>
  );
};

export default Filters;
