"use client";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

const SingleNew = ({ id }) => {
  const lang = useLocale();
  const [content, setContent]: any = useState([]);
  const [loadingContent, setLoadingContent] = useState(false);

  useEffect(() => {
    const fetchSinglePath = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}blogs/get-blog-details/${id}`;
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

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="container mx-auto p-6 rounded-lg my-6">
      {/* Header */}
      <h1 className="lg:text-4xl text-lg font-bold text-[#555555] leading-relaxed">
        {content?.title}
      </h1>

      {/* Date and Location */}
      <div className="flex justify-start lg:text-lg text-[14px] text-gray-600 lg:my-6 my-2">
        <span>{formatDate(content?.created_at)}</span>
      </div>

      <div className="lg:px-24 md:px-12">
        {/* Image Placeholder */}
        <div className="my-8 lg:px-16">
          <div className="w-full mx-auto">
            <img
              src={`https://sfma.srv814693.hstgr.cloud/storage/${content?.thumbnail_image}`}
              alt="About Us"
              width={50}
              height={50}
              className="w-full h-auto max-h-[70vh] rounded-lg object-cover"
            />
          </div>
        </div>
        <div
          className="text-[#636363] mt-2 lg:text-xl text-base"
          dangerouslySetInnerHTML={{ __html: content?.content }}
        />
      </div>
    </div>
  );
};

export default SingleNew;
