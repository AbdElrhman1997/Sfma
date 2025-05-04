import Image from "next/image";
import React from "react";

const PillarsSection = ({ title, description, p, lang }) => {
  const PillersCard = ({ index, content }) => {
    return (
      <div className="relative flex flex-col items-center">
        <div
          className={`bg-[${
            index % 2 == 0 ? "#5DB6A6" : "#1DAEE5"
          }] min-w-80 text-center shadow-md relative z-0 py-6 px-2`}
        >
          <p className="text-white text-xl font-bold leading-relaxed flex justify-center items-center">
            {content}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="container mx-auto text-center pt-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1DAEE5] mb-2">
        {title}
      </h2>
      <p className="text-gray-600 mb-8">{description}</p>
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-x-8 gap-y-12">
        {p?.map((content: string, index: number) => {
          return <PillersCard key={index} index={index} content={content} />;
        })}
      </div>
    </section>
  );
};

export default PillarsSection;
