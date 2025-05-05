"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createRegisterSchema, RegisterFormData } from "./registerSchema";
import { registerUser } from "./registerUser";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function RegisterForm({ locale, messages }) {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();
  const t = useTranslations("Register");

  const steps = [
    t("persnola_info"),
    t("contact_info"),
    t("account_setting"),
    t("review_data"),
    t("contact_us"),
  ];

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      router.replace(`/${locale}`); // Redirect to home
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
    getValues,
    watch,
    setValue,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(createRegisterSchema(t)),
    defaultValues: {
      gender: undefined,
      nationality: "",
      country: "",
      city: "",
      phone: "",
    },
  });

  const onNext = async () => {
    // Validate current step's fields before proceeding
    let fieldsToValidate: (keyof RegisterFormData)[] = [];
    switch (currentStep) {
      case 0: // البيانات الشخصية
        fieldsToValidate = [
          "full_name_ar",
          "full_name_en",
          "date_of_birth",
          "nationality",
          "country",
          "city",
          "gender",
        ];
        break;
      case 1: // معلومات التواصل
        fieldsToValidate = ["phone", "email"];
        break;
      case 2: // البيانات المهنية
        fieldsToValidate = [
          "job_title",
          "company_name",
          "company_type",
          "company_sector",
        ];
        break;
      case 3: // إعدادات الحساب
        fieldsToValidate = ["password", "password_confirmation"];
        break;
    }

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        // Final step: submit the form
        const data = getValues();
        const result = await registerUser(data);
        if (result.success) {
          toast.success(result.message, { position: "top-right" });
          router.push(`/${locale}/login`);
        } else {
          toast.error(result.message, { position: "top-right" });
        }
      }
    }
  };

  const onBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="w-full mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center my-10">
          {t("create_account")}
        </h2>
        <div className="relative">
          <div className="absolute top-2 w-full h-1.5 bg-gray-300 rounded-full"></div>
          <div
            className="absolute top-2 h-1.5 bg-[#61B8A0] rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
          <div className="relative flex justify-around">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex flex-col items-center relative z-10"
              >
                <div
                  className={`w-5 h-5 rounded-full ${
                    index <= currentStep ? "bg-[#61B8A0]" : "bg-gray-300"
                  }`}
                ></div>
                <span className="text-sm mt-2 text-gray-600 text-center">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        {/* Step 0: البيانات الشخصية */}
        {currentStep === 0 && (
          <StepOne register={register} errors={errors} watch={watch} />
        )}

        {/* Step 1: معلومات التواصل */}
        {currentStep === 1 && <StepTwo register={register} errors={errors} />}

        {/* Step 2: البيانات المهنية */}
        {currentStep === 2 && <StepThree register={register} errors={errors} />}

        {/* Step 3: إعدادات الحساب */}
        {currentStep === 3 && (
          <StepFour
            register={register}
            errors={errors}
            locale={locale}
            setValue={setValue}
          />
        )}

        {/* Step 4: مراجعة وتأكيد */}
        {currentStep === 4 && (
          <StepFive register={register} errors={errors} watch={watch} />
        )}
      </form>
      <div className="flex justify-between items-center mt-10 mb-2">
        <div className="flex space-x-2">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={onBack}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer"
            >
              {t("previous")}
            </button>
          )}
          <button
            type="button"
            onClick={onNext}
            disabled={isSubmitting}
            className="px-4 py-2 text-sm font-medium text-white bg-teal-500 rounded-md hover:bg-teal-600 disabled:bg-teal-300 cursor-pointer"
          >
            {currentStep === steps.length - 1 ? t("send") : t("next")}{" "}
            <span
              className={`${
                locale === "en" ? "rotate-180 translate-y-0.5" : ""
              } inline-block transition-transform duration-300`}
            >
              ←
            </span>
          </button>
        </div>
      </div>
      <p className="text-lg text-center text-[#737373] mb-8">
        {t("has_account")}{" "}
        <span className="text-[#1DAEE5] hover:underline cursor-pointer">
          <Link href={`/${locale}/login`} className="hover:text-primary">
            {t("login_to_account")}
          </Link>
        </span>
      </p>
    </div>
  );
}
