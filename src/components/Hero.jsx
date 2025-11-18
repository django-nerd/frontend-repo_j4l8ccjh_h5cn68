import { Camera, MapPin, Sparkles, Download, Apple, Play, ChevronRight } from "lucide-react";

const storeBtnBase =
  "inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white shadow-lg shadow-blue-600/20 transition-transform active:scale-95";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200 text-xs mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              New: Instant AI sign understanding
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Scan parking signs.
              <br />
              Park with confidence.
            </h1>
            <p className="text-blue-100/90 mt-6 text-lg leading-relaxed">
              Point your camera at any street sign and get a clear answer: can you park here and for how long. No more guesswork, tickets, or confusing rules.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a href="#download" className={`${storeBtnBase} bg-blue-600 hover:bg-blue-500`}>
                <Download className="w-5 h-5" />
                Get the app
                <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#how" className={`${storeBtnBase} bg-white/10 backdrop-blur border border-white/15 text-white hover:bg-white/15`}>
                See how it works
              </a>
            </div>

            <div className="flex items-center gap-8 mt-8 text-blue-200/80">
              <div className="flex items-center gap-2"><Camera className="w-5 h-5" /> Live camera</div>
              <div className="flex items-center gap-2"><MapPin className="w-5 h-5" /> Location aware</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-blue-500/20 blur-3xl rounded-full" />
            <div className="relative bg-slate-800/60 border border-white/10 rounded-3xl p-4 shadow-2xl">
              <div className="aspect-[9/19] w-72 mx-auto rounded-[2rem] bg-black border border-white/10 overflow-hidden shadow-2xl">
                <div className="h-10 bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center text-xs text-blue-200/70">
                  AI Scan Preview
                </div>
                <div className="relative h-[520px]">
                  <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop" alt="Parking sign" className="absolute inset-0 w-full h-full object-cover opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 text-white">
                    <div className="flex items-center gap-2 text-sm">
                      <Camera className="w-4 h-4" /> Analyzing sign...
                    </div>
                    <div className="mt-2 text-sm text-blue-50">
                      You can park here for 2 hours until 6:00 PM. Permit holders are exempt.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 mt-6">
              <a href="#download" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 font-semibold shadow">
                <Apple className="w-4 h-4" /> App Store
              </a>
              <a href="#download" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 border border-white/15 text-white font-semibold">
                <Play className="w-4 h-4" /> Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
