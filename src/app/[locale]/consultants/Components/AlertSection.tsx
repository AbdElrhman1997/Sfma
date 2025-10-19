import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const AlertSection = () => {
  const lang = useLocale();
  const t = useTranslations("ConsultationAlert");

  return (
    <section className="container mx-auto" dir={lang == "en" ? "ltr" : "rtl"}>
      <div className="bg-[var(--second_main)] w-fit lg:max-w-1/2 mx-auto text-white lg:p-7 p-5 text-start rounded-xl mt-10">
        <h1 className="lg:text-[27px] text-lg font-semibold">{t("title")}</h1>
        <h3 className="my-3 lg:text-xl text-base leading-8">
          {t("description")}
        </h3>
        <Link href={`mailto:example@sfma.xom`} className="block">
          <button className="lg:text-lg text-[14px] bg-white text-[var(--second_main)] font-semibold lg:py-3 py-2 lg:px-4 px-3 rounded-lg transition duration-200 cursor-pointer">
            {t("button")}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AlertSection;
