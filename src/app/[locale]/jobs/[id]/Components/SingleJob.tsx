import { useLocale } from "next-intl";
import Image from "next/image";

const SingleJob = () => {
  const lang = useLocale();

  return (
    <section className="container mx-auto" dir={lang == "en" ? "ltr" : "rtl"}>
      <h1 className="lg:text-4xl text-2xl text-[#555555] font-bold mt-12">
        اسم الوظيفة مثال : مدير إدارة مرافق
      </h1>
      <div className="flex flex-wrap justify-between items-center">
        <h3 className="lg:text-lg text-base text-[#555555] lg:mt-0 mt-4">
          اسم الشركة : مثال شركة النخبة - الرياض
        </h3>
        <div className="flex items-center gap-4">
          <div className="cursor-pointer hover:opacity-85 mt-4 text-center bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white px-3 py-2 rounded-lg font-semibold">
            دوام كامل
          </div>
          <div className="cursor-pointer hover:opacity-85 mt-4 text-center bg-gradient-to-r from-[#888888] to-[#555555] w-fit text-white px-3 py-2 rounded-lg font-semibold">
            تم النشر في 10 مايو 2025
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 lg:gap-16 lg:mt-12 mt-6">
        <div className="lg:col-span-7 col-span-12 ">
          <div className="shadow bg-[#F6F6F6] rounded-lg px-6 py-4">
            <p className="font-bold lg:text-xl text-base">تفاصيل الوظيفة</p>
            <ul className="list-disc ps-5 mt-1">
              <li className="lg:text-lg text-base mt-2">
                <span className="font-bold">ساعات العمل</span> : 8 ساعات يومياً
                5 أيام في الأسبوع
              </li>
              <li className="lg:text-lg text-base mt-2">
                <span className="font-bold">مدة العقد</span> : سنتان قابلة
                للتجديد
              </li>
              <li className="lg:text-lg text-base mt-2">
                <span className="font-bold">الراتب</span> : 8000 ريال
              </li>
              <li className="lg:text-lg text-base mt-2">
                <span className="font-bold">موقع العمل</span> : الرياض
              </li>
            </ul>
          </div>
          <div className="shadow bg-[#F6F6F6] rounded-lg px-6 py-4 mt-10">
            <p className="font-bold lg:text-xl text-base">وصف الوظيفة</p>
            <p className="lg:text-lg text-base mt-2 lg:text-justify text-center">
              نبحث عن مدير إدارة مرافق ذو خبرة للإشراف على جميع جوانب إدارة
              المرافق في مجمعاتنا التجارية والسكنية الفاخرة. سيكون المرشح
              المثالي مسؤولاً عن قيادة فريق متعدد التخصصات، وإدارة عقود
              الموردين، وضمان الامتثال للمعايير الوطنية والدولية، وتحسين كفاءة
              التشغيل. نحن نقدر المهنيين الذين يجمعون بين المهارات التقنية
              القوية والقدرة على التفكير الاستراتيجي لتقديم بيئات آمنة ومريحة
              ومستدامة لعملائنا.
            </p>
          </div>
          <div className="shadow bg-[#F6F6F6] rounded-lg px-6 py-4 mt-10">
            <p className="font-bold lg:text-xl text-base">المهام والمسؤوليات</p>
            <ul className="list-disc ps-5 mt-1">
              <li className="lg:text-lg text-base mt-2">
                تطوير وتنفيذ استراتيجيات لتحسين كفاءة الطاقة وتقليل التكاليف
                التشغيلية
              </li>
              <li className="lg:text-lg text-base mt-2">
                تطوير وتنفيذ استراتيجيات لتحسين كفاءة الطاقة وتقليل التكاليف
                التشغيلية
              </li>
              <li className="lg:text-lg text-base mt-2">
                تطوير وتنفيذ استراتيجيات لتحسين كفاءة الطاقة وتقليل التكاليف
                التشغيلية
              </li>
              <li className="lg:text-lg text-base mt-2">
                تطوير وتنفيذ استراتيجيات لتحسين كفاءة الطاقة وتقليل التكاليف
                التشغيلية
              </li>
              <li className="lg:text-lg text-base mt-2">
                تطوير وتنفيذ استراتيجيات لتحسين كفاءة الطاقة وتقليل التكاليف
                التشغيلية
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
          <div className=" shadow bg-[#F6F6F6] rounded-lg px-6 py-4 mt-10">
            <p className="font-bold lg:text-xl text-base">نبذة عن الشركة</p>
            <div className=" mt-6 bg-white w-full p-4 rounded-lg">
              <div className="w-16 mx-auto">
                <Image
                  src={`/images/common/cards_icon.png`}
                  alt="About Us"
                  width={50}
                  height={50}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <p className=" lg:text-base text-[14px] text-justify leading-7 mt-5">
              شركة النخبة هي شركة رائدة في مجال إدارة وتطوير العقارات في المملكة
              العربية السعودية منذ عام 2010. تتخصص الشركة في إدارة المجمعات
              التجارية والسكنية الفاخرة، وتلتزم بتقديم أعلى معايير الجودة
              والخدمة لعملائها. تضم الشركة فريقاً من المحترفين ذوي الخبرة في
              مختلف مجالات إدارة المرافق والعقارات.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleJob;
