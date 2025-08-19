"use client"; // Required for client-side interactivity

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProfileClient from "./ClientTab";
import Image from "next/image";
import ClientTab from "./ClientTab";
import CoursesTab from "./CoursesTab";
import ExamsTab from "./ExamsTab";
import CertificatesTab from "./CertificatesTab";
import MembershipTab from "./MembershipTab";
import PaymentsTab from "./PaymentsTab";
import {
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineFileText,
  AiOutlineTrophy,
  AiOutlineIdcard,
  AiOutlineDollar,
} from "react-icons/ai";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const lang = useLocale();
  const [content, setContent] = useState([]);
  const [profileData, setProfileData] = useState(null);

  const t = useTranslations("Register");

  const tabs = [
    {
      id: 1,
      name: "profile_data",
      label: t("profile_data"),
      icon: <AiOutlineUser size={26} color="#898989" />,
    },
    {
      id: 2,
      name: "courses",
      label: t("courses"),
      icon: <AiOutlineBook size={26} color="#1DAEE5" />,
    },
    {
      id: 3,
      name: "exams",
      label: t("exams"),
      icon: <AiOutlineFileText size={26} color="#898989" />,
    },
    {
      id: 4,
      name: "certificates",
      label: t("certificates"),
      icon: <AiOutlineTrophy size={26} color="#898989" />,
    },
    {
      id: 5,
      name: "mempership",
      label: t("mempership"),
      icon: <AiOutlineIdcard size={26} color="#898989" />,
    },
    {
      id: 6,
      name: "payments",
      label: t("payments"),
      icon: <AiOutlineDollar size={26} color="#898989" />,
    },
  ];

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("auth_token");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}user-profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Accept-Language": lang || "ar",
          },
        }
      );

      const data = await res.json();
      setProfileData(data?.data || {});
    };

    fetchProfile();
  }, [lang]);

  return (
    <section dir={lang === "en" ? "ltr" : "rtl"} className="p-0">
      <div className="bg-[#F6F6F6] py-14">
        <div className="md:w-1/5 w-4/5 mx-auto">
          {profileData?.logo ? (
            <img
              src={`https://sffma.fmexcon.com/storage/${profileData?.logo}`}
              alt="Profile Logo"
              width={200}
              height={200}
              className="object-cover w-full h-full rounded-lg overflow-hidden"
            />
          ) : (
            <div className="w-full h-[200px] flex items-center justify-center bg-white rounded-lg border border-gray-300">
              {/* Default SVG or Icon */}
              <Image
                src={`/images/logos/profile.jpg`}
                alt="Profile Logo"
                width={200}
                height={200}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          )}
        </div>

        <p className="text-2xl md:text-3xl font-bold text-center mt-3 md:mt-6">
          {t("welcome")} ,{" "}
          {lang == "en" ? profileData?.full_name_en : profileData?.full_name_ar}
        </p>
      </div>

      {/* Tabs */}
      <div className="shadow-lg pt-2 mb-10 ">
        <div className="container mx-auto overflow-x-auto scrollbar-hide">
          <div className="flex w-max sm:w-auto flex-nowrap sm:flex-wrap justify-start sm:justify-between gap-2 px-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`py-2 px-4 font-bold focus:outline-none min-w-[14rem] md:min-w-[10rem] cursor-pointer transition ease-in-out duration-300 flex items-center gap-3 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-black border-b-4 border-[var(--main)]"
                    : "text-[#898989] hover:text-gray-700"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div>{tab.icon}</div>
                <div>{tab.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {!profileData ? (
        <></>
      ) : (
        <div className="container mx-auto">
          {activeTab == 1 ? (
            <ClientTab profileData={profileData} />
          ) : activeTab == 2 ? (
            <CoursesTab />
          ) : activeTab == 3 ? (
            <ExamsTab />
          ) : activeTab == 4 ? (
            <CertificatesTab />
          ) : activeTab == 5 ? (
            <MembershipTab profileData={profileData} />
          ) : (
            <PaymentsTab profileData={profileData} />
          )}
        </div>
      )}
    </section>
  );
};

export default ProfilePage;
