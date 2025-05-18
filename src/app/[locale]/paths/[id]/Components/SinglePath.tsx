import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const SinglePath = ({ translation, single_book }) => {
  const lang = useLocale();
  return (
    <div className="min-h-screen container mx-auto">
      <div
        className={`flex flex-col md:flex-row items-center justify-between gap-8 container mx-auto md:pt-12 pt-8  text-center`}
        dir={lang == "en" ? "ltr" : "rtl"}
      >
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="lg:text-3xl text-xl font-bold text-[#1DAEE5] mb-4 text-start">
            مسار الإستدامة وكفاءة الطاقة
          </h2>
          <p className="text-black text-justify mb-6">
            مسار الاستدامة وكفاءة الطاقة في إدارة المرافق هو مسار متخصص يهدف إلى
            تمكين المهنيين في مجال إدارة المرافق من فهم وتطبيق استراتيجيات
            الاستدامة الفعّالة وتقنيات كفاءة الطاقة. يركز هذا المسار على تقليل
            الأثر البيئي وتحقيق التوازن بين استهلاك الطاقة والحفاظ على الموارد
            الطبيعية. يشمل المسار موضوعات مثل تحسين كفاءة استخدام الطاقة، تطبيق
            تقنيات الطاقة المتجددة، وتطوير استراتيجيات لتقليل الانبعاثات
            الكربونية في المرافق. تقدم جمعية إدارة المرافق السعودية مجموعة من
            الدورات التدريبية المتخصصة في هذا المسار، والتي تهدف إلى تعزيز قدرات
            المتدربين في مجال الاستدامة وكفاءة الطاقة. من خلال هذه الدورات،
            سيتعرف المشاركون على أحدث الأساليب والابتكارات التي تساعد على تحقيق
            بيئة عمل أكثر استدامة وفعالية من حيث الطاقة، مما يسهم في تحسين
            الأداء البيئي وتقليل التكاليف التشغيلية في المرافق.
          </p>
        </div>
        <div className="w-3/5 md:w-2/5">
          <Image
            src="/images/about_page/about_section.png"
            alt="About Us"
            width={500}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      <div dir={lang === "en" ? "ltr" : "rtl"} className="p-0 mt-8">
        <h2 className="text-[26px] font-bold text-[#1DAEE5] text-center">
          دورات المسار
        </h2>

        {/* {loadingBooks ? (
          <div className="flex flex-wrap justify-center gap-6">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="bg-[#F6F6F6] p-4 rounded-lg shadow-md w-64 text-center animate-pulse"
              >
                <div className="bg-[#EDEDED] text-white font-bold text-lg rounded-lg p-20 relative flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full bg-white/30" />
                  </div>
                </div>
                <div className="mt-4 h-4 bg-gray-300 rounded w-1/2 mx-auto" />
              </div>
            ))}
          </div>
        ) : ( */}
        <div className="flex flex-wrap justify-center gap-6 mt-9">
          <div className="group bg-white relative rounded-lg shadow-md w-72 text-center h-fit hover:scale-105 transition duration-300">
            <div className="transition-shadow duration-300 overflow-hidden rounded-lg">
              <img
                src={`/images/training/training_1.png`}
                // alt={course?.name}
                className="object-cover h-full max-h-[17rem] w-full transition duration-300 group-hover:scale-105 group-hover:opacity-85"
              />
              <p className="relative font-bold mt-[26px] mb-5 text-black">
                {/* {book?.name} */}
                دورات في الأمن والسلامة
              </p>
            </div>
            <div className="absolute top-0 start-0 -translate-5 bg-[var(--main)] text-white py-2 px-4 rounded-lg">
              متاحة الآن
            </div>

            <Link
              // href={`/${lang}/data_library/${course?.id}`}
              href={`/${lang}/data_library/`}
              target="_blank"
              className="inline-block"
            >
              <div className="bg-[#61B8A0] text-white font-bold p-2 text-md rounded-lg mb-[18px] mt-[2px] border-2 border-white text-[14px] transition-all duration-300 hover:border-[#61B8A0] hover:bg-white hover:text-[#61B8A0]">
                {/* {t("translation?.read_book")} */}
                تفاصيل الدورة
              </div>
            </Link>
          </div>
          <div className="group bg-white relative rounded-lg shadow-md w-72 text-center h-fit hover:scale-105 transition duration-300">
            <div className="transition-shadow duration-300 overflow-hidden rounded-lg">
              <img
                src={`/images/training/training_1.png`}
                // alt={course?.name}
                className="object-cover h-full max-h-[17rem] w-full transition duration-300 group-hover:scale-105 group-hover:opacity-85"
              />
              <p className="relative font-bold mt-[26px] mb-5 text-black">
                {/* {book?.name} */}
                دورات في الأمن والسلامة
              </p>
            </div>
            <div className="absolute top-0 start-0 -translate-5 bg-[var(--main)] text-white py-2 px-4 rounded-lg">
              25 - 28 مايو
            </div>

            <Link
              // href={`/${lang}/data_library/${course?.id}`}
              href={`/${lang}/data_library/`}
              target="_blank"
              className="inline-block"
            >
              <div className="bg-[#61B8A0] text-white font-bold p-2 text-md rounded-lg mb-[18px] mt-[2px] border-2 border-white text-[14px] transition-all duration-300 hover:border-[#61B8A0] hover:bg-white hover:text-[#61B8A0]">
                {/* {t("translation?.read_book")} */}
                تفاصيل الدورة
              </div>
            </Link>
          </div>
          <div className="group bg-white relative rounded-lg shadow-md w-72 text-center h-fit hover:scale-105 transition duration-300">
            <div className="transition-shadow duration-300 overflow-hidden rounded-lg">
              <img
                src={`/images/training/training_1.png`}
                // alt={course?.name}
                className="object-cover h-full max-h-[17rem] w-full transition duration-300 group-hover:scale-105 group-hover:opacity-85"
              />
              <p className="relative font-bold mt-[26px] mb-5 text-black">
                {/* {book?.name} */}
                دورات في الأمن والسلامة
              </p>
            </div>
            <div className="absolute top-0 start-0 -translate-5 bg-[var(--main)] text-white py-2 px-4 rounded-lg">
              متاحة الآن
            </div>

            <Link
              // href={`/${lang}/data_library/${course?.id}`}
              href={`/${lang}/data_library/`}
              target="_blank"
              className="inline-block"
            >
              <div className="bg-[#61B8A0] text-white font-bold p-2 text-md rounded-lg mb-[18px] mt-[2px] border-2 border-white text-[14px] transition-all duration-300 hover:border-[#61B8A0] hover:bg-white hover:text-[#61B8A0]">
                {/* {t("translation?.read_book")} */}
                تفاصيل الدورة
              </div>
            </Link>
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default SinglePath;
