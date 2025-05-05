import { createTranslator } from "next-intl";
import Image from "next/image";
import ContentCard from "./Components/ContentCard";
import React from "react";

export default async function Page({ params: { locale, id } }: any) {
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
      <div className="bg-white xl:mt-20 mt-12 -z-10 mb-20 xl:mb-28">
        <div className="flex items-center justify-between text-white relative">
          {/* Left Side */}
          <div className="md:text-2xl text-[13px] font-bold bg-[#21B6E4] w-full p-4 py-6 text-center">
            {subscription?.name}
          </div>

          {/* Image in the Center */}
          <div
            className="absolute left-1/2 -translate-x-1/2 xl:w-[180px] md:w-[140px] w-[100px] xl:h-[180px] md:h-[140px] h-[100px]  flex items-center justify-center rounded-full bg-white p-0"
            style={{ zIndex: 1 }}
          >
            <Image
              src={`https://just.isamstore.com/storage/${subscription?.icon}`}
              alt="Consultant Badge"
              width={180}
              height={180}
              className="rounded-full"
            />
          </div>

          {/* Right Side */}
          <div className="md:text-2xl text-[13px] font-bold bg-[#21B6E4] text-white w-full p-4 py-6 md:text-center text-left">
            {subscription?.price}{" "}
            <span className="md:text-xl text-[11px] font-semibold">
              {t("currency")}
            </span>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap md:gap-x-2 gap-x-0 gap-y-12 justify-between mb-20">
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
    </div>
  );
}
