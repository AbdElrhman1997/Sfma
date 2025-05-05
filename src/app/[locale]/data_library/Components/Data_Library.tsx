"use client"; // Required for client-side interactivity

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Data_Library({ translation, lang }) {
  const [activeTab, setActiveTab] = useState(1);
  const [loadingBooks, setLoadingBooks] = useState(false);
  const [content, setContent] = useState([]);
  const tabs = [
    { id: 1, name: "digitalBooks", label: translation?.digital_books },
    { id: 2, name: "articles", label: translation?.articles },
    { id: 3, name: "researches", label: translation?.research },
  ];

  useEffect(() => {
    const fetchBooks = async () => {
      setLoadingBooks(true);
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}library/get-books?type=${activeTab}`;

      try {
        const res = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Accept-Language": lang || "ar",
          },
          cache: "no-store",
        });
        const data = await res.json();
        setContent(data?.data || []);
        setLoadingBooks(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoadingBooks(false);
      }
    };

    fetchBooks();
  }, [lang, activeTab]);

  return (
    <div dir={lang === "en" ? "ltr" : "rtl"} className="p-0">
      <h2 className="text-[26px] font-bold text-[#1DAEE5] mb-4 text-center">
        {translation?.title}
      </h2>

      {/* Tabs */}
      <div className="flex border-gray-200 flex-wrap mb-6 justify-center gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-2 px-4 font-bold focus:outline-none rounded-md min-w-[14rem] cursor-pointer  ${
              activeTab === tab.id
                ? "bg-[#61B8A0] text-white "
                : "text-black bg-[#D9D9D9] hover:text-gray-700"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {loadingBooks ? (
        <div className="flex flex-wrap justify-center gap-6">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="bg-[#F6F6F6] p-4 rounded-lg shadow-md w-64 text-center animate-pulse"
            >
              <div className="bg-[#EDEDED] text-white font-bold text-lg rounded-lg p-20 relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-white/30" />
                </div>
              </div>
              <div className="mt-4 h-4 bg-gray-300 rounded w-1/2 mx-auto" />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {content?.map((book) => (
            <div
              key={book?.id}
              className="group bg-[#F6F6F6] p-4 rounded-lg shadow-md w-72 text-center h-fit hover:scale-105 transition duration-300"
            >
              <Link href={`/${lang}/data_library/${book?.id}`} passHref>
                <div className="cursor-pointer transition-shadow duration-300 overflow-hidden rounded-lg">
                  <img
                    src={`https://just.isamstore.com/storage/${book?.image}`}
                    alt={book?.name}
                    className="object-cover h-full max-h-[17rem] w-full transition duration-300 group-hover:scale-105 group-hover:opacity-85"
                  />
                  <p className="relative font-bold mt-[26px] mb-5 min-h-[55px]">
                    {book?.name}
                  </p>
                </div>
              </Link>

              <Link
                href={`https://just.isamstore.com/storage/${book?.file}`}
                target="_blank"
                className="inline-block mt-2"
              >
                <div className="bg-[#61B8A0] text-white font-bold py-2 px-8 text-md rounded-lg">
                  {translation.read_book}
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
