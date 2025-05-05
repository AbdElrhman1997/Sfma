import Image from "next/image";
import React from "react";

const ContentCard = ({ translation, lang, subscription }) => {
  return (
    <div className="relative flex flex-col items-center mx-auto hover:scale-105 transition duration-300">
      <div className="absolute -top-8 flex items-center justify-center w-16 h-16 bg-[#1DAEE5] text-white rounded-full border-4 border-white shadow-lg z-10">
        <Image
          src={`https://just.isamstore.com/storage/${subscription?.icon}`}
          alt="About Us"
          width={100}
          height={100}
          className="w-9 h-9"
        />
      </div>
      <div className="bg-[#5DB6A6] rounded-lg p-6 w-80 text-center shadow-md relative z-0 pt-[2.8rem] min-h-[200px] flex items-center justify-center">
        <p className="text-white text-base font-bold leading-relaxed">
          {subscription?.content}
        </p>
      </div>
    </div>
  );
};

export default ContentCard;
