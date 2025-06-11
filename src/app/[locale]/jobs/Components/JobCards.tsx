"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const JobCards = () => {
  const [cards_list, set_cards_list] = useState([
    {
      id: 1,
      job_name: "اسم الوظيفة",
      company_name: "اسم الشركة المعلنة",
      company_location: "مقر الشركة",
      job_date: "تاريخ نشر الإعلان عن الوظيفة",
    },
    {
      id: 1,
      job_name: "اسم الوظيفة",
      company_name: "اسم الشركة المعلنة",
      company_location: "مقر الشركة",
      job_date: "تاريخ نشر الإعلان عن الوظيفة",
    },
    {
      id: 1,
      job_name: "اسم الوظيفة",
      company_name: "اسم الشركة المعلنة",
      company_location: "مقر الشركة",
      job_date: "تاريخ نشر الإعلان عن الوظيفة",
    },
  ]);
  const lang = useLocale();

  return (
    <section className="grid grid-cols-6 lg:gap-16 gap-8">
      {cards_list.map((item) => {
        return (
          <div
            className="bg-[#F6F6F6] lg:col-span-2 md:col-span-3 col-span-6 w-full shadow p-4 mx-auto text-[#555555] text-start border-r-4 border-[var(--second_main)] rounded-tr-xl rounded-br-xl"
            key={item.id}
          >
            <p className="font-bold lg:text-xl text-base">{item.job_name}</p>
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
              <p className=" lg:text-lg text-base mt-2">{item.company_name}</p>
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
              <p className=" lg:text-lg text-base mt-2">{item.job_name}</p>
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
              <p className=" lg:text-lg text-base mt-2">{item.job_date}</p>
            </div>

            <Link
              href={`/${lang}/jobs/${item.id}`}
              className="block cursor-pointer hover:opacity-85 mt-4 text-center bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] text-white px-3 py-[6px] rounded-lg font-semibold w-full mx-auto"
            >
              عرض التفاصيل
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default JobCards;
