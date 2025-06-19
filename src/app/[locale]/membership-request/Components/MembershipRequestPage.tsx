"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ACCEPTED_TYPES = ["image/jpeg", "image/png"];

const MembershipRequestPage = () => {
  const lang = useLocale();
  // get payment data from course or workshop
  const choosed_membership: any = JSON.parse(
    localStorage.getItem("choosed_membership")
  );
  const t = useTranslations("Payment");
  const [selectedValue, setSelectedValue] = useState("option1");
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const auth_token: any = localStorage.getItem("auth_token");
  const router = useRouter();
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [files, setFiles]: any = useState([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);

    const validFiles = selectedFiles.filter((file) =>
      ACCEPTED_TYPES.includes(file.type)
    );

    if (validFiles.length === 0) {
      toast.error("لم يتم اختيار أي ملفات بصيغ مدعومة", {
        position: "top-right",
      });
      resetFileInput();
      return;
    }

    const newPreviewUrls: string[] = [];
    validFiles.forEach((file) => {
      const tempUrl = URL.createObjectURL(file);
      newPreviewUrls.push(tempUrl);
    });

    // حذف روابط الصور السابقة
    previewUrls.forEach((url) => URL.revokeObjectURL(url));

    setPreviewUrls(newPreviewUrls);
    setFiles(validFiles);
  };

  const resetFileInput = () => {
    if (fileInputRef.current) fileInputRef.current.value = "";
    previewUrls.forEach((url) => URL.revokeObjectURL(url));
    setPreviewUrls([]);
    setFiles([]);
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("auth_token");

    const formData = new FormData();
    formData.append("membership_id", choosed_membership?.id);
    formData.append("applicant_type", "service_provider");
    files.forEach((file) => {
      formData.append("attachments", file);
    });
    formData.append("agreed", true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}membership-request`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
            "Accept-Language": "ar",
          },
        }
      );

      if (res.status === 200) {
        router.push(
          `/${lang}/payment/success?source=${choosed_membership?.type}`
        );
      } else {
        router.push(
          `/${lang}/payment/failed?source=${choosed_membership?.type}`
        );
      }

      // optional: لو عايز تطبع البيانات حتى لو حصل redirect
      const data = await res.json();
      console.log("Response:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
      router.push(`/${lang}/error-page`);
    }
  };

  const handleRemoveImage = (index: number) => {
    URL.revokeObjectURL(previewUrls[index]);

    const updatedFiles = [...files];
    const updatedUrls = [...previewUrls];

    updatedFiles.splice(index, 1);
    updatedUrls.splice(index, 1);

    setFiles(updatedFiles);
    setPreviewUrls(updatedUrls);
  };

  const courseContent = [
    {
      title: "نوع العضوية :",
      desc: `${choosed_membership?.name} `,
    },
    {
      title: "المدة :",
      desc: `${
        choosed_membership?.discounted_price
          ? choosed_membership?.discounted_price
          : 0.0
      } ر.س`,
    },
    {
      title: "رسوم العضوية",
      desc: choosed_membership?.price,
    },
  ];

  return (
    <div dir={lang === "en" ? "ltr" : "rtl"}>
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-xl lg:text-3xl font-bold mb-2 text-[var(--main)]">
          نموذج طلب عضوية
        </h1>
      </div>

      {/* File Upload */}
      <div className="md:col-span-6 col-span-12 text-sm text-right bg-[#F6F6F6] p-6 rounded-xl mt-10">
        <label className="block lg:text-xl text-base font-bold mb-2 text-black">
          قم برفع الملفات المطلوبة
        </label>

        <div className="relative">
          <input
            id="logo"
            type="file"
            accept="image/jpeg,image/png"
            multiple // ✅ هنا
            ref={fileInputRef}
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />

          <div className="flex flex-col items-center border-4 border-dashed border-gray-300 rounded-md bg-gray-100 px-6 py-10 text-gray-500 mt-6 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12"
              />
            </svg>
            <p className="font-bold mt-[6px] mb-2 lg:text-base text-xs">
              {t("drag_or_click")}{" "}
              <span className="text-[var(--main)]">{t("click_to_upload")}</span>
            </p>
            <p className="font-semibold text-[#8D99AE] lg:text-sm text-[11px]">
              {t("file_hint")}
            </p>
          </div>
        </div>

        {previewUrls.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-4 relative">
            {previewUrls.map((url, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-0 right-0 text-lg text-red-700 w-5 h-5 flex items-center justify-center bg-white rounded-full cursor-pointer"
                >
                  x
                </button>
                <img
                  src={url}
                  alt={`Preview ${index}`}
                  className="w-24 h-24 object-cover rounded-md border"
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // تمنع الفورم من الإرسال التلقائي
          if (!document.getElementById("terms_checkbox")?.checked) {
            alert("يرجى الموافقة على الشروط والأحكام أولاً");
            return;
          }

          handleSubmit();

          router.push(`${auth_token ? `/${lang}/payment` : `/${lang}/login`}`);
        }}
      >
        <div className="lg:mb-8 mb-4 xl:text-xl text-[15px] mt-5 flex items-center gap-x-3">
          <input type="checkbox" id="terms_checkbox" required />

          <label htmlFor="terms_checkbox">
            أوافق على{" "}
            <Link
              href={`/${lang}/terms`}
              className="text-[var(--main)] underline"
            >
              الشروط والأحكام الخاصة بالجمعية
            </Link>{" "}
          </label>
        </div>

        {/* Course Contents */}
        <div className="mt-6">
          <div className="bg-[#F6F6F6] p-6 flex flex-col items-center gap-6 mt-6 mb-8">
            {courseContent.map((item, index) => (
              <div
                key={index}
                className="bg-[#DFDFDF] lg:w-2/3 w-full  gap-3 px-2 lg:px-4 py-3 lg:py-5 rounded-lg flex justify-between"
              >
                <div className="text-[12px] md:text-lg lg:text-xl font-bold">
                  {item.title}
                </div>
                <div className="text-[12px] md:text-lg lg:text-xl font-bold">
                  {item.desc}
                </div>
              </div>
            ))}
            <div className="flex flex-col items-center  text-center">
              <button
                type="submit"
                className="cursor-pointer hover:opacity-85 bg-gradient-to-r from-[#7ADEC2] to-[#61B8A0] text-white font-bold py-2 px-6 rounded-md text-base lg:text-2xl"
              >
                إرسال الطلب
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MembershipRequestPage;
