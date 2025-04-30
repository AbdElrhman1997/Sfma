"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("NavBar");
  const lang = useLocale();

  return (
    <footer
      className="bg-[#1DAEE5] text-white md:pt-10 pt-6 mt-12 md:text-start text-center"
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 container mx-auto  px-4">
          {/* Column 5: Logo */}
          <div className="flex flex-col items-center md:items-start">
            {/* Placeholder for the logo */}
            <div className="w-1/2 md:w-32 md:mb-0 mb-2">
              <Image
                src="/images/logos/footer_logo.svg"
                alt="About Us"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-center md:text-start md:text-[12px] text-base mt-2 mb-[2px] leading-relaxed font-semibold">
              {t("footer_p_1")}
            </p>
            <p className="text-center md:text-start md:text-[12px] text-base mb-3 leading-relaxed font-semibold">
              {t("footer_p_2")}
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.027-3.063-1.854-3.063-1.854 0-2.136 1.445-2.136 2.939v5.728h-3v-11h2.893v1.504h.041c.402-.762 1.385-1.564 2.854-1.564 3.052 0 3.612 2.008 3.612 4.616v6.444z" />
                </svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 4: About the Association */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("about")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${lang}/about`}
                  className="block text-white hover:text-[#ffffffdc]"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/structure`}
                  className="block text-white hover:text-[#ffffffdc]"
                >
                  {t("structure")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/lists`}
                  className="block text-white hover:text-[#ffffffdc]"
                >
                  {t("lists")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("memberships")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${lang}/institutions`}
                  className="block text-white hover:text-[#ffffffdc]"
                >
                  {t("institutions")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/individuals`}
                  className="block text-white hover:text-[#ffffffdc]"
                >
                  {t("individuals")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/volunteers`}
                  className="block text-white hover:text-[#ffffffdc]"
                >
                  {t("volunteers")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("data_center")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${lang}/data_library`}
                  className="block text-white hover:text-[#ffffffdc]"
                >
                  {t("data_library")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/video_library`}
                  className="block text-white hover:text-[#ffffffdc]"
                >
                  {t("video_library")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 1: Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {t("contact_info") || "معلومات الاتصال"}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 w-fit md:mx-0 mx-auto">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@sfma.sa</span>
              </li>
              <li className="flex items-center space-x-2 w-fit md:mx-0 mx-auto">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>0507030368</span>
              </li>
              <li
                className={`flex items-center space-x-2  w-fit md:mx-0 mx-auto ${
                  lang == "en" ? "-translate-x-[6px]" : "translate-x-[6px]"
                }`}
              >
                <svg
                  className="md:w-12 md:h-12 h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2a5 5 0 00-5 5c0 2.5 2.5 5.5 5 9 2.5-3.5 5-6.5 5-9a5 5 0 00-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z"
                  />
                </svg>
                <span className="text-sm">{t("address")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons and Copyright */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t border-white/30 py-4">
          <p className="text-sm w-fit mx-auto">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
