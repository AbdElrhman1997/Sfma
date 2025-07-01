const translateCities = (lang) => {
  const cities = [
    { ar: "الرياض", en: "Riyadh" },
    { ar: "جدة", en: "Jeddah" },
    { ar: "الدمام", en: "Dammam" },
  ];

  const listedCities = cities?.map((city) =>
    lang == "en" ? city.en : city.ar
  );

  return listedCities.join(" - ");
};

export default translateCities;
