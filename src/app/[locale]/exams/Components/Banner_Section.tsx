import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const Banner_Section = () => {
  const t = useTranslations("Exams");
  const lang = useLocale();

  return (
    <div className="relative" dir={lang == "en" ? "ltr" : "rtl"}>
      <Image
        src="/images/training/banner_bg.png"
        alt="About Us"
        width={500}
        height={500}
        className="w-full object-cover min-h-52 md:h-60 lg:h-72 xl:h-80 xl:max-h-96"
      />
      <div className="absolute top-1/2 left-1/2 -translate-1/2 lg:px-20 px-3 lg:py-5 py-3 lg:text-[24px] text-[14px] font-semibold md:leading-[3rem] leading-relaxed text-white text-center w-full container mx-auto">
        <p className="lg:text-4xl text-xl font-bold">{t("title")}</p>
        <p className="lg:text-xl text-sm font-semibold lg:mt-6 mt-4 lg:leading-10">
          {t("sub_title")}
        </p>
      </div>
    </div>
  );
};

export default Banner_Section;
