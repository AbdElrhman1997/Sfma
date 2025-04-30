import { createTranslator } from "next-intl";
import Image from "next/image";
import ContentCard from "./Components/ContentCard";
import React from "react";

type PageProps = {
  params: {
    locale: string;
    id: string;
  };
};

export default async function Page({ params: { locale, id } }: PageProps) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;

  const t = createTranslator({
    locale,
    messages,
    namespace: "Institutions",
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}memberships/get-membership-details/${id}`,
    {
      headers: {
        "Accept-Language": locale || "ar",
      },
      cache: "no-store",
    }
  );

  const data = await res.json();
  const subscription = data?.data || [];
  console.log(subscription);

  return (
    <div dir={locale === "en" ? "ltr" : "rtl"}>
      <div className="bg-white my-12 -z-10">
        <div className="flex items-center justify-between text-white relative overflow-hidden">
          {/* Left Side */}
          <div className="text-2xl font-bold bg-[#21B6E4] w-full p-4 py-6 text-center">
            {subscription?.name}
          </div>

          {/* Image in the Center */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[100px] h-full flex items-center justify-center bg-white rounded-full z-10">
            <Image
              src={`https://just.isamstore.com/storage/${subscription?.icon}`}
              alt="Consultant Badge"
              width={140}
              height={140}
              className="rounded-full"
            />
          </div>

          {/* Right Side */}
          <div className="text-2xl font-bold bg-[#21B6E4] text-white w-full p-4 py-6 text-center">
            {subscription?.price}{" "}
            <span className="text-xl font-semibold">{t("currency")}</span>
          </div>
        </div>
      </div>
      {subscription?.details?.map((subscription, index) => {
        return (
          <React.Fragment key={index}>
            <ContentCard
              translation={{
                title: t("title"),
                sub_title: t("sub_title"),
              }}
              lang={locale}
              subscription={subscription}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}
