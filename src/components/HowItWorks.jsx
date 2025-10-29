import { MessageSquare, Cpu, ShoppingCart, Shield } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: MessageSquare,
    title: "Describe your needs",
    desc: "Share what you do, your budget, and preferences like portability or battery life.",
  },
  {
    icon: Cpu,
    title: "AI translates to specs",
    desc: "We map your goals to real hardware: CPU/GPU tiers, RAM, storage, and display.",
  },
  {
    icon: ShoppingCart,
    title: "Curated recommendations",
    desc: "Get the best options across brands with pros/cons and price transparency.",
  },
  {
    icon: Shield,
    title: "Buy with confidence",
    desc: "We explain why each pick fits you and provide trusted store links.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">How it works</h2>
          <p className="mt-3 text-white/70">
            A conversation-first way to find your next PC or laptop.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-5 backdrop-blur hover:from-white/20"
            >
              <div className="mb-3 inline-flex rounded-lg bg-indigo-500/20 p-2 text-indigo-200 ring-1 ring-inset ring-indigo-400/20">
                <s.icon size={20} />
              </div>
              <h3 className="text-lg font-medium text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
