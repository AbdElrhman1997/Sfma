"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const BlogsSection = () => {
  const t = useTranslations("HomePage.NewsSection2");
  const lang = useLocale();
  const [content, setContent]: any = useState([]);
  const [loadingContent, setLoadingContent] = useState(false);

  useEffect(() => {
    const fetchSinglePath = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}library/get-books?type=2`;
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
        setLoadingContent(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoadingContent(false);
      }
    };

    fetchSinglePath();
  }, [lang]);

  return content?.length ? (
    <section
      className={`bg-[#F6F6F6] flex flex-col md:flex-row items-center justify-between gap-8 text-start mt-10 lg:pt-8 pt-4 lg:pb-10 pb-5`}
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <div className="w-full flex flex-col justify-center container mx-auto">
        <div className="text-center">
          <h2 className="lg:text-3xl text-xl font-bold text-[var(--main)] text-center lg:mb-3 mb-2">
            {t("title")}
          </h2>
          <h4 className="text-[#555555] text-center lg:mb-5 mb-4 lg:text-base text-sm">
            {t("description")}
          </h4>
        </div>

        <div
          className={`${
            content?.length <= 2
              ? "flex justify-center flex-wrap gap-12 pt-4"
              : "grid md:grid-cols-2 lg:grid-cols-3 gap-12 pt-4"
          } items-stretch`}
        >
          {content?.map((item, index) => (
            <div
              key={index}
              className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-md px-4 pt-2 pb-2"
            >
              <div className="py-4">
                <img
                  src={`https://sffma.fmexcon.com/storage/${item?.image}`}
                  alt={item?.name}
                  className="object-cover h-full max-h-[17rem] w-full transition duration-300 group-hover:scale-105 group-hover:opacity-85"
                />

                <div
                  className="text-[#636363] mt-4 leading-6 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                />

                <Link
                  href={`/${lang}/news/${item?.id}`}
                  className="mt-4 text-[var(--main)] flex items-center justify-start text-primary font-semibold cursor-pointer"
                >
                  <span className="text-lg font-bold">{t("read_more")}</span>
                  <div className={`${lang === "en" ? "rotate-y-180" : ""}`}>
                    <Image
                      src="/images/logos/arrow-left.svg"
                      alt={t("read_more")}
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

        <Link
          href={`/${lang}/data_library?tab_name=articles`}
          className="mt-6 block cursor-pointer hover:opacity-85 bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white lg:px-12 px-6 lg:py-3 py-[6px] rounded-lg font-semibold lg:text-base text-[12px] mx-auto"
        >
          {t("more")}
        </Link>
      </div>
    </section>
  ) : null;
};

export default BlogsSection;
