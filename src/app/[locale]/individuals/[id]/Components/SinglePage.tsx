"use client";
import React, { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ContentCard from "./ContentCard";

const SinglePage = ({ id }) => {
  const locale = useLocale();
  const [content, setContent]: any = useState([]);
  const [loadingContent, setLoadingContent] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const fetchSinglePath = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}memberships/get-membership-details/${id}`;
      try {
        setLoadingContent(true);

        const res = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Accept-Language": locale || "ar",
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
  }, [locale, id]);

  return (
    <div dir={locale === "en" ? "ltr" : "rtl"}>
      {/* Header Section */}
      <div className="bg-white xl:mt-20 mt-12 -z-10 mb-20 xl:mb-20">
        <div className="flex items-center justify-between text-white relative">
          {/* Left Side */}
          <div className="md:text-2xl text-[13px] font-bold bg-[#21B6E4] w-full p-4 py-6 text-center">
            {content?.name}
          </div>

          {/* Center Image */}
          <div
            className="absolute left-1/2 -translate-x-1/2 xl:w-[180px] md:w-[140px] w-[100px] xl:h-[180px] md:h-[140px] h-[100px] flex items-center justify-center rounded-full bg-white p-0"
            style={{ zIndex: 1 }}
          >
            <img
              src={`https://just.isamstore.com/storage/${content?.icon}`}
              alt="Consultant Badge"
              width={180}
              height={180}
              className="rounded-full"
            />
          </div>

          {/* Right Side */}
          <div className="md:text-2xl text-[13px] font-bold bg-[#21B6E4] text-white w-full p-4 py-6 md:text-center text-left">
            {content?.price}{" "}
            <span className="md:text-xl text-[11px] font-semibold">ر.س</span>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-6 gap-x-0 gap-y-12 justify-between mb-14">
        {content?.details?.map((content, index) => (
          <React.Fragment key={index}>
            <ContentCard subscription={content} lang={locale} id={id} />
          </React.Fragment>
        ))}
      </div>

      {/* Requirements Accordion */}
      <div className="w-full container mx-auto rounded-md shadow bg-white overflow-hidden">
        <div
          className="bg-[var(--second_main)] text-white px-4 py-5 flex justify-between items-center cursor-pointer rounded-t-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-bold text-sm">عرض متطلبات التسجيل</span>
          {isOpen ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
        </div>

        {isOpen && (
          <div className="bg-[#f8f8f8] px-6 py-4 text-sm text-gray-800 rounded-b-md">
            <ul className="list-disc pr-4 space-y-1 leading-relaxed font-semibold">
              {content?.requirement?.length ? (
                content?.requirement?.map((item) => (
                  <li key={item?.id}>{item?.text}</li>
                ))
              ) : (
                <div className="text-center lg:text-xl lg:my-6">
                  لا توجد متطلبات متاحة
                </div>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SinglePage;
