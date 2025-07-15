"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

const Notifications = () => {
  const lang = useLocale();
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const t = useTranslations();

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("auth_token");
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}notifications`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Accept-Language": lang || "ar",
            },
            cache: "no-store",
          }
        );
        const data = await res.json();
        if (data.success) {
          setNotifications(data.data || []);
        } else {
          setNotifications([]);
        }
      } catch (error) {
        console.error("Error fetching notifications:", error);
        setNotifications([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [lang]);

  const getRelativeTime = (createdAt) => {
    const now: any = new Date();
    const created: any = new Date(createdAt);
    const diffMs = now - created;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffHours < 24) {
      return lang === "ar" ? `منذ ${diffHours} ساعة` : `${diffHours} hours ago`;
    } else if (diffDays < 30) {
      const date = created.toLocaleDateString(
        lang === "ar" ? "ar-EG" : "en-US",
        {
          day: "numeric",
          month: "short",
        }
      );
      const time = created.toLocaleTimeString(
        lang === "ar" ? "ar-EG" : "en-US",
        {
          hour: "2-digit",
          minute: "2-digit",
        }
      );
      return lang === "ar" ? `${date}، ${time}` : `${date} ${time}`;
    }
    return created.toLocaleDateString(lang === "ar" ? "ar-EG" : "en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const markAsSeen = async (notificationId) => {
    try {
      const token = localStorage.getItem("auth_token");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}notifications/${notificationId}/mark-as-seen`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Accept-Language": lang || "ar",
          },
        }
      );
      if (res.ok) {
        setNotifications((prev) =>
          prev.map((n) =>
            n.id === notificationId ? { ...n, is_seen: true } : n
          )
        );
      }
    } catch (error) {
      console.error("Error marking notification as seen:", error);
    }
  };

  const markAllAsSeen = async () => {
    try {
      const token = localStorage.getItem("auth_token");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}notifications/mark-all-as-seen`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Accept-Language": lang || "ar",
          },
        }
      );
      if (res.ok) {
        setNotifications((prev) => prev.map((n) => ({ ...n, is_seen: true })));
      }
    } catch (error) {
      console.error("Error marking all notifications as seen:", error);
    }
  };

  const NotificationCard = ({ notification }) => (
    <Link
      href={`/${lang}/notifications/${notification.id}`}
      className={`block shadow rounded-lg px-6 pb-4 mt-6 hover:opacity-85 cursor-pointer ${
        notification.is_seen
          ? "bg-[#FBFBFB] border-[1px] border-[#E4E4E4]"
          : "bg-[#D3DFE9]"
      }`}
    >
      <div className="flex flex-wrap justify-between items-center">
        <h3
          className={`lg:text-xl text-base translate-y-1 ${
            notification.is_seen ? "font-semibold" : "font-bold"
          }`}
        >
          {lang === "ar" ? notification.title_ar : notification.title_en}
        </h3>
        <div className="flex items-center gap-4">
          {!notification.is_seen && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                markAsSeen(notification.id);
              }}
              className="lg:text-base text-[13px] mt-4 text-center w-fit px-3 py-2 rounded-full font-semibold bg-[#61B8A06B] text-[#1E614E] hover:bg-[#1E614E] hover:text-white transition-colors"
            >
              {lang === "ar" ? "علامة كمقروء" : "Mark as Read"}
            </button>
          )}
          <div
            className={`lg:text-base text-[13px] mt-4 text-center w-fit px-3 py-2 rounded-full font-semibold ${
              notification.is_seen
                ? "bg-[#8D99AE] text-white"
                : "bg-[#61B8A06B] text-[#1E614E]"
            }`}
          >
            {getRelativeTime(notification.created_at)}
          </div>
        </div>
      </div>
      <p className="lg:text-lg text-[14px] mt-2 text-justify truncate">
        {lang === "ar" ? notification.content_ar : notification.content_en}
      </p>
    </Link>
  );

  return (
    <section
      className="container mx-auto lg:mb-24 mb-14"
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <h1 className="lg:text-4xl text-2xl text-[#555555] font-bold mt-12">
        {t("common.notifications")}
      </h1>

      <div className="flex flex-wrap justify-between items-center">
        <h3 className="lg:text-lg text-base text-[#555555] lg:mt-0 mt-4">
          {t("common.read_about_acount")}
        </h3>
        <div className="flex items-center gap-4">
          <button
            onClick={markAllAsSeen}
            className="cursor-pointer hover:opacity-85 mt-4 text-center bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white px-3 py-2 rounded-lg font-semibold"
          >
            {t("common.selcet_all")}
          </button>
        </div>
      </div>

      <div className="mt-10">
        {/* غير مقروء */}
        {notifications
          .filter((notification) => !notification.is_seen)
          .map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
            />
          ))}
      </div>

      <div className="lg:mt-20 mt-12">
        {/* مقروء */}
        {notifications
          .filter((notification) => notification.is_seen)
          .map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
            />
          ))}
      </div>
    </section>
  );
};

export default Notifications;
