// app/[locale]/institutions/[id]/page.tsx

import { createTranslator } from "next-intl";
import React from "react";
import QuestionsNumber from "./Components/QuestionsNumber";
import QuestionArea from "./Components/QuestionArea";

export default async function Page({ params: { locale, id } }: any) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;

  const t = createTranslator({
    locale,
    messages,
    namespace: "Exams",
  });

  return (
    <div dir={locale === "en" ? "ltr" : "rtl"}>
      <div className="grid grid-cols-12 container mx-auto lg:mt-12 mt-10 gap-x-12 mb-6">
        <div className="lg:col-span-5 col-span-12">
          <QuestionsNumber />
        </div>
        <div className="lg:col-span-7 col-span-12">
          <QuestionArea />
        </div>
      </div>
    </div>
  );
}
