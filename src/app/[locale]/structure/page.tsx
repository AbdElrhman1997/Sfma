import { createTranslator } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MangementMemberships from "./Components/MangementMemberships";

const Page = async ({ params }) => {
  const { locale } = params;
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({
    locale,
    messages,
    namespace: "Data_Library",
  });

  return (
    <section className="">
      <MangementMemberships />
    </section>
  );
};

export default Page;
