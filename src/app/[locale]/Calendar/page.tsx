import { createTranslator } from "next-intl";
import Image from "next/image";
import React from "react";
import CustomCalendar from "./Components/CustomCalendar";
import SideBarFilter from "./Components/SideBarFilter";
import Filters from "./Components/Filters";

const Page = async ({ params }) => {
  const { locale, from_training } = params;
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({
    locale,
    messages,
    namespace: "Training",
  });

  return (
    <section className="" dir={locale == "en" ? "ltr" : "rtl"}>
      <Filters />
      <p className="text-[#555555] font-bold lg:mt-7 mt-3 text-center lg:text-xl text-base">
        {t("instruction")}
      </p>

      <div className="grid grid-cols-4 container mx-auto lg:mt-9 mt-5 relative">
        <div className="lg:col-span-1 col-span-4">
          <SideBarFilter />
        </div>
        <div className="lg:col-span-3 col-span-4">
          <CustomCalendar />
        </div>
      </div>
    </section>
  );
};

export default Page;
