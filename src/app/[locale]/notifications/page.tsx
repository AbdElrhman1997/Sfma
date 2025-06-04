import { createTranslator } from "next-intl";
import Notifications from "./Components/Notifications";

const Page = async ({ params }) => {
  const { locale } = params;
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({
    locale,
    messages,
    namespace: "Training",
  });

  return (
    <div className="">
      <Notifications />
    </div>
  );
};

export default Page;
