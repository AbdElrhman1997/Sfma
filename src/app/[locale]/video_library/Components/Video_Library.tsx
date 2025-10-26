"use client";
import { getVideoId } from "@/utils/getVideoId";
import Link from "next/link";
import { useEffect, useState } from "react";

const Video_Library = ({ translation, lang }) => {
  const skeletons = Array.from({ length: 3 });
  const [content, setContent]: any = useState([]);
  const [pagination, setPagination]: any = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingContent, setLoadingContent] = useState(false);
  const isEmpty = !loadingContent && content.length === 0;

  const perPage = 9;

  const fetchVideos = async (page = 1) => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}library/get-vedios?page=${page}&per_page=${perPage}`;
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
      setPagination(data?.pagination || {});
      setLoadingContent(false);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setLoadingContent(false);
    }
  };

  useEffect(() => {
    fetchVideos(currentPage);
  }, [lang, currentPage]);

  const handlePageChange = (page) => {
    if (page < 1 || page > pagination?.total_pages) return;
    setCurrentPage(page);
  };

  return (
    <div dir={lang === "en" ? "ltr" : "rtl"}>
      <div className="p-0">
        <h2 className="text-[26px] font-bold text-[#1DAEE5] mb-4 text-center">
          {translation.title}
        </h2>

        <div className="grid grid-cols-12 2xl:gap-12 lg:gap-10 gap-y-10 justify-center mt-7 mb-3 text-start">
          {loadingContent
            ? skeletons.map((_, index) => (
                <div
                  key={index}
                  className="md:col-span-4 col-span-12 w-full mx-auto bg-white shadow-lg overflow-hidden border-b-6 border-[#61B8A0] rounded-lg animate-pulse "
                >
                  <div className="w-full h-56 bg-gray-300"></div>
                  <div className="p-4">
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))
            : content?.map((video, index) => (
                <Link
                  key={index}
                  href={`${video?.vedio_url}`}
                  target="_blank"
                  className="block md:col-span-4 col-span-12 mx-auto bg-white shadow-lg overflow-hidden border-b-6 border-[#61B8A0] rounded-lg w-full hover:scale-105 hover:opacity-85 hover:border-[#1DAEE5] cursor-pointer transition duration-300"
                >
                  <div className="w-full h-56 bg-gray-200 relative">
                    <img
                      src={`https://img.youtube.com/vi/${getVideoId(
                        video?.vedio_url
                      )}/hqdefault.jpg`}
                      alt={video?.name || `video-${index}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-white bg-black bg-opacity-50 rounded-full p-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-800 font-bold">{video?.name}</p>
                    <p className="text-sm mt-2">{video?.description}</p>
                  </div>
                </Link>
              ))}
        </div>

        {isEmpty && (
          <p className="text-center text-gray-500 mt-10">
            لا توجد فيديوهات متاحة حالياً.
          </p>
        )}

        {/* Pagination Controls */}
        {pagination?.total_pages > 1 && (
          <div className="flex justify-center items-center mt-8 gap-2 flex-wrap">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-2 rounded-md border cursor-pointer ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-white hover:bg-[#1DAEE5] hover:text-white border-[#1DAEE5] text-[#1DAEE5]"
              }`}
            >
              السابق
            </button>

            {Array.from(
              { length: pagination?.total_pages },
              (_, i) => i + 1
            ).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-2 rounded-md border ${
                  page === currentPage
                    ? "bg-[#1DAEE5] text-white border-[#1DAEE5] cursor-pointer"
                    : "bg-white text-[#1DAEE5] border-[#1DAEE5] cursor-pointer hover:bg-[#1DAEE5] hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === pagination?.total_pages}
              className={`px-3 py-2 rounded-md border cursor-pointer ${
                currentPage === pagination?.total_pages
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-white hover:bg-[#1DAEE5] hover:text-white border-[#1DAEE5] text-[#1DAEE5]"
              }`}
            >
              التالي
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Video_Library;
