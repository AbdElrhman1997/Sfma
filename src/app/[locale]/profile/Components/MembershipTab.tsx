"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const MembershipTab = ({ profileData }) => {
  const lang = useLocale();
  const t = useTranslations("Register");

  const courseDetails = [
    {
      icon: "/images/logos/true_icon.png",
      label: "سرد تفاصيل الاتصال الخاصة بالعضو على صفحة الويب الخاصة بـ SFMA",
    },
    {
      icon: "/images/logos/true_icon.png",
      label: "امتياز استخدام شعار SFMA",
    },
    {
      icon: "/images/logos/true_icon.png",
      label:
        "تسهيل - للأعضاء فقط - دليل المشترين التي من شأنها أن تمكن الوصول إلى أحدث الخدمات",
    },
    {
      icon: "/images/logos/true_icon.png",
      label:
        "مجموعة مناقشة لحل المشاكل المتعلقة بالعمل ومساعدة الزملاء الأعضاء في المشاريع والأهداف المهنية",
    },
    {
      icon: "/images/logos/true_icon.png",
      label: "حضور الأحداث من الداخل",
    },
    {
      icon: "/images/logos/true_icon.png",
      label: "له أحقية التصويت",
    },
  ];

  return (
    <>
      <div className="">
        <div className="flex flex-col items-center">
          <div className="w-28 md:w-36">
            <Image
              src={"/images/about_page/استشاري 1.png"}
              alt="session icon"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <p className="font-bold text-base md:text-2xl">
            نوع العضوية : استشاري
          </p>
          <div className="bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] text-[14px] md:text-base mt-4 w-fit text-white px-4 py-2 rounded-full">
            حالة العضوية : سارية
          </div>
          {/* <div className="bg-gradient-to-r from-[#F87171] to-[#E62323] text-[14px] md:text-base mt-4 w-fit text-white px-4 py-2 rounded-full">
            حالة العضوية : منتهية
          </div> */}
        </div>
        <div
          className="container mx-auto mt-12"
          dir={lang == "en" ? "ltr" : "rtl"}
        >
          <div className="border-[2.4px] border-[#61B8A0] py-6 px-3 rounded-lg relative">
            <div className="bg-[#61B8A0] p-3 rounded-lg text-white w-fit absolute top-0 right-0 -translate-y-1/2 -translate-x-[40px] font-bold text-[13px] md:text-[15px]">
              معلومات العضوية
            </div>
            <div className="grid grid-cols-12 gap-x-5 gap-y-5 p-5 pb-2">
              <div className="md:col-span-4 col-span-12">
                <label
                  htmlFor="full_name_ar"
                  className="block text-sm font-medium"
                >
                  الاسم
                </label>
                <input
                  id="full_name_ar"
                  type="text"
                  // defaultValue={profileData?.full_name_ar}
                  disabled
                  className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                />
              </div>
              <div className="md:col-span-4 col-span-12">
                <label
                  htmlFor="full_name_en"
                  className="block text-sm font-medium"
                >
                  رقم الهوية
                </label>
                <input
                  id="full_name_en"
                  type="text"
                  // defaultValue={profileData?.full_name_en}
                  disabled
                  className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                />
              </div>
              <div className="md:col-span-4 col-span-12">
                <label
                  htmlFor="date_of_birth"
                  className="block text-sm font-medium"
                >
                  رقم العضوية
                </label>
                <input
                  id="date_of_birth"
                  type="text"
                  // defaultValue={profileData?.date_of_birth}
                  disabled
                  className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                />
              </div>
              <div className="md:col-span-4 col-span-12">
                <label
                  htmlFor="nationality"
                  className="block text-sm font-medium"
                >
                  تاريخ اصدار العضوية
                </label>
                <input
                  id="nationality"
                  type="text"
                  // defaultValue={profileData?.nationality}
                  disabled
                  className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                />
              </div>
              <div className="md:col-span-4 col-span-12">
                <label htmlFor="country" className="block text-sm font-medium">
                  تاريخ انتهاء العضوية
                </label>
                <input
                  id="country"
                  type="text"
                  // defaultValue={profileData?.country}
                  disabled
                  className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center space-x-2 mx-auto mb-2 mt-6">
          <button
            type="submit"
            className="px-5 py-3 text-lg font-medium text-white bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] rounded-md hover:opacity-85 disabled:cursor-not-allowed cursor-pointer"
            // onClick={() => {
            //   localStorage.removeItem("auth_token");
            //   window.location.href = "/";
            // }}
          >
            تجديد العضوية الآن!
          </button>
        </div> */}
        <div className="flex justify-center mx-auto mb-2 mt-6">
          <button
            type="submit"
            className="px-5 py-3 text-lg font-medium flex justify-center items-center space-x-3 text-white bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] rounded-md hover:opacity-85 disabled:cursor-not-allowed cursor-pointer"
            // onClick={() => {
            //   localStorage.removeItem("auth_token");
            //   window.location.href = "/";
            // }}
          >
            <div className="w-3 md:w-5">
              <Image
                src={"/images/logos/download_icon.png"}
                alt="session icon"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <p>تحميل بطاقة العضوية الخاص بك</p>
          </button>
        </div>
        <div className="bg-[#F6F6F6] p-6 grid lg:grid-cols-2 gap-6 mt-6">
          {courseDetails.map((item, index) => (
            <div
              key={index}
              className="bg-[#DFDFDF] gap-3 p-3 rounded-lg flex items-center"
            >
              <div className="min-w-7 max-w-7">
                <Image
                  src={item.icon}
                  alt="icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="text-[12px] md:text-[14px] lg:text-base">
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MembershipTab;
