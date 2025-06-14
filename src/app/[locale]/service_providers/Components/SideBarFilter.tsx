"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const SideBarFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);

  const [filter_list, set_filter_list] = useState([
    {
      id: 1,
      name: "عرض الجميع",
      icon_src: `/images/common/providers_icon_2.png`,
    },
    {
      id: 2,
      name: "إدارة المرافق",
      icon_src: `/images/common/providers_icon_2.png`,
    },
    {
      id: 3,
      name: "الأمن والحراسة",
      icon_src: `/images/common/providers_icon_2.png`,
    },
    {
      id: 4,
      name: "النظافة",
      icon_src: `/images/common/providers_icon_2.png`,
    },
    {
      id: 5,
      name: "الصيانة والتشغيل",
      icon_src: `/images/common/providers_icon_2.png`,
    },
    {
      id: 6,
      name: "النقل اللوجيستي",
      icon_src: `/images/common/providers_icon_2.png`,
    },
    {
      id: 7,
      name: "المقاولات والخدمات الفنية",
      icon_src: `/images/common/providers_icon_2.png`,
    },
    {
      id: 8,
      name: "الاستشارات",
      icon_src: `/images/common/providers_icon_2.png`,
    },
    {
      id: 9,
      name: "إدارة الطاقة",
      icon_src: `/images/common/providers_icon_2.png`,
    },
    {
      id: 10,
      name: "الخدمات البيئية والنفايات",
      icon_src: `/images/common/providers_icon_2.png`,
    },
    {
      id: 11,
      name: "خدمات أخرى",
      icon_src: `/images/common/providers_icon_2.png`,
    },
  ]);

  const handleCategoryClick = async (item) => {
    setSelectedCategory(item.id);
    try {
      const response = await fetch("/api/filter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryId: item.id }),
      });
      if (!response.ok) {
        console.error("Failed to post category ID to backend");
      }
    } catch (error) {
      console.error("Error posting category ID:", error);
    }
  };

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="lg:flex hidden flex-col gap-3 bg-[#F6F6F6] shadow w-fit p-4">
      {filter_list.map((item) => (
        <div
          key={item.id}
          className={`rounded-lg flex items-center gap-x-3 w-fit py-3 px-5 min-w-[250px] cursor-pointer hover:opacity-80 ${
            selectedCategory === item.id
              ? "bg-[var(--second_main)] text-white"
              : "bg-[#DFDFDF]"
          }`}
          onClick={() => handleCategoryClick(item)}
        >
          <div className="w-[20px]">
            {/* {item.icon ? (
              <div>{item.icon}</div>
            ) : ( */}
            <Image
              src={item.icon_src}
              alt={item.name}
              width={20}
              height={20}
              style={{
                filter:
                  selectedCategory === item.id
                    ? "brightness(0) invert(1)"
                    : "none",
              }}
            />
            {/* )} */}
          </div>
          <p className="font-semibold">{item.name}</p>
        </div>
      ))}
    </section>
  );
};

export default SideBarFilter;
