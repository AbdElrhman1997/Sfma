"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const JobCards = () => {
  const lang = useLocale();
  const [content, setContent]: any = useState([]);
  const [loadingContent, setLoadingContent] = useState(false);
  const isEmpty = !loadingContent && content.length === 0;
  const [search, setSearch] = useState("");
  const textInput: any = useRef("textInput");

  useEffect(() => {
    const fetchSinglePath = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}jobs/get-jobs${
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

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <section className="grid grid-cols-6 lg:gap-16 gap-8">
      <div className="lg:w-1/2 w-[97%] shadow flex absolute -top-24 left-1/2 -translate-x-1/2 z-10 bg-white p-3 rounded-lg justify-between items-center gap-3">
        <input
          type="text"
          placeholder="ابحث بإسم الوظيفة أو الشركة"
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
      {content?.length ? (
        content?.map((item) => {
          return (
            <div
              className="bg-[#F6F6F6] lg:col-span-2 md:col-span-3 col-span-6 w-full shadow p-4 mx-auto text-[#555555] text-start border-r-4 border-[var(--second_main)] rounded-tr-xl rounded-br-xl"
              key={item.id}
            >
              <p className="font-bold lg:text-xl text-base">{item?.name}</p>
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
                <p className=" lg:text-lg text-base mt-2">{item.location}</p>
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
    </section>
  );
};

export default JobCards;
