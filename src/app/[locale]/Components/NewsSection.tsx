"use client";
import { formatDate } from "@/utils/formatDate";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NewsSection = ({ from_home }) => {
  const t = useTranslations("HomePage.NewsSection");
  const lang = useLocale();

  const [content, setContent] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingContent, setLoadingContent] = useState(false);

  const perPage = 9; // ثابت بدون dropdown

  const fetchNews = async (page = 1) => {
    const apiUrl = `${
      process.env.NEXT_PUBLIC_API_URL
    }blogs/get-blogs?is_featured=${
      from_home ? "1" : "0"
    }&page=${page}&per_page=${perPage}`;

    try {
      setLoadingContent(true);
      const res = await fetch(apiUrl, {
        method: "GET",
        headers: { "Accept-Language": lang || "ar" },
        cache: "no-store",
      });
      const data = await res.json();
      setContent(data?.data || []);
      setPagination(data?.pagination || null);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoadingContent(false);
    }
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [lang, currentPage]);

  const handleNext = () => {
    if (pagination && currentPage < pagination.total_pages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (pagination && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      {loadingContent ? (
        <div className="text-center py-10 text-gray-500 animate-pulse">
          {"جاري التحميل..."}
        </div>
      ) : content?.length ? (
        <section
          className={`flex flex-col items-center justify-between gap-8 container mx-auto text-start mt-6`}
          dir={lang === "en" ? "ltr" : "rtl"}
        >
          <div className="w-full flex flex-col justify-center">
            {from_home && (
              <div className="text-center">
                <h2 className="lg:text-3xl text-xl font-bold text-[var(--main)] text-center lg:mb-3 mb-2">
                  {t("title")}
                </h2>
                <h4 className="text-[#555555] text-center lg:mb-8 mb-4 lg:text-base text-sm">
                  {t("description")}
                </h4>
              </div>
            )}

            {/* Grid of news cards */}
            <div
              className={`${
                content?.length <= 2
                  ? "flex justify-center flex-wrap gap-10 pt-4"
                  : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4"
              } items-stretch`}
            >
              {content.map((item, index) => (
                <div
                  key={index}
                  className="max-w-sm bg-white rounded-lg overflow-hidden shadow-md transform transition-all hover:scale-105 relative"
                >
                  {!from_home && (
                    <div className="absolute top-4 right-4 z-50 bg-[var(--main)] text-white px-5 py-3 rounded-full shadow-lg text-sm font-semibold flex items-center gap-2">
                      {formatDate(item?.created_at)}
                    </div>
                  )}

                  <div className="w-full">
                    <img
                      src={`https://sffma.fmexcon.com/storage/${item?.thumbnail_image}`}
                      alt={item?.title || "News Image"}
                      width={500}
                      height={400}
                      className="w-full h-56 object-cover rounded-t-lg"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-bold leading-tight text-[#555555] line-clamp-2">
                      {item?.title}
                    </h3>
                    <div
                      className="text-[#636363] mt-2 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: item?.content }}
                    />
                    <Link
                      href={`/${lang}/news/${item?.id}`}
                      className="mt-4 text-[var(--main)] flex items-center justify-start font-semibold cursor-pointer"
                    >
                      <span className="text-lg font-bold">
                        {t("read_more")}
                      </span>
                      <div className={`${lang === "en" ? "rotate-y-180" : ""}`}>
                        <Image
                          src="/images/logos/arrow-left.svg"
                          alt="Arrow"
                          width={18}
                          height={18}
                          className="rounded-lg mx-2"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {pagination?.total_pages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-md font-semibold ${
                    currentPage === 1
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-[var(--main)] text-white hover:opacity-85"
                  }`}
                >
                  {lang === "ar" ? "السابق" : "Previous"}
                </button>

                <span className="text-gray-600 font-medium">
                  {currentPage} / {pagination?.total_pages}
                </span>

                <button
                  onClick={handleNext}
                  disabled={currentPage === pagination?.total_pages}
                  className={`px-4 py-2 rounded-md font-semibold ${
                    currentPage === pagination?.total_pages
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-[var(--main)] text-white hover:opacity-85"
                  }`}
                >
                  {lang === "ar" ? "التالي" : "Next"}
                </button>
              </div>
            )}

            {from_home && (
              <Link
                href={`/${lang}/news`}
                className="mt-6 block cursor-pointer hover:opacity-85 bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white lg:px-12 px-6 lg:py-3 py-[6px] rounded-lg font-semibold lg:text-base text-[12px] mx-auto"
              >
                {t("read_more")}
              </Link>
            )}
          </div>
        </section>
      ) : (
        <div className="text-center py-10 text-gray-500">
          {"لا توجد أخبار حالياً"}
        </div>
      )}
    </>
  );
};

export default NewsSection;
