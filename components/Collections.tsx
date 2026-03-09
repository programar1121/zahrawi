"use client";

import { motion } from "framer-motion";

const collections = ["Classic", "Sport", "Luxury", "Limited Edition"];

export default function Collections() {
  return (
    <section className="bg-platinum/50 py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <h2 className="font-heading text-4xl text-white md:text-5xl">Watch Collections</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection, i) => (
            <motion.div
              key={collection}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 text-center"
            >
              <p className="font-heading text-3xl text-white">{collection}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
