import { createTranslator } from "next-intl";
import React from "react";

const Page = async ({ params }) => {
  const { locale } = params;

  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({
    locale,
    messages,
    namespace: "Structure",
  });

  return (
    <div>
      <div className="container mx-auto p-6">
        <p className="text-4xl text-center text-primary mt-20 font-bold">
          {t("content")}
        </p>
      </div>
    </div>
  );
};

export default Page;
