import { createTranslator } from "next-intl";
import React from "react";
import Single_Workshop from "./Components/Single_Workshop";

export default async function Page({ params: { locale, id } }: any) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;

  const t = createTranslator({
    locale,
    messages,
    namespace: "Trainings",
  });

  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}library/get-book/${id}`,
  //   {
  //     headers: {
  //       "Accept-Language": locale || "ar",
  //     },
  //     cache: "no-store",
  //   }
  // );

  // const data = await res.json();
  // const single_book = data?.data || {};
  // console.log(single_book);

  return (
    <div dir={locale === "en" ? "ltr" : "rtl"}>
      <Single_Workshop translation={{}} id={id} />
    </div>
  );
}
