import { Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <div className="text-lg font-semibold text-white">Chadwood PC Advisor</div>
            <p className="mt-1 text-sm text-white/60">Chat-first, spec-smart recommendations.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="mailto:hello@example.com"
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
        <div className="mt-6 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Chadwood. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
