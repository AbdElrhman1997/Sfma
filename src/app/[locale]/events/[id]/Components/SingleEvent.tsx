import { useLocale } from "next-intl";
import Image from "next/image";

const SingleEvent = () => {
  const lang = useLocale();

  return (
    <section className="" dir={lang == "en" ? "ltr" : "rtl"}>
      <div className="container mx-auto">
        <h1 className="lg:text-4xl text-2xl text-[#555555] font-bold mt-12">
          المؤتمر والمعرض الدولي لإدارة المرافق 2025
        </h1>
        <div className="flex flex-wrap justify-between items-center">
          <h3 className="lg:text-lg text-base text-[#555555] lg:mt-0 mt-4">
            أكبر تجمع لخبراء إدارة المرافق في المملكة العربية السعودية
          </h3>
          <div className="cursor-pointer lg:text-base text-[12px] hover:opacity-85 mt-4 text-center bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white px-3 py-2 rounded-lg font-semibold">
            زيارة الموقع الرسمي للفعالية
          </div>
        </div>
        <div className="flex flex-wrap gap-x-7">
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
            <p className=" lg:text-lg text-[12px] mt-2">
              من 24 إلى 26 أغسطس 2025
            </p>
          </div>
          <div className="flex items-center justify-start gap-3 my-1">
            <div className="w-4">
              <Image
                src="/images/logos/location_main.png"
                alt="About Us"
                width={50}
                height={50}
                className="w-full h-auto rounded-lg translate-y-1"
              />
            </div>
            <p className=" lg:text-lg text-[12px] mt-2">
              مركز الرياض الدولي للمعارض والمؤتمرات
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F6F6F6] py-8 lg:mt-10 mt-6">
        <p className="text-[var(--main)] text-center lg:text-3xl text-xl font-bold">
          نبذة عن الحدث
        </p>
        <p className="text-[#555555] text-center mx-auto mt-2 leading-7 lg:text-base text-[13px]">
          نحو مرافق ذكية ومستدامة تلبي تطلعات المستقبل
        </p>
        <section
          className={`flex flex-col md:flex-row items-center justify-between gap-8 container mx-auto md:pt-4 pt-2 `}
        >
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-black text-justify lg:mb-6 lg:px-6 lg:leading-8 leading-6 lg:text-base text-[13px]">
              يأتي المؤتمر والمعرض الدولي لإدارة المرافق لعام 2025 في نسخته
              الثانية تحت شعار “ذكاء المرافق”، ليكون منصة رائدة تجمع بين الخبراء
              المحليين والعالميين، وصناع القرار، والمبتكرين في مجال إدارة
              المرافق. يهدف المؤتمر إلى استعراض أحدث التطورات والتقنيات في إدارة
              المرافق الذكية، وتبادل الخبرات وأفضل الممارسات لتحقيق مستقبل
              مستدام وذكي. يتماشى المؤتمر مع أهداف رؤية 2030 للمملكة العربية
              السعودية، التي تسعى لتحويل المملكة إلى نموذجٍ عالمي في مختلف جوانب
              الحياة، بدءًا من الاقتصاد المستدام إلى التكنولوجيا الحديثة. من
              خلال تعزيز الابتكار في إدارة المرافق، يساهم المؤتمر في تحقيق هذه
              الرؤية الطموحة عبر تطوير البنية التحتية الذكية وتحقيق كفاءة أعلى
              في إدارة الموارد.
            </p>
          </div>
          <div className="lg:w-1/2 lg:p-6 w-full">
            <Image
              src="/images/common/events__card_bg.jpg"
              alt="About Us"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </section>
      </div>
      <div className="lg:w-1/2 lg:p-6 w-full mt-6  mx-auto opacity-85">
        <Image
          src="/images/common/events__card_bg.jpg"
          alt="About Us"
          width={500}
          height={400}
          className="w-full h-auto"
        />
      </div>
      <div className="cursor-pointer mx-auto lg:text-base text-[12px] hover:opacity-85 mt-3 text-center bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white px-4 py-3 rounded-lg font-semibold">
        زيارة الموقع الرسمي للفعالية
      </div>
    </section>
  );
};

export default SingleEvent;
