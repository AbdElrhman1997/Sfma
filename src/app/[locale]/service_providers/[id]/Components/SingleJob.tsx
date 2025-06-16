"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SingleJob = ({ id }) => {
  const lang = useLocale();
  const [content, setContent]: any = useState({});
  const [loadingContent, setLoadingContent] = useState(false);
  const t = useTranslations("company");

  useEffect(() => {
    const fetchSinglePath = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}service-provider/get-service-provider-details/${id}`;
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
  }, [lang, id]);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <section className="container mx-auto" dir={lang == "en" ? "ltr" : "rtl"}>
      <div className="lg:flex justify-between items-center my-10 gap-6">
        <div className="lg:w-52 w-28 border-2 lg:mb-0 mb-10 border-[var(--second_main)] rounded-md p-4 lg:mx-0 mx-auto">
          <img
            src={`https://sfma.srv814693.hstgr.cloud/storage/${content?.logo}`}
            alt="About Us"
            width={50}
            height={50}
            className="w-full h-auto"
          />
        </div>
        <div className="shadow bg-[#F6F6F6] rounded-lg px-6 py-6 w-full">
          <p className="font-bold lg:text-2xl text-xl lg:text-start text-center">
            {content?.name}
          </p>
          <p className="lg:text-lg text-base lg:mt-6 mt-2 lg:text-justify text-center">
            {content?.city}
          </p>
          <div className="flex items-center lg:justify-start justify-center gap-4">
            <a
              href={`https://${content?.contact_person}`}
              target="_blank"
              className="cursor-pointer hover:opacity-85 mt-4 text-center bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white px-3 py-2 rounded-lg font-semibold"
            >
              {t("company.visit_website")}
            </a>
            <div className="cursor-pointer hover:opacity-85 mt-4 text-center bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white px-3 py-2 rounded-lg font-semibold">
              {t("company.full_time")}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7 col-span-12">
          <div className="shadow bg-[#F6F6F6] rounded-lg px-6 py-4">
            <p className="font-bold lg:text-xl text-base">
              {t("company.about")}
            </p>
            <p className="lg:text-lg text-base mt-2 lg:text-justify text-center">
              {content?.description}
            </p>
          </div>

          <div className="shadow bg-[#F6F6F6] rounded-lg px-6 py-4 lg:mt-12 mt-6">
            <p className="font-bold lg:text-xl text-base">
              {t("company.services")}
            </p>
            <ul className="list-disc ps-5 mt-1">
              {content?.services?.map((item, idx) => (
                <li key={idx} className="lg:text-lg text-base mt-2">
                  {lang === "en" ? item?.en : item?.ar}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:col-span-5 col-span-12">
          <div className=" shadow bg-[#F6F6F6] rounded-lg px-6 py-4 lg:mt-0 mt-10">
            <p className="font-bold lg:text-xl text-base">
              {t("company.contact_employer")}
            </p>
            <div className="flex items-center justify-start gap-3 bg-[#DFDFDF] rounded-lg p-2 mt-4">
              <div className="w-6 ms-2">
                <Image
                  src={`/images/common/website.png`}
                  alt="About Us"
                  width={50}
                  height={50}
                  className="w-full h-auto"
                />
              </div>
              <p className=" lg:text-lg text-base">{content?.contact_person}</p>
            </div>
            <div className="flex items-center justify-start gap-3 bg-[#DFDFDF] rounded-lg p-2 mt-4">
              <div className="w-6 ms-2">
                <Image
                  src={`/images/common/email.png`}
                  alt="About Us"
                  width={50}
                  height={50}
                  className="w-full h-auto"
                />
              </div>
              <p className=" lg:text-lg text-base">{content?.email}</p>
            </div>
            <div className="flex items-center justify-start gap-3 bg-[#DFDFDF] rounded-lg p-2 mt-4">
              <div className="w-6 ms-2">
                <Image
                  src={`/images/common/contact.png`}
                  alt="About Us"
                  width={50}
                  height={50}
                  className="w-full h-auto"
                />
              </div>
              <p className=" lg:text-lg text-base">{content?.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleJob;
