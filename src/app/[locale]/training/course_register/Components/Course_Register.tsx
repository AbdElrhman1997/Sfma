"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Course_Register = () => {
  const t = useTranslations("course_register");
  const lang = useLocale();
  const choosed_course: any = JSON.parse(
    localStorage.getItem("choosed_course")
  );
  const auth_token: any = localStorage.getItem("auth_token");
  const [selectedValue, setSelectedValue] = useState("offline");
  const router = useRouter();

  const payment_data = {
    type: "course",
    relative_id: choosed_course?.id,
    payment_method: "bank_transfer",
    attendance_type: selectedValue,
  };

  const courseContent = [
    {
      title: t("start_date"),
      desc: choosed_course?.date_from,
    },
    {
      title: t("course_fee"),
      desc: `${
        selectedValue == "offline"
          ? choosed_course?.price
          : choosed_course?.online_price
      } ${t("currency")}`,
    },
    {
      title: t("discount"),
      desc: choosed_course?.discounted_price
        ? choosed_course?.discounted_price
        : 0.0,
    },
    {
      title: t("total_due"),
      desc: `${
        selectedValue == "offline"
          ? choosed_course?.price - choosed_course?.discounted_price
          : choosed_course?.online_price - choosed_course?.discounted_price
      } ${t("currency")}`,
    },
  ];

  const [selectedCity, setSelectedCity] = useState("الرياض");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const [equalHeight, setEqualHeight] = useState("auto");

  useEffect(() => {
    if (box1Ref.current && box2Ref.current) {
      const h1 = box1Ref.current.offsetHeight;
      const h2 = box2Ref.current.offsetHeight;
      const maxHeight: any = Math.max(h1, h2);
      setEqualHeight(maxHeight);
    }
  }, []);

  return (
    <section>
      <div className="container mx-auto">
        <div className="mt-12 text-center">
          <h1 className="text-xl lg:text-3xl font-bold mb-4 text-[var(--main)]">
            {t("register_heading")}
          </h1>
          <h1 className="text-xl lg:text-3xl font-bold mb-4">
            {choosed_course?.title}
          </h1>
          <h3 className="text-[#737373] font-semibold text-sm lg:text-base">
            {t("register_description")}
          </h3>
        </div>

        <div className="mt-6 lg:mb-12 mb-8">
          <h1 className="text-xl lg:text-3xl font-bold mb-6 text-[var(--main)]">
            {t("attendance_type")}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              ref={box1Ref}
              style={{ height: equalHeight }}
              className="shadow-lg p-7 bg-[#F6F6F6] w-full"
            >
              <label className="flex items-start gap-x-3 lg:gap-x-5">
                <input
                  type="radio"
                  value="offline"
                  checked={selectedValue === "offline"}
                  onChange={handleChange}
                  className="accent-black w-5 lg:w-6 h-5 lg:h-6"
                />
                <div className="-translate-y-1">
                  <p className="text-base lg:text-xl font-bold">
                    {t("offline_attendance", { price: choosed_course?.price })}
                  </p>
                  <div className="lg:mt-2 mt-1">
                    <p className="text-[#555555] font-semibold text-sm lg:text-lg mb-1 lg:mb-2">
                      {t("select_city")}
                    </p>
                    {["الرياض", "جدة", "الدمام"].map((city, idx) => (
                      <label
                        key={idx}
                        className="flex items-center gap-x-2 lg:gap-x-3 lg:my-0 my-2"
                      >
                        <input
                          type="radio"
                          value={city}
                          checked={selectedCity === city}
                          onChange={handleCityChange}
                          className="accent-black w-4 lg:w-5 h-4 lg:h-5"
                        />
                        <p className="text-sm lg:text-lg font-bold">{city}</p>
                      </label>
                    ))}
                  </div>
                </div>
              </label>
            </div>

            <div
              ref={box2Ref}
              style={{ height: equalHeight }}
              className="shadow-lg p-7 bg-[#F6F6F6] w-full"
            >
              <label className="flex items-start gap-x-3 lg:gap-x-5">
                <input
                  type="radio"
                  value="online"
                  checked={selectedValue === "online"}
                  onChange={handleChange}
                  className="accent-black w-5 lg:w-6 h-5 lg:h-6"
                />
                <div className="-translate-y-1">
                  <p className="text-base lg:text-xl font-bold">
                    {t("online_attendance", {
                      price: choosed_course?.online_price,
                    })}
                  </p>
                  <p className="text-[#555555] lg:mt-2 mt-1 font-semibold text-sm lg:text-lg mb-1 lg:mb-2">
                    {t("online_note")}
                  </p>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h1 className="text-base lg:text-2xl font-bold text-[var(--main)] mb-3">
            {t("discount_code")}
          </h1>
          <div className="gap-3 rounded-lg flex justify-between">
            <input
              type="text"
              className="text-[12px] md:text-lg lg:text-xl px-4 font-bold bg-[#F4F4F4] rounded-lg w-full"
            />
            <div className="text-[14px] lg:text-2xl font-bold bg-[var(--second_main)] px-4 lg:px-8 py-[6px] lg:py-3 text-white rounded-lg">
              {t("apply")}
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            localStorage.setItem("payment_data", JSON.stringify(payment_data));
            router.push(
              `${auth_token ? `/${lang}/payment` : `/${lang}/login`}`
            );
          }}
        >
          <div className="lg:mb-8 mb-4 xl:text-xl text-[15px] mt-5 flex items-center gap-x-3">
            <input type="checkbox" id="terms_checkbox" required />
            <label htmlFor="terms_checkbox">
              {t("agree_terms")}{" "}
              <Link
                href={`/${lang}/terms`}
                className="text-[var(--main)] underline"
              >
                {t("terms_link")}
              </Link>
            </label>
          </div>

          <div className="mt-6">
            <div className="bg-[#F6F6F6] p-6 flex flex-col items-center gap-6 mt-6 mb-8">
              {courseContent.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#DFDFDF] lg:w-2/3 w-full gap-3 px-2 lg:px-4 py-3 lg:py-5 rounded-lg flex justify-between"
                >
                  <div className="text-[12px] md:text-lg lg:text-xl font-bold">
                    {item.title}
                  </div>
                  <div className="text-[12px] md:text-lg lg:text-xl font-bold">
                    {item.desc}
                  </div>
                </div>
              ))}
              <div className="flex flex-col items-center text-center">
                <button
                  type="submit"
                  className="cursor-pointer hover:opacity-85 bg-gradient-to-r from-[#7ADEC2] to-[#61B8A0] text-white font-bold py-2 px-6 rounded-md text-base lg:text-2xl"
                >
                  {t("confirm_and_continue")}
                </button>
                <p className="text-[14px] lg:text-xl mt-3 text-[#555555]">
                  {t("note_after_payment")}
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Course_Register;
