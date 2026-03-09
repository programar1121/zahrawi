"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Armand V.",
    text: "A true statement piece. The finishing and presentation are unparalleled.",
  },
  {
    name: "Layla M.",
    text: "From packaging to precision, Zahrawi sets a new benchmark in luxury timepieces.",
  },
  {
    name: "Noah R.",
    text: "I own Swiss icons, and this feels every bit as premium—if not more.",
  }
];

export default function Testimonials() {
  return (
    <section className="bg-platinum/50 py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <h2 className="font-heading text-4xl text-white md:text-5xl">Customer Reviews</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {reviews.map((review, idx) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.12 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-6"
            >
              <div className="mb-4 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold" />
                ))}
              </div>
              <p className="text-silver/85">“{review.text}”</p>
              <p className="mt-6 font-heading text-xl text-white">{review.name}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
