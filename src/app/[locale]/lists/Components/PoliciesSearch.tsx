"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Select from "react-select";

const PoliciesSearch = ({ translation, lang }) => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [policies, setPolicies] = useState([]);
  const [loadingPolicies, setLoadingPolicies] = useState(false);

  useEffect(() => {
    const fetchPoliciesCategories = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}politics/get-politics-category`;

      try {
        const res = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Accept-Language": lang || "ar",
          },
          cache: "no-store",
        });
        const data = await res.json();
        setCategories(data?.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchPoliciesCategories();
  }, [lang]);

  useEffect(() => {
    if (!selectedCategory) return;

    const fetchPoliciesSubCategories = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}politics/get-politics-sub-category?category_id=${selectedCategory.value}`;

      try {
        const res = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Accept-Language": lang || "ar",
          },
          cache: "no-store",
        });
        const data = await res.json();
        setSubcategories(data?.data || []);
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      }
    };

    fetchPoliciesSubCategories();
  }, [selectedCategory, lang]);

  useEffect(() => {
    const fetchPolicies = async () => {
      setLoadingPolicies(true);

      const params = new URLSearchParams();
      if (selectedCategory?.value) {
        params.append("category_id", selectedCategory.value);
      }
      if (selectedSubCategory?.value) {
        params.append("sub_category_id", selectedSubCategory.value);
      }

      const apiUrl = `${
        process.env.NEXT_PUBLIC_API_URL
      }politics/get-politics-files?${params.toString()}`;

      try {
        const res = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Accept-Language": lang || "ar",
          },
          cache: "no-store",
        });

        const data = await res.json();
        setPolicies(data?.data || []);
      } catch (error) {
        console.error("Error fetching policies:", error);
      } finally {
        setLoadingPolicies(false);
      }
    };

    fetchPolicies();
  }, [lang, selectedSubCategory, selectedCategory]);

  return (
    <div dir={lang == "en" ? "ltr" : "rtl"}>
      <div className="border-[2.5px] border-[#61B8A0] p-4 shadow-md text-center">
        <h2 className="text-[26px] font-bold text-[#61B8A0] text-center mb-4">
          {translation.head}
        </h2>

        <div className="flex flex-wrap gap-x-6 justify-center mt-7 mb-3">
          <Select
            options={categories.map((cat) => ({
              value: cat.id,
              label: cat.name,
            }))}
            placeholder={translation.search_placeholder_1}
            onChange={(option) => {
              setSelectedCategory(option);
              setSelectedSubCategory(null);
            }}
            className="md:w-[40%] w-full md:mt-0 mt-4"
            isClearable
          />

          <Select
            options={subcategories.map((sub) => ({
              value: sub.id,
              label: sub.name,
            }))}
            placeholder={translation.search_placeholder_2}
            isDisabled={!selectedCategory}
            onChange={(option) => setSelectedSubCategory(option)}
            className="md:w-[40%] w-full"
            isClearable
          />
        </div>
      </div>

      <PoliciesGrid
        policies={policies}
        translation={translation}
        loadingPolicies={loadingPolicies}
      />
    </div>
  );
};

const PoliciesGrid = ({ policies, translation, loadingPolicies }) => {
  return (
    <div>
      <h2 className="text-center text-[#1DAEE5] font-bold text-[26px] my-6">
        {translation.title}
      </h2>

      {loadingPolicies ? (
        <div className="flex flex-wrap justify-center gap-6">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md w-64 text-center animate-pulse"
            >
              <div className="bg-[#61B8A0] text-white font-bold text-lg rounded-lg p-20 relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-white/30" />
                </div>
                <span className="relative w-1/2 h-4 bg-white/50 rounded-md"></span>
              </div>
              <div className="mt-4 h-4 bg-gray-300 rounded w-1/2 mx-auto" />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {policies?.map((policy) => (
            <div
              key={policy?.id}
              className="bg-gray-100 p-4 rounded-lg shadow-md w-72 text-center"
            >
              <div className="bg-[#61B8A0] text-white font-bold text-lg rounded-lg p-20 relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-20">
                  <img
                    src="/images/about_page/goals_watermark.png"
                    alt="background pattern"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="relative">{policy?.name}</span>
              </div>
              <Link
                href={`https://just.isamstore.com/storage/${policy?.file}`}
                target="_blank"
                className="mt-4 block text-black font-bold text-md hover:underline cursor-pointer"
              >
                {translation.view_profile}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PoliciesSearch;
