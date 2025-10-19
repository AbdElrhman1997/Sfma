"use client";
import React, { useState } from "react";
import Filters from "./Components/Filters";
import CustomCalendar from "./Components/CustomCalendar";

const Page = () => {
  const [filters, setFilters] = useState({
    category: "",
    path: "",
    attendance: "",
    city: "",
  });

  return (
    <section className="container mx-auto mt-6">
      <Filters onChange={setFilters} />
      <CustomCalendar filters={filters} />
    </section>
  );
};

export default Page;
