"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { toast } from "react-toastify";

const ExamsTab = () => {
  const lang = useLocale();
  const t = useTranslations("ExamsTab");
  const router = useRouter();
  const [data, setData] = useState({
    current_exams: { count: 0, exams: [] },
    upcoming_exams: { count: 0, exams: [] },
    ended_exams: { count: 0, exams: [] },
  });

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
      setData(
        result?.data || {
          current_exams: { count: 0, exams: [] },
          upcoming_exams: { count: 0, exams: [] },
          ended_exams: { count: 0, exams: [] },
        }
      );
      console.log(result);
    };

    fetchProfile();
  }, [lang]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(lang === "ar" ? "ar-EG" : "en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

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

    console.log(result);
  };

  return (
    <section dir={lang === "en" ? "ltr" : "rtl"}>
      <div className="">
        {data.current_exams.exams?.length ? (
          <div className="flex items-center gap-x-5">
            <p className="text-lg md:text-xl lg:text-2xl font-bold">
              {t("current_exams_title")}
            </p>
            <div className="bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white px-3 py-[6px] rounded-full text-[14px]">
              {t("exam_count", { count: data.current_exams.count })}
            </div>
          </div>
        ) : null}

        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          {data.current_exams.exams.map((exam) => (
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
                <div className="flex items-center justify-between w-full mb-3">
                  <p>{t("end_date")}</p>
                  <p>{formatDate(exam.date_to)}</p>
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
      {data.upcoming_exams.exams?.length ? (
        <div className="my-10">
          <div className="flex items-center gap-x-5">
            <p className="text-lg md:text-xl lg:text-2xl font-bold">
              {t("upcoming_exams_title")}
            </p>
            <div className="bg-gradient-to-r from-[#888888] to-[#555555] w-fit text-white px-3 py-[6px] rounded-full text-[14px]">
              {t("exam_count", { count: data.upcoming_exams.count })}
            </div>
          </div>
          <div className="mt-6 grid lg:grid-cols-3 gap-6">
            {data.upcoming_exams.exams.map((exam) => (
              <div
                key={exam.id}
                className="max-w-sm bg-[#F6F6F6] rounded-lg shadow-md p-4 flex flex-col gap-3 border-r-4 border-[#888888] py-6 font-semibold"
              >
                <div className="flex items-center justify-between gap-x-5">
                  <div className="bg-gradient-to-r from-[#888888] to-[#555555] w-fit text-white px-3 py-[6px] rounded-full text-[12px]">
                    {t("not_started")}
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
                  <div className="flex items-center justify-between w-full mb-3">
                    <p>{t("end_date")}</p>
                    <p>{formatDate(exam.date_to)}</p>
                  </div>
                </div>

                <button className="bg-gradient-to-r from-[#888888] to-[#555555] flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded-lg hover:bg-[var(--second_main)]/90 transition duration-200 cursor-pointer">
                  <div className="w-3">
                    <Image
                      src={`/images/logos/end_icon.png`}
                      alt={t("end_icon_alt")}
                      width={500}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="font-bold">{t("not_started_yet")}</p>
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {data.ended_exams.exams?.length ? (
        <div className="mb-16">
          <div className="flex items-center gap-x-5">
            <p className="text-lg md:text-xl lg:text-2xl font-bold">
              {t("ended_exams_title")}
            </p>
            <div className="bg-gradient-to-r from-[#888888] to-[#555555] w-fit text-white px-3 py-[6px] rounded-full text-[14px]">
              {t("exam_count", { count: data.ended_exams.count })}
            </div>
          </div>
          <div className="mt-6 grid lg:grid-cols-3 gap-6">
            {data.ended_exams.exams.map((exam) => (
              <div
                key={exam.id}
                className="max-w-sm bg-[#F6F6F6] rounded-lg shadow-md p-4 flex flex-col gap-3 border-r-4 border-[var(--second_main)] py-6 font-semibold"
              >
                <div className="flex items-center justify-between gap-x-5">
                  <div className="bg-gradient-to-r from-[#888888] to-[#555555] w-fit text-white px-3 py-[6px] rounded-full text-[12px]">
                    {t("completed")}
                  </div>
                  <div className="w-6">
                    <Image
                      src={`/images/logos/true_icon.png`}
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
                    <p>{t("end_date")}</p>
                    <p>{formatDate(exam.date_to)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-right">
                  <div className="flex items-center justify-between w-full mb-3">
                    <p>{t("result")}</p>
                    <p>
                      {exam.user_attempts_count > 0
                        ? `${exam.user_attempts_count * 40}/100`
                        : t("n/a")}
                    </p>
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
      ) : null}
    </section>
  );
};

export default ExamsTab;
