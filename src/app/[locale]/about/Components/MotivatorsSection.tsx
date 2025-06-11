import React from "react";

const MotivatorsSection = ({ title, description, p, lang }) => {
  const courses = [{}, {}, {}, {}, {}, {}];

  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-between gap-8 container mx-auto md:pt-6 pt-0 mt-8 text-start`}
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div className="w-full flex flex-col justify-center text-center">
        <h2 className="lg:text-3xl text-xl font-bold text-[#1DAEE5] lg:mb-3 mb-2 text-center">
          {title}
        </h2>
        <p className="text-[#555555] text-center lg:text-base text-sm md:mb-12 mb-4">
          {description}
        </p>
        <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] hover:from-[var(--main_gradiant)] hover:to-[var(--main)] text-white rounded-md p-1 lg:text-xl font-semibold w-full md:w-[30%] shadow-lg overflow-hidden hover:scale-105 cursor-pointer transition duration-300"
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
