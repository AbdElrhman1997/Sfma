"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";
import MobileNav from "./MobileNav";

const mainLinks = [
  { href: "", label: "home" },
  { href: "about", label: "about" },
  {
    label: "memberships",
    dropdown: [
      { href: "institutions", label: "عضويات المؤسسات" },
      { href: "individuals", label: "عضويات الأفراد" },
      { href: "volunteers", label: "عضويات المتطوعين" },
      { href: "membership_verification", label: "التحقق من العضويات" },
    ],
  },
  {
    label: "training",
    dropdown: [
      { href: "training", label: "الدورات التدريبية" },
      { href: "Calendar", label: "جدول دورات SFMA" },
      { href: "workshops", label: "ورش العمل" },
      { href: "certified_trainers", label: "مدربونا المعتمدون" },
      { href: "certificate_verification", label: "التحقق من الشهادات" },
    ],
  },
  { href: "events", label: "actions" },
  { href: "jobs", label: "jobs" },
  { href: "service_providers", label: "service_providers" },
  { href: "news", label: "news" },
  {
    label: "library",
    dropdown: [
      { href: "data_library", label: "مكتبة الكتب" },
      { href: "video_library", label: "مكتبة الفيديوهات" },
    ],
  },
];

const NavBar = () => {
  const t = useTranslations("NavBar");
  const lang = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const user = JSON.parse(localStorage.getItem("user_name"));
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
      className="absolute top-[140%] left-1/2 -translate-x-1/2 w-64 bg-white shadow-2xl rounded-xl border border-gray-100 
        transition-all duration-300 ease-out animate-dropdown z-40"
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
        <ul className="hidden lg:flex items-center gap-4 font-medium relative justify-center text-sm">
          {mainLinks.map((link) =>
            link.dropdown ? (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => setActive(link.label)}
                onMouseLeave={() => setActive(null)}
              >
                <button className="flex items-center gap-1 text-gray-800 hover:text-primary transition">
                  {t(link.label)} <FaChevronDown size={12} />
                </button>
                {active === link.label && renderDropdown(link.dropdown)}
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={`/${lang}/${link.href}`}
                  className="text-gray-800 hover:text-primary transition"
                >
                  {t(link.label)}
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
              <p>مرحبا {user?.full_name_ar}</p>
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
