"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const SideBarFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [filterList, setFilterList] = useState([]);
  const lang = useTranslations();
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
        setFilterList(data?.data || {});
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [lang]);

  const handleCategoryClick = async (item) => {
    setSelectedCategory(item.id);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}service-provider/get-service-providers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ category_id: item.id }),
        }
      );
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
    <section className="xl:flex hidden flex-col gap-3 bg-[#F6F6F6] shadow w-fit p-4">
      {filterList?.map((item) => (
        <div
          key={item.id}
          className={`rounded-lg flex items-center gap-x-3 w-fit py-3 px-5 min-w-[250px] cursor-pointer hover:opacity-80 ${
            selectedCategory === item.id
              ? "bg-[var(--second_main)] text-white"
              : "bg-[#DFDFDF]"
          }`}
          onClick={() => handleCategoryClick(item)}
        >
          <p className="font-semibold">{item.name}</p>
        </div>
      ))}
    </section>
  );
};

export default SideBarFilter;
