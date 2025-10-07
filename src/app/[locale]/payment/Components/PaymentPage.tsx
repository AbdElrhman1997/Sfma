"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation"; // أو "next/router" لو نسخة أقدم

const ACCEPTED_TYPES = ["image/jpeg", "image/png"];

const PaymentPage = () => {
  const lang = useLocale();
  // get payment data from course or workshop
  const payment_data: any = JSON.parse(localStorage.getItem("payment_data"));
  const t = useTranslations("Payment");
  const [selectedValue, setSelectedValue] = useState("option1");
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) return;

    if (!ACCEPTED_TYPES.includes(selectedFile.type)) {
      toast.error("This extension is not supported", { position: "top-right" });
      resetFileInput();
      return;
    }

    const tempUrl = URL.createObjectURL(selectedFile);
    const image = new window.Image();
    image.src = tempUrl;

    image.onload = () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      setPreviewUrl(tempUrl);
      setFile(selectedFile);
    };
  };

  const resetFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    setFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("auth_token");

    const formData = new FormData();
    if (payment_data && typeof payment_data === "object") {
      Object.entries(payment_data).forEach(([key, value]: any) => {
        formData.append(key, value);
      });
    }
    formData.append("transfer_doc", file);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}courses/order`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
            "Accept-Language": lang || "ar",
          },
        }
      );

      if (res.status === 200) {
        router.push(`/${lang}/payment/success?source=${payment_data?.type}`);
      } else {
        router.push(`/${lang}/payment/failed?source=${payment_data?.type}`);
      }

      const data = await res.json();
    } catch (error) {
      console.error("Error submitting form:", error);
      router.push(`/${lang}/error-page`);
    }
  };

  return (
    <div dir={lang === "en" ? "ltr" : "rtl"}>
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-xl lg:text-3xl font-bold mb-2 text-[var(--main)]">
          {t("title")}
        </h1>
        <h3 className="text-[#737373] lg:text-xl text-base mb-8">
          {t("subtitle")}
        </h3>
      </div>

      {/* Payment Option */}
      <div className="shadow-lg p-7 bg-[#F6F6F6] w-full mx-auto lg:max-w-5/12">
        <div className="flex justify-between items-center">
          <label className="flex items-start gap-x-3 lg:gap-x-5">
            <input
              type="radio"
              value="option2"
              checked={true}
              onChange={handleChange}
              className="accent-black w-5 lg:w-6 h-5 lg:h-6"
            />
            <p className="text-base lg:text-xl font-bold -translate-y-1">
              {t("bank_transfer")}
            </p>
          </label>
          <div className="w-14">
            <Image
              src="/images/common/bank_icon.png"
              alt="bank_image"
              className="w-full h-auto object-cover"
              width={100}
              height={100}
            />
          </div>
        </div>

        <p className="text-[#555555] mt-4 font-medium text-sm lg:text-lg">
          {t("direct_bank_transfer")}
        </p>

        <div className="flex items-center gap-3">
          <div className="w-4">
            <Image
              src="/images/common/icon.png"
              alt="icon"
              className="w-full h-auto object-cover"
              width={100}
              height={100}
            />
          </div>
          <p className="text-[#8D99AE] lg:mt-2 mt-1 lg:text-base text-xs mb-1 lg:mb-2">
            {t("receipt_required")}
          </p>
        </div>
      </div>

      {/* File Upload */}
      <div className="md:col-span-6 col-span-12 text-sm text-right bg-[#F6F6F6] p-6 rounded-xl mt-10">
        <label className="block lg:text-xl text-base font-bold mb-2 text-black">
          {t("upload_receipt")}
        </label>

        <div className="relative">
          <input
            id="logo"
            type="file"
            accept="image/jpeg,image/png"
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

        {previewUrl && (
          <div className="mt-4 relative">
            <button
              onClick={resetFileInput}
              className="absolute top-0 right-0 text-lg text-red-700 w-5 h-5 flex items-center justify-center bg-white rounded-full cursor-pointer"
            >
              x
            </button>
            <img
              src={previewUrl}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-md border"
            />
          </div>
        )}
      </div>
      <div
        className="block mt-6 mx-auto cursor-pointer hover:opacity-85 bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white lg:px-12 px-6 lg:py-2 py-[6px] rounded-lg font-semibold lg:text-base text-[12px]"
        onClick={handleSubmit}
      >
        {t("complete_payment")}
      </div>
    </div>
  );
};

export default PaymentPage;
