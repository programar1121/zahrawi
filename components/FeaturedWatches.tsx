import ProductCard from "@/components/ProductCard";
import { watches } from "@/data/watches";

export default function FeaturedWatches() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20">
      <h2 className="font-heading text-4xl text-white md:text-5xl">Featured Watches</h2>
      <p className="mt-2 text-silver/75">Precision masterpieces curated for distinguished collectors.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {watches.map((watch) => (
          <ProductCard key={watch.id} watch={watch} />
        ))}
      </div>
    </section>
  );
}
