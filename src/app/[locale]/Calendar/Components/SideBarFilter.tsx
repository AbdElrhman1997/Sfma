"use client";
import Image from "next/image";
import React, { useState } from "react";

const SideBarFilter = () => {
  const [filter_list, set_filter_list] = useState([
    {
      id: 1,
      name: "شهر يناير",
    },
    {
      id: 2,
      name: "شهر فبراير",
    },
    {
      id: 3,
      name: "شهر مارس",
    },
    {
      id: 4,
      name: "شهر أبريل",
    },
    {
      id: 5,
      name: "شهر مايو",
    },
    {
      id: 6,
      name: "شهر يونيو",
    },
    {
      id: 7,
      name: "شهر يوليو",
    },
    {
      id: 8,
      name: "شهر أغسطس",
    },
    {
      id: 9,
      name: "شهر سبتمبر",
    },
    {
      id: 10,
      name: "شهر أكتوبر",
    },
    {
      id: 11,
      name: "شهر نوفمبر",
    },
    {
      id: 12,
      name: "شهر ديسمبر",
    },
  ]);
  return (
    <section className="flex lg:flex-col gap-3 bg-[#F6F6F6] shadow w-full p-4 lg:mb-0 mb-5 lg:overflow-x-hidden overflow-x-auto flex-nowrap">
      {filter_list.map((item) => {
        return (
          <div
            key={item.id}
            className={`rounded-lg flex items-center gap-x-3 w-fit lg:py-3 py-1 lg:px-5 px-2 min-w-[250px] cursor-pointer hover:opacity-80 text-center lg:text-sm text-sm ${
              item.id == 6
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
