"use client";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const lang = useLocale();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("auth_token");
      setIsAuthenticated(!!token);
    }
  }, []);

  return (
    <header className="bg-[#EFEFEF] py-3" dir={lang == "en" ? "ltr" : "rtl"}>
      <div className="container mx-auto flex justify-between">
        <div className="flex gap-2 items-center">
          <LanguageSwitcher />

          {isAuthenticated ? (
            <div className="relative w-10 h-10 bg-[#61B8A0] p-3 grid place-items-center rounded-full">
              <Link
                href={`/${lang}/profile`}
                className="hover:text-primary text-[15px]"
              >
                <Image
                  src="/images/logos/Vector.svg"
                  alt="User Icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </Link>
            </div>
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
        <div className="relative w-28 h-14 xl:w-36 xl:h-20">
          <Link href={`/${lang}`}>
            <Image
              src="/images/logos/header_logo.png"
              alt="Logo"
              height={70}
              width={160}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
