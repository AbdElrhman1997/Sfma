import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Events = () => {
  const lang = useLocale();
  const courses = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  return (
    <section className="container mx-auto">
      <div>
        <h2 className="lg:text-3xl text-xl font-bold text-[#1DAEE5] lg:mb-3 mb-2 text-center mt-9">
          فعاليات SFMA
        </h2>
        <p className="text-[#555555] text-center lg:text-base text-sm md:mb-8 mb-4">
          كن جزءًا من أهم الأحداث في مجال إدارة المرافق
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 justify-center items-center pt-4">
        {courses.map((item, index) => (
          <div
            key={index}
            className="max-w-sm lg:mx-0 mx-auto bg-white rounded-lg overflow-hidden shadow-md px-4 pt-4"
          >
            <div className="w-full">
              <Image
                src="/images/common/events__card_bg.jpg"
                alt="About Us"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold leading-tight text-[#555555]">
                المؤتمر والمعرض الدولي لإدارة المرافق 2025
              </h3>
              <div className="flex gap-x-10">
                <div className="flex items-center justify-start gap-3 mt-2">
                  <div className="w-4">
                    <Image
                      src="/images/logos/Date_Icon.png"
                      alt="About Us"
                      width={50}
                      height={50}
                      className="w-full h-auto translate-y-1"
                    />
                  </div>
                  <p className=" lg:text-lg text-base mt-2">تاريخ الحدث</p>
                </div>
                <div className="flex items-center justify-start gap-3 mt-2">
                  <div className="w-5">
                    <Image
                      src="/images/logos/Vector (1).png"
                      alt="About Us"
                      width={50}
                      height={50}
                      className="w-full h-auto rounded-lg translate-y-1"
                    />
                  </div>
                  <p className=" lg:text-lg text-base mt-2">توقيت الحضور</p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-3 mt-2">
                <div className="w-4">
                  <Image
                    src="/images/logos/location_main.png"
                    alt="About Us"
                    width={50}
                    height={50}
                    className="w-full h-auto rounded-lg translate-y-1.5"
                  />
                </div>
                <p className=" lg:text-lg text-base mt-2">مكان الحضور</p>
              </div>
              <Link
                href={`/${lang}/events/${item?.id}`}
                className="mt-4 text-[var(--main)] flex items-center justify-start text-primary font-semibold cursor-pointer"
              >
                <span className="lg:text-base text-[14px] font-bold">
                  عرض التفاصيل
                </span>
                <div className={`${lang == "en" ? "rotate-y-180" : ""}`}>
                  <Image
                    src="/images/logos/arrow-left.svg"
                    alt="About Us"
                    width={16}
                    height={16}
                    className=" rounded-lg mx-2 translate-y-0.5"
                  />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link
        href={`/${lang}/events/all`}
        className="cursor-pointer block mx-auto hover:opacity-85 mt-8 text-center bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white px-3 py-2 rounded-lg font-semibold"
      >
        عرض جميع الفعاليات
      </Link>
    </section>
  );
};

export default Events;
