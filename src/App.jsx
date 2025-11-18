import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(59,130,246,0.2),transparent_30%),radial-gradient(circle_at_80%_-20%,rgba(99,102,241,0.15),transparent_30%)] pointer-events-none" />

      <header className="relative z-10">
        <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/flame-icon.svg" alt="logo" className="w-8 h-8" />
            <span className="font-semibold">CurbAI</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-blue-200/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#download" className="hover:text-white">Get the app</a>
          </div>
          <a href="#download" className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/15">Join waitlist</a>
        </nav>
      </header>

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
