"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

const SideBarFilter = () => {
  const t = useTranslations();
  const [filter_list] = useState([
    { id: 1, name: t("months.1") },
    { id: 2, name: t("months.2") },
    { id: 3, name: t("months.3") },
    { id: 4, name: t("months.4") },
    { id: 5, name: t("months.5") },
    { id: 6, name: t("months.6") },
    { id: 7, name: t("months.7") },
    { id: 8, name: t("months.8") },
    { id: 9, name: t("months.9") },
    { id: 10, name: t("months.10") },
    { id: 11, name: t("months.11") },
    { id: 12, name: t("months.12") },
  ]);

  return (
    <section className="flex lg:flex-col gap-3 bg-[#F6F6F6] shadow w-full p-4 lg:mb-0 mb-5 lg:overflow-x-hidden overflow-x-auto flex-nowrap">
      {filter_list.map((item) => {
        return (
          <div
            key={item.id}
            className={`rounded-lg flex items-center gap-x-3 w-fit lg:py-3 py-1 lg:px-5 px-2 min-w-[250px] cursor-pointer hover:opacity-80 text-center lg:text-sm text-sm ${
              item.id === 6
                ? "bg-[var(--second_main)] text-white"
                : "bg-[#DFDFDF]"
            }`}
          >
            <p className="font-semibold w-full">{item.name}</p>
          </div>
        );
      })}
    </section>
  );
};

export default SideBarFilter;
