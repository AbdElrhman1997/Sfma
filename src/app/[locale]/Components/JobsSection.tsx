"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const JobsSection = () => {
  const lang = useLocale();
  const [content, setContent]: any = useState([]);
  const [loadingContent, setLoadingContent] = useState(false);
  const isEmpty = !loadingContent && content.length === 0;
  const [search, setSearch] = useState("");
  const textInput: any = useRef("textInput");
  const t = useTranslations("job");

  useEffect(() => {
    const fetchSinglePath = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}jobs/get-jobs${
        search ? `?search=${search}` : ""
      }?is_featured=1`;
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
  }, [lang, search]);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <section dir={lang == "en" ? "ltr" : "rtl"}>
      {content?.length ? (
        <>
          {" "}
          <div className="text-center lg:pt-12 pt-8 lg:pb-5 pb-2">
            <h2 className="lg:text-3xl text-xl font-bold text-[var(--main)] text-center lg:mb-3 mb-2">
              {t("title")}
            </h2>
            <h4 className="text-[#555555] text-center lg:mb-5 mb-4 lg:text-base text-sm">
              {t("subtitle")}
            </h4>
          </div>
          <div className="flex justify-center flex-wrap gap-8 container">
            {content?.length ? (
              content?.map((item) => {
                return (
                  <div
                    className="bg-[#F6F6F6] lg:w-[31%] md:w-[48%] w-full shadow p-4 text-[#555555] text-start border-r-4 border-[var(--second_main)] rounded-tr-xl rounded-br-xl"
                    key={item.id}
                  >
                    <p className="font-bold lg:text-xl text-base">
                      {item?.name}
                    </p>
                    <div className="flex items-center justify-start gap-3 mt-1">
                      <div className="w-4">
                        <Image
                          src="/images/common/fa6-solid_building.png"
                          alt="About Us"
                          width={50}
                          height={50}
                          className="w-full h-auto translate-y-1"
                        />
                      </div>
                      <p className=" lg:text-lg text-base mt-2">
                        {item?.company_name}
                      </p>
                    </div>
                    <div className="flex items-center justify-start gap-3 my-1">
                      <div className="w-4">
                        <Image
                          src="/images/common/location.png"
                          alt="About Us"
                          width={50}
                          height={50}
                          className="w-full h-auto translate-y-1"
                        />
                      </div>
                      <p className=" lg:text-lg text-base mt-2">
                        {item.location}
                      </p>
                    </div>
                    <div className="flex items-center justify-start gap-3">
                      <div className="w-5">
                        <Image
                          src="/images/common/time.png"
                          alt="About Us"
                          width={50}
                          height={50}
                          className="w-full h-auto translate-y-1.5"
                        />
                      </div>
                      <p className=" lg:text-lg text-base mt-2">
                        {formatDate(item?.created_at)}
                      </p>
                    </div>

                    <Link
                      href={`/${lang}/jobs/${item?.id}`}
                      className="block cursor-pointer hover:opacity-85 mt-4 text-center bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] text-white px-3 py-[6px] rounded-lg font-semibold w-full mx-auto"
                    >
                      عرض التفاصيل
                    </Link>
                  </div>
                );
              })
            ) : (
              <div className="col-span-6 lg:text-4xl text-2xl my-10 text-center w-full">
                لا توجد وظائف متاحة
              </div>
            )}
          </div>
        </>
      ) : null}
    </section>
  );
};

export default JobsSection;
