import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const TopSection = () => {
  const t = useTranslations("");
  const lang = useLocale();

  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-between gap-8 container mx-auto lg:pt-12 pt-0 md:mt-8 mt-0 mb-4 ${
        lang == "en" ? "md:text-left" : "md:text-right"
      } text-center`}
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="lg:text-3xl text-xl font-bold text-[#1DAEE5] mb-4">
          خدمة الاستشارات المهنية
        </h2>
        <p className="text-black text-justify lg:mb-6 mb-2 lg:leading-8">
          توفر الجمعية السعودية لإدارة المرافق خدمة الاستشارات المتخصصة لمساعدة
          الأفراد والجهات في تطوير حلول فعّالة ومستدامة في إدارة المرافق. سواء
          كنت تمثل جهة حكومية، شركة، أو تسعى لتحسين بيئة العمل لديك — خبراؤنا
          مستعدون لدعمك.
        </p>
        <Link href={`/${lang}/about`} className="block">
          <button className="lg:text-lg text-[13px] bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] text-white font-semibold lg:py-3 py-2 lg:px-4 px-3 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer">
            اطلب استشارة
          </button>
        </Link>
      </div>
      <div className="w-full md:w-1/2  md:max-w-[450px] max-w-[250px] lg:mt-0 mt-4">
        <Image
          src="/images/about_page/about_section.png"
          alt="About Us"
          width={500}
          height={400}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default TopSection;
