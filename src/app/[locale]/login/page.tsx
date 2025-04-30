import { createTranslator } from "next-intl";
import React from "react";
import LoginForm from "./Components/LoginForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = async ({ params: { locale } }: { params: { locale: string } }) => {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({
    locale,
    messages,
    namespace: "Login",
  });

  return (
    <div
      dir={`${locale === "en" ? "ltr" : "rtl"}`}
      className="flex justify-center container mx-auto"
    >
      <LoginForm locale={locale} messages={messages} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default Page;
