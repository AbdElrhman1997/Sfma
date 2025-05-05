import Card from "./Card";

const Volunteers = ({
  translation,
  lang,
  subscriptions = [],
  loading = false,
}) => {
  const isEmpty = !loading && subscriptions.length === 0;

  const skeletons = Array.from({ length: 3 });

  return (
    <div dir={lang === "en" ? "ltr" : "rtl"}>
      <div className="p-0">
        <h2 className="md:text-[26px] text-[22px] font-bold text-[#1DAEE5] mb-1 text-center">
          {translation.title}
        </h2>
        <h3 className="md:text-[16px] text-[14px] font-semibold mb-4 text-center">
          {translation.sub_title}
        </h3>

        <div className="flex justify-center flex-wrap md:gap-x-8 gap-y-8 mt-7 mb-3 text-start">
          {loading
            ? skeletons.map((_, index) => (
                <div
                  key={index}
                  className="md:col-span-4 col-span-12 mx-auto bg-white shadow-lg overflow-hidden border-b-6 border-[#61B8A0] rounded-lg animate-pulse"
                >
                  <div className="w-full h-56 bg-gray-300"></div>
                  <div className="p-4">
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))
            : subscriptions.map((subscription, index) => (
                <div className="mt-12" key={index}>
                  <Card
                    subscription={subscription}
                    lang={lang}
                    translation={translation}
                  />
                </div>
              ))}
        </div>

        {isEmpty && (
          <p className="text-center mt-10 md:text-4xl text-3xl font-bold leading-loose">
            {translation.no_data_available}
          </p>
        )}
      </div>
    </div>
  );
};

export default Volunteers;
