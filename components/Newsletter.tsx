import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-20">
      <div className="glass-card rounded-[2rem] p-8 text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-gold">Exclusive Access</p>
        <h2 className="mt-4 font-heading text-4xl text-white">Join the Zahrawi Elite</h2>
        <p className="mt-2 text-silver/75">Be first to access private drops and limited releases.</p>
        <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
          <Input type="email" placeholder="Enter your email" required />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </section>
  );
}
