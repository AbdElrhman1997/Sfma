"use client";
import { useEffect, useState } from "react";
import Card from "./Card";

const Institutions = ({ translation, lang }) => {
  const skeletons = Array.from({ length: 3 });
  const [content, setContent]: any = useState([]);
  const [loadingContent, setLoadingContent] = useState(false);
  const isEmpty = !loadingContent && content.length === 0;

  useEffect(() => {
    const fetchSinglePath = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}memberships/get-memberships?type=1`;

      try {
        setLoadingContent(true);

        const res = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Accept-Language": lang || "ar",
          },
          cache: "no-store",
        });

        const data = await res.json();
        setContent(data?.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoadingContent(false);
      }
    };

    fetchSinglePath();
  }, [lang]);

  return (
    <div dir={lang === "en" ? "ltr" : "rtl"}>
      <div className="p-0">
        {/* Titles */}
        <h2 className="md:text-[26px] text-[22px] font-bold text-[#1DAEE5] mb-1 text-center">
          {translation.title}
        </h2>
        <h3 className="md:text-[16px] text-[14px] font-semibold mb-4 text-center">
          {translation.sub_title}
        </h3>

        {/* Content Area */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-8 gap-y-8 mt-7 mb-3 text-start">
          {loadingContent
            ? skeletons.map((_, index) => (
                <div
                  key={index}
                  className="w-full mx-auto bg-white shadow-lg overflow-hidden border-b-6 border-[#61B8A0] rounded-lg animate-pulse"
                >
                  <div className="w-full h-56 bg-gray-300"></div>
                  <div className="p-4">
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))
            : content?.map((subscription, index) => (
                <div className="mt-12" key={index}>
                  <Card
                    subscription={subscription}
                    lang={lang}
                    translation={translation}
                  />
                </div>
              ))}
        </div>

        {/* Empty State */}
        {isEmpty && (
          <p className="text-center text-gray-500 mt-10">
            {translation.no_data_available}
          </p>
        )}
      </div>
    </div>
  );
};

export default Institutions;
