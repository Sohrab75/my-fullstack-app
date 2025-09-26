import React from "react";

const OfferCards = ({ offers }) => {
  return (
    <>
      {offers?.map((offer) => (
        <div className="flex flex-col max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 bg-linear-to-bl from-violet-300 to-fuchsia-300">
          <a href="#">
            <h5 className="mb-2 text-sm font-semibold tracking-tight text-green-600 dark:text-white">
              {offer.type} OFFER
            </h5>
          </a>
          <h4 className="mb-2 text-xs font-semibold tracking-tight text-gray-900 dark:text-white">
            {offer.title}
          </h4>
          <p className="mb-2 font-normal text-xs text-gray-500 dark:text-gray-400">
            {offer.description}
          </p>
        </div>
      ))}
    </>
  );
};

export default OfferCards;
