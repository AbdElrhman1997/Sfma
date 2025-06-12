import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const Banner_Section = () => {
  const t = useTranslations("HomePage.AboutSection");
  const lang = useLocale();

  return (
    <div className="relative" dir={lang == "en" ? "ltr" : "rtl"}>
      <Image
        src="/images/training/banner_bg.png"
        alt="About Us"
        width={500}
        height={500}
        className="w-full h-auto"
      />
      {/* <p className="absolute top-1/2 left-1/2 -translate-1/2 lg:px-20 px-3 lg:py-5 py-3 lg:text-[24px] text-[14px] font-semibold md:leading-[3rem] leading-relaxed text-white text-center w-full">
        {t("QouteSection")}
      </p> */}
    </div>
  );
};

export default Banner_Section;
