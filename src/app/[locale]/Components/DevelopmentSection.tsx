import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const DevelopmentSection = () => {
  const t = useTranslations("HomePage.CoursesSection");
  const lang = useLocale();

  return (
    <section
      className="w-full mt-12 mb-8 relative mx-auto"
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <Image
        src="/images/home_page/DevelopmentSection.png"
        alt="About Us"
        width={500}
        height={300}
        className="w-full h-auto 2xl:max-h-[70vh] object-cover"
      />
      <p className="absolute top-1/2 -translate-y-1/2 start-0 bg-white lg:px-12 px-3 lg:py-5 py-3 2xl:text-3xl lg:text-[28px] text-[13px] lg:max-w-1/2 max-w-3/5 leading-relaxed text-start">
        {t("development_section")}
      </p>
    </section>
  );
};

export default DevelopmentSection;
