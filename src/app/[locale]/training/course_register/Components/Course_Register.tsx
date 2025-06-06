"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Course_Register = ({ translation }) => {
  const lang = useLocale();

  const courseContent = [
    {
      title: "موعد بداية الدورة :",
      desc: "تاريخ الدورة القادمة",
    },
    {
      title: "رسوم الدورة :",
      desc: "3,000 ر.س",
    },
    {
      title: "الخصم :",
      desc: "500 ر.س",
    },
    {
      title: "المبلغ المستحق :",
      desc: "2,500 ر.س",
    },
  ];

  const [selectedValue, setSelectedValue] = useState("option1");
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
      <div className="relative w-full" dir={lang === "en" ? "ltr" : "rtl"}>
        <div className="w-full" dir={lang === "en" ? "ltr" : "rtl"}>
          {/* Image for large screens (lg and above) */}
          <div className="hidden lg:block">
            <Image
              src="/images/training/Single_Course_Bg.png"
              alt="About Us"
              width={1920}
              height={1080}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Image for small screens (mobile) */}
          <div className="hidden md:block lg:hidden ">
            <Image
              src="/images/training/Single_Course_Bg_Mobile.png"
              alt="About Us"
              width={768}
              height={432}
              className="w-full h-[16rem]"
            />
          </div>

          {/* Image for small screens (mobile) */}
          <div className="block md:hidden">
            <Image
              src="/images/training/Single_Course_Bg_Mobile.png"
              alt="About Us"
              width={768}
              height={432}
              className="w-full h-[13.6rem]"
            />
          </div>
        </div>

        <div className="absolute bottom-6 right-0 text-white container mx-auto flex flex-col gap-3 md:gap-5">
          <p className="text-lg md:text-2xl lg:text-4xl font-bold">
            إدارة المرافق المتقدمة والصيانة الوقائية
          </p>
          <p className="text-base md:text-lg lg:text-xl font-semibold">
            مقدمة من جمعية إدارة المرافق السعودية
          </p>
          <Link
            // href={`/${lang}/data_library/${course?.id}`}
            href={`/${lang}/data_library/`}
            target="_blank"
            className="inline-block"
          >
            <div className="bg-transparent w-fit text-white font-bold p-2 text-md rounded-lg mb-[18px] mt-[2px] border-2 border-white text-[12px] md:text-[14px] transition-all duration-300 hover:border-[#61B8A0] hover:bg-white hover:text-[var(--main)]">
              سجل في الدورة الآن!
            </div>
          </Link>
        </div>
      </div>

      <div className="container mx-auto">
        {/* Course Overview */}
        <div className="mt-12 text-center">
          <h1 className="text-xl lg:text-3xl font-bold mb-4 text-[var(--main)]">
            التسجيل في دورة
          </h1>
          <h1 className="text-xl lg:text-3xl font-bold mb-4">
            إدارة المرافق المتقدمة والصيانة الوقائية
          </h1>
          <h3 className="text-[#737373] font-semibold text-sm lg:text-base">
            يرجى ملء النموذج أدناه لحجز مكانك في الدورة القادمة
          </h3>
        </div>

        <div className="mt-6 lg:mb-12 mb-8">
          <h1 className="text-xl lg:text-3xl font-bold mb-6 text-[var(--main)]">
            نوع الحضور
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Box 1 */}
            <div
              ref={box1Ref}
              style={{ height: equalHeight }}
              className="shadow-lg p-7 bg-[#F6F6F6] w-full"
            >
              <label className="flex items-start gap-x-3 lg:gap-x-5">
                <input
                  type="radio"
                  value="option1"
                  checked={selectedValue === "option1"}
                  onChange={handleChange}
                  className="accent-black w-5 lg:w-6 h-5 lg:h-6"
                />
                <div className="-translate-y-1">
                  <p className="text-base lg:text-xl font-bold">
                    حضور من المقر (3,000 ر.س)
                  </p>

                  <div className="lg:mt-2 mt-1">
                    <p className="text-[#555555] font-semibold text-sm lg:text-lg mb-1 lg:mb-2">
                      حدد المدينة
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

            {/* Box 2 */}
            <div
              ref={box2Ref}
              style={{ height: equalHeight }}
              className="shadow-lg p-7 bg-[#F6F6F6] w-full"
            >
              <label className="flex items-start gap-x-3 lg:gap-x-5">
                <input
                  type="radio"
                  value="option2"
                  checked={selectedValue === "option2"}
                  onChange={handleChange}
                  className="accent-black w-5 lg:w-6 h-5 lg:h-6"
                />
                <div className="-translate-y-1">
                  <p className="text-base lg:text-xl font-bold">
                    حضور أونلاين (1,500 ر.س)
                  </p>
                  <p className="text-[#555555] lg:mt-2 mt-1 font-semibold text-sm lg:text-lg mb-1 lg:mb-2">
                    سيتم إرسال رابط الحضور بعد التسجيل
                  </p>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-6 lg:mb-12 mb-8">
          <h1 className="text-base lg:text-2xl font-bold lg:mb-6 mb-3 text-[var(--main)]">
            كود الخصم إن وجد
          </h1>
          <div className=" gap-3 rounded-lg flex justify-between">
            <input
              type="text"
              className="text-[12px] md:text-lg lg:text-xl font-bold bg-[#F4F4F4] rounded-lg w-full"
            />
            <div className="text-[14px] lg:text-2xl font-bold bg-[var(--second_main)] px-4 lg:px-8 py-[6px] lg:py-3 text-white rounded-lg">
              تطبيق
            </div>
          </div>
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
              <button className="bg-gradient-to-r from-[#7ADEC2] to-[#61B8A0] text-white font-bold py-2 px-6 rounded-md text-base lg:text-2xl">
                سجل الآن
              </button>
              <p className="text-[14px] lg:text-xl mt-3 text-[#555555]">
                سيتم إضافة هذخ الدورة إلى ملفك الشخصي ضمن قسم
                &rdquo;دوراتي&rdquo; بعد إتمام الدفع بنجاح.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course_Register;
