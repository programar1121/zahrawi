"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import type { Watch } from "@/data/watches";

export default function ProductCard({ watch }: { watch: Watch }) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      className="glass-card rounded-3xl p-4 shadow-luxe"
    >
      <div className="relative mb-4 h-64 overflow-hidden rounded-2xl">
        <Image src={watch.image} alt={watch.name} fill className="object-cover" />
      </div>
      <p className="font-heading text-2xl text-white">{watch.name}</p>
      <p className="mt-1 text-gold">{watch.price}</p>
      <div className="my-4 flex gap-1 text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < watch.rating ? "fill-gold" : ""}`} />
        ))}
      </div>
      <div className="flex gap-3">
        <Button className="flex-1">Add to Cart</Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Quick View</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{watch.name}</DialogTitle>
              <DialogDescription>{watch.description}</DialogDescription>
            </DialogHeader>
            <div className="relative mt-4 h-72 overflow-hidden rounded-2xl">
              <Image src={watch.image} alt={watch.name} fill className="object-cover" />
            </div>
            <p className="mt-4 text-gold">{watch.price}</p>
          </DialogContent>
        </Dialog>
      </div>
    </motion.article>
  );
}
