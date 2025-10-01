"use client";

import { useLocale, useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useState } from "react";
import {
  createRegisterSchema,
  RegisterFormData,
} from "../../register/Components/registerSchema";

const ClientTab = ({ profileData }) => {
  const lang = useLocale();
  const t = useTranslations("Register");
  const user: any = JSON.parse(localStorage.getItem("user_name"));

  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(createRegisterSchema({ t, from_profile: true })),
    defaultValues: profileData,
  });

  // ✅ Handle save
  const onSubmit = async (data: RegisterFormData) => {
    try {
      const payload = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          if (key === "city") {
            payload.append("city", user?.city || "");
          } else if (key === "country") {
            payload.append("country", user?.country || "");
          } else {
            payload.append(key, value as string);
          }
        }
      });

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}auth/update-profile`,
        {
          method: "POST",
          body: payload,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
            "Accept-Language": lang,
          },
        }
      );

      const result = await response.json();

      if (result.status !== 200) {
        throw new Error(result.message || t("update_failed"));
      }

      toast.success(t("update_success"));
      setIsEditing(false);

      setIsEditing(false);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t("update_error"));
    }
  };

  // ✅ Input Style Helper
  const inputStyle = (editable: boolean) =>
    `mt-1 text-sm block w-full px-3 py-2 h-[45px] border rounded-md shadow-sm ${
      editable
        ? "bg-white border-gray-300 text-black"
        : "bg-gray-100 border-gray-300 text-gray-600 cursor-not-allowed"
    }`;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container mx-auto my-12"
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      {/* Personal Info */}
      <div className="border-[2.4px] border-[#61B8A0] py-6 px-3 rounded-lg relative">
        <div className="bg-[#61B8A0] p-3 rounded-lg text-white w-fit absolute top-0 right-0 -translate-y-1/2 -translate-x-[40px] font-bold text-[13px] md:text-[15px]">
          {t("persnola_info")}
        </div>

        <div className="grid grid-cols-12 gap-x-5 gap-y-5 p-5 pb-2">
          {[
            { id: "full_name_ar", label: t("full_name_ar") },
            { id: "full_name_en", label: t("full_name_en") },
            { id: "date_of_birth", label: t("dob") },
            { id: "nationality", label: t("nationality") },
            { id: "country", label: t("country") },
            { id: "city", label: t("city") },
            { id: "gender", label: t("gender") },
          ].map((field) => (
            <div key={field.id} className="md:col-span-4 col-span-12">
              <label htmlFor={field.id} className="block text-sm font-medium">
                {field.label}
              </label>
              <input
                id={field.id}
                type="text"
                disabled={
                  ["country", "city", "nationality", "gender"].includes(
                    field.id
                  ) || !isEditing
                }
                {...register(field.id as keyof RegisterFormData)}
                className={
                  ["country", "city", "nationality", "gender"].includes(
                    field.id
                  )
                    ? inputStyle(false)
                    : inputStyle(isEditing)
                }
              />
              {errors[field.id as keyof RegisterFormData] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors[
                    field.id as keyof RegisterFormData
                  ]?.message?.toString()}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="border-[2.4px] border-[#61B8A0] py-6 px-3 rounded-lg relative my-12">
        <div className="bg-[#61B8A0] p-3 rounded-lg text-white w-fit absolute top-0 right-0 -translate-y-1/2 -translate-[40px] font-bold text-[13px] md:text-[15px]">
          {t("contact_us")}
        </div>
        <div className="grid grid-cols-12 gap-x-5 gap-y-5 p-5 pb-2">
          {[
            { id: "phone", label: t("phone") },
            { id: "email", label: t("email") },
            { id: "alt_contact_method", label: t("contact_us_2") },
          ].map((field) => (
            <div key={field.id} className="md:col-span-4 col-span-12">
              <label htmlFor={field.id} className="block text-sm font-medium">
                {field.label}
              </label>
              <input
                id={field.id}
                type="text"
                disabled={!isEditing}
                {...register(field.id as keyof RegisterFormData)}
                className={inputStyle(isEditing)}
              />
              {errors[field.id as keyof RegisterFormData] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors[
                    field.id as keyof RegisterFormData
                  ]?.message?.toString()}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Employee Info */}
      <div className="border-[2.4px] border-[#61B8A0] py-6 px-3 rounded-lg relative my-12">
        <div className="bg-[#61B8A0] p-3 rounded-lg text-white w-fit absolute top-0 right-0 -translate-y-1/2 -translate-x-[40px] font-bold text-[13px] md:text-[15px]">
          {t("employee_info")}
        </div>
        <div className="grid grid-cols-12 gap-x-5 gap-y-5 p-5 pb-2">
          {[
            { id: "job_title", label: t("job_title") },
            { id: "company_name", label: t("company_name") },
            { id: "company_type", label: t("company_type") },
            { id: "company_sector", label: t("company_sector") },
            { id: "linkedin_url", label: t("linkedin_url") },
          ].map((field) => (
            <div key={field.id} className="md:col-span-4 col-span-12">
              <label htmlFor={field.id} className="block text-sm font-medium">
                {field.label}
              </label>
              <input
                id={field.id}
                type="text"
                disabled={!isEditing}
                {...register(field.id as keyof RegisterFormData)}
                className={inputStyle(isEditing)}
              />
              {errors[field.id as keyof RegisterFormData] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors[
                    field.id as keyof RegisterFormData
                  ]?.message?.toString()}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-6 mb-2">
        {!isEditing ? (
          <button
            type="button"
            className="px-5 py-3 cursor-pointer text-lg font-medium text-white bg-[#61B8A0] rounded-md hover:bg-[#3a9e82]"
            onClick={() => setIsEditing(true)}
          >
            {t("edit")}
          </button>
        ) : (
          <div className="flex gap-4">
            <button
              type="submit"
              className="px-5 py-3 cursor-pointer text-lg font-medium text-white bg-[#61B8A0] rounded-md hover:bg-[#3a9e82]"
            >
              {t("save")}
            </button>
            <button
              type="button"
              className="px-5 py-3 cursor-pointer text-lg font-medium text-white bg-gray-500 rounded-md hover:bg-gray-400"
              onClick={() => {
                setIsEditing(false);
                reset(profileData); // reset form
              }}
            >
              {t("cancel")}
            </button>
          </div>
        )}

        {/* Logout */}
        <button
          type="button"
          className="px-5 py-3 cursor-pointer text-lg font-medium text-white bg-[#61B8A0] rounded-md hover:bg-[#5d9887]"
          onClick={() => {
            localStorage.removeItem("auth_token");
            localStorage.removeItem("user_name");
            window.location.href = `/${lang}`;
          }}
        >
          {t("logout")}
        </button>
      </div>
    </form>
  );
};

export default ClientTab;
