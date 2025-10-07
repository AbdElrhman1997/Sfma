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
  const t = useTranslations("MembershipRequest");

  const [selectedValue, setSelectedValue] = useState("option1");
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const auth_token: any = localStorage.getItem("auth_token");
  const router = useRouter();
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [files, setFiles]: any = useState([]);
  const [selcetedRepresent, setSelcetedRepresent] =
    useState("service_provider");

  const choosed_membership: any = JSON.parse(
    localStorage.getItem("choosed_membership")
  );

  const payment_data = {
    type: "membership",
    relative_id: choosed_membership?.id,
    payment_method: "bank_transfer",
    attendance_type: selectedValue,
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);

    const validFiles = selectedFiles.filter((file) =>
      ACCEPTED_TYPES.includes(file.type)
    );

    if (validFiles.length === 0) {
      toast.error(t("file_error"), { position: "top-right" });
      resetFileInput();
      return;
    }

    const newPreviewUrls: string[] = [];
    validFiles.forEach((file) => {
      const tempUrl = URL.createObjectURL(file);
      newPreviewUrls.push(tempUrl);
    });

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

    if (!files || files.length === 0) {
      toast.error(
        lang === "ar"
          ? "من فضلك قم بإرفاق ملف قبل المتابعة."
          : "Please attach a file before proceeding.",
        { position: "top-right" }
      );
      return;
    }

    const formData: any = new FormData();
    formData.append("membership_id", choosed_membership?.id);
    formData.append("applicant_type", selcetedRepresent);
    formData.append("agreed", true);
    files.forEach((file, index) => {
      formData.append(`attachments[${index}]`, file);
    });

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}membership-request`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
            "Accept-Language": lang,
            Accept: "application/json",
          },
        }
      );

      if (res.status === 200) {
        localStorage.setItem("payment_data", JSON.stringify(payment_data));
        router.push(`${auth_token ? `/${lang}/payment` : `/${lang}/login`}`);
      } else {
        router.push(
          `/${lang}/membership-request/failed?source=${choosed_membership?.type}`
        );
      }
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
    { title: t("membership_type"), desc: choosed_membership?.name },
    { title: t("duration"), desc: t("one_year") },
    { title: t("membership_fee"), desc: choosed_membership?.price },
  ];

  const agency_represent = [
    {
      ref: "service_provider",
      title: t("service_provider"),
      img_src: "membership-request_icon_1.png",
    },
    {
      ref: "government",
      title: t("government"),
      img_src: "membership-request_icon_2.png",
    },
    {
      ref: "supplier",
      title: t("supplier"),
      img_src: "membership-request_icon_3.png",
    },
    {
      ref: "other",
      title: t("other_specify"),
      img_src: "membership-request_icon_4.png",
    },
  ];

  return (
    <div dir={lang === "en" ? "ltr" : "rtl"}>
      <div className="text-center">
        <h1 className="text-xl lg:text-3xl font-bold mb-2 text-[var(--main)]">
          {t("form_title")}
        </h1>
      </div>

      <div className="md:col-span-6 col-span-12 text-sm text-right bg-[#F6F6F6] p-6 rounded-xl mt-10">
        <div className="relative">
          <div className="flex items-center gap-x-4">
            <div className="lg:w-10 w-7">
              <Image
                src={`/images/common/upload-image.png`}
                alt="upload"
                height={50}
                width={50}
                className="w-full h-auto"
              />
            </div>
            <p className="font-bold lg:text-xl text-base">
              {t("upload_title")}
            </p>
          </div>
          <input
            id="logo"
            type="file"
            accept="image/jpeg,image/png"
            multiple
            ref={fileInputRef}
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            required
          />

          <div className="flex flex-col items-center border-4 border-dashed border-gray-300 rounded-md bg-gray-100 px-6 py-10 text-gray-500 mt-4 text-center">
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
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="bg-[#F6F6F6] p-6 mt-6">
          <div className="flex items-center gap-x-4">
            <div className="lg:w-10 w-7">
              <Image
                src={`/images/common/fa-solid_users.png`}
                alt="represent"
                height={50}
                width={50}
                className="w-full h-auto"
              />
            </div>
            <p className="font-bold lg:text-xl text-base">
              <span>{t("you_represent")} :</span>{" "}
              <span className="text-[#8D99AE]">{t("please_select")}</span>
            </p>
          </div>

          <div className="flex items-center lg:flex-nowrap flex-wrap lg:gap-x-6  gap-y-6 mt-5">
            {agency_represent.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelcetedRepresent(item.ref)}
                className={`${
                  item.ref === selcetedRepresent
                    ? "bg-[#1DAEE521] border-2 border-[var(--main)]"
                    : "bg-[#EDEDED]"
                } cursor-pointer lg:min-h-40 lg:mx-0 mx-auto lg:w-2/3 w-[140px] lg:h-auto h-[120px] gap-3 p-3 lg:p-5 rounded-lg text-center flex flex-col justify-center items-center`}
              >
                <div
                  className={`lg:h-10 h-5 mb-2 mx-auto ${
                    index == 3
                      ? "lg:w-8 w-6"
                      : index == 0
                      ? "lg:w-9 w-7"
                      : index == 1
                      ? "lg:w-10 w-7"
                      : index == 2
                      ? "lg:w-[52px] w-9"
                      : ""
                  }`}
                >
                  <Image
                    src={`/images/common/${item.img_src}`}
                    alt="membership-request_icon"
                    height={50}
                    width={50}
                    className={`w-full h-auto`}
                  />
                </div>
                <div className="text-[12px] md:text-lg lg:text-xl font-semibold">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:mb-8 mb-4 xl:text-xl text-[15px] mt-5 flex items-center gap-x-3">
          <input
            type="checkbox"
            id="terms_checkbox"
            required
            className="w-full"
          />
          <label htmlFor="terms_checkbox">
            {t("agree")}{" "}
            <Link
              href={`/${lang}/terms`}
              className="text-[var(--main)] underline"
            >
              {t("terms_and_conditions")}
            </Link>
          </label>
        </div>

        <div className="mt-6 py-6 bg-[#F6F6F6]">
          <div className="flex items-center gap-x-4 px-6">
            <div className="w-9">
              <Image
                src={`/images/common/link_icon.png`}
                alt="membership-request_icon"
                height={50}
                width={50}
                className="w-full h-auto"
              />
            </div>
            <p className="font-bold lg:text-xl text-base">
              {t("membership_fee_title")}
            </p>
          </div>

          <div className="p-6 flex flex-col items-center gap-6">
            {courseContent.map((item, index) => (
              <div
                key={index}
                className="bg-[#DFDFDF] w-full gap-3 px-2 lg:px-4 py-3 lg:py-5 rounded-lg flex justify-between"
              >
                <div className="text-[12px] md:text-lg lg:text-xl font-bold">
                  {item.title}
                </div>
                <div className="text-[12px] md:text-lg lg:text-xl font-bold">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center text-center">
            <button
              type="submit"
              className="cursor-pointer hover:opacity-85 bg-gradient-to-r from-[#7ADEC2] to-[#61B8A0] text-white font-bold py-2 px-6 rounded-md text-base lg:text-2xl"
            >
              {t("submit_request")}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MembershipRequestPage;
