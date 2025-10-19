"use client";
import { useLocale } from "next-intl";
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
    <div className="container mx-auto p-6 rounded-lg my-6">
      {/* Title */}
      <h1 className="lg:text-4xl text-2xl font-bold text-[#555555] leading-relaxed text-center mb-4">
        {content?.title}
      </h1>

      {/* Image */}
      <div className="my-8 lg:px-24 md:px-12">
        <div className="w-full mx-auto">
          <img
            src={`https://sffma.fmexcon.com/storage/${content?.image}`}
            alt={content?.name || "Book Cover"}
            className="w-full h-auto max-h-[70vh] rounded-lg object-cover shadow-md"
          />
        </div>
      </div>

      <div
        className="lg:px-24 md:px-12 text-[#636363] mt-2 lg:text-xl text-base leading-relaxed text-justify"
        dangerouslySetInnerHTML={{ __html: content?.content }}
      />
      {/* Optional Button */}
      {/* <div className="text-center mt-8">
        <a
          href={`https://sffma.fmexcon.com/storage/${content?.file}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#61B8A0] text-white px-6 py-2 rounded-lg hover:bg-[#519c89] transition inline-block"
        >
          {translation.read_book}
        </a>
      </div> */}
    </div>
  ) : (
    <div className="h-[70vh]"></div>
  );
};

export default Single;
