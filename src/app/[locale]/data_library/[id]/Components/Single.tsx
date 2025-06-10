"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Single = ({ translation, id }) => {
  const [content, setContent]: any = useState({});
  const [loadingContent, setLoadingContent] = useState(false);
  const lang = useLocale();

  useEffect(() => {
    const fetchSinglePath = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}library/get-book/${id}`;
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
  }, [lang, id]);

  return !loadingContent ? (
    <div className="min-h-screen container mx-auto">
      <div className="flex flex-col md:flex-row w-full rounded-lg overflow-hidden pt-16 pb-12">
        {/* Left Section: Book Cover */}
        <div className="md:w-1/3 w-full">
          <img
            src={`https://sfma.srv814693.hstgr.cloud/storage/${content?.image}`}
            alt="Book Cover"
            width={300}
            height={450}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Section: Book Description */}
        <div className="md:w-2/3 w-full p-6 flex flex-col justify-between">
          <div>
            {/* Arabic Title */}
            <h1 className="text-3xl font-bold text-start mb-2">
              {content?.name}
            </h1>

            {/* English Title */}
            <h2 className="text-base text-[#616060] mb-3">{content?.author}</h2>

            {/* Description */}
            <p className="mb-4 text-justify leading-6">
              {content?.description}
            </p>
          </div>

          {/* Button */}
          <Link
            href={`https://sfma.srv814693.hstgr.cloud/storage/${content?.file}`}
            className="text-start cursor-pointer"
            target="_blank"
          >
            <button className="bg-[#61B8A0] text-white px-6 py-2 rounded-lg hover:bg-[#5d9887] transition cursor-pointer">
              {translation.read_book}
            </button>
          </Link>
        </div>
      </div>
      <Link
        href={`https://sfma.srv814693.hstgr.cloud/storage/${content?.file}`}
        target="_blank"
      >
        <div
          className="relative w-[300px] h-[450px] bg-cover bg-center mx-auto mb-16"
          style={{
            backgroundImage: content?.image
              ? `url(https://sfma.srv814693.hstgr.cloud/storage/${content?.image})`
              : "url(https://sfma.srv814693.hstgr.cloud/storage/fallback-image.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-[#00000092] flex items-center justify-center cursor-pointer">
            <h2 className="text-3xl font-bold text-white">
              {translation.show_book}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  ) : (
    <div className="h-[70vh]"></div>
  );
};

export default Single;
