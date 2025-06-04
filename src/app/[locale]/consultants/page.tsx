import { createTranslator } from "next-intl";
import React from "react";
import TopSection from "./Components/TopSection";
import HowWeHelp from "./Components/HowWeHelp";
import AlertSection from "./Components/AlertSection";

const Page = async ({ params }) => {
  const { locale } = params;
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({
    locale,
    messages,
    namespace: "AboutPage",
  });

  return (
    <div className="mt-10">
      <TopSection />
      <HowWeHelp />
      <AlertSection />
    </div>
  );
};

export default Page;
