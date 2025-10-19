"use client";
import React, { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

const AdPopup = () => {
  const [ad, setAd] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const lang = useLocale();

  useEffect(() => {
    const adShown = sessionStorage.getItem("adShown");
    if (adShown) return;

    const fetchAd = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}ads-spaces`;
      try {
        const res = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Accept-Language": lang || "ar",
          },
          cache: "no-store",
        });
        const data = await res.json();

        // تحقق من وجود data.data
        if (Array.isArray(data.data) && data.data.length > 0) {
          // فلترة الإعلانات من نوع popup فقط
          const popupAds = data.data.filter(
            (item) => item.type === "popup" && item.status === true
          );

          if (popupAds.length > 0) {
            setAd(popupAds[0]); // أول إعلان فقط
            setIsOpen(true);
            sessionStorage.setItem("adShown", "true");
          }
        }
      } catch (error) {
        console.error("Error fetching ads:", error);
      }
    };

    fetchAd();
  }, [lang]);

  if (!ad) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-[#0000007f] flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white lg:p-9 p-2 rounded-lg shadow-lg relative max-w-5xl w-fit lg:mx-0 mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-1 right-2 text-gray-500 hover:text-gray-700 lg:text-4xl text-2xl cursor-pointer"
            >
              ×
            </button>
            <a
              href={ad?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block lg:mt-0 mt-6"
            >
              <img
                src={`${process.env.NEXT_PUBLIC_URL}${ad?.image}`}
                alt="Ad"
                width={300}
                height={200}
                className="bg-white w-full h-auto object-contain max-h-[70vh] rounded-lg p-8 shadow-xl"
              />
            </a>

            {/* <p className="lg:text-base text-sm text-gray-600 mt-4 text-center">
              عدد الأيام المتبقية: {ad.days_count}
            </p> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdPopup;
