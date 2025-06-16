import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const AlertSection = () => {
  const lang = useLocale();
  const t = useTranslations("");

  return (
    <section
      className="container mx-auto mt-20"
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <div className="bg-[#EDEDED] flex flex-col lg:flex-row items-start gap-4 p-5 lg:px-7 lg:pt-6 rounded-xl max-w-2xl mx-auto">
        {/* Icon */}
        {/* <div className="flex-shrink-0 w-12 h-12 lg:w-18 lg:h-18">
          <Image
            src="/images/common/fa6-solid_building.svg"
            alt="Building Icon"
            width={80}
            height={80}
            className="w-full h-full object-contain"
          />
        </div> */}

        {/* Content */}
        <div className="text-start">
          <h1 className="text-lg lg:text-2xl font-bold">
            {t("facilities.question")}
          </h1>
          <h3 className="my-3 text-base lg:text-lg leading-8">
            {t("facilities.description")}
          </h3>
          <Link href={`/${lang}/about`}>
            <button className="text-[13px] lg:text-base bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] text-white font-semibold py-2 lg:py-3 px-4 lg:px-6 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200">
              {t("facilities.contact_us")}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AlertSection;
