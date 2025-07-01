// app/[locale]/institutions/[id]/page.tsx

import { createTranslator } from "next-intl";
import React from "react";
import ResultPage from "./Components/ResultPage";

export default async function Page({ params: { locale, id } }: any) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;

  const t = createTranslator({
    locale,
    messages,
    namespace: "Trainings",
  });

  return (
    <div dir={locale === "en" ? "ltr" : "rtl"}>
      <ResultPage id={id} />
    </div>
  );
}
