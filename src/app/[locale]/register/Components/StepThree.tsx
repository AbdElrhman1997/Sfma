import { useTranslations } from "next-intl";

const StepThree = ({ register, errors }) => {
  const t = useTranslations("Register");

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="md:col-span-6 col-span-12 text-sm">
        <label
          htmlFor="job_title"
          className="block text-sm font-medium text-gray-700"
        >
          {t("job_title")}
        </label>
        <input
          id="job_title"
          type="text"
          {...register("job_title")}
          className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#61B8A0] focus:border-[#61B8A0]"
          // placeholder="الاسم كامل"
        />
        {errors.job_title && (
          <p className="mt-1 text-sm text-red-600">
            {errors.job_title.message}
          </p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12 text-sm">
        <label
          htmlFor="company_name"
          className="block text-sm font-medium text-gray-700"
        >
          {t("company_name")}
        </label>
        <input
          id="company_name"
          type="text"
          {...register("company_name")}
          className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#61B8A0] focus:border-[#61B8A0]"
          // placeholder="الاسم كامل"
        />
        {errors.company_name && (
          <p className="mt-1 text-sm text-red-600">
            {errors.company_name.message}
          </p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12 text-sm">
        <label
          htmlFor="company_type"
          className="block text-sm font-medium text-gray-700"
        >
          {t("company_type")}
        </label>
        <input
          id="company_type"
          type="text"
          {...register("company_type")}
          className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#61B8A0] focus:border-[#61B8A0]"
          // placeholder="الاسم كامل"
        />
        {errors.company_type && (
          <p className="mt-1 text-sm text-red-600">
            {errors.company_type.message}
          </p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12 text-sm">
        <label htmlFor="company_sector" className="block text-sm font-medium ">
          {t("company_sector")}
        </label>
        <select
          id="company_sector"
          {...register("company_sector")}
          className="mt-1 block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#61B8A0] focus:border-[#61B8A0]"
        >
          <option value=""> {t("choose_company_sector")}</option>
          <option value="خاص">خاص</option>
          <option value="حكومي">حكومي</option>
        </select>
        {errors.company_sector && (
          <p className="mt-1 text-sm text-red-600">
            {errors.company_sector.message}
          </p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12 text-sm">
        <label
          htmlFor="linkedin_url"
          className="block text-sm font-medium text-gray-700"
        >
          {t("linkedin_url") + t("optional")}
        </label>
        <input
          id="linkedin_url"
          type="text"
          {...register("linkedin_url")}
          className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#61B8A0] focus:border-[#61B8A0]"
          // placeholder="الاسم كامل"
        />
        {errors.linkedin_url && (
          <p className="mt-1 text-sm text-red-600">
            {errors.linkedin_url.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default StepThree;
