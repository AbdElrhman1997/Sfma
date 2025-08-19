import Link from "next/link";
import React, { useState } from "react";

const CoursesTab = () => {
  const [content, setContent] = useState([
    { id: 1, name: "دليل مدير المرافق", file: "/images/", image: "/images/" },
  ]);

  return (
    <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {content?.map((book) => (
        <div
          key={book?.id}
          className="group bg-[#F6F6F6] p-4 rounded-lg shadow-md w-full min:w-72 text-center h-fit hover:scale-105 transition duration-300 lg:mx-0 mx-auto"
        >
          <div className="transition-shadow duration-300 overflow-hidden rounded-lg">
            <img
              src={`https://sffma.fmexcon.com/storage/${book?.image}`}
              alt={book?.name}
              className="object-cover h-full max-h-[17rem] w-full transition duration-300 group-hover:scale-105 group-hover:opacity-85"
            />
            <p className="relative font-bold mt-[26px] mb-4 min-h-[30px] line-clamp-2 text-ellipsis">
              {book?.name}
            </p>
          </div>

          <Link
            href={`https://sffma.fmexcon.com/storage/${book?.file}`}
            target="_blank"
            className="inline-block mt-2"
          >
            <div className="bg-[#61B8A0] text-white font-bold py-2 px-8 text-md rounded-lg">
              تحميل
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CoursesTab;
