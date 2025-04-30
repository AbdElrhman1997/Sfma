const Video_Library = ({ translation, lang, videos = [], loading = false }) => {
  const isEmpty = !loading && videos.length === 0;

  const skeletons = Array.from({ length: 3 });

  return (
    <div dir={lang === "en" ? "ltr" : "rtl"}>
      <div className="p-0">
        <h2 className="text-[26px] font-bold text-[#1DAEE5] mb-4 text-center">
          {translation.title}
        </h2>

        <div className="grid grid-cols-12 gap-x-6 gap-y-8 justify-center mt-7 mb-3 text-start">
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
            : videos.map((video, index) => (
                <div
                  key={index}
                  className="md:col-span-4 col-span-12 mx-auto bg-white shadow-lg overflow-hidden border-b-6 border-[#61B8A0] rounded-lg"
                >
                  <div className="w-full h-56 bg-gray-200">
                    <iframe
                      className="w-full h-full"
                      src={video?.vedio_url}
                      title={video?.name || `video-${index}`}
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-800 font-bold">{video?.name}</p>
                    <p className="text-sm mt-2">{video?.description}</p>
                  </div>
                </div>
              ))}
        </div>

        {isEmpty && (
          <p className="text-center text-gray-500 mt-10">
            لا توجد فيديوهات متاحة حالياً.
          </p>
        )}
      </div>
    </div>
  );
};

export default Video_Library;
