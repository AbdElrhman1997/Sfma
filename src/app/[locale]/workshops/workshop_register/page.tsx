// app/[locale]/institutions/[id]/page.tsx

import { createTranslator } from "next-intl";
import React from "react";
import Workshop_Register from "./Components/Workshop_Register";

export default async function Page({ params: { locale } }: any) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;

  const t = createTranslator({
    locale,
    messages,
    namespace: "Trainings",
  });

  return (
    <div dir={locale === "en" ? "ltr" : "rtl"}>
      <Workshop_Register translation={{}} />
    </div>
  );
}
