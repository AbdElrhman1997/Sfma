"use client";
import Image from "next/image";
import React, { useState } from "react";

const data = [
  {
    id: "2025-00123",
    name: "د. مقدمة في إدارة المرافق",
    date: "23 / 4 / 2025",
    status: "مدفوعة",
    amount: 1200,
  },
  {
    id: "2025-00123",
    name: "د. مقدمة في إدارة المرافق",
    date: "23 / 4 / 2025",
    status: "قيد الانتظار",
    amount: 1300,
  },
  {
    id: "2025-00123",
    name: "د. مقدمة في إدارة المرافق",
    date: "23 / 4 / 2025",
    status: "مدفوعة",
    amount: 1500,
  },
];

const PaymentsTab = ({ profileData }) => {
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [filtered, setFiltered] = useState(data);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    const result = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(result);
  };

  const handleSortAmount = () => {
    const sorted = [...filtered].sort((a, b) =>
      sortAsc ? a.amount - b.amount : b.amount - a.amount
    );
    setSortAsc(!sortAsc);
    setFiltered(sorted);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="ابحث عن العميل..."
        className="mb-6 px-3 py-2 border border-gray-300 rounded-md w-full md:w-1/3"
        value={search}
        onChange={handleSearch}
      />
      <div className="overflow-x-auto">
        <table className="text-center w-full bg-[#F6F6F6] border-separate border-spacing-y-4 border border-gray-200 rounded-lg min-w-[700px]">
          <thead className="bg-[#EDEDED] -translate-y-4">
            <tr>
              <th className="w-[100px] px-4 py-4 rounded-tr-lg"></th>
              <th className="w-[100px] px-4 py-4">النوع</th>
              <th className="w-[100px] px-4 py-4">فاتورة رقم</th>
              <th className="px-4 py-4">تاريخ</th>
              <th
                className="px-4 py-2 rounded-tl-lg"
                onClick={handleSortAmount}
              >
                السعر {sortAsc ? "↑" : "↓"}
              </th>
              <th className="px-4 py-4"></th>
            </tr>
          </thead>
          <tbody className="border-separate border-spacing-y-4 border-spacing-x-0">
            {filtered.map((item) => (
              <tr key={item.id} className="bg-white rounded-lg overflow-hidden">
                <td className="px-4 py-4 font-medium rounded-s-lg min-w-[300px] flex items-center">
                  <div className="bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-12 h-12 text-white rounded-md text-[12px] mx-auto flex justify-center items-center">
                    <div className="w-6">
                      <Image
                        src={"/images/logos/certified.png"}
                        alt="session icon"
                        width={500}
                        height={500}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div>{item.name}</div>
                </td>
                <td className="px-4 py-4 font-medium min-w-[180px]">
                  <div className="bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] w-fit text-white px-3 py-[6px] rounded-full text-[12px] mx-auto">
                    عضوية
                  </div>
                </td>
                <td className="px-4 py-4 min-w-[180px]">{item.id}</td>
                <td className="px-4 py-4 min-w-[180px]">{item.date}</td>
                <td className="px-4 py-4 rounded-e-lg min-w-[180px]">
                  {item.amount} ر.س
                </td>
                <td className="px-4 py-4 rounded-e-lg min-w-[180px] flex items-center gap-x-5">
                  <div className="w-5">
                    <Image
                      src={"/images/logos/preview_payments.png"}
                      alt="session icon"
                      width={500}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="w-5">
                    <Image
                      src={"/images/logos/download_payments.png"}
                      alt="session icon"
                      width={500}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-4 text-gray-500 bg-white rounded-lg"
                >
                  لا توجد نتائج للبحث
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentsTab;
