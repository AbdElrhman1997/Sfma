"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CircularProgress from "./CircularProgress";
import { useLocale } from "next-intl";

const ResultPage = ({ id }) => {
  const [exam, setCourse]: any = useState({});
  const lang = useLocale();

  useEffect(() => {
    const fetchSinglePath = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}exams/get-exam-results/${id}`;
      const token = localStorage.getItem("auth_token");

      try {
        const res = await fetch(apiUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Accept-Language": lang || "ar",
          },
          cache: "no-store",
        });
        const data = await res.json();
        setCourse(data?.data || {});
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchSinglePath();
  }, [lang, id]);

  return (
    <section className="container mx-auto">
      <div className="w-full bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] flex flex-col items-center lg:py-20 py-7 lg:mt-10 mt-5 rounded-xl">
        <div className="lg:w-28 w-14">
          <Image
            src={"/images/common/pass_icon.png"}
            alt="pass_icon"
            width={100}
            height={100}
            className="w-full h-auto object-cover"
          />
        </div>
        <p className="lg:text-4xl text-xl text-white text-center font-bold lg:mt-5 mt-3">
          مبارك, لقد اجتزت الاختبار بنجاح
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-x-10">
        <div className="lg:col-span-1 bg-[#F6F6F6] flex flex-col items-center lg:mt-10 mt-5 rounded-xl">
          <CircularProgress percentage={85} />
        </div>
        <div className="bg-[#F6F6F6] lg:col-span-2 flex flex-col items-center lg:py-20 py-7 lg:mt-10 mt-5 rounded-xl">
          <h1 className="text-lg lg:text-[27px] font-bold mb-3">
            تفاصيل الاختبار
          </h1>
          <div className=" p-6 grid lg:grid-cols-2 gap-6 mt-6 mb-8">
            {/* {exam?.categories?.map((item, index) => (
              <div
                key={index}
                className="bg-[#DFDFDF] gap-3 p-3 rounded-lg flex items-center"
              >
                <div className="w-7">
                  <img
                    src={`/images/logos/true_icon.png`}
                    className="object-cover h-full w-full transition duration-300"
                    alt="path image"
                  />
                </div>
                <div className="text-[13px] md:text-base lg:text-lg">
                  <span>{item?.name}</span>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultPage;
