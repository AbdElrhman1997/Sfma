"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { useRouter } from "next/navigation";
import { GrLanguage } from "react-icons/gr";

const NavBar = () => {
  const t = useTranslations("NavBar");
  const lang = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const navRef = useRef(null);

  const mainLinks = [
    { href: "", label: t("home") },
    { href: "about", label: t("about") },
    {
      label: t("memberships_2._"),
      dropdown: [
        { href: "institutions", label: t("memberships_2.institutions") },
        { href: "individuals", label: t("memberships_2.individuals") },
        { href: "volunteers", label: t("memberships_2.volunteers") },
        {
          href: "membership_verification",
          label: t("memberships_2.verification"),
        },
      ],
    },
    {
      label: t("training_2._"),
      dropdown: [
        { href: "training", label: t("training_2.courses") },
        { href: "Calendar", label: t("training_2.calendar") },
        { href: "workshops", label: t("training_2.workshops") },
        { href: "exams", label: t("training_2.exams") },
        { href: "certified_trainers", label: t("training_2.trainers") },
        {
          href: "certificate_verification",
          label: t("training_2.cert_verification"),
        },
      ],
    },
    { href: "events", label: t("events") },
    { href: "jobs", label: t("jobs") },
    {
      href: "service_providers",
      label: t("service_providers"),
    },
    { href: "news", label: t("news") },
    { href: "consultants", label: t("consultants") },
    {
      label: t("library_2._"),
      dropdown: [
        { href: "data_library", label: t("library_2.books") },
        { href: "video_library", label: t("library_2.videos") },
      ],
    },
  ];

  useEffect(() => {
    const storedUser = localStorage.getItem("user_name");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("auth_token");
      setIsAuthenticated(!!token);
    }
  }, []);

  const toggleDropdown = (key: string) => {
    setActive(active === key ? null : key);
  };

  const renderDropdown = (items: any[]) => (
    <div
      className="absolute top-[140%] left-1/2 w-64 bg-white shadow-2xl rounded-xl border border-gray-100 
    transition-all duration-200 ease-in-out animate-dropdown z-40"
    >
      {/* Arrow */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l-2 border-t-2 border-gray-100" />
      <ul className="p-3 space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={`/${lang}/${item.href}`}
              className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActive(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function getFirstTwoNames(fullName?: string) {
    if (!fullName) return "";

    const parts = fullName.trim().split(/\s+/);

    if (parts.length === 0) return "";

    let firstName = parts[0];
    if (parts[0] === "عبد" && parts[1]) {
      firstName = parts[0] + " " + parts[1];
    }

    const secondNameIndex = firstName.includes(" ") ? 2 : 1;
    const secondName = parts[secondNameIndex] || "";

    return `${firstName} ${secondName}`.trim();
  }

  return (
    <nav
      className="bg-[#F6F6F6] shadow-sm sticky top-0 z-50"
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="relative w-24 xl:w-28 h-auto">
          <Link href={`/${lang}`}>
            <Image
              src="/images/logos/header_logo.png"
              alt="Logo"
              height={70}
              width={160}
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul
          ref={navRef}
          className="hidden lg:flex items-center gap-4 font-medium relative justify-center text-sm"
        >
          {mainLinks.map((link) =>
            link.dropdown ? (
              <li
                key={link.label}
                className="relative cursor-pointer"
                onClick={() => toggleDropdown(link.label)}
              >
                <button className="flex items-center gap-1 text-gray-800 hover:text-primary cursor-pointer">
                  {link.label} <FaChevronDown size={12} />
                </button>
                {active === link.label && renderDropdown(link.dropdown)}
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={`/${lang}/${link.href}`}
                  className="text-gray-800 hover:text-primary transition"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Toggle */}

        <MobileNav lang={lang} isAuthenticated={isAuthenticated} user={user} />
        <div className="hidden lg:flex items-center gap-2 text-sm">
          {isAuthenticated ? (
            <>
              <div className="relative w-7 h-7 bg-[var(--main)] p-2 grid place-items-center rounded-full">
                <Link
                  href={`/${lang}/notifications`}
                  className="hover:text-primary text-[15px]"
                >
                  <Image
                    src="/images/common/notification.png"
                    alt="User Icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </Link>
              </div>
              <div className="relative w-7 h-7 bg-[var(--second_main)] p-[9px] grid place-items-center rounded-full">
                <Link
                  href={`/${lang}/profile`}
                  className="hover:text-primary text-[15px]"
                >
                  <Image
                    src="/images/common/person.png"
                    alt="User Icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </Link>
              </div>
              <p>
                {t("welcome")} {getFirstTwoNames(user?.full_name_ar)}
              </p>
            </>
          ) : (
            <div className="relative p-3 grid place-items-center rounded-full font-bold cursor-pointer hover:underline">
              <Link
                href={`/${lang}/login`}
                className="hover:text-primary text-[15px]"
              >
                {lang == "en" ? "Login" : "تسجيل الدخول"}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}

      {/* {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white border-t">
          <div className="md:hidden px-6 pb-4 space-y-3 bg-white border-t">
            {mainLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <div
                    onClick={() => toggleDropdown(link.label)}
                    className="flex justify-between items-center cursor-pointer py-2 text-gray-800"
                  >
                    <span>{t(link.label)}</span>
                    {active === link.label ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </div>
                  {active === link.label && (
                    <ul className="pl-4 space-y-1 mt-2">
                      {link.dropdown.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={`/${lang}/${item.href}`}
                            className="block py-1 text-sm text-gray-700"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={`/${lang}/${link.href}`}
                  className="block py-2 text-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  {t(link.label)}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-3 pt-4 border-t mt-4">
            {isAuthenticated ? (
              <>
                <div className="relative w-8 h-8 bg-[var(--main)] p-2 grid place-items-center rounded-full">
                  <Link href={`/${lang}/notifications`}>
                    <Image
                      src="/images/common/notification.png"
                      alt="notification"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </Link>
                </div>
                <div className="relative w-8 h-8 bg-[var(--second_main)] p-2 grid place-items-center rounded-full">
                  <Link href={`/${lang}/profile`}>
                    <Image
                      src="/images/common/person.png"
                      alt="profile"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </Link>
                </div>
                <p className="text-sm font-medium text-gray-800">
                  مرحبا {localStorage.getItem("user_name")}
                </p>
              </>
            ) : (
              <Link
                href={`/${lang}/login`}
                className="text-[15px] font-semibold text-primary underline"
              >
                {lang === "en" ? "Login" : "تسجيل الدخول"}
              </Link>
            )}
          </div>
        </div>
      )} */}
    </nav>
  );
};

export default NavBar;
