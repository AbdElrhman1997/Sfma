"use client";

import React, { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaHourglassHalf,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const UserMembershipPage = () => {
  const locale = useLocale();
  const t = useTranslations("Profile");
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
          {t("loading") || "جاري التحميل..."}
        </p>
      </div>
    );
  }

  if (!membership) {
    return (
      <div className="text-center py-16 px-4">
        <h2 className="text-xl font-bold text-gray-700 mb-3">
          {t("no_membership") || "لا توجد عضوية حالياً"}
        </h2>
        <p className="text-gray-500 mb-6">
          {t("no_membership_desc") ||
            "يمكنك التقديم على عضوية جديدة للاستفادة من خدماتنا."}
        </p>
        <Link
          href={`/${locale}/individuals`}
          className="bg-[var(--main)] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-85 transition"
        >
          {t("browse_memberships") || "استعرض العضويات"}
        </Link>
      </div>
    );
  }

  const userMembership = membership?.user_membership;
  const orderInfo = membership?.order_info;
  const details = membership?.details || [];
  const status = membership?.status;

  const payment_data = {
    type: "membership",
    relative_id: membership?.id,
    payment_method: "bank_transfer",
  };

  // ✅ الحالة الفعّالة (active_membership)
  if (status === "active_membership") {
    return (
      <div
        dir={locale === "en" ? "ltr" : "rtl"}
        className="my-10 bg-white rounded-xl shadow-lg overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-[#21B6E4] text-white py-5 px-6">
          <h1 className="text-xl md:text-2xl font-bold">
            {membership?.name || t("active_membership_title")}
          </h1>
          <span className="text-sm font-semibold bg-white text-[#21B6E4] px-4 py-1 rounded-full shadow">
            {membership?.price ? `${membership.price} ${t("currency")}` : ""}
          </span>
        </div>

        <div className="flex flex-col items-center mt-6">
          <div className="w-28 md:w-36">
            <Image
              src={"/images/about_page/استشاري 1.png"}
              alt="membership icon"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <p className="font-bold text-base md:text-2xl mt-2">
            {t("membership_type") || "نوع العضوية"}:{" "}
            {membership?.name || "اسم العضوية"}
          </p>
          <div className="bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] text-[14px] md:text-base mt-4 w-fit text-white px-4 py-2 rounded-full">
            {t("membership_status") || "حالة العضوية"}: {t("active") || "سارية"}
          </div>
        </div>

        {/* معلومات العضوية */}
        <div
          className="container mx-auto mt-12"
          dir={locale === "en" ? "ltr" : "rtl"}
        >
          <div className="border-[2.4px] border-[#61B8A0] py-6 px-3 rounded-lg relative">
            <div className="bg-[#61B8A0] p-3 rounded-lg text-white w-fit absolute top-0 right-0 -translate-y-1/2 -translate-x-[40px] font-bold text-[13px] md:text-[15px]">
              {t("membership_info") || "معلومات العضوية"}
            </div>
            <div className="grid grid-cols-12 gap-x-5 gap-y-5 p-5 pb-2">
              {[
                { label: t("name") || "الاسم", value: membership?.name },
                {
                  label: t("id_number") || "رقم الهوية",
                  value: membership?.id_number,
                },
                {
                  label: t("membership_no") || "رقم العضوية",
                  value: userMembership?.serial_number,
                },
                {
                  label: t("start_date") || "تاريخ الإصدار",
                  value: userMembership?.start_date
                    ? new Date(userMembership.start_date).toLocaleDateString(
                        locale === "en" ? "en-US" : "ar-EG",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )
                    : "-",
                },
                {
                  label: t("end_date") || "تاريخ الانتهاء",
                  value: userMembership?.end_date
                    ? new Date(userMembership.end_date).toLocaleDateString(
                        locale === "en" ? "en-US" : "ar-EG",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )
                    : "-",
                },
              ].map((field, i) => (
                <div key={i} className="md:col-span-4 col-span-12">
                  <label className="block text-sm font-medium">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    disabled
                    value={field.value || "-"}
                    className="mt-1 text-sm block w-full px-3 py-2 h-[45px] border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* تحميل البطاقة */}
        <div className="flex justify-center mx-auto mb-2 mt-6">
          {membership?.download_url && (
            <a
              href={membership?.download_url}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 text-lg font-medium flex justify-center items-center space-x-3 text-white bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] rounded-md hover:opacity-85 transition"
            >
              <div className="w-3 md:w-5">
                <Image
                  src={"/images/logos/download_icon.png"}
                  alt="download"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p>{t("download_card") || "تحميل بطاقة العضوية الخاصة بك"}</p>
            </a>
          )}
        </div>

        {/* مميزات العضوية */}
        {details.length > 0 && (
          <div className="bg-[#F6F6F6] p-6 grid lg:grid-cols-2 gap-6 mt-6">
            {details.map((item: any, index: number) => (
              <div
                key={index}
                className="bg-[#DFDFDF] gap-3 p-3 rounded-lg flex items-center min-h-16"
              >
                <div className="min-w-7 max-w-7">
                  <Image
                    src={"/images/logos/true_icon.png"}
                    alt="icon"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <div className="text-[12px] md:text-[14px] ">
                  <span>{item.content}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // باقي الحالات (pending / approved / rejected)
  return (
    <div
      dir={locale === "en" ? "ltr" : "rtl"}
      className="my-10 bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="flex items-center justify-between bg-[#21B6E4] text-white py-5 px-6 relative">
        <h1 className="text-xl md:text-2xl font-bold">
          {membership?.name || t("current_membership")}
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center mt-6 mb-8">
        {status === "pending" && (
          <>
            <FaClock className="text-[#21B6E4] text-4xl mb-2 animate-pulse" />
            <p className="font-bold text-gray-700">
              {t("pending_status") || "طلبك قيد المراجعة"}
            </p>
            <p className="text-gray-500 text-sm mt-1 text-center max-w-md">
              {t("pending_desc") ||
                "سيتم إشعارك فور الانتهاء من مراجعة طلب العضوية الخاص بك."}
            </p>
          </>
        )}

        {status === "approved" && (
          <div className="flex flex-col items-center text-center">
            <FaCheckCircle className="text-[#16A34A] text-4xl mb-2" />
            <p className="font-bold text-gray-700">
              {t("approved_status") || "تمت الموافقة على طلب عضويتك"}
            </p>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              {t("approved_desc") ||
                "تم قبول طلبك بنجاح. يُرجى إكمال عملية الدفع لتفعيل عضويتك."}
            </p>
            <Link
              href={`/${locale}/payment`}
              onClick={() =>
                localStorage.setItem(
                  "payment_data",
                  JSON.stringify({
                    type: "membership",
                    relative_id: membership?.id,
                    payment_method: "bank_transfer",
                  })
                )
              }
              className="mt-4 bg-[var(--main)] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-85 transition"
            >
              {t("go_to_payment") || "الانتقال إلى الدفع"}
            </Link>
          </div>
        )}

        {status === "approved_and_not_paid" && (
          <div className="flex flex-col items-center text-center">
            <FaHourglassHalf className="text-[#21B6E4] text-4xl mb-2 animate-pulse" />
            <p className="font-bold text-gray-700">
              {t("approved_not_paid_status") ||
                "تم استلام التحويل البنكي وجارٍ المراجعة"}
            </p>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              {t("approved_not_paid_desc") ||
                "تم رفع صورة التحويل بنجاح، وسيتم تفعيل عضويتك بعد التأكد من عملية الدفع."}
            </p>
          </div>
        )}

        {status === "rejected" && (
          <>
            <FaTimesCircle className="text-[#DC2626] text-4xl mb-2" />
            <p className="font-bold text-gray-700">
              {t("rejected_status") || "تم رفض طلب العضوية"}
            </p>
            <p className="text-gray-500 text-sm mt-1 text-center max-w-md">
              {membership?.reason ||
                t("rejected_desc") ||
                "يمكنك التواصل معنا لمعرفة التفاصيل أو إعادة التقديم."}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default UserMembershipPage;
