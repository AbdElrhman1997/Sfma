import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const NewsSection = ({ from_home }) => {
  const t = useTranslations("HomePage.NewsSection");
  const lang = useLocale();
  const courses = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];

  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-between gap-8 container mx-auto text-start mt-10`}
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div className="w-full flex flex-col justify-center">
        {from_home ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#1DAEE5] mb-3">
              {t("title")}
            </h2>
            <p className="text-black mb-3">{t("description")}</p>
          </div>
        ) : null}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 justify-center items-center py-4">
          {courses.map((item, index) => {
            return from_home ? (
              index > 2 ? (
                <>
                  <div
                    key={index}
                    className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-md"
                  >
                    <div className="w-full">
                      <Image
                        src="/images/common/placeholder_news.png"
                        alt="About Us"
                        width={500}
                        height={400}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold leading-tight text-[#555555]">
                        الجمعية السعودية لإدارة المرافق تنظم ورشة عمل حول
                        استدامة المباني ... قراءة المزيد
                      </h3>
                      <p className="text-sm text-[#636363] mt-2">
                        لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على
                        العميل ليتصور طريقه و …
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
                </>
              ) : (
                <></>
              )
            ) : (
              <>
                <div
                  key={index}
                  className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <div className="w-full">
                    <Image
                      src="/images/common/placeholder_news.png"
                      alt="About Us"
                      width={500}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold leading-tight text-[#555555]">
                      الجمعية السعودية لإدارة المرافق تنظم ورشة عمل حول استدامة
                      المباني ... قراءة المزيد
                    </h3>
                    <p className="text-sm text-[#636363] mt-2">
                      لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على
                      العميل ليتصور طريقه و …
                    </p>
                    <Link
                      href={`/${lang}/news/${item?.id}`}
                      className="mt-4 text-[var(--main)] flex items-center justify-start text-primary font-semibold cursor-pointer"
                    >
                      <span className="text-lg font-bold">
                        {t("read_more")}
                      </span>
                      <div className={`${lang == "en" ? "rotate-y-180" : ""}`}>
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
              </>
            );
          })}
        </div>
        {/* <button className="flex items-center mx-auto bg-[var(--second_main)] text-white py-[2px] px-[2px] pe-4 rounded-full gap-3 hover:bg-teal-600 transition w-fit">
          <div className="w-12 h-12 bg-[var(--main)] text-white flex items-center justify-center rounded-full border-2 border-white">
            {lang == "en" ? (
              <BsArrowLeft className="font-bold" />
            ) : (
              <BsArrowRight className="font-bold" />
            )}
          </div>
          <span className="text-lg font-bold text-center">
            {t("read_more")}
          </span>
        </button> */}
      </div>
    </section>
  );
};

export default NewsSection;
