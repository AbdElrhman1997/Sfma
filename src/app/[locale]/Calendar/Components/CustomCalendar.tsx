"use client";
import { useLocale } from "next-intl";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Default styles

const CustomCalendar = () => {
  const [value, onChange] = useState(new Date());
  const lang = useLocale();

  const eventRanges = [
    // {
    //   start: new Date(2025, 6, 4),
    //   end: new Date(2025, 6, 5),
    //   color: "bg-[#000DFF]",
    //   text: "د. في الأمن والسلامة", // Text will be ignored
    // },
    // {
    //   start: new Date(2025, 5, 7),
    //   end: new Date(2025, 5, 8),
    //   color: "bg-[#F0C808]",
    //   text: "Event 2", // Text will be ignored
    // },
    // {
    //   start: new Date(2025, 5, 24),
    //   end: new Date(2025, 5, 26),
    //   color: "bg-[#FF008C]",
    //   text: "Event 3", // Text will be ignored
    // },
  ];

  const isEventDate = (date) => {
    return eventRanges.some(
      (range) => date >= range.start && date <= range.end
    );
  };

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const event = eventRanges.find(
        (range) => date >= range.start && date <= range.end
      );
      if (event) {
        return (
          <div
            className={`react-calendar__tile--event relative w-full h-full rounded-none`}
          >
            <div
              className={` w-full h-20 event-bg ${event.color} lg:p-4`}
            ></div>
          </div>
        );
      }
      return <span className="text-center">{date.getDate()}</span>; // English numerals for non-event days
    }
    return null;
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      if (isEventDate(date)) return "react-calendar__tile--event";
      // Remove active styling for June 11, 2025
      if (
        date.toDateString() === new Date(2025, 5, 11).toDateString() &&
        date.toDateString() === value.toDateString()
      ) {
        return "no-active";
      }
      if (date.toDateString() === new Date(2025, 5, 25).toDateString())
        return "border-2 border-blue-500 rounded";
    }
    return null;
  };

  return (
    <div
      className="container mx-auto w-full flex items-center justify-center"
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <Calendar
        // onChange={onChange}
        value={value}
        tileContent={tileContent}
        tileClassName={tileClassName}
        locale="ar-EG" // Arabic locale
        className="rounded-lg shadow-lg lg:p-2 w-full max-w-6xl"
        // calendarType="ISO 8601"
      />
    </div>
  );
};

export default CustomCalendar;

// "use client";

// import React, { useEffect, useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import Select from "react-select";
// import { useTranslations } from "next-intl";

// interface Course {
//   id: number;
//   title: string;
//   date_from: string | null;
//   date_to: string | null;
//   type: "online" | "offline";
//   location?: string[] | null;
// }

// const TrainingCalendarPage = () => {
//   const t = useTranslations();
//   const lang = typeof window !== "undefined" ? navigator.language : "ar";

//   // Filters state
//   const [selectedCategory, setSelectedCategory] = useState<any>(null);
//   const [selectedPath, setSelectedPath] = useState<any>(null);
//   const [selectedAttendanceState, setSelectedAttendanceState] =
//     useState<any>(null);
//   const [selectedCity, setSelectedCity] = useState<any>(null);
//   const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

//   // Calendar state
//   const [value, onChange]: any = useState(new Date());
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [eventRanges, setEventRanges] = useState<any[]>([]);

//   // Options
//   const categories = [
//     { value: "training_courses", label: t("categories.training_courses") },
//     { value: "workshops", label: t("categories.workshops") },
//   ];
//   const paths = [
//     { value: "all_paths", label: t("paths.all_paths") },
//     { value: "safety_path", label: t("paths.safety_path") },
//     { value: "environment_path", label: t("paths.environment_path") },
//   ];
//   const attendance_state = [
//     { value: "both", label: t("attendance_state.both") },
//     { value: "in_person", label: t("attendance_state.in_person") },
//     { value: "online", label: t("attendance_state.online") },
//   ];
//   const cities = [
//     { value: "all_cities", label: t("cities.all_cities") },
//     { value: "riyadh", label: t("cities.riyadh") },
//     { value: "jeddah", label: t("cities.jeddah") },
//     { value: "dammam", label: t("cities.dammam") },
//   ];

//   const months = [
//     t("months.1"),
//     t("months.2"),
//     t("months.3"),
//     t("months.4"),
//     t("months.5"),
//     t("months.6"),
//     t("months.7"),
//     t("months.8"),
//     t("months.9"),
//     t("months.10"),
//     t("months.11"),
//     t("months.12"),
//   ];

//   // 🌐 Fetch Courses from API when filters/month change
//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const token = localStorage.getItem("auth_token");
//         const query = new URLSearchParams();
//         if (selectedCategory) query.append("category", selectedCategory.value);
//         if (selectedPath) query.append("path", selectedPath.value);
//         if (selectedAttendanceState)
//           query.append("attendance", selectedAttendanceState.value);
//         if (selectedCity) query.append("city", selectedCity.value);
//         if (selectedMonth) query.append("month", selectedMonth.toString());

//         const res = await fetch(
//           `https://sffma.fmexcon.com/api/v1/courses/filter-courses?${query.toString()}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Accept-Language": lang || "ar",
//             },
//           }
//         );
//         const data = await res.json();
//         setCourses(data?.data || []);
//       } catch (err) {
//         console.error("Error fetching courses:", err);
//       }
//     };
//     fetchCourses();
//   }, [
//     selectedCategory,
//     selectedPath,
//     selectedAttendanceState,
//     selectedCity,
//     selectedMonth,
//     lang,
//   ]);

//   // Prepare eventRanges for Calendar
//   useEffect(() => {
//     const events: any[] = [];
//     courses.forEach((c) => {
//       if (c.date_from && c.date_to) {
//         const start = new Date(c.date_from);
//         start.setHours(0, 0, 0, 0);
//         const end = new Date(c.date_to);
//         end.setHours(0, 0, 0, 0);

//         const curr = new Date(start);
//         while (curr <= end) {
//           events.push({
//             date: new Date(curr),
//             title: c.title,
//             color: c.type === "online" ? "bg-[#22c55e]" : "bg-[#2563EB]",
//           });
//           curr.setDate(curr.getDate() + 1);
//         }
//       }
//     });
//     setEventRanges(events);
//   }, [courses]);

//   const getEventsForDate = (date: Date) => {
//     return eventRanges.filter(
//       (e) =>
//         e.date.getFullYear() === date.getFullYear() &&
//         e.date.getMonth() === date.getMonth() &&
//         e.date.getDate() === date.getDate()
//     );
//   };

//   const tileContent = ({ date, view }: any) => {
//     if (view === "month") {
//       const events = getEventsForDate(date);
//       if (events.length > 0) {
//         return (
//           <div className="flex flex-col gap-0.5 mt-1">
//             {events.map((e, i) => (
//               <div
//                 key={i}
//                 className={`w-full text-[10px] rounded py-0.5 px-1 text-white overflow-hidden whitespace-nowrap text-ellipsis ${e.color}`}
//                 title={e.title}
//               >
//                 {e.title}
//               </div>
//             ))}
//           </div>
//         );
//       }
//     }
//     return null;
//   };

//   const tileClassName = ({ date, view }: any) => {
//     if (view === "month") {
//       const events = getEventsForDate(date);
//       if (events.length > 0) return "relative text-white font-medium";
//     }
//     return "";
//   };

//   return (
//     <div className="container mx-auto py-6" dir={lang === "en" ? "ltr" : "rtl"}>
//       {/* Filters */}
//       <div className="flex flex-wrap gap-x-3 justify-center mt-3 mb-5">
//         <Select
//           options={categories}
//           placeholder={t("placeholders.category")}
//           onChange={(opt) => setSelectedCategory(opt)}
//           className="md:w-[24%] w-full"
//           isClearable
//         />
//         <Select
//           options={attendance_state}
//           placeholder={t("placeholders.attendance")}
//           onChange={(opt) => setSelectedAttendanceState(opt)}
//           className="md:w-[24%] w-full"
//           isClearable
//         />
//         <Select
//           options={cities}
//           placeholder={t("placeholders.city")}
//           onChange={(opt) => setSelectedCity(opt)}
//           className="md:w-[24%] w-full"
//           isClearable
//         />
//         <Select
//           options={paths}
//           placeholder={t("placeholders.path")}
//           onChange={(opt) => setSelectedPath(opt)}
//           className="md:w-[24%] w-full"
//           isClearable
//         />
//       </div>

//       <div className="grid grid-cols-4 gap-4 mt-5">
//         {/* Side Month Filter */}
//         <div className="lg:col-span-1 col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-hidden">
//           {months.map((month, i) => (
//             <div
//               key={i}
//               className={`rounded-lg py-2 px-4 text-center cursor-pointer min-w-[70px] ${
//                 selectedMonth === i + 1
//                   ? "bg-[var(--second_main)] text-white"
//                   : "bg-gray-300"
//               }`}
//               onClick={() => setSelectedMonth(i + 1)}
//             >
//               {month}
//             </div>
//           ))}
//           <div
//             className={`rounded-lg py-2 px-4 text-center cursor-pointer min-w-[70px] bg-gray-200 mt-2`}
//             onClick={() => setSelectedMonth(null)}
//           >
//             {t("months.all")}
//           </div>
//         </div>

//         {/* Calendar */}
//         <div className="lg:col-span-3 col-span-4">
//           <Calendar
//             onChange={onChange}
//             value={value}
//             tileContent={tileContent}
//             tileClassName={tileClassName}
//             locale={lang === "ar" ? "ar-EG" : "en-US"}
//             className="rounded-2xl shadow-lg bg-[#0b0f17] text-white border border-gray-700 p-4 w-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrainingCalendarPage;
