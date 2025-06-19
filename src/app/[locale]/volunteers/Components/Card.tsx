import Image from "next/image";
import Link from "next/link";

const Card = ({ subscription, lang, translation }) => {
  const formatter = new Intl.NumberFormat("en-US");

  return (
    <div className="min-w-[330px] w-fit mx-auto bg-[#F6F6F6] shadow-md rounded-lg px-6 pb-8 text-center space-y-4 relative hover:scale-105 transition duration-300 cursor-pointer hover:shadow-xl">
      <div className="flex justify-center">
        <img
          src={`https://sfma.srv814693.hstgr.cloud/storage/${subscription?.icon}`}
          alt="Diamond Badge"
          className="absolute top-0 left-1/2 -translate-1/2"
          width={100}
          height={100}
        />
      </div>
      <h3 className="text-[#61B8A0] font-bold text-2xl mt-16 mb-4">
        {subscription?.name}
      </h3>
      <p className="text-gray-600 font-medium mb-9">
        <span className="text-black font-bold text-2xl">
          {formatter.format(subscription?.price)}
        </span>{" "}
        {translation.currency}
      </p>
      <Link
        href={`/${lang}/volunteers/${subscription?.id}`}
        className="bg-[#61B8A0] hover:bg-[#6aa393] text-white font-bold py-2 px-4 rounded cursor-pointer text-base"
      >
        {translation.memberships_advantages}
      </Link>
    </div>
  );
};

export default Card;
