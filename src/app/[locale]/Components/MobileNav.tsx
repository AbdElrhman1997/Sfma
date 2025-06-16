import React, { useState } from "react";
import {
  FaHome,
  FaBell,
  FaSignOutAlt,
  FaInfoCircle,
  FaBook,
  FaVideo,
  FaUsers,
  FaUserCheck,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaUsersCog,
  FaBriefcase,
  FaTools,
  FaNewspaper,
  FaUser,
  FaChevronUp,
  FaChevronDown,
  FaHandsHelping,
  FaBuilding,
  FaSignInAlt,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const MobileNav = ({ lang, isAuthenticated, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();
  const t = useTranslations();
  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const setLang = (newLocale) => {
    router.push(`/${newLocale}`); // Navigate to the new locale
    router.refresh(); // Refresh the page to apply the new locale
  };

  const navItems = [
    { href: "", label: t("Home"), icon: <FaHome /> },
    { href: "about", label: t("AboutUs"), icon: <FaInfoCircle /> },
    {
      label: t("Library"),
      icon: <FaBook />,
      dropdown: [
        { href: "data_library", label: t("BookLibrary") },
        { href: "video_library", label: t("VideoLibrary") },
      ],
    },
    {
      label: t("Memberships"),
      icon: <FaUsers />,
      dropdown: [
        { href: "institutions", label: t("InstitutionMemberships") },
        { href: "individuals", label: t("IndividualMemberships") },
        { href: "volunteers", label: t("VolunteerMemberships") },
        { href: "membership_verification", label: t("MembershipVerification") },
      ],
    },
    {
      label: t("Training"),
      icon: <FaChalkboardTeacher />,
      dropdown: [
        {
          href: "training",
          label: t("TrainingCourses"),
          icon: <FaChalkboardTeacher />,
        },
        {
          href: "Calendar",
          label: t("SFMACoursesSchedule"),
          icon: <FaCalendarAlt />,
        },
        {
          href: "workshops",
          label: t("Workshops"),
          icon: <FaChalkboardTeacher />,
        },
        {
          href: "certified_trainers",
          label: t("CertifiedTrainers"),
          icon: <FaUsersCog />,
        },
        {
          href: "certificate_verification",
          label: t("CertificateVerification"),
          icon: <FaUserCheck />,
        },
      ],
    },
    { href: "events", label: t("Events"), icon: <FaCalendarAlt /> },
    { href: "jobs", label: t("Jobs"), icon: <FaBriefcase /> },
    {
      href: "service_providers",
      label: t("ServiceProviders"),
      icon: <FaTools />,
    },
    { href: "news", label: t("News"), icon: <FaNewspaper /> },
    {
      label: t("Notifications"),
      href: "notifications",
      icon: <FaBell />,
      badge: "1",
    },

    ...(isAuthenticated || user
      ? [
          { href: "profile", label: t("Profile"), icon: <FaUser /> },
          {
            href: "/",
            label: t("Logout"),
            icon: <FaSignOutAlt />,
            logout: true,
          },
        ]
      : [{ href: "/login", label: t("Login"), icon: <FaSignInAlt /> }]),
  ];

  return (
    <nav>
      {/* Menu Toggle Button */}
      <button
        className="lg:hidden p-2 bg-[var(--main)] text-white rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 ${
          lang == "en" ? "left-0" : "right-0"
        } h-full w-64 bg-white shadow-lg transform ${
          isOpen
            ? "translate-x-0"
            : lang == "en"
            ? "-translate-x-full"
            : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 lg:hidden`}
      >
        {/* Header */}
        {user ? (
          <div className="flex items-center justify-between p-4 bg-[var(--main)] text-white">
            <div className="flex items-center gap-2">
              <div>
                <p className="text-sm font-semibold">
                  مرحبا، {user?.full_name_ar}
                </p>
              </div>
            </div>
            <img
              src={`https://sfma.srv814693.hstgr.cloud/storage/${user?.logo}`} // Replace with user profile image path
              alt="Profile"
              className="rounded-full bg-white w-16 h-auto"
            />
          </div>
        ) : null}

        {/* Navigation Items */}
        <nav className="p-4 space-y-2">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label}>
                <div
                  onClick={() => toggleDropdown(item.label)}
                  className="flex items-center justify-between gap-3 p-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  {activeDropdown === item.label ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </div>
                {activeDropdown === item.label && (
                  <ul className="pl-6 space-y-1 mt-1">
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.href}>
                        <a
                          href={`/${lang}/${subItem.href}`}
                          className="flex items-center gap-2 p-1 text-sm text-gray-700 hover:bg-gray-100 rounded ms-3"
                        >
                          {/* <span className="text-lg text-gray-500">
                            {subItem?.icon}
                          </span> */}
                          <span>- {subItem.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={`/${lang}/${item.href}`}
                className="flex items-center gap-3 p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={() => {
                  if (item.logout) {
                    localStorage.removeItem("auth_token");
                    localStorage.removeItem("user_name");
                    window.location.href = `/${lang}`;
                  }
                }}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-medium ">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </a>
            )
          )}
        </nav>

        {/* Language Toggle */}
        <div className="px-4 border-t">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="w-full text-start text-sm text-gray-700 hover:bg-gray-100 p-2 rounded-lg transition-colors"
          >
            {lang === "en" ? "العربية" : "English"}{" "}
            <span className="ml-2">🌐</span>
          </button>
        </div>
      </div>

      {/* Overlay to close sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default MobileNav;
