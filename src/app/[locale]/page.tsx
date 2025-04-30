import { useTranslations } from "next-intl";
import BannerSection from "./Components/BannerSection";
import AboutSection from "./Components/AboutSection";
import ServicesSection from "./Components/ServicesSection";
import DevelopmentSection from "./Components/DevelopmentSection";
import CoursesSection from "./Components/CoursesSection";
import ActivitiesSection from "./Components/ActivitiesSection";
import AdsSection from "./Components/AdsSection";
import PartenersSection from "./Components/PartenersSection";
import NewsSection from "./Components/NewsSection";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <BannerSection />
      <AboutSection />
      <ServicesSection />
      <DevelopmentSection />
      {/* <CoursesSection /> */}
      <ActivitiesSection />
      {/* <AdsSection /> */}
      <PartenersSection />
      {/* <NewsSection /> */}
    </div>
  );
}
