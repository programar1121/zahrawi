"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-hero-gradient px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2"
      >
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">Unbox Life With Zahrawi</p>
          <h1 className="font-heading text-5xl leading-tight text-white md:text-7xl">
            Timeless Luxury on Your Wrist
          </h1>
          <p className="max-w-xl text-lg text-silver/80">
            Discover Premium Watches by Zahrawi. Crafted for those who seek precision, prestige, and enduring elegance.
          </p>
          <Button size="lg">Explore Collection</Button>
        </div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="relative h-[420px] overflow-hidden rounded-[2rem] border border-white/15 shadow-luxe"
        >
          <Image
            src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1400&q=80"
            alt="Luxury watch hero"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
