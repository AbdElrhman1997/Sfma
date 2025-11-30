import { formatDate } from "@/utils/formatDate";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ExamsTab = ({ exams }) => {
  const lang = useLocale();
  const t = useTranslations("ExamsTab");
  const router = useRouter();

  const startExam = async (id) => {
    const token = localStorage.getItem("auth_token");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}exams/start-exam/${id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Accept-Language": lang || "ar",
        },
      }
    );

    const result = await res.json();

    if (res.status == 200) {
      router.push(
        `/${lang}/exams/questions/${id}?exam_attempt_id=${result?.data?.id}`
      );
    } else {
      toast.error(result?.message);
    }
  };

  return (
    <section dir={lang === "en" ? "ltr" : "rtl"}>
      <div className="mt-8">
        <div className="flex items-center gap-x-5">
          <p className="text-lg md:text-xl lg:text-2xl font-bold">
            الاختبارات الجارية
          </p>
          <div className="bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white px-3 py-[6px] rounded-full text-[14px]">
            3 اختبار
          </div>
        </div>
        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          {exams.map((exam) => (
            <div
              key={exam.id}
              className="max-w-sm bg-[#F6F6F6] rounded-lg shadow-md p-4 flex flex-col gap-3 border-r-4 border-[var(--second_main)] py-6 font-semibold"
            >
              <div className="flex items-center justify-between gap-x-5">
                <div className="bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white px-3 py-[6px] rounded-full text-[12px]">
                  {exam.status_label}
                </div>
                <div className="w-6">
                  <Image
                    src={`/images/logos/next_courses.png`}
                    alt={t("session_icon_alt")}
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <h2 className="text-lg font-bold text-[#555555] text-right mt-2">
                {exam.title}
              </h2>

              <div className="flex items-center gap-3 text-right">
                <div className="flex items-center justify-between w-full">
                  <p>{t("start_date")}</p>
                  <p>{formatDate(exam.date_from)}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-right">
                <div className="flex items-center justify-between w-full">
                  <p>{t("end_date")}</p>
                  <p>{formatDate(exam.date_to)}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-right">
                <div className="flex items-center justify-between w-full mb-3">
                  <p>{t("attempts_remaining")}</p>
                  <p>{exam.attempts_remaining}</p>
                </div>
              </div>

              <div
                onClick={() => {
                  startExam(exam?.id);
                }}
                className="bg-gradient-to-r from-[#7ADEC2] to-[#61B8A0] flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer"
              >
                <div className="w-3">
                  <Image
                    src={`/images/logos/start.png`}
                    alt={t("start_icon_alt")}
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <p className="font-bold">{t("start_exam")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamsTab;
