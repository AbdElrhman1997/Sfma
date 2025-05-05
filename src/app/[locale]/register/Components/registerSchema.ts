import { z } from "zod";

// Function to create schema using the t function from next-intl
export const createRegisterSchema = (t: (key: string) => string) =>
  z
    .object({
      // Step 1: Personal Information
      full_name_ar: z.string().min(2, t("full_name_ar_min")),
      full_name_en: z.string().min(2, t("full_name_en_min")),
      gender: z.enum(["male", "female"], { message: t("gender_required") }),
      date_of_birth: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, t("date_of_birth_invalid")),
      nationality: z.string().min(1, t("nationality_required")),
      country: z.string().min(1, t("country_required")),
      city: z.string().min(1, t("city_required")),

      // Step 2: Region Selection
      phone: z.string().min(10, t("phone_min")),
      email: z.string().email({ message: t("email_invalid") }),

      // Step 3: Personal Data
      job_title: z.string().min(2, t("job_title_required")),
      company_name: z.string().min(2, t("company_name_required")),
      company_type: z.string().min(2, t("company_type_required")),
      company_sector: z.enum(["حكومي", "خاص"], {
        message: t("company_sector_required"),
      }),

      // Step 4: Password
      password: z
        .string()
        .min(8, { message: t("password_min") })
        .max(32, { message: t("password_max") }),
      password_confirmation: z
        .string()
        .min(8, { message: t("password_min") })
        .max(32, { message: t("password_max") }),
    })
    .superRefine((data, ctx) => {
      if (data.password !== data.password_confirmation) {
        ctx.addIssue({
          code: "custom",
          path: ["password_confirmation"],
          message: t("password_confirmation_mismatch"),
        });
      }
    });

export type RegisterFormData = z.infer<ReturnType<typeof createRegisterSchema>>;
