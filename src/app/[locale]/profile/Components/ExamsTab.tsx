import { useLocale } from "next-intl";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

const ExamsTab = ({ profileData }) => {
  const lang = useLocale();

  return (
    <section dir={lang === "en" ? "ltr" : "rtl"}>
      <div className="">
        <div className="flex items-center gap-x-5">
          <p className="text-lg md:text-xl lg:text-2xl font-bold">
            الاختبارات الجارية
          </p>
          <div className="bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white px-3 py-[6px] rounded-full text-[14px]">
            3 اختبار
          </div>
        </div>
        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          <div className="max-w-sm bg-[#F6F6F6] rounded-lg shadow-md p-4 flex flex-col gap-3 border-r-4 border-[var(--second_main)] py-6 font-semibold">
            <div className="flex items-center justify-between gap-x-5">
              <div className="bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white px-3 py-[6px] rounded-full text-[12px]">
                مفتوح الآن
              </div>
              <div className="w-6">
                <Image
                  src={"/images/logos/next_courses.png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <h2 className="text-lg font-bold text-[#555555] text-right mt-2">
              اختبار دورة كذا
            </h2>

            <div className="flex items-center gap-3 text-right">
              <div className="flex items-center justify-between w-full">
                <p>تاريخ البدء</p>
                <p>1, ابريل 2025</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-right">
              <div className="flex items-center justify-between w-full mb-3">
                <p>تاريخ الانتهاء</p>
                <p>3, ابريل 2025</p>
              </div>
            </div>

            <button className="bg-gradient-to-r from-[#7ADEC2] to-[#61B8A0] flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer">
              <div className="w-3">
                <Image
                  src={"/images/logos/start.png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p className="font-bold">بدأ الاختبار</p>
            </button>
          </div>
          <div className="max-w-sm bg-[#F6F6F6] rounded-lg shadow-md p-4 flex flex-col gap-3 border-r-4 border-[#F59E0B] py-6 font-semibold">
            <div className="flex items-center justify-between gap-x-5">
              <div className="bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] w-fit text-white px-3 py-[6px] rounded-full text-[12px]">
                قيد التقدم
              </div>
              <div className="w-6">
                <Image
                  src={"/images/logos/next_courses.png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <h2 className="text-lg font-bold text-[#555555] text-right mt-2">
              اختبار دورة كذا
            </h2>

            <div className="flex items-center gap-3 text-right">
              <div className="flex items-center justify-between w-full">
                <p>تاريخ البدء</p>
                <p>1, ابريل 2025</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-right">
              <div className="flex items-center justify-between w-full mb-3">
                <p>تاريخ الانتهاء</p>
                <p>3, ابريل 2025</p>
              </div>
            </div>

            <button className="bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer">
              <div className="w-3">
                <Image
                  src={"/images/logos/Frame.png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p className="font-bold">مواصلة الاختبار</p>
            </button>
          </div>
          <div className="max-w-sm bg-[#F6F6F6] rounded-lg shadow-md p-4 flex flex-col gap-3 border-r-4 border-[#888888] py-6 font-semibold">
            <div className="flex items-center justify-between gap-x-5">
              <div className="bg-gradient-to-r from-[#888888] to-[#555555] w-fit text-white px-3 py-[6px] rounded-full text-[12px]">
                في انتظار النتيجة
              </div>
              <div className="w-4">
                <Image
                  src={"/images/logos/time_icon.png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <h2 className="text-lg font-bold text-[#555555] text-right mt-2">
              اختبار دورة كذا
            </h2>

            <div className="flex items-center gap-3 text-right">
              <div className="flex items-center justify-between w-full">
                <p>تاريخ الانتهاء</p>
                <p>3, مارس 2025</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-right">
              <div className="flex items-center justify-between w-full mb-3">
                <p>النتيجة</p>
                <p>40/100</p>
              </div>
            </div>

            <button className="bg-gradient-to-r from-[#888888] to-[#555555] flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer">
              <div className="w-3">
                <Image
                  src={"/images/logos/end_icon.png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p className="font-bold">عرض النتيجة</p>
            </button>
          </div>
        </div>
      </div>
      <div className="my-10">
        <div className="flex items-center gap-x-5">
          <p className="text-lg md:text-xl lg:text-2xl font-bold">
            الاختبارات القادمة
          </p>
          <div className="bg-gradient-to-r from-[#888888] to-[#555555] w-fit text-white px-3 py-[6px] rounded-full text-[14px]">
            3 اختبار
          </div>
        </div>
        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          <div className="max-w-sm bg-[#F6F6F6] rounded-lg shadow-md p-4 flex flex-col gap-3 border-r-4 border-[#888888] py-6 font-semibold">
            <div className="flex items-center justify-between gap-x-5">
              <div className="bg-gradient-to-r from-[#888888] to-[#555555] w-fit text-white px-3 py-[6px] rounded-full text-[12px]">
                لم يبدأ بعد
              </div>
              <div className="w-6">
                <Image
                  src={"/images/logos/next_courses.png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <h2 className="text-lg font-bold text-[#555555] text-right mt-2">
              اختبار دورة كذا
            </h2>

            <div className="flex items-center gap-3 text-right">
              <div className="flex items-center justify-between w-full">
                <p>تاريخ البدء</p>
                <p>1, ابريل 2025</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-right">
              <div className="flex items-center justify-between w-full mb-3">
                <p>تاريخ الانتهاء</p>
                <p>3, ابريل 2025</p>
              </div>
            </div>

            <button className="bg-gradient-to-r from-[#888888] to-[#555555] flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer">
              <div className="w-3">
                <Image
                  src={"/images/logos/end_icon.png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p className="font-bold">لم يبدأ بعد</p>
            </button>
          </div>
          <div className="max-w-sm bg-[#F6F6F6] rounded-lg shadow-md p-4 flex flex-col gap-3 border-r-4 border-[#888888] py-6 font-semibold">
            <div className="flex items-center justify-between gap-x-5">
              <div className="bg-gradient-to-r from-[#888888] to-[#555555] w-fit text-white px-3 py-[6px] rounded-full text-[12px]">
                لم يبدأ بعد
              </div>
              <div className="w-6">
                <Image
                  src={"/images/logos/next_courses.png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <h2 className="text-lg font-bold text-[#555555] text-right mt-2">
              اختبار دورة كذا
            </h2>

            <div className="flex items-center gap-3 text-right">
              <div className="flex items-center justify-between w-full">
                <p>تاريخ البدء</p>
                <p>1, ابريل 2025</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-right">
              <div className="flex items-center justify-between w-full mb-3">
                <p>تاريخ الانتهاء</p>
                <p>3, ابريل 2025</p>
              </div>
            </div>

            <button className="bg-gradient-to-r from-[#888888] to-[#555555] flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer">
              <div className="w-3">
                <Image
                  src={"/images/logos/end_icon.png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p className="font-bold">لم يبدأ بعد</p>
            </button>
          </div>
          <div className="max-w-sm bg-[#F6F6F6] rounded-lg shadow-md p-4 flex flex-col gap-3 border-r-4 border-[#888888] py-6 font-semibold">
            <div className="flex items-center justify-between gap-x-5">
              <div className="bg-gradient-to-r from-[#888888] to-[#555555] w-fit text-white px-3 py-[6px] rounded-full text-[12px]">
                لم يبدأ بعد
              </div>
              <div className="w-6">
                <Image
                  src={"/images/logos/next_courses.png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <h2 className="text-lg font-bold text-[#555555] text-right mt-2">
              اختبار دورة كذا
            </h2>

            <div className="flex items-center gap-3 text-right">
              <div className="flex items-center justify-between w-full">
                <p>تاريخ البدء</p>
                <p>1, ابريل 2025</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-right">
              <div className="flex items-center justify-between w-full mb-3">
                <p>تاريخ الانتهاء</p>
                <p>3, ابريل 2025</p>
              </div>
            </div>

            <button className="bg-gradient-to-r from-[#888888] to-[#555555] flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer">
              <div className="w-3">
                <Image
                  src={"/images/logos/end_icon.png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p className="font-bold">لم يبدأ بعد</p>
            </button>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <div className="flex items-center gap-x-5">
          <p className="text-lg md:text-xl lg:text-2xl font-bold">
            الاختبارات المنتهية
          </p>
          <div className="bg-gradient-to-r from-[#888888] to-[#555555] w-fit text-white px-3 py-[6px] rounded-full text-[14px]">
            2 اختبار
          </div>
        </div>
        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          <div className="max-w-sm bg-[#F6F6F6] rounded-lg shadow-md p-4 flex flex-col gap-3 border-r-4 border-[var(--second_main)] py-6 font-semibold">
            <div className="flex items-center justify-between gap-x-5">
              <div className="bg-gradient-to-r from-[#888888] to-[#555555] w-fit text-white px-3 py-[6px] rounded-full text-[12px]">
                مكتمل
              </div>
              <div className="w-6">
                <Image
                  src={"/images/logos/true_icont.png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <h2 className="text-lg font-bold text-[#555555] text-right mt-2">
              اختبار دورة كذا
            </h2>

            <div className="flex items-center gap-3 text-right">
              <div className="flex items-center justify-between w-full">
                <p>تاريخ الانتهاء</p>
                <p>1, ابريل 2025</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-right">
              <div className="flex items-center justify-between w-full mb-3">
                <p>النتيجة</p>
                <p>87/100</p>
              </div>
            </div>

            <button className="bg-gradient-to-r from-[#7ADEC2] to-[#61B8A0] flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer">
              <div className="w-3">
                <Image
                  src={"/images/logos/start.png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p className="font-bold">بدأ الاختبار</p>
            </button>
          </div>
          <div className="max-w-sm bg-[#F6F6F6] rounded-lg shadow-md p-4 flex flex-col gap-3 border-r-4 border-[#F87171] py-6 font-semibold">
            <div className="flex items-center justify-between gap-x-5">
              <div className="bg-gradient-to-r from-[#888888] to-[#555555] w-fit text-white px-3 py-[6px] rounded-full text-[12px]">
                مكتمل
              </div>
              <div className="w-6">
                <Image
                  src={"/images/logos/failed.png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <h2 className="text-lg font-bold text-[#555555] text-right mt-2">
              اختبار دورة كذا
            </h2>

            <div className="flex items-center gap-3 text-right">
              <div className="flex items-center justify-between w-full">
                <p>تاريخ الانتهاء</p>
                <p>1, ابريل 2025</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-right">
              <div className="flex items-center justify-between w-full mb-3">
                <p>النتيجة</p>
                <p>40/100</p>
              </div>
            </div>

            <button className="bg-gradient-to-r from-[#F87171] to-[#E62323] flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer">
              <div className="w-3">
                <Image
                  src={"/images/logos/Frame.png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p className="font-bold">مواصلة الاختبار</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamsTab;
