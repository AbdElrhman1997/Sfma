import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const SingleNotification = () => {
  const lang = useLocale();

  return (
    <section className="container mx-auto" dir={lang === "en" ? "ltr" : "rtl"}>
      <div
        className={`block bg-[#F6F6F6] shadow rounded-lg px-6 pb-4 mt-16 pt-6 lg:w-2/3 mx-auto`}
      >
        <Link
          className="flex items-center gap-1 text-[var(--second_main)] font-bold text-lg hover:opacity-80 cursor-pointer mb-3"
          href={`/${lang}/notifications`}
        >
          <GoArrowRight className="text-xl" />
          <p className="">عودة للإشعارات</p>
        </Link>
        <h3 className={`lg:text-2xl text-lg  translate-y-1 font-bold`}>
          تمت الموافقة على طلب عضويتك بنجاح
        </h3>
        <div className="flex items-center justify-start gap-3">
          <div className="w-5">
            <Image
              src="/images/common/time.png"
              alt="About Us"
              width={50}
              height={50}
              className="w-full h-auto rounded-lg translate-y-1.5"
            />
          </div>
          <p className=" lg:text-lg text-base mt-2">10 مايو 2025 – 16:20</p>
        </div>
        <p className="lg:text-lg text-[14px] mt-2 text-justify">
          نُحيطكم علمًا بأنه قد تم الانتهاء من مراجعة البيانات الخاصة بطلب
          عضويتكم في جمعية إدارة المرافق السعودية، وتمت الموافقة عليه بنجاح.
          أصبحت عضويتكم الآن فعالة، ويمكنكم الاطلاع على كافة تفاصيلها من خلال
          ملفكم الشخصي في المنصة.
        </p>
      </div>
      <Link
        href={`/${lang}/notifications`}
        className="cursor-pointer block mx-auto hover:opacity-85 mt-8 text-center bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white px-3 py-2 rounded-lg font-semibold"
      >
        عرض عضويتي
      </Link>
    </section>
  );
};

export default SingleNotification;
