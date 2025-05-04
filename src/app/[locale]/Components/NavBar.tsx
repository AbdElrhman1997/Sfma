"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

const NavBar = () => {
  const t = useTranslations("NavBar");
  const lang = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [isMembershipsOpen, setIsMembershipsOpen] = useState(false);

  return (
    <nav
      className="bg-white shadow-md md:py-6 sticky top-0 z-50"
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <div className="container mx-auto md:px-20 relative">
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 items-center justify-center font-bold">
          <li>
            <Link href={`/${lang}`} className="hover:text-primary">
              {t("home")}
            </Link>
          </li>
          <li
            onMouseEnter={() => setIsAboutOpen(true)}
            onMouseLeave={() => setIsAboutOpen(false)}
            className="relative text-center"
          >
            <Link
              href={`/${lang}/about`}
              className="hover:text-primary relative"
            >
              {t("about")}
            </Link>
            {isAboutOpen && (
              <ul className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-[#F6F6F6] py-2 mt-0 z-10 shadow-md font-normal">
                <li>
                  <Link
                    href={`/${lang}/about`}
                    className="block px-4 py-2 hover:bg-gray-200 text-gray-700"
                  >
                    {t("about_orgnization")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${lang}/lists`}
                    className="block px-4 py-2 hover:bg-gray-200 text-gray-700"
                  >
                    {t("lists")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${lang}/structure`}
                    className="block px-4 py-2 hover:bg-gray-200 text-gray-700"
                  >
                    {t("structure")}
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={() => setIsLibraryOpen(true)}
            onMouseLeave={() => setIsLibraryOpen(false)}
            className="relative text-center"
          >
            <div className="hover:text-primary cursor-pointer">
              {t("library")}
            </div>
            {isLibraryOpen && (
              <ul className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-[#F6F6F6] py-2 mt-0 z-10 shadow-md font-normal">
                <li>
                  <Link
                    href={`/${lang}/data_library`}
                    className="block px-4 py-2 hover:bg-gray-200 text-gray-700"
                  >
                    {t("data_library")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${lang}/video_library`}
                    className="block px-4 py-2 hover:bg-gray-200 text-gray-700"
                  >
                    {t("video_library")}
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={() => setIsMembershipsOpen(true)}
            onMouseLeave={() => setIsMembershipsOpen(false)}
            className="relative text-center"
          >
            <div className="hover:text-primary cursor-pointer">
              {t("memberships")}
            </div>
            {isMembershipsOpen && (
              <ul className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-[#F6F6F6] py-2 mt-0 z-10 shadow-md font-normal">
                <li>
                  <Link
                    href={`/${lang}/institutions`}
                    className="block px-4 py-2 hover:bg-gray-200 text-gray-700"
                  >
                    {t("institutions")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${lang}/individuals`}
                    className="block px-4 py-2 hover:bg-gray-200 text-gray-700"
                  >
                    {t("individuals")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${lang}/volunteers`}
                    className="block px-4 py-2 hover:bg-gray-200 text-gray-700"
                  >
                    {t("volunteers")}
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="relative">
            <a
              onClick={(e) => e.preventDefault()}
              className="hover:text-primary text-gray-400 cursor-not-allowed"
            >
              {t("training")}
            </a>
          </li>
          <li>
            <a
              onClick={(e) => e.preventDefault()}
              className="hover:text-primary text-gray-400 cursor-not-allowed"
            >
              {t("jobs")}
            </a>
          </li>
          <li>
            <a
              onClick={(e) => e.preventDefault()}
              className="hover:text-primary text-gray-400 cursor-not-allowed"
            >
              {t("actions")}
            </a>
          </li>
          <li>
            <a
              onClick={(e) => e.preventDefault()}
              className="hover:text-primary text-gray-400 cursor-not-allowed"
            >
              {t("ads")}
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes className="text-2xl text-[#1DAEE5]" />
          ) : (
            <FaBars className="text-2xl text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white border-t p-4 space-y-3">
          <li>
            <Link
              href={`/${lang}`}
              className="block py-2 text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              {t("home")}
            </Link>
          </li>
          <li>
            <div
              className="flex justify-between items-center py-2 cursor-pointer text-gray-700"
              onClick={() => setIsAboutOpen(!isAboutOpen)}
            >
              <span>{t("about")}</span>
              {isAboutOpen ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </div>
            {isAboutOpen && (
              <ul className="pl-4 space-y-2">
                <li>
                  <Link
                    href={`/${lang}/about`}
                    className="block py-2 text-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("about_orgnization")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${lang}/lists`}
                    className="block py-2 text-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("lists")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${lang}/structure`}
                    className="block py-2 text-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("structure")}
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              className="flex justify-between items-center py-2 cursor-pointer text-gray-700"
              onClick={() => setIsLibraryOpen(!isLibraryOpen)}
            >
              <span>{t("library")}</span>
              {isLibraryOpen ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </div>
            {isLibraryOpen && (
              <ul className="pl-4 space-y-2">
                <li>
                  <Link
                    href={`/${lang}/data_library`}
                    className="block py-2 text-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("data_library")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${lang}/video_library`}
                    className="block py-2 text-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("video_library")}
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              className="flex justify-between items-center py-2 cursor-pointer text-gray-700"
              onClick={() => setIsMembershipsOpen(!isMembershipsOpen)}
            >
              <span>{t("memberships")}</span>
              {isMembershipsOpen ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </div>
            {isMembershipsOpen && (
              <ul className="pl-4 space-y-2">
                <li>
                  <Link
                    href={`/${lang}/institutions`}
                    className="block py-2 text-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("institutions")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${lang}/individuals`}
                    className="block py-2 text-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("individuals")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${lang}/volunteers`}
                    className="block py-2 text-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("volunteers")}
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <span
              onClick={(e) => e.preventDefault()}
              className="block py-2 text-gray-400 cursor-not-allowed"
            >
              {t("training")}
            </span>
          </li>
          <li>
            <span
              onClick={(e) => e.preventDefault()}
              className="block py-2 text-gray-400 cursor-not-allowed"
            >
              {t("jobs")}
            </span>
          </li>
          <li>
            <span
              onClick={(e) => e.preventDefault()}
              className="block py-2 text-gray-400 cursor-not-allowed"
            >
              {t("actions")}
            </span>
          </li>
          <li>
            <span
              onClick={(e) => e.preventDefault()}
              className="block py-2 text-gray-400 cursor-not-allowed"
            >
              {t("ads")}
            </span>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
