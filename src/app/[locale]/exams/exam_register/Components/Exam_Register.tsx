"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Exam_Register = () => {
  const lang = useLocale();
  const t = useTranslations("exam_register");
  const router = useRouter();

  const choosed_exam: any = JSON?.parse(
    localStorage.getItem("choosed_exam") || "{}"
  );
  const auth_token: any = localStorage.getItem("auth_token");

  const [selectedValue, setSelectedValue] = useState("online");
  const [selectedCity, setSelectedCity] = useState("الرياض");
  const [couponCode, setCouponCode] = useState("");
  const [isApplying, setIsApplying] = useState(false);
  const [examData, setExamData] = useState(choosed_exam);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  const applyCoupon = async () => {
    if (!couponCode.trim()) return toast.warning(t("enter_coupon"));

    setIsApplying(true);

    try {
      const token = localStorage.getItem("auth_token");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}exams/get-exam-details/${choosed_exam?.id}?coupon_code=${couponCode}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Accept-Language": lang || "ar",
          },
        }
      );

      const data = await res.json();

      setExamData(data.data);
      localStorage.setItem("choosed_exam", JSON.stringify(data.data));

      if (data?.data?.coupon_applied) {
        toast.success(t("coupon_applied_success"));
      } else {
        toast.error(t("coupon_applied_failed"));
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || t("coupon_apply_error"));
    } finally {
      setIsApplying(false);
    }
  };

  const payment_data = {
    type: "exam",
    relative_id: examData?.id,
    payment_method: "bank_transfer",
    attendance_type: selectedValue,
    coupon_code: couponCode,
  };

  console.log(examData?.coupon_discount);

  const courseContent = [
    {
      title: t("fees"),
      desc: `${
        examData?.price ? parseFloat(examData?.price)?.toFixed(2) : "0.00"
      } ر.س`,
    },
    {
      title: t("discount"),
      desc: `${
        examData?.coupon_discount
          ? parseFloat(examData?.coupon_discount)?.toFixed(2)
          : "0.00"
      } ر.س`,
    },
    {
      title: t("total"),
      desc: `${(
        (examData?.price || 0) - (examData?.coupon_discount || 0)
      ).toFixed(2)} ر.س`,
    },
  ];

  const box1Ref = useRef<HTMLDivElement>(null);
  const box2Ref = useRef<HTMLDivElement>(null);
  const [equalHeight, setEqualHeight] = useState<number | "auto">("auto");

  useEffect(() => {
    if (box1Ref.current && box2Ref.current) {
      const h1 = box1Ref.current.offsetHeight;
      const h2 = box2Ref.current.offsetHeight;
      setEqualHeight(Math.max(h1, h2));
    }
  }, []);

  return (
    <section>
      <div className="container mx-auto">
        {/* Course Overview */}
        <div className="mt-12 text-center">
          <h1 className="text-xl lg:text-3xl font-bold mb-4 text-[var(--main)]">
            {t("register_title")}
          </h1>
          <h1 className="text-xl lg:text-3xl font-bold mb-4">
            {examData?.title}
          </h1>
        </div>

        {/* Discount Code */}
        <div className="mt-6">
          <h1 className="text-base lg:text-2xl font-bold text-[var(--main)] mb-3">
            {t("discount_code")}
          </h1>
          <div className="gap-3 rounded-lg flex justify-between">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="text-[12px] md:text-lg lg:text-xl px-4 font-bold bg-[#F4F4F4] rounded-lg w-full"
            />
            <button
              type="button"
              onClick={applyCoupon}
              disabled={isApplying}
              className="text-[14px] lg:text-2xl cursor-pointer font-bold bg-[var(--second_main)] px-4 lg:px-8 py-[6px] lg:py-3 text-white rounded-lg hover:opacity-90 transition disabled:opacity-50"
            >
              {t("apply")}
            </button>
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
              {t("agree")}{" "}
              <Link
                href={`/${lang}/terms`}
                className="text-[var(--main)] underline"
              >
                {t("terms")}
              </Link>
            </label>
          </div>

          {/* Course Contents */}
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
                  {t("confirm_and_pay")}
                </button>
                <p className="text-[14px] lg:text-xl mt-3 text-[#555555]">
                  {t("added_to_profile")}
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Exam_Register;
