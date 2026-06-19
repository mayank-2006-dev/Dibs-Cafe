import { Coffee, Croissant, MapPin, Sparkles } from "lucide-react";

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "Gallery", path: "/gallery" },
  { label: "Find Us", path: "/find-us" },
];

export const features = [
  {
    icon: Coffee,
    title: "Coffee",
    text: "Slow sips, soft foam, and warm cups made for unhurried conversations.",
  },
  {
    icon: Croissant,
    title: "Bakery",
    text: "Golden bites, flaky layers, and sweet little treats for every mood.",
  },
  {
    icon: Sparkles,
    title: "Cozy Vibes",
    text: "A compact corner with warm lighting, cute details, and calm energy.",
  },
];

export const aboutHighlights = [
  "Cozy atmosphere",
  "Handcrafted drinks",
  "Aesthetic space",
  "Bakery treats",
];

export const cafeDescription =
  "Dibs Cafe is a cozy cafe in Delhi offering an intimate and inviting space for coffee lovers, foodies, and casual hangouts. Our menu features classic coffee, signature coffee drinks, shakes, lemonades, fresh sandwiches, open toasts, quick bites, pasta, pita pockets, burgers, waffles, and desserts, all made to create a relaxed and satisfying cafe experience. Whether you are meeting friends, enjoying a quiet coffee break, or stopping by for something sweet, Dibs Cafe brings warm vibes, handcrafted drinks, and delicious food to the heart of Delhi.";

export const reels = [
  {
    title: "Sound of coffee",
    image: "/images/coffee-window.png",
    embedUrl: "https://www.instagram.com/reel/DZc0KHxTOt-/embed/?hidecaption=true&autoplay=true",
    reelUrl: "https://www.instagram.com/reel/DZc0KHxTOt-/?igsh=MTV0Nmw2ZTh4bjh4dw==",
  },
  {
    title: "Found the cutest cafe",
    image: "/images/dibs-sign.png",
    embedUrl: "https://www.instagram.com/reel/DZSq7wJvInE/embed/?hidecaption=true&autoplay=true",
    reelUrl: "https://www.instagram.com/reel/DZSq7wJvInE/?igsh=azB2Y3dzaWwybmt6",
  },
  {
    title: "First sip feeling",
    image: "/images/iced-coffee-counter.png",
    embedUrl: "https://www.instagram.com/reel/DZcwOaVyVGY/embed/?hidecaption=true&autoplay=true",
    reelUrl: "https://www.instagram.com/reel/DZcwOaVyVGY/?igsh=MXIzOWR3bHdkemZieg==",
  },
];

export const testimonials = [
  {
    name: "Aanya",
    quote: "The lighting, the drinks, the tiny details... everything feels made for cozy evenings.",
  },
  {
    name: "Rhea",
    quote: "Perfect little study-and-sip spot. It feels calm without losing the cute cafe energy.",
  },
  {
    name: "Kabir",
    quote: "The iced coffee and bakery counter are already on my weekend repeat list.",
  },
];

export const menuCategories = [
  {
    id: "quick-bites",
    name: "Quick Bites",
    title: "QUICK BITES",
    tagline: "Tiny plates with big cafe-craving energy.",
    marquee: "QUICK BITES / CRISP / SHARE / SNACK /",
    layout: "full",
    art: "fries",
    image: "/menu/quick_bites.png",
    items: [
      { name: "Fries", price: "120 / 140 / 180" },
      { name: "Falafel (8 pcs)", price: "180" },
      { name: "Loaded Nachos", price: "220" },
      { name: "Cigar Rolls (6 pcs)", price: "220" },
      { name: "Mushroom Croquettes (8 pcs)", price: "240" },
    ],
  },
  {
    id: "pasta",
    name: "Pasta",
    title: "PASTA",
    tagline: "Saucy bowls for comfort-first cafe lunches.",
    marquee: "PASTA / CREAMY / PESTO / ALFREDO /",
    layout: "split",
    art: "pasta",
    image: "/menu/pasta.png",
    items: [
      { name: "Pesto", price: "280" },
      { name: "Creamy Umami", price: "280" },
      { name: "Arrabbiata", price: "280" },
      { name: "Alfredo", price: "280" },
    ],
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    title: "SANDWICHES",
    tagline: "Pressed, toasted, stacked, and made for slow bites.",
    marquee: "SANDWICHES / BAGELS / FOCACCIA / PANINI /",
    layout: "masonry",
    art: "sandwich",
    items: [
      { name: "French Onion Panini", price: "260" },
      { name: "Potato Smash Panini", price: "260" },
      { name: "Bom-Bae Bagel", price: "260" },
      { name: "Tandoori Twist Bagel", price: "290" },
      { name: "Pesto Paneer Pop Focaccia", price: "290" },
      { name: "Shroom Melt Focaccia", price: "320" },
    ],
  },
  {
    id: "open-toasts",
    name: "Open Toasts",
    title: "OPEN TOASTS",
    tagline: "Golden sourdough moments with cute cafe toppings.",
    marquee: "OPEN TOASTS / SOURDOUGH / CRUNCH /",
    layout: "carousel",
    art: "toast",
    items: [
      { name: "Triple C", price: "220" },
      { name: "Pizza On Toast", price: "220" },
      { name: "Guac Guac", price: "260" },
    ],
  },
  {
    id: "pita-pockets",
    name: "Pita Pockets",
    title: "PITA POCKETS",
    tagline: "Soft pockets, warm fillings, easy hangout food.",
    marquee: "PITA POCKETS / HUMMUS / FALAFEL /",
    layout: "premium",
    art: "pita",
    items: [
      { name: "Crunchy Potato Square", price: "220" },
      { name: "Hummus & Falafel", price: "220" },
      { name: "Indie Paneer", price: "240" },
    ],
  },
  {
    id: "burgers",
    name: "Burgers",
    title: "BURGERS",
    tagline: "Soft buns, playful fillings, deep terracotta mood.",
    marquee: "BURGERS / SMASH / SOFT BUNS /",
    layout: "dark",
    art: "burger",
    items: [
      { name: "Farm Fresh", price: "180" },
      { name: "Vada Burh", price: "180" },
      { name: "Beany Smash", price: "240" },
    ],
  },
  {
    id: "signature-coffee",
    name: "Signature Coffee",
    title: "Signature Coffee",
    tagline: "Cold, cloudy, fruity, and made for first-sip photos.",
    marquee: "SIGNATURE COFFEE / STEAM / SIP / CLOUD /",
    layout: "notes",
    art: "coffee",
    items: [
      { name: "Vietnamese Cold Coffee", price: "250" },
      { name: "Coconut Cloud", price: "250" },
      { name: "Orange Sunrise", price: "250" },
      { name: "Cranberry Sunset", price: "250" },
      { name: "Red Rush", price: "250" },
    ],
  },
  {
    id: "shakes",
    name: "Shakes",
    title: "SHAKES",
    tagline: "Creamy dessert drinks with playful wave energy.",
    marquee: "SHAKES / CREAM / BISCUIT / CHOCOLATE /",
    layout: "wave",
    art: "shake",
    items: [
      { name: "Lotus Biscoff", price: "250" },
      { name: "Caramel Popcorn", price: "250" },
      { name: "Oreo Crunch", price: "250" },
      { name: "Choco Overload", price: "250" },
      { name: "Brownie & Hazelnut", price: "250" },
      { name: "Nutty Pistachio", price: "250" },
    ],
  },
  {
    id: "elixirs",
    name: "Elixirs",
    title: "ELIXIRS",
    tagline: "Bright lemonades and iced tea for Delhi afternoons.",
    marquee: "ELIXIRS / CITRUS / ICE / SPARK /",
    layout: "glow",
    art: "citrus",
    items: [
      { name: "OG Lemonade", price: "160" },
      { name: "Pina Colada", price: "160" },
      { name: "Picante", price: "160" },
      { name: "Peach Iced Tea", price: "160" },
    ],
  },
  {
    id: "waffles",
    name: "Waffles",
    title: "WAFFLES",
    tagline: "Soft squares, drips, fruit, cream, and happy forks.",
    marquee: "WAFFLES / CHOCOLATE / BISCOFF / CREAM /",
    layout: "waffles",
    art: "waffle",
    items: [
      { name: "Strawberry & Whipped Cream", price: "220" },
      { name: "Chocolate All The Way", price: "220" },
      { name: "Biscoff Banana Bliss", price: "220" },
      { name: "Nutty Pistachio", price: "220" },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    title: "DESSERTS",
    tagline: "Sweet endings, soft crumbs, and cocoa-dusted comfort.",
    marquee: "DESSERTS / BROWNIE / TIRAMISU / COOKIES /",
    layout: "pinterest",
    art: "cocoa",
    items: [
      { name: "Banoffee Cookies", price: "100" },
      { name: "Fudge Brownie", price: "140" },
      { name: "Tiramisu", price: "220" },
      { name: "Cheesecake", price: "Ask cafe" },
      { name: "Muffins", price: "Ask cafe" },
      { name: "Tea Cakes", price: "Ask cafe" },
    ],
  },
];

export const galleryImages = [
  { src: "/gallery/interior-booth.jpeg", title: "Cozy wall seating", size: "tall" },
  { src: "/gallery/image.png", title: "Cafe atmosphere", size: "tall" },
  { src: "/gallery/iced-coffee-counter.png", title: "Signature iced coffee", size: "wide" },
  { src: "/gallery/coffee-window.png", title: "Street-view coffee", size: "tall" },
  { src: "/gallery/dibs-sign.png", title: "Dibs cafe sign", size: "wide" },
  { src: "/gallery/dibs-penguin.png", title: "Cute brand character", size: "square" },
];

export const contact = {
  address:
    "First Floor, B-21, DDA Market, Block B, Surajmal Vihar, New Delhi, Delhi, 110092",
  hours: [
    { day: "Monday - Friday", time: "10:00 AM - 10:00 PM" },
    { day: "Saturday - Sunday", time: "9:30 AM - 11:00 PM" },
  ],
  phone: "085955 27795",
  email: "@dibsdelhi",
  instagram: "https://www.instagram.com/dibsdelhi",
  mapEmbed:
    "https://www.google.com/maps?q=First%20Floor%2C%20B-21%2C%20DDA%20Market%2C%20Block%20B%2C%20Surajmal%20Vihar%2C%20New%20Delhi%2C%20Delhi%2C%20110092&output=embed",
  icon: MapPin,
};
