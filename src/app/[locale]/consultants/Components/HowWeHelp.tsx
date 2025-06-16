import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const HowWeHelp = () => {
  const lang = useLocale();
  const t = useTranslations("Consultation.HowWeHelp");

  return (
    <section
      className={`gap-8 container mx-auto mt-8 bg-[#F6F6F6] lg:py-10 py-6 ${
        lang == "en" ? "md:text-left" : "md:text-right"
      } text-center`}
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div>
        <h2 className="text-3xl font-bold text-[#1DAEE5] mb-3 text-center">
          {t("title")}
        </h2>
        <p className="text-[#898989] mb-6 text-center">{t("subtitle")}</p>
      </div>
      <section
        className={`grid lg:grid-cols-3 grid-cols-1 gap-8 container mx-auto ${
          lang == "en" ? "md:text-left" : "md:text-right"
        } text-center`}
        dir={lang == "en" ? "ltr" : "rtl"}
      >
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className="flex flex-col items-center bg-white shadow-lg px-3 py-7"
          >
            <p className="w-14 h-14 text-white lg:text-2xl text-lg flex items-center justify-center bg-[var(--main)] rounded-full">
              {step}
            </p>
            <h1 className="lg:text-2xl text-lg font-bold mt-2 mb-3">
              {t(`steps.${step}.title`)}
            </h1>
            <h3 className="text-center">{t(`steps.${step}.description`)}</h3>
          </div>
        ))}
      </section>
    </section>
  );
};

export default HowWeHelp;
