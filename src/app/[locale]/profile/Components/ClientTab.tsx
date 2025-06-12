"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ClientTab = ({ profileData }) => {
  const lang = useLocale();
  const t = useTranslations("Register");

  return (
    <>
      <div className="">
        <div
          className="container mx-auto my-12"
          dir={lang == "en" ? "ltr" : "rtl"}
        >
          <div className="border-[2.4px] border-[#61B8A0] py-6 px-3 rounded-lg relative">
            <div className="bg-[#61B8A0] p-3 rounded-lg text-white w-fit absolute top-0 right-0 -translate-y-1/2 -translate-x-[40px] font-bold text-[13px] md:text-[15px]">
              {t("persnola_info")}
            </div>
            <div className="grid grid-cols-12 gap-x-5 gap-y-5 p-5 pb-2">
              <div className="md:col-span-4 col-span-12">
                <label
                  htmlFor="full_name_ar"
                  className="block text-sm font-medium"
                >
                  {t("full_name_ar")}
                </label>
                <input
                  id="full_name_ar"
                  type="text"
                  defaultValue={profileData?.full_name_ar}
                  disabled
                  className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                />
              </div>
              <div className="md:col-span-4 col-span-12">
                <label
                  htmlFor="full_name_en"
                  className="block text-sm font-medium"
                >
                  {t("full_name_en")}
                </label>
                <input
                  id="full_name_en"
                  type="text"
                  defaultValue={profileData?.full_name_en}
                  disabled
                  className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                />
              </div>
              <div className="md:col-span-4 col-span-12">
                <label
                  htmlFor="date_of_birth"
                  className="block text-sm font-medium"
                >
                  {t("dob")}
                </label>
                <input
                  id="date_of_birth"
                  type="text"
                  defaultValue={profileData?.date_of_birth}
                  disabled
                  className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                />
              </div>
              <div className="md:col-span-4 col-span-12">
                <label
                  htmlFor="nationality"
                  className="block text-sm font-medium"
                >
                  {t("nationality")}
                </label>
                <input
                  id="nationality"
                  type="text"
                  defaultValue={profileData?.nationality}
                  disabled
                  className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                />
              </div>
              <div className="md:col-span-4 col-span-12">
                <label htmlFor="country" className="block text-sm font-medium">
                  {t("country")}
                </label>
                <input
                  id="country"
                  type="text"
                  defaultValue={profileData?.country}
                  disabled
                  className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                />
              </div>
              <div className="md:col-span-4 col-span-12">
                <label htmlFor="city" className="block text-sm font-medium">
                  {t("city")}
                </label>
                <input
                  id="city"
                  type="text"
                  defaultValue={profileData?.city}
                  disabled
                  className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                />
              </div>
              <div className="md:col-span-4 col-span-12">
                <label htmlFor="gender" className="block text-sm font-medium">
                  {t("gender")}
                </label>
                <input
                  id="gender"
                  type="text"
                  defaultValue={profileData?.gender}
                  disabled
                  className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="border-[2.4px] border-[#61B8A0] py-6 px-3 rounded-lg relative my-12">
            <div className="bg-[#61B8A0] p-3 rounded-lg text-white w-fit absolute top-0 right-0 -translate-y-1/2 -translate-[40px] font-bold text-[13px] md:text-[15px]">
              {t("contact_us")}
            </div>
            <div className="grid grid-cols-12 gap-x-5 gap-y-5 p-5 pb-2">
              <div className="md:col-span-4 col-span-12">
                <label htmlFor="phone" className="block text-sm font-medium">
                  {t("phone")}
                </label>
                <input
                  id="phone"
                  type="text"
                  defaultValue={profileData?.phone}
                  disabled
                  className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                />
              </div>
              <div className="md:col-span-4 col-span-12">
                <label htmlFor="email" className="block text-sm font-medium">
                  {t("email")}
                </label>
                <input
                  id="email"
                  type="text"
                  defaultValue={profileData?.email}
                  disabled
                  className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                />
              </div>
              <div className="md:col-span-4 col-span-12">
                <label
                  htmlFor="alt_contact_method"
                  className="block text-sm font-medium"
                >
                  {t("contact_us_2")}
                </label>
                <input
                  id="alt_contact_method"
                  type="text"
                  defaultValue={profileData?.alt_contact_method}
                  disabled
                  className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="border-[2.4px] border-[#61B8A0] py-6 px-3 rounded-lg relative my-12">
            <div className="bg-[#61B8A0] p-3 rounded-lg text-white w-fit absolute top-0 right-0 -translate-y-1/2 -translate-x-[40px] font-bold text-[13px] md:text-[15px]">
              {t("employee_info")}
            </div>
            <div className="grid grid-cols-12 gap-x-5 gap-y-5 p-5 pb-2">
              <div className="md:col-span-4 col-span-12">
                <label
                  htmlFor="job_title"
                  className="block text-sm font-medium"
                >
                  {t("job_title")}
                </label>
                <input
                  id="job_title"
                  type="text"
                  defaultValue={profileData?.job_title}
                  disabled
                  className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                />
              </div>
              <div className="md:col-span-4 col-span-12">
                <label
                  htmlFor="company_name"
                  className="block text-sm font-medium"
                >
                  {t("company_name")}
                </label>
                <input
                  id="company_name"
                  type="text"
                  defaultValue={profileData?.company_name}
                  disabled
                  className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                />
              </div>
              <div className="md:col-span-4 col-span-12">
                <label
                  htmlFor="company_type"
                  className="block text-sm font-medium"
                >
                  {t("company_type")}
                </label>
                <input
                  id="company_type"
                  type="text"
                  defaultValue={profileData?.company_type}
                  disabled
                  className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                />
              </div>
              <div className="md:col-span-4 col-span-12">
                <label
                  htmlFor="company_sector"
                  className="block text-sm font-medium"
                >
                  {t("company_sector")}
                </label>
                <input
                  id="company_sector"
                  type="text"
                  defaultValue={profileData?.company_sector}
                  disabled
                  className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                />
              </div>
              <div className="md:col-span-4 col-span-12">
                <label
                  htmlFor="linkedin_url"
                  className="block text-sm font-medium"
                >
                  {t("linkedin_url")}
                </label>
                <input
                  id="linkedin_url"
                  type="text"
                  defaultValue={profileData?.linkedin_url}
                  disabled
                  className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6 mb-2">
          <div className="flex space-x-2 mx-auto">
            <button
              type="submit"
              className="px-5 py-3 text-lg font-medium text-white bg-[#61B8A0] rounded-md hover:bg-[#5d9887] disabled:cursor-not-allowed cursor-pointer"
              onClick={() => {
                localStorage.removeItem("auth_token");
                localStorage.removeItem("user_name");
                window.location.href = `/${lang}`;
              }}
            >
              {t("logout")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientTab;
