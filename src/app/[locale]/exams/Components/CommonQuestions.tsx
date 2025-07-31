import { useLocale } from "next-intl";
import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CommonQuestions = () => {
  const [is1Open, setIs1Open] = useState(true);
  const [is2Open, setIs2Open] = useState(true);
  const [data, setData] = useState();
  const lang = useLocale();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("auth_token");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}user-exams-by-status`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Accept-Language": lang || "ar",
          },
        }
      );

      const result = await res.json();
      setData(result?.data);
      console.log(data);
    };

    fetchProfile();
  }, []);

  return (
    <div className=" container mx-auto">
      <p className="xl:text-3xl text-xl font-bold text-center xl:my-8 my-5">
        الأسئلة الأكثر شيوعاً
      </p>
      <div className="w-full rounded-md overflow-hidden my-8">
        <div
          className="bg-[var(--second_main)] text-white px-4 lg:py-5 py-3 flex justify-between items-center cursor-pointer rounded-t-md"
          onClick={() => setIs1Open(!is1Open)}
        >
          <span className="font-bold xl:text-xl text-base">
            عرض متطلبات التسجيل
          </span>
          {is1Open ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
        </div>
        {is1Open && (
          <div className="bg-[#f8f8f8] px-6 py-4 text-sm text-gray-800 rounded-b-md">
            <ul className="list-disc pr-4 space-y-1 leading-relaxed font-semibold">
              <li>test1</li>
            </ul>
          </div>
        )}
      </div>
      <div className="w-full rounded-md overflow-hidden">
        <div
          className="bg-[var(--second_main)] text-white px-4 lg:py-5 py-3 flex justify-between items-center cursor-pointer rounded-t-md"
          onClick={() => setIs2Open(!is2Open)}
        >
          <span className="font-bold xl:text-xl text-base">
            عرض متطلبات التسجيل
          </span>
          {is2Open ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
        </div>
        {is2Open && (
          <div className="bg-[#f8f8f8] px-6 py-4 text-sm text-gray-800 rounded-b-md">
            <ul className="list-disc pr-4 space-y-1 leading-relaxed font-semibold">
              <li>test1</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonQuestions;
