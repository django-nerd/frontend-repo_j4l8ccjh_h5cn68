import { useState } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950 text-white selection:bg-blue-500/30">
      {/* Soft animated background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl animate-pulse [animation-duration:6s]" />
        <div className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-indigo-600/20 blur-3xl animate-pulse [animation-duration:8s]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(99,102,241,0.16),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Header */}
      <header className="relative z-20 border-b border-white/5 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40">
        <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/flame-icon.svg" alt="CurbAI logo" className="w-8 h-8" />
            <span className="font-semibold tracking-tight">CurbAI</span>
          </div>

          <button className="md:hidden px-3 py-2 rounded-lg border border-white/10 bg-white/5" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>

          <div className="hidden md:flex items-center gap-8 text-blue-200/80">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how" className="hover:text-white transition-colors">How it works</a>
            <a href="#download" className="hover:text-white transition-colors">Get the app</a>
          </div>

          <a href="#download" className="hidden md:inline-flex px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/15 transition-colors">Join waitlist</a>
        </nav>
        {open && (
          <div className="md:hidden px-6 pb-4 space-y-2 text-blue-200/90">
            <a onClick={() => setOpen(false)} href="#features" className="block rounded-lg px-3 py-2 bg-white/5 border border-white/10">Features</a>
            <a onClick={() => setOpen(false)} href="#how" className="block rounded-lg px-3 py-2 bg-white/5 border border-white/10">How it works</a>
            <a onClick={() => setOpen(false)} href="#download" className="block rounded-lg px-3 py-2 bg-white/5 border border-white/10">Join waitlist</a>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="relative z-10">
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
