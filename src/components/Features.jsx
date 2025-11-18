import { ShieldCheck, Clock, Map, Ticket, Sparkles, Zap } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Avoid tickets",
    desc: "Real-time answers reduce costly mistakes and parking fines.",
  },
  { icon: Clock, title: "Instant results", desc: "One tap, clear outcome in under a second." },
  { icon: Map, title: "Knows your context", desc: "Understands location, time, and local rules." },
  { icon: Ticket, title: "Rule breakdown", desc: "See the exact reasons and exceptions explained simply." },
  { icon: Sparkles, title: "AI that explains", desc: "Not just yes/no — get the why behind the answer." },
  { icon: Zap, title: "Works offline", desc: "Recent scans are cached when signal drops." },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Built to make city parking effortless
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 text-blue-300 flex items-center justify-center mb-4 group-hover:bg-blue-500/25">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="text-blue-200/80 mt-2 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
