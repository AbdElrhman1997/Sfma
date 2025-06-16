import { useTranslations } from "next-intl";

const SearchBar = () => {
  const t = useTranslations("common");

  return (
    <div className="lg:w-1/2 w-[97%] shadow flex absolute -top-24 left-1/2 -translate-x-1/2 z-50 bg-white p-3 rounded-lg justify-between items-center gap-3">
      <input
        type="text"
        placeholder="ابحث باسم الشركة"
        className="bg-[#F6F6F6] text-[#8D99AE] outline-0 border-[1px] border-[#EDEDED] p-2 rounded-xl w-full lg:text-base text-[13px]"
      />
      <div className="cursor-pointer hover:opacity-85 bg-gradient-to-r from-[var(--second_main_gradiant)] to-[var(--second_main)] w-fit text-white lg:px-12 px-6 py-[6px] rounded-lg font-semibold lg:text-base text-[13px]">
        {t("search")}
      </div>
    </div>
  );
};

export default SearchBar;
