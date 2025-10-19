"use client";
import React, { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { FaClock, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Link from "next/link";

const UserMembershipPage = () => {
  const locale = useLocale();
  const t = useTranslations("");
  const [membership, setMembership] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMembership = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("auth_token");
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}user-memberships`;
        const res = await fetch(apiUrl, {
          headers: {
            "Accept-Language": locale || "ar",
            Authorization: `Bearer ${token}`,
          },
          cache: "no-store",
        });
        const data = await res.json();
        setMembership(data?.data || null);
      } catch (err) {
        console.error("Error fetching membership:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembership();
  }, [locale]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-gray-500 text-lg animate-pulse">
          {t("common.loading") || "جاري التحميل..."}
        </p>
      </div>
    );
  }

  if (!membership) {
    return (
      <div className="text-center py-16 px-4">
        <h2 className="text-xl font-bold text-gray-700 mb-3">
          {t("Profile.no_membership") || "لا توجد عضوية حالياً"}
        </h2>
        <p className="text-gray-500 mb-6">
          {t("Profile.no_membership_desc") ||
            "يمكنك التقديم على عضوية جديدة للاستفادة من خدماتنا."}
        </p>
        <Link
          href={`/${locale}/memberships`}
          className="bg-[var(--main)] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-85 transition"
        >
          {t("Profile.browse_memberships") || "استعرض العضويات"}
        </Link>
      </div>
    );
  }

  const status = membership?.status;

  return (
    <div
      dir={locale === "en" ? "ltr" : "rtl"}
      className="container mx-auto my-10 bg-white rounded-xl shadow-lg overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between bg-[#21B6E4] text-white py-5 px-6 relative">
        <h1 className="text-xl md:text-2xl font-bold">
          {membership?.name || "عضويتك الحالية"}
        </h1>
        <span className="text-sm font-semibold bg-white text-[#21B6E4] px-4 py-1 rounded-full shadow">
          {membership?.price
            ? `${membership.price} ${t("common.currency")}`
            : ""}
        </span>
      </div>
      {/* Icon */}
      <div className="flex justify-center mt-4">
        <div className="bg-white p-2 rounded-full shadow-lg">
          <img
            src={`https://sffma.fmexcon.com/storage/${membership?.icon}`}
            alt="Membership Icon"
            width={120}
            height={120}
            className="rounded-full object-contain w-[120px] h-[120px]"
          />
        </div>
      </div>
      {/* Status */}
      <div className="flex flex-col items-center justify-center mt-6 mb-8">
        {status === "pending" && (
          <>
            <FaClock className="text-[#21B6E4] text-4xl mb-2 animate-pulse" />
            <p className="font-bold text-gray-700">
              {t("Profile.pending_status") || "طلبك قيد المراجعة"}
            </p>
            <p className="text-gray-500 text-sm mt-1 text-center max-w-md">
              {t("Profile.pending_desc") ||
                "سيتم إشعارك فور الانتهاء من مراجعة طلب العضوية الخاص بك."}
            </p>
          </>
        )}

        {status === "approved" && (
          <>
            <FaCheckCircle className="text-[#16A34A] text-4xl mb-2" />
            <p className="font-bold text-gray-700">
              {t("Profile.approved_status") || "تمت الموافقة على عضويتك"}
            </p>
            <p className="text-gray-500 text-sm mt-1 text-center max-w-md">
              {t("Profile.approved_desc") ||
                "يمكنك الآن الاستفادة من جميع المزايا."}
            </p>
          </>
        )}

        {status === "rejected" && (
          <>
            <FaTimesCircle className="text-[#DC2626] text-4xl mb-2" />
            <p className="font-bold text-gray-700">
              {t("Profile.rejected_status") || "تم رفض طلب العضوية"}
            </p>
            <p className="text-gray-500 text-sm mt-1 text-center max-w-md">
              {membership?.reason ||
                t("Profile.rejected_desc") ||
                "يمكنك التواصل معنا لمعرفة التفاصيل أو إعادة التقديم."}
            </p>
          </>
        )}
      </div>
      {/* Membership Details */}
      {membership?.membership_details?.length > 0 && (
        <div className="px-6 pb-10">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            {t("Profile.membership_features") || "مميزات العضوية"}
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {membership.membership_details.map((item: any) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMembershipPage;
