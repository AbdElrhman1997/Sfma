import { useTranslations } from "next-intl";

const StepFive = ({ register, errors, watch }) => {
  const t = useTranslations("Register");

  return (
    <div className="grid grid-cols-12 gap-x-5 gap-y-2">
      <div className="md:col-span-6 col-span-12">
        <label htmlFor="full_name_ar" className="block text-sm font-medium">
          {t("full_name_ar")}
        </label>
        <input
          id="full_name_ar"
          type="text"
          {...register("full_name_ar")}
          defaultValue={watch("full_name_ar")}
          disabled
          className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
        />

        {errors.full_name_ar && (
          <p className="mt-1 text-sm text-red-600">
            {errors.full_name_ar.message}
          </p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12">
        <label htmlFor="full_name_en" className="block text-sm font-medium">
          {t("full_name_en")}
        </label>
        <input
          id="full_name_en"
          type="text"
          {...register("full_name_en")}
          defaultValue={watch("full_name_en")}
          disabled
          className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
        />

        {errors.full_name_en && (
          <p className="mt-1 text-sm text-red-600">
            {errors.full_name_en.message}
          </p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12">
        <label htmlFor="date_of_birth" className="block text-sm font-medium">
          {t("dob")}
        </label>
        <input
          id="date_of_birth"
          type="text"
          {...register("date_of_birth")}
          defaultValue={watch("date_of_birth")}
          disabled
          className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
        />

        {errors.date_of_birth && (
          <p className="mt-1 text-sm text-red-600">
            {errors.date_of_birth.message}
          </p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12">
        <label htmlFor="nationality" className="block text-sm font-medium">
          {t("nationality")}
        </label>
        <input
          id="nationality"
          type="text"
          {...register("nationality")}
          defaultValue={watch("nationality")}
          disabled
          className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
        />

        {errors.nationality && (
          <p className="mt-1 text-sm text-red-600">
            {errors.nationality.message}
          </p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12">
        <label htmlFor="country" className="block text-sm font-medium">
          {t("country")}
        </label>
        <input
          id="country"
          type="text"
          // {...register("country")}
          defaultValue={localStorage.getItem("country")}
          disabled
          className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
        />

        {errors.country && (
          <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12">
        <label htmlFor="city" className="block text-sm font-medium">
          {t("city")}
        </label>
        <input
          id="city"
          type="text"
          // {...register("city")}
          defaultValue={localStorage.getItem("city")}
          disabled
          className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
        />

        {errors.city && (
          <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12">
        <label htmlFor="gender" className="block text-sm font-medium">
          {t("gender")}
        </label>
        <input
          id="gender"
          type="text"
          {...register("gender")}
          defaultValue={watch("gender")}
          disabled
          className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
        />

        {errors.gender && (
          <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12">
        <label htmlFor="phone" className="block text-sm font-medium">
          {t("phone")}
        </label>
        <input
          id="phone"
          type="text"
          {...register("phone")}
          defaultValue={watch("phone")}
          disabled
          className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
        />

        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12">
        <label htmlFor="email" className="block text-sm font-medium">
          {t("email")}
        </label>
        <input
          id="email"
          type="text"
          {...register("email")}
          defaultValue={watch("email")}
          disabled
          className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12">
        <label
          htmlFor="alt_contact_method"
          className="block text-sm font-medium"
        >
          {t("contact_us_2")}
        </label>
        <input
          id="alt_contact_method"
          type="text"
          {...register("alt_contact_method")}
          defaultValue={watch("alt_contact_method")}
          disabled
          className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
        />

        {errors.alt_contact_method && (
          <p className="mt-1 text-sm text-red-600">
            {errors.alt_contact_method.message}
          </p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12">
        <label htmlFor="job_title" className="block text-sm font-medium">
          {t("job_title")}
        </label>
        <input
          id="job_title"
          type="text"
          {...register("job_title")}
          defaultValue={watch("job_title")}
          disabled
          className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
        />

        {errors.job_title && (
          <p className="mt-1 text-sm text-red-600">
            {errors.job_title.message}
          </p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12">
        <label htmlFor="company_name" className="block text-sm font-medium">
          {t("company_name")}
        </label>
        <input
          id="company_name"
          type="text"
          {...register("company_name")}
          defaultValue={watch("company_name")}
          disabled
          className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
        />

        {errors.company_name && (
          <p className="mt-1 text-sm text-red-600">
            {errors.company_name.message}
          </p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12">
        <label htmlFor="company_type" className="block text-sm font-medium">
          {t("company_type")}
        </label>
        <input
          id="company_type"
          type="text"
          {...register("company_type")}
          defaultValue={watch("company_type")}
          disabled
          className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
        />

        {errors.company_type && (
          <p className="mt-1 text-sm text-red-600">
            {errors.company_type.message}
          </p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12">
        <label htmlFor="company_sector" className="block text-sm font-medium">
          {t("company_sector")}
        </label>
        <input
          id="company_sector"
          type="text"
          {...register("company_sector")}
          defaultValue={watch("company_sector")}
          disabled
          className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
        />

        {errors.company_sector && (
          <p className="mt-1 text-sm text-red-600">
            {errors.company_sector.message}
          </p>
        )}
      </div>
      <div className="md:col-span-6 col-span-12">
        <label htmlFor="linkedin_url" className="block text-sm font-medium">
          {t("linkedin_url")}
        </label>
        <input
          id="linkedin_url"
          type="text"
          {...register("linkedin_url")}
          defaultValue={watch("linkedin_url")}
          disabled
          className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
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

export default StepFive;
