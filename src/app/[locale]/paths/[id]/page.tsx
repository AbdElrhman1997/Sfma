import { createTranslator } from "next-intl";
import React from "react";
import SinglePath from "./Components/SinglePath";

export default async function Page({ params: { locale, id } }: any) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;

  const t = createTranslator({
    locale,
    messages,
    namespace: "Paths",
  });

  return (
    <div dir={locale === "en" ? "ltr" : "rtl"}>
      <SinglePath translation={{}} id={id} />
    </div>
  );
}
