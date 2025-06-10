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
    namespace: "Data_Library",
  });

  const Card = ({ id }) => {
    return (
      <div className="bg-[#F6F6F6] shadow lg:col-span-1 md:col-span-2 col-span-3 border-b-4 border-[var(--second_main)] rounded-lg px-4 text-center">
        <div className="w-32 border-2 border-[var(--second_main)] rounded-lg mx-auto -translate-y-7">
          <Image
            src="/images/common/test_trainer.png"
            alt="About Us"
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-lg "
          />
        </div>
        <p className="text-[#555555] font-bold text-xl my-3 -translate-y-6">
          م. أحمد الغامدي
        </p>
        <Link
          href={`/${locale}/certified_trainers/${id}`}
          className="block cursor-pointer mx-auto hover:opacity-85 -translate-y-6 bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white px-4 py-[6px] rounded-lg font-semibold text-[15px]"
        >
          معرفة المزيد عن المدرب
        </Link>
      </div>
    );
  };

  return (
    <section className="">
      <div className="relative" dir={locale == "en" ? "ltr" : "rtl"}>
        <Image
          src="/images/common/banner_bg.png"
          alt="About Us"
          width={500}
          height={500}
          className="w-full lg:max-h-[350px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3 lg:px-20 py-3 lg:py-5 text-white w-full">
          <p className="lg:text-4xl text-base mb-2 lg:mb-4 leading-snug lg:leading-[3rem] font-bold">
            مدربونا المعتمدون في جمعية إدارة المرافق السعودية
          </p>
          <p className="lg:max-w-4xl text-[12px] lg:text-[24px] leading-relaxed">
            اكتشف نخبة من المدربين المعتمدين في مختلف مجالات إدارة المرافق، ممن
            يقدّمون دورات SFMA المعتمدة بخبرة واحترافية.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-8 gap-y-16 container mx-auto mt-14">
        {[...Array(6)].map((_, index) => (
          <Card key={index} id={index + 1} />
        ))}
      </div>
    </section>
  );
};

export default Page;
