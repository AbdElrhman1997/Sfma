"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Exam_Register = () => {
  const lang = useLocale();
  const choosed_course: any = JSON.parse(
    localStorage.getItem("choosed_course")
  );
  const [selectedValue, setSelectedValue] = useState("offline");

  const payment_data = {
    type: "course",
    relative_id: choosed_course?.id,
    payment_method: "bank_transfer",
    attendance_type: selectedValue,
  };

  const courseContent = [
    {
      title: "رسوم الاختبار :",
      desc: `250 ر.س`,
      // desc: choosed_course?.date_from,
    },
    {
      title: "الخصم :",
      desc: choosed_course?.discounted_price
        ? choosed_course?.discounted_price
        : 0.0,
    },
    {
      title: "المبلغ المستحق :",
      desc: `250 ر.س`,
      // desc: `${choosed_course?.online_price} ر.س`,
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
        {/* Course Overview */}
        <div className="mt-12 text-center">
          <h1 className="text-xl lg:text-3xl font-bold mb-4 text-[var(--main)]">
            طلب الحصول على اختبار
          </h1>
          <h1 className="text-xl lg:text-3xl font-bold mb-4">
            {choosed_course?.title}
          </h1>
          <h3 className=" font-bold lg:text-xl text-base">
            اختبار دورة محترف إدارة مرافق (SFMP)
          </h3>
        </div>

        <div className="mt-6">
          <h1 className="text-base lg:text-2xl font-bold  text-[var(--main)] mb-3">
            كود الخصم إن وجد
          </h1>
          <div className=" gap-3 rounded-lg flex justify-between">
            <input
              type="text"
              className="text-[12px] md:text-lg lg:text-xl px-4 font-bold bg-[#F4F4F4] rounded-lg w-full"
            />
            <div className="text-[14px] lg:text-2xl font-bold bg-[var(--second_main)] px-4 lg:px-8 py-[6px] lg:py-3 text-white rounded-lg">
              تطبيق
            </div>
          </div>
        </div>

        <div className="lg:mb-8 mb-4 xl:text-xl text-[15px] mt-5 flex items-center gap-x-3">
          <input type="checkbox" id="terms_checkbox" />
          <label htmlFor="terms_checkbox">
            أوافق على{" "}
            <Link
              href={`/${lang}/terms`}
              className="text-[var(--main)] underline"
            >
              الشروط والأحكام الخاصة بالجمعية
            </Link>{" "}
          </label>
        </div>

        {/* Course Contents */}
        <div className="mt-6">
          <div className="bg-[#F6F6F6] p-6 flex flex-col items-center gap-6 mt-6 mb-8">
            {courseContent.map((item, index) => (
              <div
                key={index}
                className="bg-[#DFDFDF] lg:w-2/3 w-full  gap-3 px-2 lg:px-4 py-3 lg:py-5 rounded-lg flex justify-between"
              >
                <div className="text-[12px] md:text-lg lg:text-xl font-bold">
                  {item.title}
                </div>
                <div className="text-[12px] md:text-lg lg:text-xl font-bold">
                  {item.desc}
                </div>
              </div>
            ))}
            <div className="flex flex-col items-center  text-center">
              <Link
                href={`/${lang}/payment`}
                className="cursor-pointer hover:opacity-85 bg-gradient-to-r from-[#7ADEC2] to-[#61B8A0] text-white font-bold py-2 px-6 rounded-md text-base lg:text-2xl"
                onClick={() => {
                  localStorage.setItem(
                    "payment_data",
                    JSON.stringify(payment_data)
                  );
                }}
              >
                تأكيد البيانات والمتابعة للدفع
              </Link>
              <p className="text-[14px] lg:text-xl mt-3 text-[#555555]">
                سيتم إضافة هذه الدورة إلى ملفك الشخصي ضمن قسم
                &rdquo;الاختبارات&rdquo; بعد إتمام الدفع بنجاح.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exam_Register;
