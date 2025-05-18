import { createTranslator } from "next-intl";
import ProfileClient from "./Components/ClientTab";
import ProfilePage from "./Components/ProfilePage";

const Page = async ({ params }) => {
  const { locale } = params;

  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages, namespace: "Profile" });

  return <ProfilePage />;
};

export default Page;
