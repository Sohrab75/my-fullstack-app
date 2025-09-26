import React, { useState } from "react";
import { restaurantTabs } from "../utils/constants";
import Overview from "./Overview";
import BookATable from "./BookATable";

const RestaurantTabs = ({restaurant ,  setSeeAllMenuItems}) => {
  const [activeTab, setActiveTab] = useState(restaurantTabs[0].id);

  const tabContents = {
    overview: (
      <Overview restaurant={restaurant} setSeeAllMenuItems={setSeeAllMenuItems} />
    ),
    orderOnline: (
      <p className="text-sm text-gray-500 dark:text-gray-400">
        <strong className="font-medium text-gray-800 dark:text-white">
          Order Online tab's associated content
        </strong>
      </p>
    ),
    reviews: (
      <p className="text-sm text-gray-500 dark:text-gray-400">
        <strong className="font-medium text-gray-800 dark:text-white">
          Reviews tab's associated content
        </strong>
      </p>
    ),
    menu: (
      <p className="text-sm text-gray-500 dark:text-gray-400">
        <strong className="font-medium text-gray-800 dark:text-white">
          Menu tab's associated content
        </strong>
      </p>
    ),
    photos: (
      <p className="text-sm text-gray-500 dark:text-gray-400">
        <strong className="font-medium text-gray-800 dark:text-white">
          Photos tab's associated content
        </strong>
      </p>
    ),
    bookATable: (
      <BookATable/>
    ),
  };
  return (
    <div>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          {restaurantTabs.map((tab) => (
            <li
              className="me-2"
              role="presentation"
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg 
                ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
                id={`${tab.id}-tab`}
                data-tabs-target={`#${tab.id}`}
                type="button"
                role="tab"
                aria-controls={tab.id}
                aria-selected={activeTab === tab.id ? "true" : "false"}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div id="default-tab-content">
        {restaurantTabs.map((tab) => (
          <div
            className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
              activeTab === tab.id ? "" : "hidden"
            }`}
            key={tab.id}
            id={tab.id}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
          >
            {tabContents[tab.id]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantTabs;
