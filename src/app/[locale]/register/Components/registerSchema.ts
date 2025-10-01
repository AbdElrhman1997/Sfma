import { z } from "zod";

// Function to create schema using the t function from next-intl
export const createRegisterSchema = ({ t, from_profile }) =>
  z
    .object({
      // Step 1: Personal Information
      full_name_ar: z
        .string()
        .min(2, t("full_name_ar_min"))
        .regex(/^[\u0600-\u06FF\s]+$/, { message: t("full_name_ar_min") })
        .refine((val) => val.trim().split(/\s+/).length >= 4, {
          message: t("full_name_ar_4_words"),
        }),

      full_name_en: z
        .string()
        .min(2, t("full_name_en_min"))
        .regex(/^[A-Za-z\s]+$/, { message: t("full_name_en_min") })
        .refine((val) => val.trim().split(/\s+/).length >= 4, {
          message: t("full_name_en_4_words"),
        }),
      gender: from_profile
        ? z.enum(["male", "female"]).optional()
        : z.enum(["male", "female"], { message: t("gender_required") }),
      date_of_birth: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, t("date_of_birth_invalid")),
      nationality: from_profile
        ? z.string().optional()
        : z.string().min(1, t("nationality_required")),
      country: from_profile
        ? z.string().optional()
        : z.string().min(1, t("country_required")),
      city: from_profile
        ? z.string().optional()
        : z.string().min(1, t("city_required")),

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
      password: from_profile
        ? z.string().optional()
        : z
            .string()
            .min(8, { message: t("password_min") })
            .max(32, { message: t("password_max") }),

      password_confirmation: from_profile
        ? z.string().optional()
        : z
            .string()
            .min(8, { message: t("password_min") })
            .max(32, { message: t("password_max") }),
    })
    .superRefine((data, ctx) => {
      if (
        data.password &&
        data.password_confirmation &&
        data.password !== data.password_confirmation
      ) {
        ctx.addIssue({
          code: "custom",
          path: ["password_confirmation"],
          message: t("password_confirmation_mismatch"),
        });
      }
    });

export type RegisterFormData = z.infer<ReturnType<typeof createRegisterSchema>>;
