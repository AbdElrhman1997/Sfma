import Image from "next/image";
import React from "react";

const Our_Vision = ({ title, description, content, lang }) => {
  return (
    <section
      className={` gap-8 container mx-auto pt-12 mt-8 ${
        lang == "en" ? "md:text-left" : "md:text-right"
      } text-center`}
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div className="">
        <h2 className="text-4xl font-bold text-[#1DAEE5] mb-4 text-center">
          {title}
        </h2>
        <p className="text-[#898989] mb-6 text-center">{description}</p>
      </div>
      <section
        className={`flex flex-col md:flex-row items-center justify-between gap-8 container mx-auto ${
          lang == "en" ? "md:text-left" : "md:text-right"
        } text-center`}
        dir={lang == "en" ? "ltr" : "rtl"}
      >
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-black text-justify mb-6 text-lg">{content}</p>
        </div>
        <div className="w-full md:w-2/5">
          <Image
            src="/images/about_page/our_vision.png"
            alt="About Us"
            width={500}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>
    </section>
  );
};

export default Our_Vision;
