"use client";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
import BlogsSection from "./Components/BlogsSection";
import NewsletterSection from "./Components/NewsletterSection";
import JobsSection from "./Components/JobsSection";

export default function HomePage() {
  const t = useTranslations("HomePage");

  // Variants for different animation types
  const fadeInVariants: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const slideUpVariants: any = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scaleUpVariants: any = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Refs for each section
  const bannerRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const achiveGoalsRef = useRef(null);
  const pathsRef = useRef(null);
  const membershipsRef = useRef(null);
  const activitiesRef = useRef(null);
  const adsRef = useRef(null);
  const serviceProvidersRef = useRef(null);
  const partenetsRef = useRef(null);
  const newsRef = useRef(null);
  const blogsRef = useRef(null);
  const newsletterRef = useRef(null);

  // InView states for triggering animations
  const isBannerInView = useInView(bannerRef, { once: true, amount: 0.3 });
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.3 });
  const isAchiveGoalsInView = useInView(achiveGoalsRef, {
    once: true,
    amount: 0.3,
  });
  const isPathsInView = useInView(pathsRef, { once: true, amount: 0.3 });
  const isMembershipsInView = useInView(membershipsRef, {
    once: true,
    amount: 0.3,
  });
  const isActivitiesInView = useInView(activitiesRef, {
    once: true,
    amount: 0.3,
  });
  const isAdsInView = useInView(adsRef, { once: true, amount: 0.3 });
  const isServiceProvidersInView = useInView(serviceProvidersRef, {
    once: true,
    amount: 0.3,
  });
  const isPartenetsInView = useInView(partenetsRef, {
    once: true,
    amount: 0.3,
  });
  const isNewsInView = useInView(newsRef, { once: true, amount: 0.3 });
  const isBlogsInView = useInView(blogsRef, { once: true, amount: 0.3 });
  const isNewsletterInView = useInView(newsletterRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <div>
      <motion.div
        ref={bannerRef}
        variants={fadeInVariants}
        initial="hidden"
        animate={isBannerInView ? "visible" : "hidden"}
      >
        <BannerSection />
      </motion.div>
      <motion.div
        ref={aboutRef}
        variants={slideUpVariants}
        initial="hidden"
        animate={isAboutInView ? "visible" : "hidden"}
      >
        <AboutSection />
      </motion.div>
      <motion.div
        ref={servicesRef}
        variants={scaleUpVariants}
        initial="hidden"
        animate={isServicesInView ? "visible" : "hidden"}
      >
        <ServicesSection />
      </motion.div>
      <motion.div
        ref={achiveGoalsRef}
        variants={slideUpVariants}
        initial="hidden"
        animate={isAchiveGoalsInView ? "visible" : "hidden"}
      >
        <AchiveGoals />
      </motion.div>
      <motion.div
        ref={pathsRef}
        variants={fadeInVariants}
        initial="hidden"
        animate={isPathsInView ? "visible" : "hidden"}
      >
        <Paths from_home={true} />
      </motion.div>
      <motion.div
        ref={membershipsRef}
        variants={scaleUpVariants}
        initial="hidden"
        animate={isMembershipsInView ? "visible" : "hidden"}
      >
        <Memberships />
      </motion.div>
      <motion.div
        ref={activitiesRef}
        variants={slideUpVariants}
        initial="hidden"
        animate={isActivitiesInView ? "visible" : "hidden"}
      >
        <ActivitiesSection />
      </motion.div>
      <motion.div
        ref={adsRef}
        variants={fadeInVariants}
        initial="hidden"
        animate={isAdsInView ? "visible" : "hidden"}
      >
        <AdsSection />
      </motion.div>
      <motion.div
        ref={serviceProvidersRef}
        variants={scaleUpVariants}
        initial="hidden"
        animate={isServiceProvidersInView ? "visible" : "hidden"}
      >
        <ServiceProviders />
      </motion.div>

      <motion.div
        ref={newsletterRef}
        variants={scaleUpVariants}
        initial="hidden"
        animate={isNewsletterInView ? "visible" : "hidden"}
      >
        <JobsSection />
      </motion.div>

      <motion.div
        ref={blogsRef}
        variants={slideUpVariants}
        initial="hidden"
        animate={isBlogsInView ? "visible" : "hidden"}
      >
        <BlogsSection />
      </motion.div>

      <motion.div
        ref={newsRef}
        variants={fadeInVariants}
        initial="hidden"
        animate={isNewsInView ? "visible" : "hidden"}
      >
        <NewsSection from_home={true} />
      </motion.div>

      <motion.div
        ref={partenetsRef}
        variants={slideUpVariants}
        initial="hidden"
        animate={isPartenetsInView ? "visible" : "hidden"}
      >
        <PartenersSection />
      </motion.div>

      <motion.div
        ref={newsletterRef}
        variants={scaleUpVariants}
        initial="hidden"
        animate={isNewsletterInView ? "visible" : "hidden"}
      >
        {/* <NewsletterSection /> */}
      </motion.div>
    </div>
  );
}
