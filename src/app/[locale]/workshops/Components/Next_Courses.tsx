"use client"; // Required for client-side interactivity

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Next_Courses() {
  const t = useTranslations("Training");
  const lang = useLocale();

  const [activeTab, setActiveTab] = useState(1);
  const [loadingBooks, setLoadingBooks] = useState(false);
  const [content, setContent] = useState([]);

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
    <div dir={lang === "en" ? "ltr" : "rtl"} className="p-0 mt-8">
      <h2 className="text-[26px] font-bold text-[#1DAEE5] text-center">
        الدورات القادمة
      </h2>
      <h4 className="text-[18px] text-[#898989] mb-8 text-center">
        {t("sub_title")}
      </h4>

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
        <div className="flex flex-wrap justify-center gap-6 mt-9">
          <div className="group bg-white relative rounded-lg shadow-md w-72 text-center h-fit hover:scale-105 transition duration-300">
            <div className="transition-shadow duration-300 overflow-hidden rounded-lg">
              <img
                src={`/images/training/training_1.png`}
                // alt={course?.name}
                className="object-cover h-full max-h-[17rem] w-full transition duration-300 group-hover:scale-105 group-hover:opacity-85"
              />
              <p className="relative font-bold mt-[26px] mb-5 text-black">
                {/* {book?.name} */}
                دورات في الأمن والسلامة
              </p>
            </div>
            <div className="absolute top-0 start-0 -translate-5 bg-[var(--main)] text-white py-2 px-4 rounded-lg">
              متاحة الآن
            </div>

            <Link
              // href={`/${lang}/data_library/${course?.id}`}
              href={`/${lang}/data_library/`}
              target="_blank"
              className="inline-block"
            >
              <div className="bg-[#61B8A0] text-white font-bold p-2 text-md rounded-lg mb-[18px] mt-[2px] border-2 border-white text-[14px] transition-all duration-300 hover:border-[#61B8A0] hover:bg-white hover:text-[#61B8A0]">
                {/* {t("translation?.read_book")} */}
                تصفح الدورات
              </div>
            </Link>
          </div>
          <div className="group bg-white relative rounded-lg shadow-md w-72 text-center h-fit hover:scale-105 transition duration-300">
            <div className="transition-shadow duration-300 overflow-hidden rounded-lg">
              <img
                src={`/images/training/training_1.png`}
                // alt={course?.name}
                className="object-cover h-full max-h-[17rem] w-full transition duration-300 group-hover:scale-105 group-hover:opacity-85"
              />
              <p className="relative font-bold mt-[26px] mb-5 text-black">
                {/* {book?.name} */}
                دورات في الأمن والسلامة
              </p>
            </div>
            <div className="absolute top-0 start-0 -translate-5 bg-[var(--main)] text-white py-2 px-4 rounded-lg">
              25 - 28 مايو
            </div>

            <Link
              // href={`/${lang}/data_library/${course?.id}`}
              href={`/${lang}/data_library/`}
              target="_blank"
              className="inline-block"
            >
              <div className="bg-[#61B8A0] text-white font-bold p-2 text-md rounded-lg mb-[18px] mt-[2px] border-2 border-white text-[14px] transition-all duration-300 hover:border-[#61B8A0] hover:bg-white hover:text-[#61B8A0]">
                {/* {t("translation?.read_book")} */}
                تصفح الدورات
              </div>
            </Link>
          </div>
          <div className="group bg-white relative rounded-lg shadow-md w-72 text-center h-fit hover:scale-105 transition duration-300">
            <div className="transition-shadow duration-300 overflow-hidden rounded-lg">
              <img
                src={`/images/training/training_1.png`}
                // alt={course?.name}
                className="object-cover h-full max-h-[17rem] w-full transition duration-300 group-hover:scale-105 group-hover:opacity-85"
              />
              <p className="relative font-bold mt-[26px] mb-5 text-black">
                {/* {book?.name} */}
                دورات في الأمن والسلامة
              </p>
            </div>
            <div className="absolute top-0 start-0 -translate-5 bg-[var(--main)] text-white py-2 px-4 rounded-lg">
              متاحة الآن
            </div>

            <Link
              // href={`/${lang}/data_library/${course?.id}`}
              href={`/${lang}/data_library/`}
              target="_blank"
              className="inline-block"
            >
              <div className="bg-[#61B8A0] text-white font-bold p-2 text-md rounded-lg mb-[18px] mt-[2px] border-2 border-white text-[14px] transition-all duration-300 hover:border-[#61B8A0] hover:bg-white hover:text-[#61B8A0]">
                {/* {t("translation?.read_book")} */}
                تصفح الدورات
              </div>
            </Link>
          </div>
        </div>
      )}

      <Link
        // href={`/${lang}/data_library/${course?.id}`}
        href={`/${lang}/data_library/`}
        target="_blank"
        className="block w-fit mx-auto mt-8"
      >
        <div className="bg-[#61B8A0] text-white font-bold p-3 px-5 text-md rounded-lg mb-[18px] mt-[2px] border-2 border-white text-[16px] transition-all duration-300 hover:border-[#61B8A0] hover:bg-white hover:text-[#61B8A0]">
          {/* {t("translation?.read_book")} */}
          اطلع على جدول دورات SFMA
        </div>
      </Link>
    </div>
  );
}
