// app/[locale]/institutions/[id]/page.tsx

import { createTranslator } from "next-intl";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AllEvents from "./Components/AllEvents";

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
      <AllEvents />
    </div>
  );
}
