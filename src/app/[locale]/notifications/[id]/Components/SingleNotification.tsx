"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const SingleNotification = () => {
  const lang = useLocale();
  const params = useParams();
  const [notification, setNotification] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("auth_token");
        const id = params.id; // Get the ID from URL params
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}notifications/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Accept-Language": lang || "ar",
            },
            cache: "no-store",
          }
        );
        const data = await res.json();
        if (data.success && data.data) {
          setNotification(data.data); // Assuming the API returns a single notification object
        }
      } catch (error) {
        console.error("Error fetching notification:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchNotification();
    }
  }, [lang, params.id]);

  if (loading)
    return (
      <div className="text-center lg:text-4xl text-xl pt-32 font-semibold">
        Loading...
      </div>
    ); // Simple loading state
  if (!notification)
    return (
      <div className="text-center lg:text-4xl text-xl pt-32 font-semibold">
        Notification not found
      </div>
    ); // Handle case where notification is not fetched

  return (
    <section className="container mx-auto" dir={lang === "en" ? "ltr" : "rtl"}>
      <div
        className={`block bg-[#F6F6F6] shadow rounded-lg px-6 pb-4 mt-16 pt-6 lg:w-2/3 mx-auto`}
      >
        <Link
          className="flex items-center gap-1 text-[var(--second_main)] font-bold text-lg hover:opacity-80 cursor-pointer mb-3"
          href={`/${lang}/notifications`}
        >
          <GoArrowRight className="text-xl" />
          <p className="">
            {lang === "ar" ? "عودة للإشعارات" : "Back to Notifications"}
          </p>
        </Link>
        <h3 className={`lg:text-2xl text-lg translate-y-1 font-bold`}>
          {lang === "ar" ? notification.title_ar : notification.title_en}
        </h3>
        <div className="flex items-center justify-start gap-3">
          <div className="w-5">
            <Image
              src="/images/common/time.png"
              alt="Time Icon"
              width={50}
              height={50}
              className="w-full h-auto rounded-lg translate-y-1.5"
            />
          </div>
          <p className="lg:text-lg text-base mt-2">
            {new Date(notification.created_at).toLocaleString(
              lang === "ar" ? "ar-EG" : "en-US",
              {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }
            )}
          </p>
        </div>
        <p className="lg:text-lg text-[14px] mt-2 text-justify">
          {lang === "ar" ? notification.content_ar : notification.content_en}
        </p>
      </div>
      <Link
        href={`/${lang}/membership`} // Adjusted to a generic membership page; modify as needed
        className="cursor-pointer block mx-auto hover:opacity-85 mt-8 text-center bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white px-3 py-2 rounded-lg font-semibold"
      >
        {lang === "ar" ? "عرض عضويتي" : "View Membership"}
      </Link>
    </section>
  );
};

export default SingleNotification;
