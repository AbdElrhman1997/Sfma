"use client";
import { useState, useEffect } from "react";
import Select from "react-select";
import { useTranslations } from "next-intl";

const Filters = ({ onChange }) => {
  const t = useTranslations();

  const categories = [
    { value: "courses", label: t("categories.training_courses") },
    { value: "workshop", label: t("categories.workshops") },
  ];

  const paths = [
    { value: "all_paths", label: t("paths.all_paths") },
    { value: "safety_path", label: t("paths.safety_path") },
    { value: "environment_path", label: t("paths.environment_path") },
  ];

  const attendance_state = [
    { value: "both", label: t("attendance_state.both") },
    { value: "in_person", label: t("attendance_state.in_person") },
    { value: "online", label: t("attendance_state.online") },
  ];

  const cities = [
    { value: "all_cities", label: t("cities.all_cities") },
    { value: "Riyadh", label: t("cities.riyadh") },
    { value: "Jeddah", label: t("cities.jeddah") },
    { value: "Dammam", label: t("cities.dammam") },
  ];

  const [filters, setFilters] = useState({
    category: "",
    path: "",
    attendance: "",
    city: "",
  });

  useEffect(() => {
    onChange(filters);
  }, [filters]);

  return (
    <section className="container mx-auto mt-8 ">
      <div className="flex flex-wrap gap-x-3 justify-center mt-7 mb-3 lg:gap-y-0 gap-y-6">
        <Select
          options={categories}
          placeholder={t("placeholders.category")}
          onChange={(option) =>
            setFilters((prev) => ({ ...prev, category: option?.value || "" }))
          }
          className="md:w-[24%] w-full z-40"
          isClearable
        />
        <Select
          options={attendance_state}
          placeholder={t("placeholders.attendance")}
          onChange={(option) =>
            setFilters((prev) => ({ ...prev, attendance: option?.value || "" }))
          }
          className="md:w-[24%] w-full z-40"
          isClearable
        />
        <Select
          options={cities}
          placeholder={t("placeholders.city")}
          onChange={(option) =>
            setFilters((prev) => ({ ...prev, city: option?.value || "" }))
          }
          className="md:w-[24%] w-full z-40"
          isClearable
        />
        <Select
          options={paths}
          placeholder={t("placeholders.path")}
          onChange={(option) =>
            setFilters((prev) => ({ ...prev, path: option?.value || "" }))
          }
          className="md:w-[24%] w-full z-40"
          isClearable
        />
      </div>
    </section>
  );
};

export default Filters;
