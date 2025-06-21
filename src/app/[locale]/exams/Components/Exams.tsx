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
      className="grid grid-cols-6 lg:gap-16 gap-8 container mx-auto mt-8"
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      {content?.map((item) => {
        return (
          <div
            className="bg-[#F6F6F6] lg:col-span-2 md:col-span-3 col-span-6 w-full shadow p-4 mx-auto text-[#555555] text-start border-r-4 border-[var(--second_main)] rounded-tr-xl rounded-br-xl"
            key={item.id}
          >
            <p className="font-semibold lg:text-xl text-base leading-8">
              {item?.title}{" "}
            </p>
            <div className="">
              <h3 className="lg:text-sm text-xs leading-7 text-[#555555] mb-2">
                {item?.description}
              </h3>
              <div className="flex gap-x-4 border-t-2 border-t-[#D4D4D4]">
                <div className="flex items-center justify-start gap-2 mt-2">
                  <div className="w-6 h-6 bg-[#555555] translate-y-1 rounded-full p-2 flex items-center justify-center">
                    <Image
                      src="/images/common/icon_1.png"
                      alt="About Us"
                      width={50}
                      height={50}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className=" lg:text-sm text-xs mt-2">
                    {item?.question_count} سؤال - اختيار متعدد
                  </p>
                </div>
                <div className="flex items-center justify-start gap-2 mt-2">
                  <div className="w-6 h-6 bg-[#555555] translate-y-1 rounded-full p-[5px] flex items-center justify-center">
                    <Image
                      src="/images/common/icon_2.png"
                      alt="About Us"
                      width={50}
                      height={50}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <p className=" lg:text-sm text-xs mt-2">
                    درجة النجاح : {item?.passing_score}%
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-3 mt-2 ">
                <div className="w-6 h-6 bg-[#555555] translate-y-1 rounded-full p-[5px] flex items-center justify-center">
                  <Image
                    src="/images/common/icon_3.png"
                    alt="About Us"
                    width={50}
                    height={50}
                    className="w-full h-auto"
                  />
                </div>
                <p className=" lg:text-sm text-xs mt-2">
                  الرسوم : {item?.is_free ? "مجاني" : `${item?.price} ر.س`}
                </p>
              </div>
              <div className=" mt-4 flex items-center justify-start gap-x-4 text-primary font-semibold cursor-pointer">
                <Link
                  href={`/${lang}/exams/${item?.id}`}
                  className="block cursor-pointer hover:opacity-85 w-[180px] text-center bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] text-white px-1 py-[6px] rounded-lg font-semibold mx-auto"
                >
                  اطلب الاختبار
                </Link>
                <span className="lg:text-xs text-[10px] font-semibold">
                  الاختبار متاح لمدة {item?.duration_minutes} ساعة من تاريخ سداد
                  الرسوم
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Exams;
