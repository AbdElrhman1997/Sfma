"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useLocale, useTranslations } from "next-intl";
import { z } from "zod";
import Link from "next/link";

export default function LoginForm({ locale, messages }) {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const t = useTranslations("Login");

  // Zod Schema for Login Form
  const loginSchema = z.object({
    email: z.string().email(t("email_invalid")).min(1, t("email_required")),
    password: z.string().min(8, t("password_min")),
  });

  type LoginFormData = z.infer<typeof loginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (data: LoginFormData) => {
    const formData = new FormData();
    // Append all fields to FormData
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value as string); // Cast required since FormData only accepts string or Blob
      }
    });

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}auth/login`,
        {
          method: "POST",
          body: formData,
          headers: {
            "Accept-Language": "ar",
          },
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "فشل تسجيل الدخول");
      }

      localStorage.setItem("auth_token", result.token);
      toast.success(result.message || "تم تسجيل الدخول بنجاح!");
      window.location.href = "/";
      return {
        success: true,
        message: result.message || "تم تسجيل الدخول بنجاح!",
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "حدث خطأ أثناء تسجيل الدخول";
      toast.error(errorMessage);
      return { success: false, message: errorMessage };
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-center mt-10">
          {t("login_to_account")}
        </h2>
        <p className="text-center text-lg my-5">
          <span className="text-[#737373]">{t("dont_have")}</span>
          <span className="text-[#1DAEE5] ms-[10px] hover:underline cursor-pointer">
            <Link href={`/${locale}/register`} className="hover:text-primary">
              {t("create_now")}
            </Link>
          </span>
        </p>
        <p className="mt-3 text-center text-2xl my-1 text-[#737373]">
          {t("or")}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
        <div className="md:col-span-6 col-span-12">
          <label htmlFor="email" className="block text-sm font-medium">
            {t("email")}
          </label>
          <input
            id="email"
            type="text"
            {...register("email")}
            className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#61B8A0] focus:border-[#61B8A0]"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="md:col-span-6 col-span-12">
          <label htmlFor="password" className="block text-sm font-medium">
            {t("password")}
          </label>
          <div className="relative mt-1">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className="text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#61B8A0] focus:border-[#61B8A0]"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={`absolute inset-y-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 ${
                locale === "en" ? "right-3" : "left-3"
              }`}
            >
              {showPassword ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex justify-between items-center mt-10 mb-2">
          <div className="flex space-x-2 mx-auto">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 text-sm font-medium text-white bg-[#61B8A0] rounded-md hover:bg-[#5d9887] disabled:cursor-not-allowed cursor-pointer"
            >
              {t("login")}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
