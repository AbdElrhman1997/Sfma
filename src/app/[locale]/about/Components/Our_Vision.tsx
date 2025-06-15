import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

const Our_Vision = ({ title, description, content, lang }) => {
  return (
    <section
      className={` gap-8 container mx-auto md:pt-6 pt-2 mt-8 text-start`}
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div className="">
        <h2 className="lg:text-3xl text-xl font-bold text-[#1DAEE5] lg:mb-3 mb-2 text-center">
          {title}
        </h2>
        <p className="text-[#555555] text-center lg:text-base text-sm md:mb-8 mb-4">
          {description}
        </p>
      </div>
      <section
        className={`flex flex-col md:flex-row items-center justify-between gap-8 container mx-auto ${
          lang == "en" ? "md:text-left" : "md:text-right"
        } text-center`}
        dir={lang == "en" ? "ltr" : "rtl"}
      >
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-black text-justify mb-6 lg:text-base xl:text-lg lg:leading-6 xl:leading-8">
            أن تكون جمعية إدارة المرافق السعودية SFMA المرجع الأول في المملكة
            العربية السعودية لتعزيز كفاءة وفعالية إدارة المرافق، والمساهمة في
            تطبيق رؤية المملكة 2030 من خلال تطوير قطاع إدارة المرافق، وتقديم
            أفضل الممارسات العالمية. وذلك من خلال بناء مجتمع مهني متكامل، يدعم
            الابتكار والاستدامة، ويوفر بيئة تعاونية لتبادل المعرفة والخبرات، مما
            يساهم في تحسين جودة المرافق، ورفع مستوى الأداء، وتعزيز القدرة
            التنافسية للقطاع على المستويين المحلي والدولي.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/images/about_page/our_vision.png"
            alt="About Us"
            width={500}
            height={400}
            className="w-full h-auto rounded-md"
          />
        </div>
      </section>
    </section>
  );
};

export default Our_Vision;
