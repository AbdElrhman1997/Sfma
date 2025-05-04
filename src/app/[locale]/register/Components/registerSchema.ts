import { z } from "zod";

// Schema for all steps combined
export const registerSchema = z
  .object({
    // Step 1: Personal Information
    full_name_ar: z.string().min(2, "الاسم يجب أن يكون ٢ أحرف على الأقل"),
    full_name_en: z.string().min(2, "الاسم يجب أن يكون ٢ أحرف على الأقل"),
    gender: z.enum(["male", "female"], { message: "يرجى اختيار الجنس" }),
    date_of_birth: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "يرجى اختيار تاريخ الميلاد"),
    nationality: z.string().min(1, "يرجى اختيار الجنسية"),
    country: z.string().min(1, "يرجى اختيار الدولة"),
    city: z.string().min(1, "يرجى اختيار المدينة"),

    // Step 2: Region Selection (Placeholder)
    phone: z.string().min(10, "رقم الهاتف يجب أن يكون ١٠ أرقام على الأقل"),
    email: z.string().email({ message: " الإيميل غير صالح " }),

    // Step 3: Personal Data (Placeholder)
    job_title: z.string().min(2, "يرجى كتابة المسمى الوظيفي"),
    company_name: z.string().min(2, "يرجى كتابة إسم الشركة"),
    company_type: z.string().min(2, "يرجى كتابة مجال العمل"),
    company_sector: z.enum(["حكومي", "خاص"], {
      message: "يرجى اختيار جهة العمل",
    }),

    // Step 4: User Specialization (Placeholder)
    password: z
      .string()
      .min(8, { message: "كلمة المرور يجب أن تحتوي على الأقل على 8 حروف" })
      .max(32, { message: "كلمة المرور يجب أن تحتوي على الأكثر على 32 حرف" }),
    password_confirmation: z
      .string()
      .min(8, { message: "كلمة المرور يجب أن تحتوي على الأقل على 8 حروف" })
      .max(32, { message: "كلمة المرور يجب أن تحتوي على الأكثر على 32 حرف" }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.password_confirmation) {
      ctx.addIssue({
        code: "custom",
        path: ["password_confirmation"],
        message: "تأكيد كلمة المرور غير متطابق مع كلمة المرور",
      });
    }
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
