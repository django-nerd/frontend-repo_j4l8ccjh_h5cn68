import { Camera, Clock, MapPin, Fingerprint } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Scan the sign",
    desc: "Open the app and point at any parking sign or curbside rules.",
  },
  { icon: MapPin, title: "We add context", desc: "We factor in your location, time, and local regulations." },
  { icon: Clock, title: "AI interprets", desc: "Our model reads the text, symbols, and arrows accurately." },
  { icon: Fingerprint, title: "Clear answer", desc: "You'll see if you can park and for how long, with reasons." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          How it works
        </h2>
        <p className="text-blue-200/80 text-center mt-3 mb-10">
          From scan to certainty in seconds
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-blue-500/15 text-blue-300 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-blue-300/70 text-xs font-medium">Step {i + 1}</div>
              <h3 className="text-white font-semibold mt-1">{title}</h3>
              <p className="text-blue-200/80 text-sm mt-2 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
