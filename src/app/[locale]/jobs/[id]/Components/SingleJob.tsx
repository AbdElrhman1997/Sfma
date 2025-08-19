"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SingleJob = ({ id }) => {
  const [job, setJob]: any = useState({});
  const [loading, setLoading] = useState(false);
  const lang = useLocale();
  const t = useTranslations("job");

  useEffect(() => {
    const fetchJobDetails = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}jobs/get-job-details/${id}`;
      try {
        setLoading(true);
        const res = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Accept-Language": lang || "ar",
          },
          cache: "no-store",
        });
        const data = await res.json();
        setJob(data?.data || {});
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job details:", error);
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [lang, id]);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <section className="container mx-auto" dir={lang === "en" ? "ltr" : "rtl"}>
      <div className="flex flex-wrap justify-between items-center  mt-12">
        <div>
          <h1 className="lg:text-4xl text-2xl text-[#555555] font-bold">
            {job?.name}
          </h1>

          <h3 className="lg:text-lg text-base text-[#555555] lg:mt-2 mt-4">
            {job?.company_name}
          </h3>
        </div>

        <div className="flex items-center gap-4">
          <div className="cursor-pointer hover:opacity-85 mt-4 text-center bg-gradient-to-r from-[#888888] to-[#555555] w-fit text-white px-3 py-2 rounded-lg font-semibold">
            {t("posted_on")} {formatDate(job?.created_at)}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 lg:gap-16 lg:mt-12 mt-6">
        {/* معلومات الوظيفة */}
        <div className="lg:col-span-7 col-span-12">
          <div className="shadow bg-[#F6F6F6] rounded-lg px-6 py-4">
            <p className="font-bold lg:text-xl text-base">{t("details")}</p>
            <ul className="list-disc ps-5 mt-1">
              <li className="lg:text-lg text-base mt-2">
                <span className="font-bold"> {t("work_hours")} : </span>{" "}
                {job?.work_hours}
              </li>
              <li className="lg:text-lg text-base mt-2">
                <span className="font-bold"> {t("contract_duration")} : </span>{" "}
                {job?.contract_time}
              </li>
              <li className="lg:text-lg text-base mt-2">
                <span className="font-bold"> {t("salary")} : </span>{" "}
                {job?.salary}
              </li>
              <li className="lg:text-lg text-base mt-2">
                <span className="font-bold"> {t("location")} : </span>{" "}
                {job?.location}
              </li>
            </ul>
          </div>

          {/* وصف الوظيفة */}
          <div className="shadow bg-[#F6F6F6] rounded-lg px-6 py-4 mt-10">
            <p className="font-bold lg:text-xl text-base">{t("description")}</p>
            <p className="lg:text-lg text-base mt-2 lg:text-justify text-center">
              {job?.description}
            </p>
          </div>

          {/* المهام */}
          <div className="shadow bg-[#F6F6F6] rounded-lg px-6 py-4 mt-10">
            <p className="font-bold lg:text-xl text-base">{t("tasks")}</p>
            <ul className="list-disc ps-5 mt-1">
              {job?.tasks?.map((item, idx) => (
                <li key={idx} className="lg:text-lg text-base mt-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* المؤهلات */}
          <div className="shadow bg-[#F6F6F6] rounded-lg px-6 py-4 mt-10">
            <p className="font-bold lg:text-xl text-base">
              {t("requirements")}
            </p>
            {job?.requirements?.map((req, idx) => (
              <ul key={idx} className="list-disc ps-5 mt-1">
                <p className="font-bold lg:text-lg text-sm -ms-5">
                  {req?.title}
                </p>
                {req?.items?.map((item, subIdx) => (
                  <li key={subIdx} className="lg:text-base text-xs mt-1">
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* معلومات الشركة */}
        <div className="lg:col-span-5 col-span-12">
          <div className="shadow bg-[#F6F6F6] rounded-lg px-6 py-4 lg:mt-0 mt-10 border-[1.5px] border-[var(--second_main)]">
            <p className="font-bold lg:text-xl text-base">
              {t("contact_employer")}
            </p>

            {[
              {
                icon: "website",
                text: job?.company_website,
                link: job?.company_website
                  ? `https://${job.company_website}`
                  : null,
              },
              {
                icon: "email",
                text: job?.company_email,
                link: job?.company_email ? `mailto:${job.company_email}` : null,
              },
              {
                icon: "contact",
                text: job?.company_phone,
                link: job?.company_phone
                  ? job.company_phone.includes("whatsapp")
                    ? `https://wa.me/${job.company_phone.replace(/\D/g, "")}`
                    : `tel:${job.company_phone.replace(/\D/g, "")}`
                  : null,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-[#DFDFDF] rounded-lg p-2 mt-4"
              >
                <div className="w-6 ms-2">
                  <Image
                    src={`/images/common/${item.icon}.png`}
                    alt="icon"
                    width={50}
                    height={50}
                    className="w-full h-auto"
                  />
                </div>
                <Link
                  href={item.link || ""}
                  target="_blank"
                  className="lg:text-lg text-base underline"
                >
                  {item.text}
                </Link>
              </div>
            ))}
          </div>

          <div className="shadow bg-[#F6F6F6] rounded-lg px-6 py-4 mt-10">
            <p className="font-bold lg:text-xl text-base">
              {t("about_company")}
            </p>
            <div className="mt-6 bg-white w-full p-4 rounded-lg">
              <div className="w-16 mx-auto">
                <img
                  src={`https://sffma.fmexcon.com/storage/${job?.company_logo}`}
                  alt="Company Logo"
                  width={50}
                  height={50}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <p className="lg:text-base text-[14px] text-justify leading-7 mt-5">
              {job?.about_company}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleJob;
