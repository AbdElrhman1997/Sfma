"use client";
import { useLocale } from "next-intl";
import React, { useEffect, useState } from "react";

const TermsPage = () => {
  const [content, setContent] = useState([]);
  const lang = useLocale();

  useEffect(() => {
    const fetchContent = async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}pages`;

      try {
        const res = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Accept-Language": lang || "ar",
          },
          cache: "no-store",
        });
        const data = await res.json();
        setContent(data?.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchContent();
  }, [lang]);

  return <div>TermsPage</div>;
};

export default TermsPage;
