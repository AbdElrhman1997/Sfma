import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogsSection = () => {
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
  ];

  return (
    <section
      className={`bg-[#F6F6F6] flex flex-col md:flex-row items-center justify-between gap-8  text-start mt-10 lg:pt-8 pt-4 lg"pb-10 pb-5`}
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div className="w-full flex flex-col justify-center container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1DAEE5] mb-3"></h2>
          <p className="text-black mb-3"></p>
          <h2 className="lg:text-3xl text-xl font-bold text-[var(--main)] text-center lg:mb-3 mb-2">
            آخر المقالات والمستجدات
          </h2>
          <h4 className="text-[#555555] text-center lg:mb-8 mb-4 lg:text-base text-sm">
            تابع أحدث المقالات التي تسلط الضوء على مفاهيم وتقنيات إدارة المرافق
            الحديثة
          </h4>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 justify-center items-center pt-4">
          {courses.map((item, index) => {
            return (
              <div
                key={index}
                className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-md p-4"
              >
                <div className="w-full h-52 bg-[#9D9D9D] rounded-lg"></div>
                <div className="py-4">
                  <h3 className="text-lg font-bold leading-tight text-[#555555]">
                    عنوان المقال - عنوان المقال - عنوان المقال
                  </h3>
                  <p className="text-sm text-[#636363] mt-2">
                    لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على
                    العميل ليتصور طريقه و …
                  </p>
                  <Link
                    href={`/${lang}/news/${item?.id}`}
                    className="mt-4 text-[var(--main)] flex items-center justify-start text-primary font-semibold cursor-pointer"
                  >
                    <span className="text-lg font-bold">أكمل القراءة</span>
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
            );
          })}
        </div>
        <Link
          href={`/${lang}/data_library`}
          className="mt-6 block cursor-pointer hover:opacity-85 bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white lg:px-12 px-6 lg:py-3 py-[6px] rounded-lg font-semibold lg:text-base text-[12px] mx-auto"
        >
          المزيد من المقالات
        </Link>
      </div>
    </section>
  );
};

export default BlogsSection;
