import { createTranslator } from "next-intl";
import React from "react";
import RegisterForm from "./Components/RegisterForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <RegisterForm locale={locale} messages={messages} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default Page;
