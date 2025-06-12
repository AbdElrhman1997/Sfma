"use client";
import { useState } from "react";
import Select from "react-select";

const Filters = () => {
  const categories: any = [
    {
      value: "دورات تدريبية",
      label: "دورات تدريبية",
    },
    {
      value: "ورش عمل",
      label: "ورش عمل",
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState(null);

  const paths: any = [
    {
      value: "عرض جميع المسارات",
      label: "عرض جميع المسارات",
    },
    {
      value: "مسار الأمن والسلامة",
      label: "مسار الأمن والسلامة",
    },
    {
      value: "مسار الحفاظ على البيئة",
      label: "مسار الحفاظ على البيئة",
    },
  ];
  const [selectedPath, setSelectedPath] = useState(null);

  const attendace_state: any = [
    {
      value: "حضوري - أون لاين",
      label: "حضوري - أون لاين",
    },
    {
      value: "حضوري",
      label: "حضوري",
    },
    {
      value: "أون لاين",
      label: "أون لاين",
    },
  ];
  const [selectedAttendaceState, setSelectedAttendaceState] = useState(null);

  const citicies: any = [
    {
      value: "جميع المدن",
      label: "جميع المدن",
    },
    {
      value: "الرياض",
      label: "الرياض",
    },
    {
      value: "جدة",
      label: "جدة",
    },
    {
      value: "الدمام",
      label: "الدمام",
    },
  ];
  const [selectedCiticies, setSelectedCiticies] = useState(null);

  return (
    <section className="container mx-auto mt-8">
      <div className="flex flex-wrap gap-x-3 justify-center mt-7 mb-3">
        <Select
          options={categories.map((cat) => ({
            value: cat.value,
            label: cat.label,
          }))}
          placeholder={"دورات تدريبية"}
          onChange={(option) => {
            setSelectedCategory(option);
          }}
          className="md:w-[24%] w-full md:mb-0 mb-2"
          isClearable
        />
        <Select
          options={attendace_state.map((cat) => ({
            value: cat.value,
            label: cat.label,
          }))}
          placeholder={"حضوري - أون لاين"}
          onChange={(option) => {
            setSelectedPath(option);
          }}
          className="md:w-[24%] w-full md:mt-0 mt-4 md:mb-0 mb-2"
          isClearable
        />
        <Select
          options={citicies.map((cat) => ({
            value: cat.value,
            label: cat.label,
          }))}
          placeholder={"جميع المدن"}
          onChange={(option) => {
            setSelectedAttendaceState(option);
          }}
          className="md:w-[24%] w-full md:mt-0 mt-4 md:mb-0 mb-2"
          isClearable
        />
        <Select
          options={paths.map((cat) => ({
            value: cat.value,
            label: cat.label,
          }))}
          placeholder={"عرض جميع المسارات"}
          onChange={(option) => {
            setSelectedCiticies(option);
          }}
          className="md:w-[24%] w-full md:mt-0 mt-4 md:mb-0 mb-2"
          isClearable
        />
      </div>
    </section>
  );
};

export default Filters;
