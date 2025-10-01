import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import "./globals.css";
import { Cairo } from "next/font/google";
import Footer from "./Components/Footer";
import Image from "next/image";
import LanguageSwitcher from "./Components/LanguageSwitcher";
import AdPopup from "./Components/AdPopup";
import Chatbot from "./Components/Chatbot";
import { ToastContainer } from "react-toastify";

const cairo = Cairo({
  subsets: ["latin", "arabic"], // Supports Arabic & Latin characters
  weight: ["500", "600", "700"], // Choose the weights you need
  variable: "--font-cairo", // Define a CSS variable for easier use
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={cairo.variable}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
          />
          {/* <Header /> */}
          <NavBar />
          <div className="lg:min-h-[450px] min-h-[300px]">{children}</div>
          <Footer />
          <LanguageSwitcher />
          <AdPopup />
          <Chatbot />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
