"use client"; // Required for client-side interactivity
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ServiceProviders() {
  const t = useTranslations("Training");
  const lang = useLocale();
  const [content, setContent]: any = useState([]);
  const [loadingContent, setLoadingContent] = useState(false);

  useEffect(() => {
    const fetchSinglePath = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}service-provider/get-service-providers?is_featured=1`;
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

  const renderCourseCard = (item) => (
    <div
      className="relative bg-[#F6F6F6] rounded-xl shadow-md text-center px-6 pt-16 pb-6 w-full max-w-xs md:mx-0 mx-auto border-b-4 border-[var(--main)]"
      dir="rtl"
    >
      {/* Top icon */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 flex items-center justify-center z-10">
        <img
          src={`https://sfma.srv814693.hstgr.cloud/storage/${item?.logo}`}
          alt="service provider"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="font-bold lg:text-xl text-lg mb-2">{item.name}</h3>
      <h3 className="lg:text-sm text-xs mb-4">{item?.slug}</h3>

      {/* Button */}
      <Link href={`/${lang}/service_providers/${item?.id}`}>
        <div className="bg-transparent w-fit text-[var(--main)] font-bold p-2 text-md rounded-lg mx-auto mt-[2px] border-2 border-[var(--main)] text-[12px] md:text-[14px] transition-all duration-300 hover:border-[var(--main)] hover:bg-[var(--main)] hover:text-white hover:scale-105">
          قراءة المزيد
        </div>
      </Link>
    </div>
  );

  return (
    <>
      {console.log(content)}
      {content?.length ? (
        <div
          dir={lang === "en" ? "ltr" : "rtl"}
          className={`p-0 mt-8 container mx-auto`}
        >
          <h2 className="lg:text-3xl text-xl font-bold text-[var(--main)] text-center lg:mb-3 mb-2">
            مقدّمو الخدمات المعتمدون
          </h2>
          <h4 className="text-[#555555] text-center mb-16 lg:text-base text-sm">
            تعرف على مقدّمي خدمات يساهمون في دعم المجتمع المهني عبر مجالات
            متخصصة
          </h4>

          <div className="flex flex-wrap justify-between lg:gap-6 gap-16">
            {content?.map((item) => {
              return renderCourseCard(item);
            })}
          </div>
          <Link
            href={`/${lang}/service_providers`}
            className="mt-6 block cursor-pointer hover:opacity-85 bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white lg:px-12 px-6 lg:py-3 py-[6px] rounded-lg font-semibold lg:text-base text-[12px] mx-auto"
          >
            عرض المزيد من مقدمي الخدمات
          </Link>
        </div>
      ) : null}
    </>
  );
}
