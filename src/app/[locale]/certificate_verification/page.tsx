import { createTranslator } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async ({ params }) => {
  const { locale } = params;

  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({
    locale,
    messages,
    namespace: "Training",
  });

  return (
    <section
      className="container mx-auto lg:pt-0 pt-5 lg:pb-0 pb-1"
      dir={locale === "en" ? "ltr" : "rtl"}
    >
      <p className="text-[var(--main)] text-center lg:text-3xl text-xl font-bold mt-10">
        التحقق من الشهادة
      </p>
      <p className="text-[#555555] text-center mx-auto mt-2 leading-7 lg:text-base text-[13px] mb-4">
        أدخل الرقم التسلسلي لشهادتك للتحقق من حالتها
      </p>
      <div className="bg-[#F6F6F6] lg:w-fit mx-auto lg:py-7 py-3 lg:px-20 px-4 rounded-lg">
        <div className="flex flex-col gap-3">
          <label
            htmlFor="certificate-input"
            className="font-semibold lg:text-lg text-[14px]"
          >
            أدخل رقم الشهادة
          </label>
          <div className="lg:min-w-[600px] w-[97%] flex mx-auto justify-between items-center gap-3">
            <input
              id="certificate-input"
              type="text"
              className="bg-[#DFDFDF] outline-0 border-[1px] border-[#EDEDED] px-2 lg:py-3 py-[6px] rounded-lg w-full lg:text-base text-[13px]"
            />
            <div className="cursor-pointer hover:opacity-85 bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white lg:px-12 px-6 lg:py-3 py-[6px] rounded-lg font-semibold lg:text-base text-[12px]">
              تحقق
            </div>
          </div>
        </div>
        {/* <div className="bg-[#61B8A03D] mt-6 rounded-lg p-4 font-bold lg:text-[14px] text-[12px] lg:leading-7 leading-[22px]">
          <p>شهادة سارية</p>
          <p>الاسم : محمد محمود محمد محمود</p>
          <p>نوع الشهادة : شهادة حضور دورة في أساسيات إدارة المرافق</p>
          <p>تاريخ الاصدار : 24 أغسطس 2024</p>
        </div> */}
      </div>

      <p className="text-[#898989] text-center mx-auto mt-2 leading-7 lg:text-lg text-[13px] mb-10 font-bold">
        تواجه مشكلة؟ تواصل معنا عن طريق
        <Link
          href="mailto:info@sfma.sa"
          className="inline-block underline text-[var(--main)] mx-3"
        >
          info@sfma.sa
        </Link>
      </p>
    </section>
  );
};

export default Page;
