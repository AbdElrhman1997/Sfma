export async function registerUser(data: RegisterFormData) {
  try {
    const formData = new FormData();

    // Append all fields to FormData
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value as string); // Cast required since FormData only accepts string or Blob
      }
    });

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}auth/register`,
      {
        method: "POST",
        // Do not set Content-Type manually
        body: formData,
        headers: {
          "Accept-Language": "ar",
        },
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "فشل التسجيل");
    }

    return { success: true, message: result.message || "تم التسجيل بنجاح!" };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "حدث خطأ أثناء التسجيل",
    };
  }
}
