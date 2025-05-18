import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Single_Course = ({ translation, single_book }) => {
  const lang = useLocale();

  const courseDetails = [
    {
      icon: "/images/logos/streamline_class-lesson-solid (1).png",
      label: "نوع الحضور : ",
      value: "حضور من المقر - ",
      mid: " أو ",
      value2: "- أونلاين",
    },
    {
      icon: "/images/logos/Group 107.png",
      label: "سعر الدورة : ",
      value: "3000 ريال سعودي",
    },
    {
      icon: "/images/logos/Vector (1).png",
      label: "مدة الدورة : ",
      value: "3 أيام ( 12 ساعة إجمالي )",
    },
    {
      icon: "/images/logos/Vector (2).png",
      label: "لغة التدريب : ",
      value: "العربية",
    },
  ];

  const learningObjectives = [
    "فهم بروتوكولات السلامة الأساسية في عمليات المرافق",
    "تطبيق ممارسات كفاءة الطاقة سعودي",
    "إدارة الخدمات الخارجية بفعالية",
    "تطوير استراتيجيات الصيانة الوقائية",
  ];

  const courseContent = [
    {
      title: "الوحدة الأولى : عمليات المرافق والصيانة",
      desc: "أساسيات إدارة العمليات والصيانة في المرافق",
    },
    {
      title: "الوحدة الأولى : عمليات المرافق والصيانة",
      desc: "أساسيات إدارة العمليات والصيانة في المرافق",
    },
    {
      title: "الوحدة الأولى : عمليات المرافق والصيانة",
      desc: "أساسيات إدارة العمليات والصيانة في المرافق",
    },
    {
      title: "الوحدة الأولى : عمليات المرافق والصيانة",
      desc: "أساسيات إدارة العمليات والصيانة في المرافق",
    },
  ];

  const nextSessions = [
    {
      icon: "/images/logos/Date_Icon.png",
      label: "تاريخ بداية الدورة القادمة :",
      value: "15 يونيو 2025",
    },
    {
      icon: "/images/logos/Vector (1).png",
      label: "أخر موعد للتسجيل :",
      value: "12 يونيو 2025",
    },
  ];

  const certificates = [
    {
      title: "شهادة حضور بعد إنتهاء الدورة",
      desc: "سيحصل المشاركون على شهادة معتمدة من جمعية إدارة المرافق السعودية .",
    },
    {
      title: "شهادة إجتياز اختبار الدورة",
      desc: "سيحصل المشاركون على شهادة معتمدة من جمعية إدارة المرافق السعودية بعد اجتياز الاختبار النهائي .",
    },
  ];

  return (
    <section>
      <div className="relative w-full" dir={lang === "en" ? "ltr" : "rtl"}>
        <div className="w-full" dir={lang === "en" ? "ltr" : "rtl"}>
          {/* Image for large screens (lg and above) */}
          <div className="hidden lg:block">
            <Image
              src="/images/training/Single_Course_Bg.png"
              alt="About Us"
              width={1920}
              height={1080}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Image for small screens (mobile) */}
          <div className="hidden md:block lg:hidden ">
            <Image
              src="/images/training/Single_Course_Bg_Mobile.png"
              alt="About Us"
              width={768}
              height={432}
              className="w-full h-[16rem]"
            />
          </div>

          {/* Image for small screens (mobile) */}
          <div className="block md:hidden">
            <Image
              src="/images/training/Single_Course_Bg_Mobile.png"
              alt="About Us"
              width={768}
              height={432}
              className="w-full h-[13.6rem]"
            />
          </div>
        </div>

        <div className="absolute bottom-6 right-0 text-white container mx-auto flex flex-col gap-3 md:gap-5">
          <p className="text-lg md:text-2xl lg:text-4xl font-bold">
            إدارة المرافق المتقدمة والصيانة الوقائية
          </p>
          <p className="text-base md:text-lg lg:text-xl font-semibold">
            مقدمة من جمعية إدارة المرافق السعودية
          </p>
          <Link
            // href={`/${lang}/data_library/${course?.id}`}
            href={`/${lang}/data_library/`}
            target="_blank"
            className="inline-block"
          >
            <div className="bg-transparent w-fit text-white font-bold p-2 text-md rounded-lg mb-[18px] mt-[2px] border-2 border-white text-[12px] md:text-[14px] transition-all duration-300 hover:border-[#61B8A0] hover:bg-white hover:text-[var(--main)]">
              سجل في الدورة الآن!
            </div>
          </Link>
        </div>
      </div>

      <div className="container mx-auto">
        {/* Course Overview */}
        <div className="mt-6">
          <h1 className="text-xl lg:text-3xl font-bold mb-3">
            نظرة شاملة عن الدورة :
          </h1>
          <h3 className="text-[#555555] font-semibold text-sm lg:text-base">
            دورة شاملة في إدارة المرافق تغطي جميع الجوانب الأساسية للمهنة، مصممة
            خصيصاً للمتخصصين في القطاع.
          </h3>

          <div className="bg-[#F6F6F6] p-6 grid lg:grid-cols-2 gap-6 mt-6 mb-8">
            {courseDetails.map((item, index) => (
              <div
                key={index}
                className="bg-[#DFDFDF] gap-3 p-3 rounded-lg flex items-center"
              >
                <div className="w-7">
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <div className="text-[13px] md:text-base lg:text-lg">
                  <span className="font-bold">{item.label}</span>
                  <span>{item.value}</span>
                  {item.mid && <span className="font-bold">{item.mid}</span>}
                  {item.value2 && <span>{item.value2}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="mt-6">
          <h1 className="text-xl lg:text-3xl font-bold mb-3">أهداف التعلم :</h1>
          <div className="bg-[#F6F6F6] p-6 grid lg:grid-cols-2 gap-6 mt-6 mb-8">
            {learningObjectives.map((text, index) => (
              <div
                key={index}
                className="bg-[#DFDFDF] gap-3 p-3 rounded-lg flex items-center"
              >
                <div className="w-7">
                  <Image
                    src="/images/logos/Vector (3).png"
                    alt="objective icon"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <div className="text-[13px] md:text-base lg:text-lg">
                  <span>{text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Contents */}
        <div className="mt-6">
          <h1 className="text-xl lg:text-3xl font-bold mb-3">
            محتويات الدورة :
          </h1>
          <div className="bg-[#F6F6F6] p-6 grid gap-6 mt-6 mb-8">
            {courseContent.map((item, index) => (
              <div
                key={index}
                className="bg-[#DFDFDF] gap-3 px-2 lg:px-4 py-3 lg:py-5 rounded-lg"
              >
                <div className="text-[14px] md:text-xl lg:text-2xl font-bold mb-1 lg:mb-2">
                  {item.title}
                </div>
                <div className="text-[13px] md:text-lg lg:text-xl">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Session Dates */}
        <div className="mt-6">
          <h1 className="text-xl lg:text-3xl font-bold mb-3">
            مواعيد الدورة القادمة :
          </h1>
          <div className="bg-[#F6F6F6] p-6 grid lg:grid-cols-2 gap-6 mt-6 mb-8">
            {nextSessions.map((item, index) => (
              <div
                key={index}
                className="bg-[#DFDFDF] gap-3 p-3 rounded-lg flex items-center"
              >
                <div className="w-7">
                  <Image
                    src={item.icon}
                    alt="session icon"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <div className="text-[13px] md:text-base lg:text-lg">
                  <span className="font-bold">{item.label}</span>
                  <span>{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Dates */}
        <div className="mt-6">
          <h1 className="text-xl lg:text-3xl font-bold mb-3">الشهادات :</h1>
          <div className="bg-[#F6F6F6] p-6 grid gap-6 mt-6 mb-8">
            {certificates.map((item, index) => (
              <div
                key={index}
                className="bg-[#DFDFDF] gap-3 px-2 lg:px-4 py-3 lg:py-5 rounded-lg"
              >
                <div className="text-[14px] md:text-xl lg:text-2xl font-bold mb-1 lg:mb-2">
                  {item.title}
                </div>
                <div className="text-[13px] md:text-lg lg:text-xl">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#F6F6F6] py-10 flex flex-col items-center text-center">
        <p className="text-2xl lg:text-4xl mb-3">
          <span className="font-bold">3,000</span> ر.س
        </p>
        <p className="text-base lg:text-xl mb-4 text-[#555555]">
          شامل المواد التدريبية والشهادات المعتمدة
        </p>
        <div className="flex items-center gap-5">
          <div className="w-14">
            <Image
              src={"/images/logos/Visa_Inc._logo 1.png"}
              alt="session icon"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <div className="w-11">
            <Image
              src={"/images/logos/Mastercard-logo 1.png"}
              alt="session icon"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <div className="w-14">
            <Image
              src={"/images/logos/Apple_Pay_logo 1.png"}
              alt="session icon"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
        <p className="text-base lg:text-xl mt-3 text-[#555555]">
          يوجد خصم للمجموعات
        </p>
      </div>
      <div className="flex flex-col items-center  text-center mt-8 mb-16">
        <button className="bg-gradient-to-r from-[#7ADEC2] to-[#61B8A0] text-white font-bold py-2 px-6 rounded-md text-lg lg:text-2xl">
          سجل الآن
        </button>
        <p className="text-base lg:text-xl mt-3 text-[#555555]">
          المقاعد محدودة - احجز مقعدك الآن!
        </p>
      </div>
    </section>
  );
};

export default Single_Course;
