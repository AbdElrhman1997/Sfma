import Image from "next/image";
import React from "react";

const AboutSection = ({ title, description, lang }) => {
  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-between gap-8 container mx-auto pt-12 ${
        lang == "en" ? "md:text-left" : "md:text-right"
      } text-center`}
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-[#1DAEE5] mb-4">{title}</h2>
        <p className="text-black text-justify mb-6">{description}</p>
      </div>
      <div className="w-3/5 md:w-2/5">
        <Image
          src="/images/about_page/about_section.png"
          alt="About Us"
          width={500}
          height={400}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default AboutSection;
