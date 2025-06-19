// app/[locale]/institutions/[id]/page.tsx

import { createTranslator } from "next-intl";
import React from "react";
import Course_Register from "./Components/Course_Register";

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
      <Course_Register />
    </div>
  );
}
