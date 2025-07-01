"use client";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { formatDate } from "@/utils/formatDate";

const CertificatesTab = () => {
  const t = useTranslations("CertificatesTab");
  const lang = useLocale();
  const [certificates, setCertificates] = useState([]);
  const currentDate = new Date("2025-06-29T14:27:00Z"); // Current date and time

  useEffect(() => {
    const fetchCertificates = async () => {
      const token = localStorage.getItem("auth_token");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}certificates/user-certificates`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Accept-Language": lang || "ar",
          },
        }
      );

      const data = await res.json();
      setCertificates(data?.data || []);
    };

    fetchCertificates();
  }, [lang]);

  const currentCertificates = certificates.filter((cert) => {
    const issueDate = new Date(cert.issue_date);
    const expiryDate = new Date(cert.expiry_date);
    return issueDate <= currentDate && expiryDate >= currentDate;
  });

  const completedCertificates = certificates.filter((cert) => {
    const issueDate = new Date(cert.issue_date);
    const expiryDate = new Date(cert.expiry_date || "9999-12-31"); // Default to far future if no expiry
    return issueDate > currentDate || expiryDate < currentDate;
  });

  const CertificateCard = ({ certificate }) => {
    const t = useTranslations("CertificatesTab");
    const lang = useLocale();
    const isAchievement = certificate.certificate_type === "achievement";
    const issueDate = formatDate(certificate.issue_date);

    const handlePreview = () => {
      window.open(certificate.file_url, "_blank");
    };

    return (
      <div className="max-w-sm bg-[#F6F6F6] rounded-lg shadow-md p-4 flex flex-col gap-3 border-r-4 border-[var(--second_main)] py-6 font-semibold">
        <div className="flex items-center justify-between gap-x-5">
          <div className="bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white px-3 py-[6px] rounded-full text-[12px]">
            {isAchievement
              ? t("achievementCertificate")
              : t("attendanceCertificate")}
          </div>
          <div className="font-semibold">
            {t("issued")} : {issueDate}
          </div>
        </div>

        <h2 className="text-lg font-bold text-[#555555] text-right mt-2">
          {certificate.source.data.title}
        </h2>

        <div className="flex flex-col gap-1 text-right">
          <p>{certificate.certificate.description}</p>
        </div>

        <div className="flex justify-center items-center gap-3">
          <button
            onClick={handlePreview}
            className="bg-gradient-to-r from-[#7ADEC2] to-[#61B8A0] w-1/2 mt-2 flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer"
          >
            <div className="w-3 md:w-5">
              <Image
                src="/images/logos/preview_icon.png"
                alt="session icon"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <p className="font-bold text-[13px] md:text-base">
              {t("previewCertificate")}
            </p>
          </button>
          <a
            href={certificate.file_url}
            download={certificate.file} // e.g., "gzB9xdnaSpN7cOl8e4SjeUKnV6PFkz5Y9tWII4dr.png"
            className="bg-gradient-to-r from-[#888888] to-[#555555] w-1/2 mt-2 flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer"
            target="_blank"
          >
            <div className="w-3 md:w-5">
              <Image
                src="/images/logos/download_icon.png"
                alt="session icon"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <p className="font-bold text-[13px] md:text-base">
              {t("download")}
            </p>
          </a>
        </div>
      </div>
    );
  };
  return (
    <section dir={lang === "en" ? "ltr" : "rtl"}>
      {currentCertificates.length > 0 ? (
        <div className="mb-10">
          <div className="flex items-center gap-x-5">
            <p className="text-lg md:text-xl lg:text-2xl font-bold">
              {t("currentCertificates")}
            </p>
            <div className="bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white px-3 py-[6px] rounded-full text-[14px]">
              {currentCertificates.length}{" "}
              {t("currentCertificates").includes("Certificates")
                ? "Certificates"
                : "شهادة"}
            </div>
          </div>
          <div className="mt-6 grid lg:grid-cols-3 gap-6">
            {currentCertificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        </div>
      ) : null}

      {completedCertificates.length > 0 ? (
        <div className="mb-16">
          <div className="flex items-center gap-x-5">
            <p className="text-lg md:text-xl lg:text-2xl font-bold">
              {t("completedCertificates")}
            </p>
            <div className="bg-gradient-to-r from-[#888888] to-[#555555] w-fit text-white px-3 py-[6px] rounded-full text-[14px]">
              {completedCertificates.length}{" "}
              {t("completedCertificates").includes("Certificates")
                ? "Certificates"
                : "شهادة"}
            </div>
          </div>
          <div className="mt-6 grid lg:grid-cols-3 gap-6">
            {completedCertificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default CertificatesTab;
