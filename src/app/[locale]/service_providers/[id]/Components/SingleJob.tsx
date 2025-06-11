import { useLocale } from "next-intl";
import Image from "next/image";

const SingleJob = () => {
  const lang = useLocale();

  return (
    <section className="container mx-auto" dir={lang == "en" ? "ltr" : "rtl"}>
      <div className="lg:flex justify-between items-center my-10 gap-6">
        <div className="lg:w-52 w-28 border-2 lg:mb-0 mb-10 border-[var(--second_main)] rounded-md p-4 lg:mx-0 mx-auto">
          <Image
            src={`/images/common/cards_icon.png`}
            alt="About Us"
            width={50}
            height={50}
            className="w-full h-auto"
          />
        </div>
        <div className="shadow bg-[#F6F6F6] rounded-lg px-6 py-6 w-full">
          <p className="font-bold lg:text-2xl text-xl lg:text-start text-center">
            شركة درع الأمان للحراسات الأمنية
          </p>
          <p className="lg:text-lg text-base lg:mt-6 mt-2 lg:text-justify text-center">
            الرياض - المملكة العربية السعودية
          </p>
          <div className="flex items-center lg:justify-start justify-center gap-4">
            <div className="cursor-pointer hover:opacity-85 mt-4 text-center bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white px-3 py-2 rounded-lg font-semibold">
              زيارة الموقع الإلكتروني{" "}
            </div>
            <div className="cursor-pointer hover:opacity-85 mt-4 text-center bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white px-3 py-2 rounded-lg font-semibold">
              دوام كامل
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7 col-span-12 ">
          <div className="shadow bg-[#F6F6F6] rounded-lg px-6 py-4">
            <p className="font-bold lg:text-xl text-base">نبذة عن الشركة</p>
            <p className="lg:text-lg text-base mt-2 lg:text-justify text-center">
              شركة سعودية متخصصة في تقديم خدمات الحراسة الأمنية المدنية للمنشآت
              الحكومية والخاصة. نمتلك فريقاً من الحراس المدربين وفق أعلى
              المعايير الأمنية ونستخدم أحدث أنظمة المراقبة لحماية الأفراد
              والممتلكات على مدار الساعة.
            </p>
          </div>
          <div className="shadow bg-[#F6F6F6] rounded-lg px-6 py-4  lg:mt-12 mt-6">
            <p className="font-bold lg:text-xl text-base">الخدمات المقدمة</p>
            <ul className="list-disc ps-5 mt-1">
              <li className="lg:text-lg text-base mt-2">
                حراسة المواقع والمنشآت الإدارية والتجارية
              </li>
              <li className="lg:text-lg text-base mt-2">
                تأمين الفعاليات والمؤتمرات
              </li>
              <li className="lg:text-lg text-base mt-2">
                تركيب أنظمة المراقبة (CCTV)
              </li>
              <li className="lg:text-lg text-base mt-2">
                خدمات دوريات أمنية متحركة
              </li>
              <li className="lg:text-lg text-base mt-2">
                تدريب أفراد الأمن الخاص
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-5 col-span-12">
          <div className=" shadow bg-[#F6F6F6] rounded-lg px-6 py-4 lg:mt-0 mt-10">
            <p className="font-bold lg:text-xl text-base">
              التواصل مع جهة التوظيف
            </p>
            <div className="flex items-center justify-start gap-3 bg-[#DFDFDF] rounded-lg p-2 mt-4">
              <div className="w-6 ms-2">
                <Image
                  src={`/images/common/website.png`}
                  alt="About Us"
                  width={50}
                  height={50}
                  className="w-full h-auto"
                />
              </div>
              <p className=" lg:text-lg text-base">www.elite.com</p>
            </div>
            <div className="flex items-center justify-start gap-3 bg-[#DFDFDF] rounded-lg p-2 mt-4">
              <div className="w-6 ms-2">
                <Image
                  src={`/images/common/email.png`}
                  alt="About Us"
                  width={50}
                  height={50}
                  className="w-full h-auto"
                />
              </div>
              <p className=" lg:text-lg text-base">www.elite.com</p>
            </div>
            <div className="flex items-center justify-start gap-3 bg-[#DFDFDF] rounded-lg p-2 mt-4">
              <div className="w-6 ms-2">
                <Image
                  src={`/images/common/contact.png`}
                  alt="About Us"
                  width={50}
                  height={50}
                  className="w-full h-auto"
                />
              </div>
              <p className=" lg:text-lg text-base">www.elite.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleJob;
