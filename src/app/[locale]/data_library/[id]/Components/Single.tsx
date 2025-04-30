import Image from "next/image";
import Link from "next/link";

const Single = ({ translation, single_book }) => {
  return (
    <div className="min-h-screen container mx-auto">
      <div className="flex flex-col md:flex-row w-full rounded-lg overflow-hidden pt-16 pb-12">
        {/* Left Section: Book Cover */}
        <div className="md:w-1/3 w-full">
          <Image
            src={`https://just.isamstore.com/storage/${single_book?.image}`}
            alt="Book Cover"
            width={300}
            height={450}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Section: Book Description */}
        <div className="md:w-2/3 w-full p-6 flex flex-col justify-between">
          <div>
            {/* Arabic Title */}
            <h1 className="text-3xl font-bold text-start mb-2">
              {single_book?.name}
            </h1>

            {/* English Title */}
            <h2 className="text-base text-[#616060] mb-3">
              {single_book?.author}
            </h2>

            {/* Description */}
            <p className="mb-4 text-justify leading-6">
              {single_book?.description}
            </p>
          </div>

          {/* Button */}
          <Link
            href={`https://just.isamstore.com/storage/${single_book?.file}`}
            className="text-start cursor-pointer"
            target="_blank"
          >
            <button className="bg-[#61B8A0] text-white px-6 py-2 rounded-lg hover:bg-[#5d9887] transition cursor-pointer">
              {translation.read_book}
            </button>
          </Link>
        </div>
      </div>
      <Link
        href={`https://just.isamstore.com/storage/${single_book?.file}`}
        target="_blank"
      >
        <div
          className="relative w-[300px] h-[450px] bg-cover bg-center mx-auto mb-16"
          style={{
            backgroundImage: single_book?.image
              ? `url(https://just.isamstore.com/storage/${single_book?.image})`
              : "url(https://just.isamstore.com/storage/fallback-image.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-[#00000092] flex items-center justify-center cursor-pointer">
            <h2 className="text-3xl font-bold text-white">
              {translation.show_book}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Single;
