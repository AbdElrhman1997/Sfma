import { createTranslator } from "next-intl";
import Image from "next/image";
import React from "react";

const Page = async ({ params }) => {
  const { locale } = params;
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({
    locale,
    messages,
    namespace: "Data_Library",
  });

  return (
    <section
      className="container mx-auto p-6 mt-6"
      dir={locale == "en" ? "ltr" : "rtl"}
    >
      <div className="bg-[#F6F6F6] lg:max-w-2/3 mx-auto shadow flex items-center justify-start lg:col-span-1 md:col-span-2 col-span-3 rounded-md text-center lg:p-6 p-4">
        <div className="lg:w-32 w-28 border-2 border-[var(--second_main)] rounded-lg">
          <Image
            src="/images/common/test_trainer.png"
            alt="About Us"
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-lg "
          />
        </div>
        <div className="ms-4">
          <p className="font-bold lg:text-xl text-base">م. أحمد الغامدي</p>
          <p className="lg:text-base text-[13px] mt-1">مدرب معتمد</p>
        </div>
      </div>
      <div className="lg:max-w-2/3 mx-auto">
        <p className="font-bold mt-5 mb-2">السيرة المهنية</p>
        <p className="text-justify font-semibold lg:text-base text-[13px]">
          يمتلك المهندس أحمد الغامدي خبرة مهنية غنية تمتد لأكثر من 15 عامًا في
          مجال إدارة المرافق والطاقة، وقد تدرّج خلالها في مناصب استشارية
          وتنفيذية داخل عدد من أبرز المؤسسات الحكومية والخاصة في المملكة العربية
          السعودية ودول مجلس التعاون الخليجي. خلال مسيرته العملية، شغل منصب
          مستشار رئيسي للطاقة المستدامة في عدد من المشاريع الوطنية الكبرى، بما
          في ذلك مبادرات تحسين كفاءة الطاقة في المدن الذكية، وتطوير استراتيجيات
          خضراء لخفض استهلاك الطاقة في المنشآت العامة والخاصة. يحمل المهندس أحمد
          درجة الدكتوراه في هندسة الطاقة المستدامة من جامعة الملك عبدالله للعلوم
          والتقنية (KAUST)، حيث أجرى أبحاثًا متقدمة تركز على تحسين أداء الطاقة
          في المباني التجارية والسكنية باستخدام تقنيات الذكاء الصناعي والتحليل
          البيئي. وقد نُشرت له أكثر من 12 ورقة علمية محكّمة في مجلات دولية
          مرموقة، وتناولت دراساته مواضيع مثل نظم إدارة الطاقة الذكية، وتكامل
          مصادر الطاقة المتجددة في البنية التحتية للمرافق، وحلول التبريد
          والتكييف المستدامة في المناخات الحارة. حاليًا، يشغل منصب المدير
          التنفيذي لإدارة المرافق في إحدى أكبر الشركات الاستثمارية بالمملكة، حيث
          يشرف على تخطيط وتنفيذ استراتيجيات الصيانة والتشغيل لأكثر من 50 منشأة
          في مختلف مناطق المملكة، ويقود فرقًا متعددة التخصصات تضم مهندسين وفنيين
          وخبراء بيئة.
        </p>
      </div>
    </section>
  );
};

export default Page;
