import { createTranslator } from "next-intl";
import ProfileClient from "./Components/ProfileClient";

const Page = async ({ params: { locale } }: { params: { locale: string } }) => {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages, namespace: "Profile" });

  return <ProfileClient locale={locale} />;
};

export default Page;
