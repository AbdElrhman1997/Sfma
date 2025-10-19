"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

const SideBarFilter = ({ selectedMonth, onMonthChange }) => {
  const t = useTranslations();
  const months = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: t(`months.${i + 1}`),
  }));

  return (
    <section className="flex lg:flex-col gap-3 bg-[#F6F6F6] shadow w-full p-4 lg:overflow-x-hidden overflow-x-auto flex-nowrap">
      {months.map((month) => (
        <div
          key={month.id}
          onClick={() => onMonthChange(month.id)}
          className={`rounded-lg text-center px-4 py-2 cursor-pointer font-semibold transition-all duration-300 ${
            selectedMonth === month.id
              ? "bg-[var(--second_main)] text-white shadow-md"
              : "bg-[#DFDFDF] hover:bg-[#e0e0e0]"
          }`}
        >
          {month.name}
        </div>
      ))}
    </section>
  );
};

export default SideBarFilter;
