import { useLocale } from "next-intl";
import Link from "next/link";

const Notifications = () => {
  const lang = useLocale();

  const NotificationCard = ({
    time,
    isRead = false,
  }: {
    time: string;
    isRead?: boolean;
  }) => (
    <Link
      href={`/${lang}/notifications/1`}
      className={`block shadow rounded-lg px-6 pb-4 mt-6 hover:opacity-85 cursor-pointer ${
        isRead ? "bg-[#FBFBFB] border-[1px] border-[#E4E4E4]" : "bg-[#D3DFE9]"
      }`}
    >
      <div className="flex flex-wrap justify-between items-center">
        <h3
          className={`lg:text-xl text-base  translate-y-1 ${
            isRead ? "font-semibold" : "font-bold"
          }`}
        >
          عنوان الإشعار
        </h3>
        <div className="flex items-center gap-4">
          <div
            className={`lg:text-base text-[13px] mt-4 text-center w-fit px-3 py-2 rounded-full font-semibold ${
              isRead
                ? "bg-[#8D99AE] text-white"
                : "bg-[#61B8A06B] text-[#1E614E]"
            }`}
          >
            {time}
          </div>
        </div>
      </div>
      <p className="lg:text-lg text-[14px] mt-2 text-justify truncate">
        نبحث عن مدير إدارة مرافق ذو خبرة للإشراف على جميع جوانب إدارة المرافق في
        مجمعاتنا التجارية والسكنية الفاخرة. سيكون المرشح المثالي مسؤولاً عن
        قيادة فريق متعدد التخصصات، وإدارة عقود الموردين، وضمان الامتثال للمعايير
        الوطنية والدولية، وتحسين كفاءة التشغيل. نحن نقدر المهنيين الذين يجمعون
        بين المهارات التقنية القوية والقدرة على التفكير الاستراتيجي لتقديم بيئات
        آمنة ومريحة ومستدامة لعملائنا.
      </p>
    </Link>
  );

  return (
    <section
      className="container mx-auto lg:mb-24 mb-14"
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <h1 className="lg:text-4xl text-2xl text-[#555555] font-bold mt-12">
        الإشعارات
      </h1>

      <div className="flex flex-wrap justify-between items-center">
        <h3 className="lg:text-lg text-base text-[#555555] lg:mt-0 mt-4">
          اطلع على كل ما يخص حسابك بشكل منظم وسهل
        </h3>
        <div className="flex items-center gap-4">
          <div className="cursor-pointer hover:opacity-85 mt-4 text-center bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white px-3 py-2 rounded-lg font-semibold">
            تحديد الكل كمقروء
          </div>
        </div>
      </div>

      <div className="mt-10">
        {/* غير مقروء */}
        <NotificationCard time="منذ ساعتين" />
        <NotificationCard time="منذ ساعتين" />
      </div>

      <div className="lg:mt-20 mt-12">
        {/* مقروء */}
        <NotificationCard time="15 مايو، 09:00" isRead />
        <NotificationCard time="15 مايو، 09:00" isRead />
        <NotificationCard time="15 مايو، 09:00" isRead />
      </div>
    </section>
  );
};

export default Notifications;
