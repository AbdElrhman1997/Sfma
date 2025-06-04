import { useLocale } from "next-intl";
import Image from "next/image";

const HowWeHelp = () => {
  const lang = useLocale();

  return (
    <section
      className={` gap-8 container mx-auto mt-8 bg-[#F6F6F6] lg:py-10 py-6 ${
        lang == "en" ? "md:text-left" : "md:text-right"
      } text-center`}
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div className="">
        <h2 className="text-3xl font-bold text-[#1DAEE5] mb-3 text-center">
          كيف نساعدك
        </h2>
        <p className="text-[#898989] mb-6 text-center">
          منهجيتنا المتكاملة في تقديم الاستشارات تضمن حلولاً مستدامة وفعالة
        </p>
      </div>
      <section
        className={`grid lg:grid-cols-3 grid-cols-1 gap-8 container mx-auto ${
          lang == "en" ? "md:text-left" : "md:text-right"
        } text-center`}
        dir={lang == "en" ? "ltr" : "rtl"}
      >
        <div className="flex flex-col items-center bg-white shadow-lg px-3 py-7">
          <p className="w-14 h-14 text-white lg:text-2xl text-lg flex items-center justify-center bg-[var(--main)] rounded-full">
            1
          </p>
          <h1 className="lg:text-2xl text-lg font-bold mt-2 mb-3">
            فهم احتياجاتك
          </h1>
          <h3 className="text-center">
            نبدأ بجلسة استماع مفصلة لفهم التحديات التي تواجهها والأهداف التي
            تسعى لتحقيقها في إدارة المرافق.
          </h3>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg px-3 py-7">
          <p className="w-14 h-14 text-white lg:text-2xl text-lg flex items-center justify-center bg-[var(--main)] rounded-full">
            2
          </p>
          <h1 className="lg:text-2xl text-lg font-bold mt-2 mb-3">
            تحديد الحلول المناسبة
          </h1>
          <h3 className="text-center">
            يقوم فريق الخبراء لدينا بتطوير حلول مخصصة تناسب احتياجاتك الفريدة
            وتتوافق مع أفضل الممارسات العالمية.
          </h3>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg px-3 py-7">
          <p className="w-14 h-14 text-white lg:text-2xl text-lg flex items-center justify-center bg-[var(--main)] rounded-full">
            3
          </p>
          <h1 className="lg:text-2xl text-lg font-bold mt-2 mb-3">
            تقديم الدعم والمتابعة
          </h1>
          <h3 className="text-center">
            لا ينتهي دورنا عند تقديم الحلول، بل نستمر في دعمك ومتابعة التنفيذ
            لضمان تحقيق النتائج المرجوة.
          </h3>
        </div>
      </section>
    </section>
  );
};

export default HowWeHelp;
