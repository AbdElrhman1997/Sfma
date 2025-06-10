const SingleNew = () => {
  return (
    <div className="container mx-auto p-6 rounded-lg my-6">
      {/* Header */}
      <h1 className="lg:text-4xl text-lg font-bold text-[#555555] leading-relaxed">
        الجمعية السعودية لإدارة المرافق تنظم ورشة عمل حول استدامة المباني وطرق
        الحفاظ على الطاقة
      </h1>

      {/* Date and Location */}
      <div className="flex justify-start lg:text-lg text-[14px] text-gray-600 lg:my-6 my-2">
        <span>1 أغسطس 2025</span>
      </div>

      <div className="lg:px-24 md:px-12">
        {/* Image Placeholder */}
        <div className="my-8">
          <div className="w-full h-80 bg-gray-300 flex items-center justify-center rounded-lg">
            <span className="text-gray-600">صورة المؤتمر (غير متوفرة)</span>
          </div>
        </div>

        <p className="lg:text-xl text-base mb-6 leading-relaxed lg:text-justify text-center">
          نظمت الجمعية السعودية لإدارة المرافق ورشة عمل متخصصة حول &quot;استدامة
          المباني وتطبيقات كفاءة الطاقة في المرافق&quot; بحضور أكثر من ١٥٠ مختص
          ومهتم في مجال إدارة المرافق. وتأتي هذه الورشة ضمن سلسلة الفعاليات التي
          تنظمها الجمعية لتعزيز الوعي بأهمية الاستدامة في قطاع المرافق.{" "}
        </p>

        {/* Goals Section */}
        <h2 className="lg:text-3xl text-xl font-bold mb-4">
          أهداف المعرض والمؤتمر
        </h2>
        <ul className="list-disc list-inside text-lg mb-10 space-y-2 lg:text-base text-[13px]">
          <li>التحديات التي تواجه تطبيق معايير الاستدامة في المباني القائمة</li>
          <li>التحديات التي تواجه تطبيق معايير الاستدامة في المباني القائمة</li>
          <li>التحديات التي تواجه تطبيق معايير الاستدامة في المباني القائمة</li>
          <li>التحديات التي تواجه تطبيق معايير الاستدامة في المباني القائمة</li>
        </ul>

        {/* Target Audience Section */}
        <h2 className="lg:text-3xl text-xl font-bold mb-2">الفئات المستهدفة</h2>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed lg:text-base text-[13px]">
          شهدت الورشة مشاركة واسعة من ممثلي القطاعين العام والخاص، بما في ذلك
          وزارة الطاقة، وزارة الإسكان، والهيئة السعودية للمدن الصناعية ومناطق
          التقنية &quot;مدن&quot;، بالإضافة إلى شركات متخصصة في مجال إدارة
          المرافق وتقنيات البناء المستدام.
        </p>
      </div>
    </div>
  );
};

export default SingleNew;
