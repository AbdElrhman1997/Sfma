"use client";
import { useRef, useState } from "react";

const QuestionArea = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const box2Ref = useRef(null);
  const [selectedValue, setSelectedValue] = useState("offline");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleOptionChange = (id) => {
    setSelectedOption(id);
  };

  return (
    <div className="flex flex-col items-start  bg-[#F6F6F6] p-4 rounded-lg w-full">
      <div className="flex justify-between w-full mb-4">
        <span className="lg:text-lg text-base font-bold">السؤال 1 من 20</span>
        <button className="bg-yellow-300 font-semibold px-5 py-1 rounded-lg">
          تخطي السؤال الآن
        </button>
      </div>
      <div className="w-full rounded-lg ">
        <p className=" font-semibold mb-1">
          في إدارة المرافق، ما هو المصطلح الذي يشير إلى عملية تقييم حالة الأصول
          وتحديد الصيانة المطلوبة بناءً على الحالة الفعلية بدلاً من جدول زمني
          ثابت؟
        </p>
        <p className=" text-[#555555] mb-1">اختر اجابة واحدة صحيحة</p>
        <div className="space-y-2">
          <div
            ref={box2Ref}
            className="border-[1px] mt-4 border-[#B1B1B1] px-4 py-3 w-full rounded-lg bg-[#EDEDED]"
          >
            <label className="flex items-start gap-x-3 lg:gap-x-5">
              <input
                type="radio"
                value="online"
                checked={selectedValue === "online"}
                onChange={handleChange}
                className="accent-black w-5 lg:w-6 h-5 lg:h-6"
              />
              <div className="">
                <p className="text-sm lg:text-[15px] font-semibold">
                  الصيانة التصحيحية (Corrective Maintenance)
                </p>
              </div>
            </label>
          </div>
          <div
            ref={box2Ref}
            className="border-[1px] mt-4 border-[#B1B1B1] px-4 py-3 w-full rounded-lg bg-[#EDEDED]"
          >
            <label className="flex items-start gap-x-3 lg:gap-x-5">
              <input
                type="radio"
                value="online"
                checked={selectedValue === "online"}
                onChange={handleChange}
                className="accent-black w-5 lg:w-6 h-5 lg:h-6"
              />
              <div className="">
                <p className="text-sm lg:text-[15px] font-semibold">
                  الصيانة التصحيحية (Corrective Maintenance)
                </p>
              </div>
            </label>
          </div>
          <div
            ref={box2Ref}
            className="border-[1px] mt-4 border-[#B1B1B1] px-4 py-3 w-full rounded-lg bg-[#EDEDED]"
          >
            <label className="flex items-start gap-x-3 lg:gap-x-5">
              <input
                type="radio"
                value="online"
                checked={selectedValue === "online"}
                onChange={handleChange}
                className="accent-black w-5 lg:w-6 h-5 lg:h-6"
              />
              <div className="">
                <p className="text-sm lg:text-[15px] font-semibold">
                  الصيانة التصحيحية (Corrective Maintenance)
                </p>
              </div>
            </label>
          </div>
          <div
            ref={box2Ref}
            className="border-[1px] mt-4 border-[#B1B1B1] px-4 py-3 w-full rounded-lg bg-[#EDEDED]"
          >
            <label className="flex items-start gap-x-3 lg:gap-x-5">
              <input
                type="radio"
                value="online"
                checked={selectedValue === "online"}
                onChange={handleChange}
                className="accent-black w-5 lg:w-6 h-5 lg:h-6"
              />
              <div className="">
                <p className="text-sm lg:text-[15px] font-semibold">
                  الصيانة التصحيحية (Corrective Maintenance)
                </p>
              </div>
            </label>
          </div>
        </div>
        <div className="flex space-x-4 mt-5">
          <button className="mt-4 w-[140px] cursor-pointer bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] text-white px-4 py-2 rounded-lg hover:opacity-85">
            التالي
          </button>
          <button className="mt-4 w-[140px] bg-transparent border-2 border-[#898989] text-[#898989] cursor-pointer  px-4 py-2 rounded-lg hover:bg-[#898989] hover:text-white">
            السابق
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionArea;
