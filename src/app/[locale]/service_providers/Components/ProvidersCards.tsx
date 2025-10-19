"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ProvidersCards = ({ content, setContent }) => {
  const lang = useLocale();
  const [loadingContent, setLoadingContent] = useState(false);
  const isEmpty = !loadingContent && content.length === 0;
  const t = useTranslations("common");
  const [search, setSearch] = useState("");
  const textInput: any = useRef("textInput");

  useEffect(() => {
    const fetchSinglePath = async () => {
      const apiUrl = `${
        process.env.NEXT_PUBLIC_API_URL
      }service-provider/get-service-providers${
        search ? `?search=${search}` : ""
      }`;
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

  return (
    <section className="flex flex-wrap gap-y-8 lg:gap-x-8 gap-x-0">
      <div className="lg:w-1/2 w-[97%] shadow flex absolute -top-24 left-1/2 -translate-x-1/2 z-10 bg-white p-3 rounded-lg justify-between items-center gap-3">
        <input
          type="text"
          placeholder="ابحث بإسم الشركة"
          className="bg-[#F6F6F6] text-black placeholder:text-[#8D99AE] outline-0 border-[1px] border-[#EDEDED] p-2 rounded-xl w-full lg:text-base text-[13px]"
          ref={textInput}
        />
        <div
          className="cursor-pointer hover:opacity-85 bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white lg:px-12 px-6 py-[6px] rounded-lg font-semibold lg:text-base text-[13px]"
          onClick={(e) => {
            setSearch(textInput.current.value);
          }}
        >
          بحث
        </div>
      </div>
      {content?.map((item) => {
        return (
          <div
            className="bg-[#F6F6F6] shadow-lg w-fit p-4 text-center lg:max-w-[30%] max-w-full lg:mx-auto"
            key={item.id}
          >
            <div className="bg-white p-3 border-[1px] rounded-xl border-[var(--second_main)] w-fit mx-auto">
              <div className="w-10">
                <img
                  src={`https://sffma.fmexcon.com/storage/${item?.logo}`}
                  alt="About Us"
                  width={50}
                  height={50}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <p className="font-bold lg:text-xl text-base mt-2">{item?.name}</p>
            <p className="text-[#555555] lg:text-base text-[14px] my-1 leading-5 mb-3">
              {item?.slug}
            </p>
            <Link
              href={`/${lang}/service_providers/${item?.id}`}
              className="block cursor-pointer hover:opacity-85 bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white px-3 py-[6px] rounded-lg font-semibold md:min-w-[250px] min-w-full mx-auto mt-4"
            >
              {t("show_details")}
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default ProvidersCards;
