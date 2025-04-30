"use client";

import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function LanguageSwitcher() {
  const locale = useLocale(); // 'en' or 'ar'
  const pathname = usePathname(); // e.g., /about, /contact

  const targetLocale = locale === "ar" ? "en" : "ar";

  // Adjust the path to use the new locale
  const pathWithoutLocale = pathname.replace(/^\/(ar|en)/, "");
  const newPath = `/${targetLocale}${pathWithoutLocale}`;

  const flagSrc =
    locale === "ar"
      ? "/images/logos/united-kingdom.svg"
      : "/images/logos/saudi-arabia.svg";

  return (
    <Link
      href={newPath}
      locale={undefined} // Important for custom locale handling
      className="relative w-9 h-9 grid place-items-center rounded-full"
    >
      <Image
        src={flagSrc}
        alt="Change Language"
        width={40}
        height={40}
        className="object-contain"
      />
    </Link>
  );
}
