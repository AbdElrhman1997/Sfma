import Image from "next/image";
import React, { useState } from "react";

const ContentCard = ({ subscription, lang, id }) => {
  return (
    <div
      className="flex items-center justify-between bg-[#F6F6F6] rounded-xl shadow-md overflow-hidden w-full max-w-xl mx-auto min-h-[80px]"
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <div className="w-20 h-full bg-[var(--second_main)] flex items-center justify-center">
        <img
          src={`https://sffma.fmexcon.com/storage/${subscription?.icon}`}
          alt="icon"
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
      <div className="flex-1 px-4 py-4 text-sm text-gray-800 font-medium leading-6">
        {subscription?.content}
      </div>
    </div>
  );
};

export default ContentCard;
