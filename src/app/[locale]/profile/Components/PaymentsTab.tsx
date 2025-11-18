"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const PaymentsTab = () => {
  const t = useTranslations("PaymentsTab");
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const lang = useLocale();

  const orderStatusStyles = {
    pending: "from-yellow-400 to-yellow-500 text-white",
    completed: "from-green-500 to-green-600 text-white",
    canceled: "from-red-500 to-red-600 text-white",
    refunded: "from-blue-500 to-blue-600 text-white",
  };

  const paymentStatusStyles = {
    Paid: "from-green-500 to-green-600 text-white",
    Unpaid: "from-red-500 to-red-600 text-white",
    pending: "from-gray-500 to-gray-600 text-white",
  };

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      const token = localStorage.getItem("auth_token");

      const url = `${
        process.env.NEXT_PUBLIC_API_URL
      }orders/user-orders?sort_by=${
        sortAsc ? "recent" : "oldest"
      }&search=${encodeURIComponent(search)}`;

      try {
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Accept-Language": lang,
          },
        });

        const data = await res.json();

        if (data.status === 200) {
          const mappedData = data.data.orders.map((order) => ({
            id: order.id,
            uuid: order.uuid,
            name: order.relative_details.title
              ? order.relative_details.title
              : order.relative_details.name,

            type: order.type,

            order_status: order.status, // pending/completed/canceled/refunded

            payment_status_text: order.payment_status_text, // Paid - UnPaid

            payment_status:
              order.payment_status_text === "Paid"
                ? t("statusPaid")
                : t("statusPending"),

            date: new Date(order.created_at)
              .toLocaleDateString(lang, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })
              .split("/")
              .join(" / "),

            amount: parseFloat(order.total_amount),
          }));

          setFiltered(mappedData);
        } else {
          setFiltered([]);
        }
      } catch (err) {
        console.error(err);
        setFiltered([]);
      }

      setLoading(false);
    };

    fetchOrders();
  }, [search, sortAsc, lang, t]);

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
        placeholder={t("searchPlaceholder")}
        className="mb-6 px-3 py-2 border border-gray-300 rounded-md w-full md:w-1/3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <div className="p-4 text-center">{t("loading")}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="text-center w-full bg-[#F6F6F6] border-separate border-spacing-y-4 border border-gray-200 rounded-lg min-w-[700px]">
            <thead className="bg-[#EDEDED] -translate-y-4">
              <tr>
                <th className="w-[100px] px-4 py-4 rounded-tr-lg">
                  {t("table.name")}
                </th>
                <th className="w-[100px] px-4 py-4">{t("table.type")}</th>
                <th className="w-[120px] px-4 py-4">
                  {t("table.invoiceNumber")}
                </th>
                <th className="px-4 py-4">{t("table.date")}</th>
                <th className="px-4 py-4">{t("table.paymentStatus")}</th>
                <th className="px-4 py-4">{t("table.orderStatus")}</th>
                <th
                  className="px-4 py-2 rounded-tl-lg"
                  onClick={handleSortAmount}
                >
                  {t("table.price")} {sortAsc ? "↑" : "↓"}
                </th>
                <th className="px-4 py-4">{t("table.actions")}</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((item) => (
                <tr key={item.id} className="bg-white rounded-lg">
                  <td className="px-4 pt-7 font-medium rounded-s-lg min-w-[300px] flex items-center gap-x-4">
                    <div className="bg-gradient-to-r from-[var(--main_gradiant)] to-[var(--main)] min-w-12 h-12 text-white rounded-md text-[12px] flex justify-center items-center">
                      <Image
                        src="/images/logos/certified.png"
                        alt="icon"
                        width={40}
                        height={40}
                        className="w-6 h-6"
                      />
                    </div>
                    <div className="text-start leading-7">{item.name}</div>
                  </td>

                  <td className="px-4 py-4 font-medium">{item.type}</td>
                  <td className="px-4 py-4">{item.uuid}</td>
                  <td className="px-4 py-4">{item.date}</td>

                  {/* Payment Status */}
                  <td className="px-4 py-4">
                    <div
                      className={`bg-gradient-to-r ${
                        paymentStatusStyles[item.payment_status_text]
                      } w-fit text-white px-3 py-[6px] rounded-full text-[12px] mx-auto capitalize`}
                    >
                      {t(`paymentStatus.${item.payment_status_text}`)}
                    </div>
                  </td>

                  {/* Order Status */}
                  <td className="px-4 py-4">
                    <div
                      className={`bg-gradient-to-r ${
                        orderStatusStyles[item.order_status]
                      } w-fit text-white px-3 py-[6px] rounded-full text-[12px] mx-auto capitalize min-w-[80px]`}
                    >
                      {t(`orderStatus.${item.order_status}`)}
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    {item.amount} {t("currency")}
                  </td>

                  <td className="px-4 py-4 flex items-center justify-center gap-x-5">
                    <a
                      href={`${process.env.NEXT_PUBLIC_API_URL}orders/${item.id}/invoice/web`}
                      target="_blank"
                      className="w-5"
                    >
                      <Image
                        src="/images/logos/preview_payments.png"
                        alt="preview"
                        width={20}
                        height={20}
                      />
                    </a>

                    <a
                      href={`${process.env.NEXT_PUBLIC_API_URL}orders/${item.id}/invoice/download`}
                      target="_blank"
                      className="w-5"
                    >
                      <Image
                        src="/images/logos/download_payments.png"
                        alt="download"
                        width={20}
                        height={20}
                      />
                    </a>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    className="text-center py-4 text-gray-500 bg-white rounded-lg"
                  >
                    {t("noResults")}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PaymentsTab;
