import { useTranslations } from "next-intl";
import BannerSection from "./Components/BannerSection";
import AboutSection from "./Components/AboutSection";
import ServicesSection from "./Components/ServicesSection";
import ActivitiesSection from "./Components/ActivitiesSection";
import AdsSection from "./Components/AdsSection";
import PartenersSection from "./Components/PartenersSection";
import NewsSection from "./Components/NewsSection";
import AchiveGoals from "./Components/AchiveGoals";
import Paths from "./paths/Components/Paths";
import Memberships from "./Components/Memberships";
import ServiceProviders from "./Components/ServiceProviders";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <BannerSection />
      <AboutSection />
      <ServicesSection />
      <AchiveGoals />
      <Paths from_home={true} />
      <Memberships />
      {/* <CoursesSection /> */}
      <ActivitiesSection />
      <AdsSection />
      <ServiceProviders />
      <PartenersSection />
      <NewsSection from_home={true} />
    </div>
  );
}
