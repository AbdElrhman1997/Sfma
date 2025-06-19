import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const AlertSection = () => {
  const lang = useLocale();
  const t = useTranslations("");

  return (
    <section
      className="container mx-auto lg:mt-20 mt-10"
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <div className="bg-[#EDEDED] flex items-start gap-4 lg:p-5 px-5 py-3 lg:px-7 lg:pt-6 rounded-xl max-w-2xl mx-auto">
        {/* Icon */}
        <div className="flex-shrink-0 w-10 h-10 lg:w-18 lg:h-18">
          <Image
            src="/images/common/fa6-solid_building.svg"
            alt="Building Icon"
            width={80}
            height={80}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="text-start">
          <h1 className="text-base lg:text-2xl font-bold">
            {t("facilities.question")}
          </h1>
          <h3 className="my-3 text-xs lg:text-lg lg:leading-8">
            {t("facilities.description")}
          </h3>
          <Link href="mailto:info@sfma.sa">
            <button className="cursor-pointer hover:opacity-85 text-[11px] lg:text-base bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] text-white font-semibold py-2 lg:py-3 px-4 lg:px-6 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200">
              {t("facilities.contact_us")}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AlertSection;
