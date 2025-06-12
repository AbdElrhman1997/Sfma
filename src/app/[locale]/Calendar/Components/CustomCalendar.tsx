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
        className="rounded-lg shadow-lg p-2 w-full max-w-6xl"
        // calendarType="ISO 8601"
      />
    </div>
  );
};

export default CustomCalendar;
