import Image from "next/image";
import React from "react";

const PillarsSection = ({ title, description, p, lang }) => {
  const PillersCard = ({ index, content }) => {
    return (
      <div className="relative flex flex-col items-center">
        <div
          className={`${
            index % 2 == 0
              ? "bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)]"
              : "bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)]"
          } min-w-80 text-center shadow-md relative z-0 py-6 px-2`}
        >
          <p className="text-white lg:text-xl text-lg font-bold leading-relaxed flex justify-center items-center">
            {content}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="container mx-auto text-center mt-8">
      <h2 className="lg:text-3xl text-xl font-bold text-[#1DAEE5] lg:mb-3 mb-2 text-center">
        {title}
      </h2>
      <p className="text-[#555555] text-center lg:text-base text-sm md:mb-12 mb-4">
        {description}
      </p>
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8">
        {p?.map((content: string, index: number) => {
          return <PillersCard key={index} index={index} content={content} />;
        })}
      </div>
    </section>
  );
};

export default PillarsSection;
