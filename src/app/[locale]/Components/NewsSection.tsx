"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NewsSection = ({ from_home }) => {
  const t = useTranslations("HomePage.NewsSection");
  const lang = useLocale();
  const [content, setContent]: any = useState([]);
  const [loadingContent, setLoadingContent] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      const apiUrl = `${
        process.env.NEXT_PUBLIC_API_URL
      }blogs/get-blogs?is_featured=${from_home ? "1" : "0"}`;
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

    fetchNews();
  }, [lang]);

  return (
    <>
      {content?.length ? (
        <section
          className={`flex flex-col md:flex-row items-center justify-between gap-8 container mx-auto text-start mt-6`}
          dir={lang == "en" ? "ltr" : "rtl"}
        >
          <div className="w-full flex flex-col justify-center">
            {from_home ? (
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#1DAEE5] mb-3"></h2>
                <p className="text-black mb-3"></p>
                <h2 className="lg:text-3xl text-xl font-bold text-[var(--main)] text-center lg:mb-3 mb-2">
                  {t("title")}
                </h2>
                <h4 className="text-[#555555] text-center lg:mb-8 mb-4 lg:text-base text-sm">
                  {t("description")}
                </h4>
              </div>
            ) : null}

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 justify-center items-center pt-4">
              {content?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-md"
                  >
                    <div className="w-full">
                      <img
                        src={`https://sfma.srv814693.hstgr.cloud/storage/${item?.thumbnail_image}`}
                        alt="About Us"
                        width={500}
                        height={400}
                        className="w-full max-h-[300px] object-cover rounded-lg"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold leading-tight text-[#555555]">
                        {item?.title}
                      </h3>
                      <p className="truncate overflow-hidden whitespace-nowrap max-h-14">
                        <div
                          className="text-[#636363] mt-2 "
                          dangerouslySetInnerHTML={{ __html: item?.content }}
                        />
                      </p>
                      <Link
                        href={`/${lang}/news/${item?.id}`}
                        className="mt-4 text-[var(--main)] flex items-center justify-start text-primary font-semibold cursor-pointer"
                      >
                        <span className="text-lg font-bold">
                          {t("read_more")}
                        </span>
                        <div
                          className={`${lang == "en" ? "rotate-y-180" : ""}`}
                        >
                          <Image
                            src="/images/logos/arrow-left.svg"
                            alt="About Us"
                            width={18}
                            height={18}
                            className=" rounded-lg mx-2"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            {from_home ? (
              <Link
                href={`/${lang}/news`}
                className="mt-6 block cursor-pointer hover:opacity-85 bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white lg:px-12 px-6 lg:py-3 py-[6px] rounded-lg font-semibold lg:text-base text-[12px] mx-auto"
              >
                قراءة المزيد
              </Link>
            ) : null}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default NewsSection;
