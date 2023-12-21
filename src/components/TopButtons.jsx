import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Ulaanbaatar",
      label: "Улаанбаатар"
    },
    {
      id: 2,
      title: "Sydney",
      label: "Сидней"
    },
    {
      id: 3,
      title: "Moskow",
      label: "Москва"
    },
    {
      id: 4,
      title: "London",
      label: "Лондон"
    },
    {
      id: 5,
      title: "Paris",
      label: "Парис"
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.label}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
