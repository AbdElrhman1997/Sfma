"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

const StepFive = ({ register, errors, locale, setValue }) => {
  const t = useTranslations("Register");
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null); // make sure it's declared

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const validTypes = ["image/jpeg", "image/png"];
      if (!validTypes.includes(file.type)) {
        setValue("logo", null);
        fileInputRef.current.value = null;
        toast.error("This extension is not supported", {
          position: "top-right",
        });
        if (preview) {
          URL.revokeObjectURL(preview);
          setPreview(null);
        }
        return;
      }

      const tempUrl = URL.createObjectURL(file);

      const img = new window.Image();
      img.src = tempUrl;
      img.onload = () => {
        if (img.width > 300 || img.height > 300) {
          setValue("logo", null);
          fileInputRef.current.value = null;
          URL.revokeObjectURL(tempUrl);
          toast.error(
            "This image is very large. Please upload a 300x300 image.",
            {
              position: "top-right",
            }
          );
          if (preview) {
            URL.revokeObjectURL(preview);
            setPreview(null);
          }
        } else {
          setValue("logo", file);
          if (preview) {
            URL.revokeObjectURL(preview);
          }
          setPreview(tempUrl);
        }
      };
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div
      className="grid grid-cols-12 gap-5"
      dir={locale == "en" ? "ltr" : "rtl"}
    >
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
              locale == "en" ? "right-3" : "left-3"
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
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12">
        <label
          htmlFor="password_confirmation"
          className="block text-sm font-medium"
        >
          {t("confirm_password")}
        </label>
        <div className="relative mt-1">
          <input
            id="password_confirmation"
            type={showConfirmPassword ? "text" : "password"}
            {...register("password_confirmation")}
            className="text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#61B8A0] focus:border-[#61B8A0]"
          />
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className={`absolute inset-y-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 ${
              locale == "en" ? "right-3" : "left-3"
            }`}
          >
            {showConfirmPassword ? (
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
        {errors.password_confirmation && (
          <p className="mt-1 text-sm text-red-600">
            {errors.password_confirmation.message}
          </p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12 text-sm text-right">
        <label htmlFor="logo" className="block text-sm font-medium mb-2">
          {t("profile_picture")}{" "}
          <span className="text-[#555555]">{t("optional")}</span>
        </label>

        <div className="relative">
          <input
            id="logo"
            type="file"
            accept="image/jpeg,image/png"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />
          <div className="flex items-center justify-between border border-gray-300 rounded-md bg-gray-100 px-4 py-3 text-gray-500">
            <span>اضغط لرفع الصورة</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12"
              />
            </svg>
          </div>
        </div>

        {preview && (
          <div className="mt-4">
            <img
              src={preview}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-md border"
            />
          </div>
        )}

        <p className="mt-2 text-xs">{t("image_placeholder_1")}</p>
        <p className="mt-[2px] text-xs">{t("image_placeholder_2")}</p>

        {errors.logo && (
          <p className="mt-1 text-sm text-red-600">{errors.logo.message}</p>
        )}
      </div>
    </div>
  );
};

export default StepFive;
