import Image from "next/image";

const Single = ({ translation, lang, subscription }) => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute -top-8 flex items-center justify-center w-16 h-16 bg-[#1DAEE5] text-white rounded-full border-4 border-white shadow-lg z-10">
        <Image
          src={`/images/about_page/goals_2.png`}
          alt="About Us"
          width={100}
          height={100}
          className="w-9 h-9"
        />
      </div>
      <div className="bg-[#5DB6A6] rounded-lg p-6 w-80 text-center shadow-md relative z-0 pt-[2.8rem]">
        <p className="text-white text-base font-bold leading-relaxed flex justify-center items-center">
          {
            "تسهيل - للأعضاء فقط - دليل المشترين التي من شأنها أن تمكن الوصول إلى أحدث الخدمات"
          }
        </p>
      </div>
    </div>
  );
};

export default Single;
