"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function WatchShowcase() {
  return (
    <section className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2">
      <motion.div
        animate={{ rotate: [0, 3, -3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="relative mx-auto h-96 w-full max-w-md"
      >
        <Image
          src="https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&w=1000&q=80"
          alt="Premium Zahrawi watch"
          fill
          className="rounded-[2rem] object-cover shadow-luxe"
        />
      </motion.div>
      <div className="space-y-5">
        <p className="text-sm uppercase tracking-[0.3em] text-gold">Premium Showcase</p>
        <h3 className="font-heading text-5xl text-white">The Zahrawi Imperial One</h3>
        <p className="text-silver/80">
          A singular expression of craftsmanship. Brushed platinum architecture, sapphire crystal casing, and an ultra-precise automatic movement calibrated by master horologists.
        </p>
        <Button>Reserve Yours</Button>
      </div>
    </section>
  );
}
