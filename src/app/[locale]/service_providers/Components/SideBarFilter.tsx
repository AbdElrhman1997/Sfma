"use client";
import Image from "next/image";
import React, { useState } from "react";

const SideBarFilter = () => {
  const [filter_list, set_filter_list] = useState([
    {
      id: 1,
      name: "عرض الجميع",
      icon_src: `/images/common/providers_icon_2.png`,
    },
    {
      id: 2,
      name: "عرض الجميع",
      icon_src: `/images/common/providers_icon_2.png`,
    },
    {
      id: 3,
      name: "عرض الجميع",
      icon_src: `/images/common/providers_icon_2.png`,
    },
    {
      id: 4,
      name: "عرض الجميع",
      icon_src: `/images/common/providers_icon_2.png`,
    },
    {
      id: 5,
      name: "عرض الجميع",
      icon_src: `/images/common/providers_icon_2.png`,
    },
    {
      id: 6,
      name: "عرض الجميع",
      icon_src: `/images/common/providers_icon_2.png`,
    },
    {
      id: 7,
      name: "عرض الجميع",
      icon_src: `/images/common/providers_icon_2.png`,
    },
    {
      id: 8,
      name: "عرض الجميع",
      icon_src: `/images/common/providers_icon_2.png`,
    },
    {
      id: 9,
      name: "عرض الجميع",
      icon_src: `/images/common/providers_icon_2.png`,
    },
    {
      id: 10,
      name: "عرض الجميع",
      icon_src: `/images/common/providers_icon_2.png`,
    },
    {
      id: 11,
      name: "عرض الجميع",
      icon_src: `/images/common/providers_icon_2.png`,
    },
    {
      id: 12,
      name: "عرض الجميع",
      icon_src: `/images/common/providers_icon_2.png`,
    },
  ]);
  return (
    <section className="lg:flex hidden flex-col gap-3 bg-[#F6F6F6] shadow w-fit p-4 ">
      {filter_list.map((item) => {
        return (
          <div
            key={item.id}
            className="bg-[#DFDFDF] rounded-lg flex items-center gap-x-3 w-fit py-3 px-4 min-w-[230px] cursor-pointer hover:opacity-80"
          >
            <div className="w-[20px]">
              <Image
                src={item.icon_src}
                alt="About Us"
                width={50}
                height={50}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="font-semibold">{item.name}</p>
          </div>
        );
      })}
    </section>
  );
};

export default SideBarFilter;
