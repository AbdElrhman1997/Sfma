import { createTranslator } from "next-intl";
import React from "react";
import WorkshopPage from "./Components/WorkshopPage";

const Page = async ({ params }) => {
  const { locale } = params;
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({
    locale,
    messages,
    namespace: "Training",
  });

  return (
    <div className="">
      <WorkshopPage />
    </div>
  );
};

export default Page;
