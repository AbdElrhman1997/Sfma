"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const StepOne = ({ register, errors, watch }) => {
  const t = useTranslations("Register");

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}auth/get-countries`,
          {
            headers: {
              "Accept-Language": "ar",
            },
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error("فشل في تحميل البلد");
        }
        const data = await res.json();
        setCountries(data?.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}auth/get-cities?country_id=${watch(
            "country"
          )}`,
          {
            headers: {
              "Accept-Language": "ar",
            },
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error("فشل في تحميل الفيديوهات");
        }
        const data = await res.json();
        console.log(data);
        setCities(data?.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCities();
  }, [watch("country")]);

  console.log(watch("country"));

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="md:col-span-6 col-span-12">
        <label htmlFor="full_name_ar" className="block text-sm font-medium ">
          {t("full_name_ar")}
        </label>
        <input
          id="full_name_ar"
          type="text"
          {...register("full_name_ar")}
          className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#61B8A0] focus:border-[#61B8A0]"
          // placeholder={t("full_name_ar")}
        />
        {errors.full_name_ar && (
          <p className="mt-1 text-sm text-red-600">
            {errors.full_name_ar.message}
          </p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12">
        <label htmlFor="full_name_en" className="block text-sm font-medium ">
          {t("full_name_en")}
        </label>
        <input
          id="full_name_en"
          type="text"
          {...register("full_name_en")}
          className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#61B8A0] focus:border-[#61B8A0]"
          // placeholder={t("full_name_en")}
        />
        {errors.full_name_en && (
          <p className="mt-1 text-sm text-red-600">
            {errors.full_name_en.message}
          </p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12 flex items-center space-x-4">
        <div className="flex-1">
          <label htmlFor="date_of_birth" className="block text-sm font-medium">
            {t("dob")}
          </label>
          <input
            id="date_of_birth"
            type="date"
            {...register("date_of_birth")}
            className="mt-1 block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#61B8A0] focus:border-[#61B8A0]"
            placeholder="يوم / شهر / سنة"
          />
          {errors.date_of_birth && (
            <p className="mt-1 text-sm text-red-600">
              {errors.date_of_birth.message}
            </p>
          )}
        </div>
      </div>
      <div className="md:col-span-6 col-span-12 text-sm">
        <label htmlFor="nationality" className="block text-sm font-medium ">
          {t("nationality")}
        </label>
        <select
          id="nationality"
          {...register("nationality")}
          className="mt-1 block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#61B8A0] focus:border-[#61B8A0]"
        >
          <option value="0">{t("choose_nationality")}</option>
          {countries?.map((country) => (
            <option key={country?.id} value={country?.name}>
              {country?.name}
            </option>
          ))}
        </select>
        {errors.nationality && (
          <p className="mt-1 text-sm text-red-600">
            {errors.nationality.message}
          </p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12 text-sm">
        <label htmlFor="country" className="block text-sm font-medium">
          {t("country")}
        </label>
        <select
          id="country"
          {...register("country")}
          className="mt-1 block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#61B8A0] focus:border-[#61B8A0]"
        >
          <option value=""> {t("choose_country")}</option>
          {countries?.map((country) => (
            <option key={country?.id} value={country?.id}>
              {country?.name}
            </option>
          ))}
        </select>
        {errors.country && (
          <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12 text-sm">
        <label htmlFor="city" className="block text-sm font-medium ">
          {t("city")}
        </label>
        <select
          id="city"
          {...register("city")}
          className="mt-1 block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#61B8A0] focus:border-[#61B8A0]"
        >
          <option value="">{t("choose_city")}</option>
          {cities?.map((city) => (
            <option key={city?.id} value={city?.id}>
              {city?.name}
            </option>
          ))}
        </select>
        {errors.city && (
          <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12 text-sm">
        <label htmlFor="gender" className="block text-sm font-medium ">
          {t("gender")}
        </label>
        <select
          id="gender"
          {...register("gender")}
          className="mt-1 block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#61B8A0] focus:border-[#61B8A0]"
        >
          <option value="">{t("choose_gender")}</option>
          <option value="male">{t("male")}</option>
          <option value="female">{t("female")}</option>
        </select>
        {errors.gender && (
          <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>
        )}
      </div>
    </div>
  );
};

export default StepOne;
