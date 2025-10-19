"use client";
import { useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";

const SideBarFilter = ({ setContent }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filterList, setFilterList] = useState([]);
  const t = useTranslations("");

  useEffect(() => {
    const fetchCategories = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}service-provider/get-categories`;
      try {
        const res = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Accept-Language": "ar",
          },
          cache: "no-store",
        });
        const data = await res.json();

        // أضف "All" في الأول قبل التصنيفات من الباك
        setFilterList([{ id: "all", name: "الكل" }, ...(data?.data || [])]);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [t]);

  const handleCategoryClick = async (item) => {
    setSelectedCategory(item.id);

    // لو "all" جيب كل الداتا بدون category_id
    const apiUrl =
      item.id === "all"
        ? `${process.env.NEXT_PUBLIC_API_URL}service-provider/get-service-providers`
        : `${process.env.NEXT_PUBLIC_API_URL}service-provider/get-service-providers?category_id=${item.id}`;

    try {
      const res = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Accept-Language": "ar",
        },
        cache: "no-store",
      });
      const data = await res.json();
      setContent(data?.data);
    } catch (error) {
      console.error("Error fetching providers:", error);
    }
  };

  return (
    <section className="flex-col gap-3 bg-[#F6F6F6] shadow p-4 xl:w-fit w-full overflow-x-auto xl:mb-0 mb-10 xl:mx-0 mx-auto space-y-5 py-6 h-fit">
      {filterList?.map((item) => (
        <div
          key={item.id}
          className={`rounded-lg flex items-center justify-center gap-x-3 w-full lg:py-3 lg:px-5 py-[6px] px-3 lg:min-w-[250px] cursor-pointer hover:opacity-80 xl:mx-0 mx-auto ${
            selectedCategory === item.id
              ? "bg-[var(--second_main)] text-white"
              : "bg-[#DFDFDF]"
          }`}
          onClick={() => handleCategoryClick(item)}
        >
          <p className="font-semibold lg:text-base text-sm">{item.name}</p>
        </div>
      ))}
    </section>
  );
};

export default SideBarFilter;
