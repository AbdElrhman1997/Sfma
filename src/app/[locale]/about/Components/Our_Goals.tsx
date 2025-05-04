import Image from "next/image";
import React from "react";

const Our_Goals = ({ title, description, p, lang }) => {
  const GoalCard = ({ index, content }) => {
    return (
      <div className="relative flex flex-col items-center">
        <div className="absolute -top-8 flex items-center justify-center w-16 h-16 bg-[#1DAEE5] text-white rounded-full border-4 border-white shadow-lg z-10">
          <Image
            src={`/images/about_page/goals_${index + 1}.png`}
            alt="About Us"
            width={100}
            height={100}
            className="w-9 h-9"
          />
        </div>
        <div className="bg-[#5DB6A6] rounded-lg p-6 w-80 text-center shadow-md relative z-0 py-[3.8rem]">
          <Image
            src="/images/about_page/goals_watermark.png"
            alt="About Us"
            width={170}
            height={170}
            className=" rounded-lg absolute top-1/2 left-1/2 -translate-1/2 mt-4"
          />
          <p className="text-white text-xl font-bold leading-relaxed  min-h-24 flex justify-center items-center">
            {content}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="container mx-auto text-center md:pt-6">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1DAEE5] mb-2">
        {title}
      </h2>
      <p className="text-gray-600 mb-8">{description}</p>
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-x-8 gap-y-12 pt-4">
        {p?.map((content: string, index: number) => {
          return <GoalCard key={index} index={index} content={content} />;
        })}
      </div>
    </section>
  );
};

export default Our_Goals;
