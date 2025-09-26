import React from 'react';

export const HeaderOne = ({ children }) => (
  <h1 className="text-5xl font-bold mb-4 text-white">{children}</h1>
);

export const RestaurantHeader = ({ children }) => (
  <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{children}</h1>
);

export const HeaderTwo = ({ children }) => (
  <h2 className="text-2xl font-semibold mb-3 text-gray-800">{children}</h2>
);

export const HeaderThree = ({ children }) => (
  <h3 className="text-xl font-medium mb-2 text-gray-600">{children}</h3>
);
