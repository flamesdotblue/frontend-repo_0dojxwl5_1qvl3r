import { Rocket, Cpu, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-blue-500/10 to-fuchsia-500/20" />
      <div className="absolute -top-40 -right-32 w-[36rem] h-[36rem] rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 w-[32rem] h-[32rem] rounded-full bg-fuchsia-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Rocket size={14} />
            AI PC Advisor is live
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Find your perfect PC or laptop
            <span className="block bg-gradient-to-r from-indigo-300 via-white to-fuchsia-300 bg-clip-text text-transparent">
              by chatting with an AI expert
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Skip endless spec sheets. Tell our AI what you do, what you love, and your
            budget — it will guide you to the right machine in minutes.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#chat"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow/50 shadow-indigo-800/20 transition hover:translate-y-[-1px] hover:shadow-lg"
            >
              Start a conversation
              <Cpu size={18} />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-white/80 backdrop-blur transition hover:bg-white/10"
            >
              How it works
              <ShoppingCart size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto mt-16 max-w-5xl rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-2 backdrop-blur"
        >
          <div className="rounded-xl bg-slate-900/80 p-6 ring-1 ring-white/10">
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/70">Tell us what you need</p>
                <p className="mt-1 text-white">Gaming, school, editing, travel</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/70">We translate it to specs</p>
                <p className="mt-1 text-white">CPU, GPU, RAM, display, weight</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/70">Get tailored picks</p>
                <p className="mt-1 text-white">Buy with confidence</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
