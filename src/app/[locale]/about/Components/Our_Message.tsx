import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

const Our_Message = () => {
  const lang = useLocale();

  return (
    <section
      className={` gap-8 container mx-auto md:pt-6 pt-2 mt-8 text-start`}
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div className="">
        <h2 className="lg:text-3xl text-xl font-bold text-[#1DAEE5] lg:mb-3 mb-2 text-center">
          رسالتنا
        </h2>
        <p className="text-[#555555] text-center lg:text-base text-sm md:mb-8 mb-4">
          نلتزم بتمكين قطاع إدارة المرافق من خلال التعليم، التطوير المهني،
          والشراكات الاستراتيجية
        </p>
      </div>
      <section
        className={`flex flex-col md:flex-row items-center justify-between gap-8 container mx-auto ${
          lang == "en" ? "md:text-left" : "md:text-right"
        } text-center`}
        dir={lang == "en" ? "ltr" : "rtl"}
      >
        <div className="w-full md:w-1/2">
          <Image
            src="/images/about_page/Our_Message.png"
            alt="About Us"
            width={500}
            height={400}
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-black text-justify mb-6 lg:text-base xl:text-lg lg:leading-6 xl:leading-8">
            تسعى جمعية إدارة المرافق السعودية SFMA إلى تمكين قطاع إدارة المرافق
            في المملكة العربية السعودية من خلال توفير بيئة داعمة للتعليم
            والتطوير المهني، وبناء شراكات استراتيجية مع الجهات المعنية، وتقديم
            خدمات عالية الجودة لأعضائها، وذلك بهدف الارتقاء بمستوى الخدمات
            المقدمة في المرافق والمساهمة في تحقيق التنمية المستدامة.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Our_Message;
