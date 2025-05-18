import { useLocale } from "next-intl";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

const CoursesTab = ({ profileData }) => {
  const lang = useLocale();

  return (
    <section dir={lang === "en" ? "ltr" : "rtl"}>
      <div className="">
        <div className="flex items-center gap-x-5">
          <p className="text-lg md:text-xl lg:text-2xl font-bold">
            الدورات الحالية
          </p>
          <div className="bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white px-3 py-[6px] rounded-full text-[14px]">
            2 دورة
          </div>
        </div>
        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          <div className="max-w-sm bg-[#F6F6F6] rounded-lg shadow-md p-4 flex flex-col gap-3 border-r-4 border-[var(--second_main)] pt-6 pb-5 font-semibold">
            {/* Title */}
            <h2 className="text-lg font-bold text-[#555555] text-right">
              إدارة المرافق المتقدمة والصيانة الوقائية
            </h2>

            {/* Date Range */}
            <div className="flex items-center gap-3 text-right">
              <div className="w-5">
                <Image
                  src={"/images/logos/date_icon_2.png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p>16 - 23 يوليو 2025</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-right">
              <div className="w-5">
                <Image
                  src={"/images/logos/Frame 274 (1).png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p>نوع الحضور : عن بعد</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-right mb-2">
              <div className="w-5">
                <FaLocationDot className="text-[#555555] text-xl" />
              </div>
              <p>الرياض</p>
            </div>

            {/* Button */}
            <button className="bg-gradient-to-r from-[#7ADEC2] to-[#61B8A0] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer">
              انتقل للدورة
            </button>
          </div>
          <div className="max-w-sm bg-[#F6F6F6] rounded-lg shadow-md p-4 flex flex-col gap-3 border-r-4 border-[var(--second_main)] pt-6 pb-5 font-semibold">
            {/* Title */}
            <h2 className="text-lg font-bold text-[#555555] text-right">
              اسم الدورة
            </h2>

            {/* Date Range */}
            <div className="flex items-center gap-3 text-right">
              <div className="w-5">
                <Image
                  src={"/images/logos/date_icon_2.png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p>16 - 23 يوليو 2025</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-right">
              <div className="w-5">
                <Image
                  src={"/images/logos/Frame 274 (1).png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p>نوع الحضور : عن بعد</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-right mb-2">
              <div className="w-5">
                <FaLocationDot className="text-[#555555] text-xl" />
              </div>
              <p>الرياض</p>
            </div>

            {/* Button */}
            <button className="bg-gradient-to-r from-[#7ADEC2] to-[#61B8A0] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer">
              انتقل للدورة
            </button>
          </div>
        </div>
      </div>
      <div className="my-10">
        <div className="flex items-center gap-x-5">
          <p className="text-lg md:text-xl lg:text-2xl font-bold">
            الدورات القادمة
          </p>
          <div className="bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white px-3 py-[6px] rounded-full text-[14px]">
            3 دورة
          </div>
        </div>
        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          <div className="max-w-sm bg-[#F6F6F6] rounded-lg shadow-md p-4 flex flex-col gap-3 border-r-4 border-[var(--main)] pt-6 pb-5 font-semibold">
            {/* Title */}
            <h2 className="text-lg font-bold text-[#555555] text-right">
              إدارة المرافق المتقدمة والصيانة الوقائية
            </h2>

            {/* Date Range */}
            <div className="flex items-center gap-3 text-right">
              <div className="w-5">
                <Image
                  src={"/images/logos/date_icon_2.png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p>16 - 23 يوليو 2025</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-right">
              <div className="w-5">
                <Image
                  src={"/images/logos/Frame 274 (1).png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p>نوع الحضور : عن بعد</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-right mb-2">
              <div className="w-5">
                <FaLocationDot className="text-[#555555] text-xl" />
              </div>
              <p>الرياض</p>
            </div>

            {/* Button */}
            <button className="bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer">
              انتقل للدورة
            </button>
          </div>
          <div className="max-w-sm bg-[#F6F6F6] rounded-lg shadow-md p-4 flex flex-col gap-3 border-r-4 border-[var(--main)] pt-6 pb-5 font-semibold">
            {/* Title */}
            <h2 className="text-lg font-bold text-[#555555] text-right">
              اسم الدورة
            </h2>

            {/* Date Range */}
            <div className="flex items-center gap-3 text-right">
              <div className="w-5">
                <Image
                  src={"/images/logos/date_icon_2.png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p>16 - 23 يوليو 2025</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-right">
              <div className="w-5">
                <Image
                  src={"/images/logos/Frame 274 (1).png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p>نوع الحضور : عن بعد</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-right mb-2">
              <div className="w-5">
                <FaLocationDot className="text-[#555555] text-xl" />
              </div>
              <p>الرياض</p>
            </div>

            {/* Button */}
            <button className="bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer">
              انتقل للدورة
            </button>
          </div>
          <div className="max-w-sm bg-[#F6F6F6] rounded-lg shadow-md p-4 flex flex-col gap-3 border-r-4 border-[var(--main)] pt-6 pb-5 font-semibold">
            {/* Title */}
            <h2 className="text-lg font-bold text-[#555555] text-right">
              اسم الدورة
            </h2>

            {/* Date Range */}
            <div className="flex items-center gap-3 text-right">
              <div className="w-5">
                <Image
                  src={"/images/logos/date_icon_2.png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p>16 - 23 يوليو 2025</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-right">
              <div className="w-5">
                <Image
                  src={"/images/logos/Frame 274 (1).png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p>نوع الحضور : عن بعد</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-right mb-2">
              <div className="w-5">
                <FaLocationDot className="text-[#555555] text-xl" />
              </div>
              <p>الرياض</p>
            </div>

            {/* Button */}
            <button className="bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer">
              انتقل للدورة
            </button>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <div className="flex items-center gap-x-5">
          <p className="text-lg md:text-xl lg:text-2xl font-bold">
            الدورات المكتملة
          </p>
          <div className="bg-gradient-to-r from-[#888888] to-[#555555] w-fit text-white px-3 py-[6px] rounded-full text-[14px]">
            1 دورة
          </div>
        </div>
        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          <div className="max-w-sm bg-[#F6F6F6] rounded-lg shadow-md p-4 flex flex-col gap-3 border-r-4 border-[#555555] pt-6 pb-5 font-semibold">
            {/* Title */}
            <h2 className="text-lg font-bold text-[#555555] text-right">
              إدارة المرافق المتقدمة والصيانة الوقائية
            </h2>

            {/* Date Range */}
            <div className="flex items-center gap-3 text-right">
              <div className="w-5">
                <Image
                  src={"/images/logos/date_icon_2.png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p>16 - 23 يوليو 2025</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-right">
              <div className="w-5">
                <Image
                  src={"/images/logos/Frame 274 (1).png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p>نوع الحضور : عن بعد</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-right mb-2">
              <div className="w-5">
                <FaLocationDot className="text-[#555555] text-xl" />
              </div>
              <p>الرياض</p>
            </div>

            {/* Button */}
            <button className="bg-gradient-to-r from-[#888888] to-[#555555] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer">
              انتقل للدورة
            </button>
          </div>
          <div className="max-w-sm bg-[#F6F6F6] rounded-lg shadow-md p-4 flex flex-col gap-3 border-r-4 border-[#555555] pt-6 pb-5 font-semibold">
            {/* Title */}
            <h2 className="text-lg font-bold text-[#555555] text-right">
              اسم الدورة
            </h2>

            {/* Date Range */}
            <div className="flex items-center gap-3 text-right">
              <div className="w-5">
                <Image
                  src={"/images/logos/date_icon_2.png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p>16 - 23 يوليو 2025</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-right">
              <div className="w-5">
                <Image
                  src={"/images/logos/Frame 274 (1).png"}
                  alt="session icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p>نوع الحضور : عن بعد</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-right mb-2">
              <div className="w-5">
                <FaLocationDot className="text-[#555555] text-xl" />
              </div>
              <p>الرياض</p>
            </div>

            {/* Button */}
            <button className="bg-gradient-to-r from-[#888888] to-[#555555] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer">
              انتقل للدورة
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesTab;
