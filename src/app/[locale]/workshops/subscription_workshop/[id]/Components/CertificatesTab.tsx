import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const CourseCertificatesList = ({ certificates }) => {
  const t = useTranslations("CertificatesTab");
  const lang = useLocale();

  const getTypeLabel = (type: string) => {
    if (type === "achievement") return "شهادة اجتياز";
    if (type === "completion") return "شهادة حضور";
    return "شهادة";
  };

  return (
    <section dir={lang === "en" ? "ltr" : "rtl"} className="mt-10">
      <div className="grid lg:grid-cols-3 gap-6">
        {certificates?.map((item) => (
          <div
            key={item.id}
            className="max-w-sm bg-[#F6F6F6] rounded-lg shadow-md p-4 flex flex-col gap-3 border-r-4 border-[var(--second_main)] py-6 font-semibold"
          >
            {/* نوع الشهادة */}
            <div className="flex items-center justify-between gap-x-5">
              <div className="bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white px-3 py-[6px] rounded-full text-[12px]">
                {getTypeLabel(item.type)}
              </div>

              <div className="w-6">
                <Image
                  src={`/images/logos/next_courses.png`}
                  alt="certificate icon"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* العنوان */}
            <h2 className="text-lg font-bold text-[#555555] text-right mt-2 line-clamp-1">
              {item.title}
            </h2>

            {/* الوصف */}
            <div className="flex flex-col text-right">
              <p className="text-sm text-gray-700 line-clamp-3 min-h-[72px]">
                {item.description}
              </p>
            </div>

            {/* الرسالة بدلاً من الزرار */}
            <div className="bg-gradient-to-r from-[#7ADEC2] to-[#61B8A0] flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded-lg opacity-80 mt-auto">
              <p className="font-bold text-sm md:text-base text-center">
                سوف تحصل على الشهادة بعد انتهاء الدورة واجتياز الاختبار
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseCertificatesList;
