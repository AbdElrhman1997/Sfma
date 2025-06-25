"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Exams = () => {
  const lang = useLocale();
  const [content, setContent]: any = useState([]);
  const [loadingContent, setLoadingContent] = useState(false);
  const isEmpty = !loadingContent && content.length === 0;

  useEffect(() => {
    const fetchSinglePath = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}exams`;
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
    <section
      className="grid grid-cols-6 lg:gap-8 gap-8 container mx-auto mt-8"
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      {content?.map((item) => {
        return (
          <div
            key={item.id}
            className="bg-[#F6F6F6] lg:col-span-2 md:col-span-3 col-span-6 shadow p-4 flex flex-col justify-between border-r-4 border-[var(--second_main)] rounded-tr-xl rounded-br-xl min-h-[250px]"
          >
            {/* المحتوى العلوي */}
            <div>
              <p className="font-semibold lg:text-xl text-base leading-8 mb-2">
                {item?.title}
              </p>
              <h3 className="lg:text-sm text-xs leading-7 text-[#555555] mb-2">
                {item?.description}
              </h3>

              {/* التفاصيل */}
              <div className="flex gap-x-4 border-t-2 border-t-[#D4D4D4] pt-2 flex-wrap">
                {/* الأسئلة */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-6 h-6 bg-[#555555] rounded-full p-[7px] flex items-center justify-center">
                    <Image
                      src="/images/common/icon_1.png"
                      alt=""
                      width={50}
                      height={50}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="lg:text-sm text-xs">
                    {item?.question_count} سؤال - اختيار متعدد
                  </p>
                </div>

                {/* درجة النجاح */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-6 h-6 bg-[#555555] rounded-full p-1 flex items-center justify-center">
                    <Image
                      src="/images/common/icon_2.png"
                      alt=""
                      width={50}
                      height={50}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="lg:text-sm text-xs">
                    درجة النجاح : {item?.passing_score}%
                  </p>
                </div>

                {/* الرسوم */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-6 h-6 bg-[#555555] rounded-full p-1 flex items-center justify-center">
                    <Image
                      src="/images/common/icon_3.png"
                      alt=""
                      width={50}
                      height={50}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="lg:text-sm text-xs">
                    الرسوم : {item?.is_free ? "مجاني" : `${item?.price} ر.س`}
                  </p>
                </div>
              </div>
            </div>

            {/* الزر + مدة الصلاحية */}
            <div className="mt-4 flex gap-3 items-center">
              <Link
                href={`/${lang}/exams/${item?.id}`}
                className="w-[200px] text-center bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] text-white py-2 rounded-lg hover:opacity-90 font-semibold"
              >
                اطلب الاختبار
              </Link>
              <span className="lg:text-xs text-[10px] font-semibold text-start">
                الاختبار متاح لمدة {item?.duration_minutes} ساعة من تاريخ سداد
                الرسوم
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Exams;
