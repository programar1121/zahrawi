"use client";

import { motion } from "framer-motion";
import { Heart, Search, ShoppingBag } from "lucide-react";

const links = ["Home", "Watches", "Collections", "Limited Edition", "About", "Contact"];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/65 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
        <p className="font-heading text-xl text-white">Zahrawi Store</p>
        <ul className="hidden gap-7 text-sm text-silver/90 lg:flex">
          {links.map((link) => (
            <li key={link} className="cursor-pointer transition hover:text-gold">
              {link}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 text-silver">
          {[Search, Heart, ShoppingBag].map((Icon, i) => (
            <button key={i} className="rounded-full border border-white/10 p-2 transition hover:border-gold/60 hover:text-gold">
              <Icon className="h-4 w-4" />
            </button>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
