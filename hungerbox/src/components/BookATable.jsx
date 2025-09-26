import React from "react";

const BookATable = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const todays = date.getDate();
  const month = monthNames[date.getMonth()];
  console.log(todays, month);

  return (
    <form className="max-w-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        Select your booking details 
        </h2>
      <div className="grid gap-4 mb-4 sm:grid-cols-3">
        <div class="relative">
        <select
          id="guests"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {Array.from({ length: 5 }, (_, i) => (
            <option key={i + 1} value={i + 1}>{` ${
              todays + i
            } ${month} `}</option>
          ))}
        </select>
      </div>
      <div className="relative">
        <select
          id="guests"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} Guest
            </option>
          ))}
        </select>
      </div>
      <div className="relative">
        <select
          id="foodType"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {["Lunch", "Dinner"].map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      </div>
    </form>
  );
};

export default BookATable;
