import { toast } from "react-toastify";
import type { RegisterFormData } from "./registerSchema";

export async function registerUser(data: RegisterFormData) {
  try {
    const formData = new FormData();

    // Append all fields to FormData
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value as string);
      }
    });

    formData.append("name", "name");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}auth/register`,
      {
        method: "POST",
        body: formData,
        headers: {
          "Accept-Language": "ar",
        },
      }
    );

    const result = await response.json();

    if (!response.ok) {
      const errors = result.errors || result;
      if (errors && typeof errors === "object") {
        console.log("first");
        const allMessages = Object.values(errors).flat();
        const firstError = allMessages[0];
        const remaining = allMessages.length - 1;

        const message: any =
          remaining > 0
            ? `${firstError} (و${remaining} أخطاء أخرى)`
            : firstError;

        return { success: false, message };
      }

      const fallbackMessage = result.message || "فشل التسجيل";
      toast.error(fallbackMessage, { toastId: "register-error" });
      return { success: false, message: fallbackMessage };
    }

    const successMessage = result.message || "تم التسجيل بنجاح!";
    toast.success(successMessage);
    return { success: true, message: successMessage };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "حدث خطأ أثناء التسجيل";
    toast.error(errorMessage, { toastId: "register-error" });
    return { success: false, message: errorMessage };
  }
}
