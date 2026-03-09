export type Watch = {
  id: number;
  name: string;
  price: string;
  rating: number;
  image: string;
  collection: "Classic" | "Sport" | "Luxury" | "Limited Edition";
  description: string;
};

export const watches: Watch[] = [
  {
    id: 1,
    name: "Zahrawi Chronométrique Noir",
    price: "$14,900",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80",
    collection: "Luxury",
    description: "Hand-finished black dial with gold moonphase detailing."
  },
  {
    id: 2,
    name: "Aureate Diver 300",
    price: "$9,700",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=1200&q=80",
    collection: "Sport",
    description: "Ceramic bezel and marine-grade steel built for modern adventurers."
  },
  {
    id: 3,
    name: "Éclipse Heritage",
    price: "$11,200",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=1200&q=80",
    collection: "Classic",
    description: "Timeless skeleton movement with platinum case architecture."
  },
  {
    id: 4,
    name: "Imperial Zenith X",
    price: "$24,500",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=1200&q=80",
    collection: "Limited Edition",
    description: "Numbered collector piece with 18k gold accents and tourbillon core."
  }
];
