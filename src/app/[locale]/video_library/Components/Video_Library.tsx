"use client";
import { useEffect, useState } from "react";

const Video_Library = ({ translation, lang }) => {
  const skeletons = Array.from({ length: 3 });

  const getEmbedUrl = (url) => {
    const videoId = url?.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const [content, setContent]: any = useState([]);
  const [loadingContent, setLoadingContent] = useState(false);
  const isEmpty = !loadingContent && content.length === 0;

  useEffect(() => {
    const fetchSinglePath = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}library/get-vedios`;
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
        setContent(data?.data || {});
        setLoadingContent(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoadingContent(false);
      }
    };

    fetchSinglePath();
  }, [lang]);

  return (
    <div dir={lang === "en" ? "ltr" : "rtl"}>
      <div className="p-0">
        <h2 className="text-[26px] font-bold text-[#1DAEE5] mb-4 text-center">
          {translation.title}
        </h2>

        <div className="grid grid-cols-12 gap-x-6 gap-y-8 justify-center mt-7 mb-3 text-start">
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
                <div
                  key={index}
                  className="md:col-span-4 col-span-12 mx-auto bg-white shadow-lg overflow-hidden border-b-6 border-[#61B8A0] rounded-lg max-w-[330px] hover:scale-105 hover:opacity-85 hover:border-[#1DAEE5] cursor-pointer transition duration-300"
                >
                  <div className="w-full h-56 bg-gray-200">
                    <iframe
                      className="w-full h-full"
                      src={getEmbedUrl(video?.vedio_url)}
                      title={video?.name || `video-${index}`}
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-800 font-bold">{video?.name}</p>
                    <p className="text-sm mt-2">{video?.description}</p>
                  </div>
                </div>
              ))}
        </div>

        {isEmpty && (
          <p className="text-center text-gray-500 mt-10">
            لا توجد فيديوهات متاحة حالياً.
          </p>
        )}
      </div>
    </div>
  );
};

export default Video_Library;
