// adding offers constants here
export const offers = [
  {
    id: 1,
    type: "PRE BOOK",
    title: "Get 20% off on your first order!!",
    description: "Valid from 8AM to 12PM today. Booking Required.",
    validity: {
      startTime: "8:00 AM",
      endTime: "12:00 PM",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    },
    discounts: {
      type: "Percentage",
      value: 20,
      maxDiscount: 50,
    },
  },
  {
    id: 2,
    type: "INSTANT",
    title: "Get 15% off on orders above ₹200",
    description: "Valid on all days. No coupon code required.",
    validity: {
      startTime: "8:00 AM",
      endTime: "8:00 PM",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    },
    discounts: {
      type: "Percentage",
      value: 15,
      maxDiscount: 100,
    },
  },
  {
    id: 3,
    type: "EXCLUSIVE",
    title: "Flat ₹100 off on orders above ₹500",
    description: "Valid on all days. No coupon code required.",
    validity: {
      startTime: "8:00 AM",
      endTime: "8:00 PM",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    },
    discounts: {
      type: "Flat",
      value: 100,
      minOrderValue: 500,
    },
  },
  {
    id: 4,
    type: "BANK OFFER",
    title: "Get 10% cashback on HDFC Bank transactions",
    description: "Valid on all days. No coupon code required.",
    validity: {
      startTime: "8:00 AM",
      endTime: "8:00 PM",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    },
    discounts: {
      type: "Percentage",
      value: 10,
      maxDiscount: 100,
    },
  },
];

// restaurant tabs
export const restaurantTabs = [
  { id: "overview", name: "Overview" },
  { id: "orderOnline", name: "Order Online" },
  { id: "reviews", name: "Reviews" },
  { id: "menu", name: "Menu" },
  { id: "photos", name: "Photos" },
  { id: "bookATable", name: "Book a Table" }
];