import { CreditCard, Globe, HelpCircle, RotateCcw } from "lucide-react";

export const navlink = [
  {
    link: "/",
    text: "Women",
  },
  {
    link: "/",
    text: "Men",
  },
  {
    link: "/",
    text: "Collections",
  },
  {
    link: "/",
    text: "Company",
  },
];

export const products = [
  {
    id: 1,
    name: "Coral Curve Skirt",
    price: "$100",
    oldPrice: "$177",
    image: "/images/png/coral-curve.png",
  },
  {
    id: 2,
    name: " TopMist Ruffle Top",
    price: "$113",
    oldPrice: "$160",
    image: "/images/png/top-mist.png",
  },
  {
    id: 3,
    name: "Willow Knit Top",
    price: "$94",
    oldPrice: null,
    image: "/images/png/willow-knit.png",
  },
  {
    id: 4,
    name: "Midnight Hoodie",
    price: "$97",
    oldPrice: null,
    image: "/images/png/midnight-hoodie.png",
  },
];
export const summercard = [
  {
    id: 1,
    name: "Serene Flow Dress",
    price: "$93",
    oldPrice: "$120",
    image: "/images/png/serene-dress.png",
  },
  {
    id: 2,
    name: "Bloom Linen Top",
    price: "$49",
    oldPrice: null,
    image: "/images/png/bloom-linen.png",
  },
  {
    id: 3,
    name: "Petal Slip Dress",
    price: "$119",
    oldPrice: null,
    image: "/images/png/petal-slip.png",
  },
  {
    id: 4,
    name: "Blush Chain Earrings",
    price: "$44",
    oldPrice: "$80",
    image: "/images/png/blush-chain.png",
  },
];

export const features = [
  {
    icon: <CreditCard className="h-6 w-6 text-emerald-600" />,
    bg: "bg-emerald-100",
    title: "Secure Checkout",
    desc: "Your info stays safe with us. All payments are encrypted and protected.",
  },
  {
    icon: <RotateCcw className="h-6 w-6 text-pink-600" />,
    bg: "bg-pink-100",
    title: "Easy Returns",
    desc: "Changed your mind? No worries — you have 30 days to send it back, stress-free.",
  },
  {
    icon: <Globe className="h-6 w-6 text-sky-600" />,
    bg: "bg-sky-100",
    title: "Worldwide Delivery",
    desc: "From our shop to your doorstep. Fast, reliable shipping wherever you are.",
  },
  {
    icon: <HelpCircle className="h-6 w-6 text-yellow-600" />,
    bg: "bg-yellow-100",
    title: "Here to Help",
    desc: "Need something? Our support team's just a message away, always happy to chat.",
  },
];

 export const footerLinks = [
    {
      title: "PRODUCTS",
      links: ["Women", "Men", "Collections", "Categories"],
    },
    {
      title: "COMPANY",
      links: ["About us", "Journal", "FAQ", "Contact us"],
    },
    {
      title: "FIND US ON",
      links: ["Instagram", "Twitter/X.com", "Threads", "Etsy"],
    },
    {
      title: "LEGAL",
      links: [
        "Terms & Conditions",
        "Shipping & Returns",
        "Privacy Policy",
        "404",
      ],
    },
  ];

   export const initialBadges = [
      { id: 1, text: "3 Sub brands", color: "#E5F7A9", x: 50, y: 30 },
      { id: 2, text: "10M+ Happy Customers", color: "#C4E6F7", x: 200, y: 80 },
      { id: 3, text: "Free Shipping", color: "#FFD6E0", x: 80, y: 150 },
      { id: 4, text: "5+ Countries", color: "#C7F2C2", x: 160, y: 200 },
      { id: 5, text: "24 years in service", color: "#F5B7C2", x: 100, y: 250 },
    ];