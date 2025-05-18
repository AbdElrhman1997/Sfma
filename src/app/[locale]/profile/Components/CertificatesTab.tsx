import { useLocale } from "next-intl";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

const CertificatesTab = ({ profileData }) => {
  const lang = useLocale();

  return (
    <section dir={lang === "en" ? "ltr" : "rtl"}>
      <div className="mb-10">
        <div className="flex items-center gap-x-5">
          <p className="text-lg md:text-xl lg:text-2xl font-bold">
            شهادات حضور الدورات
          </p>
          <div className="bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white px-3 py-[6px] rounded-full text-[14px]">
            1 شهادة
          </div>
        </div>
        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          <div className="max-w-sm bg-[#F6F6F6] rounded-lg shadow-md p-4 flex flex-col gap-3 border-r-4 border-[var(--second_main)] py-6 font-semibold">
            <div className="flex items-center justify-between gap-x-5">
              <div className="bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white px-3 py-[6px] rounded-full text-[12px]">
                شهادة حضور دورة
              </div>
              <div className="font-semibold">أصدرت : 13, أبريل 2025</div>
            </div>

            <h2 className="text-lg font-bold text-[#555555] text-right mt-2">
              دورة أساسيات إدارة المرافق
            </h2>

            <div className="flex flex-col gap-1 text-right">
              <p>حضرت الدورة الشاملة حول أساسيات إدارة المرافق</p>
              <p>وأفضل الممارسات.</p>
            </div>

            <div className="flex justify-center items-center gap-3">
              <button className="bg-gradient-to-r from-[#7ADEC2] to-[#61B8A0] w-1/2 mt-2 flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer">
                <div className="w-3 md:w-5">
                  <Image
                    src={"/images/logos/preview_icon.png"}
                    alt="session icon"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <p className="font-bold text-[13px] md:text-base">
                  عرض الشهادة
                </p>
              </button>
              <button className="bg-gradient-to-r from-[#888888] to-[#555555] w-1/2 mt-2 flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer">
                <div className="w-3 md:w-5">
                  <Image
                    src={"/images/logos/download_icon.png"}
                    alt="session icon"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <p className="font-bold text-[13px] md:text-base">تحميل</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <div className="flex items-center gap-x-5">
          <p className="text-lg md:text-xl lg:text-2xl font-bold">
            شهادات الاجتياز
          </p>
          <div className="bg-gradient-to-r from-[#888888] to-[#555555] w-fit text-white px-3 py-[6px] rounded-full text-[14px]">
            2 شهادة
          </div>
        </div>
        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          <div className="max-w-sm bg-[#F6F6F6] rounded-lg shadow-md p-4 flex flex-col gap-3 border-r-4 border-[var(--second_main)] py-6 font-semibold">
            <div className="flex items-center justify-between gap-x-5">
              <div className="bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white px-3 py-[6px] rounded-full text-[12px]">
                شهادة اجتياز
              </div>
              <div className="font-semibold">أصدرت : 13, أبريل 2025</div>
            </div>

            <h2 className="text-lg font-bold text-[#555555] text-right mt-2">
              إدارة أنظمة البناء
            </h2>

            <div className="flex flex-col gap-1 text-right">
              <p>حضرت الدورة الشاملة حول أساسيات إدارة المرافق</p>
              <p>وأفضل الممارسات.</p>
            </div>

            <div className="flex justify-center items-center gap-3">
              <button className="bg-gradient-to-r from-[#7ADEC2] to-[#61B8A0] w-1/2 mt-2 flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer">
                <div className="w-3 md:w-5">
                  <Image
                    src={"/images/logos/preview_icon.png"}
                    alt="session icon"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <p className="font-bold text-[13px] md:text-base">
                  عرض الشهادة
                </p>
              </button>
              <button className="bg-gradient-to-r from-[#888888] to-[#555555] w-1/2 mt-2 flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer">
                <div className="w-3 md:w-5">
                  <Image
                    src={"/images/logos/download_icon.png"}
                    alt="session icon"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <p className="font-bold text-[13px] md:text-base">تحميل</p>
              </button>
            </div>
          </div>
          <div className="max-w-sm bg-[#F6F6F6] rounded-lg shadow-md p-4 flex flex-col gap-3 border-r-4 border-[var(--second_main)] py-6 font-semibold">
            <div className="flex items-center justify-between gap-x-5">
              <div className="bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white px-3 py-[6px] rounded-full text-[12px]">
                شهادة اجتياز
              </div>
              <div className="font-semibold">أصدرت : 13, أبريل 2025</div>
            </div>

            <h2 className="text-lg font-bold text-[#555555] text-right mt-2">
              إدارة أنظمة البناء
            </h2>

            <div className="flex flex-col gap-1 text-right">
              <p>حضرت الدورة الشاملة حول أساسيات إدارة المرافق</p>
              <p>وأفضل الممارسات.</p>
            </div>

            <div className="flex justify-center items-center gap-3">
              <button className="bg-gradient-to-r from-[#7ADEC2] to-[#61B8A0] w-1/2 mt-2 flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer">
                <div className="w-3 md:w-5">
                  <Image
                    src={"/images/logos/preview_icon.png"}
                    alt="session icon"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <p className="font-bold text-[13px] md:text-base">
                  عرض الشهادة
                </p>
              </button>
              <button className="bg-gradient-to-r from-[#888888] to-[#555555] w-1/2 mt-2 flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer">
                <div className="w-3 md:w-5">
                  <Image
                    src={"/images/logos/download_icon.png"}
                    alt="session icon"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <p className="font-bold text-[13px] md:text-base">تحميل</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesTab;
