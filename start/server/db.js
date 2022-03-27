const mainCards = [
  {
    title: "Recently Viewed",
    image: "plantMainCard1",
  },
  {
    title: "Looking for a Gift?",
    image: "plantMainCard2",
  },
  {
    title: "Bonsai",
    image: "plantMainCard3",
  },
];

const animals = [
  {
    id: "1",
    image: "snakePlant",
    title: 'Snake Plant - 10" height',
    rating: 5.0,
    price: "14.99",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    stock: 14,
    onSale: false,
    slug: "lion",
    category: "1",
  },
  {
    id: "2",
    image: "cham",
    title:
      "Beautiful Highly Specialized Clade Lizard with 202 Different Color Combinations",
    rating: 5.0,
    price: "1,522",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    stock: 14,
    onSale: false,
    slug: "chameleons",
    category: "2",
  },
  {
    id: "3",
    image: "dolphin",
    title:
      "Fast and Swift Aquatic Dolphin with Great Accordatic Skills in the Air",
    rating: 5.0,
    price: "101,432",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    stock: 14,
    onSale: false,
    slug: "dolphin",
    category: "3",
  },
  {
    id: "4",
    image: "gorilla",
    title:
      "Black Haired Gorilla with Broad Chest and Shoulder. Would be an Excellent Spot at the Gym",
    rating: 5.0,
    price: "47,775",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    stock: 14,
    onSale: false,
    slug: "gorilla",
    category: "4",
  },
  {
    id: "5",
    image: "horse",
    title:
      "17-year Female Horse with a Luxury Brown Exterior and a Beautiful Red Interior",
    rating: 5.0,
    price: "13,432",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    stock: 14,
    onSale: false,
    slug: "horse",
    category: "4",
  },
  {
    id: "6",
    image: "kang",
    title:
      "Large Kangaroo with Muscular Leg and Tail and Pointly Teeth and Ears",
    rating: 5.0,
    price: "42,453",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    stock: 14,
    onSale: false,
    slug: "kangaroo",
    category: "4",
  },
  {
    id: "7",
    image: "ele",
    title: "Grey Male 17 year Elephant with 12 Meter Truck and 5 Meter Tusk",
    rating: 5.0,
    price: "101,432",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    stock: 14,
    onSale: false,
    slug: "elephant",
    category: "4",
  },
  {
    id: "8",
    image: "donkey",
    title: "This is the Voice Actor from the Dockey for Shrek.",
    rating: 5.0,
    price: "179,731",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    stock: 14,
    onSale: false,
    slug: "donkey",
    category: "4",
  },
];

const categories = [
  {
    id: "1",
    image: "snakePlant",
    category: "Snake plant",
    slug: "snake-plant",
  },
  {
    id: "2",
    image: "montsera",
    category: "Montsera",
    slug: "montsera",
  },
  {
    id: "3",
    image: "alocasiaCuprea",
    category: "Alocasia cuprea ",
    slug: "alocasia-cuprea ",
  },
  {
    id: "4",
    image: "succulent",
    category: "Succulents",
    slug: "succulents",
  },
];

module.exports = {
  mainCards,
  animals,
  categories,
};
