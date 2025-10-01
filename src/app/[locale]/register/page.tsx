import { createTranslator } from "next-intl";
import React from "react";
import RegisterForm from "./Components/RegisterForm";
import "react-toastify/dist/ReactToastify.css";
import RegisterFormWrapper from "../Components/RegisterFormWrapper";

const Page = async ({ params }) => {
  const { locale } = params;

  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({
    locale,
    messages,
    namespace: "Register",
  });

  return (
    <div
      dir={`${locale === "en" ? "ltr" : "rtl"}`}
      className="min-h-screen flex justify-center container mx-auto"
    >
      <RegisterFormWrapper
        locale={locale}
        messages={messages}
        from_login={false}
      />
    </div>
  );
};

export default Page;
