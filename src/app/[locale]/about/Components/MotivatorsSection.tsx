import React from "react";

const MotivatorsSection = ({ title, description, p, lang }) => {
  const courses = [{}, {}, {}, {}, {}, {}];

  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-between gap-8 container mx-auto md:pt-6 pt-0 mt-8 ${
        lang == "en" ? "md:text-left" : "md:text-right"
      } text-center`}
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div className="w-full flex flex-col justify-center text-center">
        <h2 className="text-3xl font-bold text-[#1DAEE5] mb-4">{title}</h2>
        <p className="text-[#898989] text-center mb-6">{description}</p>
        <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-[#61B8A0] text-white rounded-lg w-full md:w-[30%] shadow-lg overflow-hidden hover:scale-105 hover:bg-[#1DAEE5] cursor-pointer transition duration-300"
            >
              <div className=" text-center py-3 ">
                <p className="text-sm font-semibold text-white">{p[index]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MotivatorsSection;
