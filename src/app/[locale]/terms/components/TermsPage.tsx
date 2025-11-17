"use client";
import { useLocale } from "next-intl";
import React, { useEffect, useState } from "react";

const TermsPage = () => {
  const [content, setContent] = useState("");
  const lang = useLocale();

  useEffect(() => {
    const fetchContent = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}terms`;

      try {
        const res = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Accept-Language": lang || "ar",
          },
          cache: "no-store",
        });
        const data = await res.json();
        // نفترض ان الـ API بيرجع { data: "<p>HTML content</p>" }
        setContent(data?.data || "");
      } catch (error) {
        console.error("Error fetching terms:", error);
      }
    };

    fetchContent();
  }, [lang]);

  return (
    <div className="container mx-auto p-6">
      <div
        className="terms-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default TermsPage;
