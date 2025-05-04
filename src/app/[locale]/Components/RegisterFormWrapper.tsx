"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import RegisterForm from "../register/Components/RegisterForm";
import LoginForm from "../login/Components/LoginForm";

const RegisterFormWrapper = ({ locale, messages, from_login }) => {
  const router = useRouter();
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      router.replace(`/${locale}`);
    } else {
      setIsAllowed(true);
    }
  }, [locale, router]);

  if (!isAllowed) return null;

  return from_login ? (
    <LoginForm locale={locale} messages={messages} />
  ) : (
    <RegisterForm locale={locale} messages={messages} />
  );
};

export default RegisterFormWrapper;
