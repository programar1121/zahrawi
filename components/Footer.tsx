import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 md:flex-row md:justify-between">
        <div>
          <p className="font-heading text-2xl text-white">Zahrawi Store</p>
          <p className="mt-2 text-sm text-silver/70">Unbox Life With Zahrawi</p>
        </div>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-silver/80">
          {['Home', 'Watches', 'Collections', 'Limited Edition', 'About', 'Contact'].map((item) => (
            <li key={item} className="transition hover:text-gold">{item}</li>
          ))}
        </ul>
        <div className="flex gap-3 text-silver/80">
          {[Instagram, Facebook, Youtube].map((Icon, i) => (
            <button key={i} className="rounded-full border border-white/15 p-2 transition hover:border-gold hover:text-gold">
              <Icon className="h-4 w-4" />
            </button>
          ))}
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-silver/60">
        © {new Date().getFullYear()} Zahrawi Store. All rights reserved.
      </p>
    </footer>
  );
}
