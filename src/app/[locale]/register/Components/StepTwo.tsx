import { useTranslations } from "next-intl";

const StepTwo = ({ register, errors }) => {
  const t = useTranslations("Register");

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="md:col-span-6 col-span-12">
        <label htmlFor="phone" className="block text-sm font-medium ">
          {t("phone") + t("saved_num")}
        </label>
        <input
          id="phone"
          type="text"
          {...register("phone")}
          className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#61B8A0] focus:border-[#61B8A0]"
          // placeholder={t("full_name_ar")}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12">
        <label htmlFor="email" className="block text-sm font-medium ">
          {t("email")}
        </label>
        <input
          id="email"
          type="text"
          {...register("email")}
          className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#61B8A0] focus:border-[#61B8A0]"
          // placeholder={t("full_name_ar")}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12">
        <label
          htmlFor="alt_contact_method"
          className="block text-sm font-medium "
        >
          {t("contact_us_2") + t("optional")}
        </label>
        <input
          id="alt_contact_method"
          type="text"
          {...register("alt_contact_method")}
          className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#61B8A0] focus:border-[#61B8A0]"
          // placeholder={t("full_name_ar")}
        />
        {errors.alt_contact_method && (
          <p className="mt-1 text-sm text-red-600">
            {errors.alt_contact_method.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default StepTwo;
