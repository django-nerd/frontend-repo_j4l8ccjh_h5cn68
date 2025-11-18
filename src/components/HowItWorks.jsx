import { Camera, Clock, MapPin, Fingerprint } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="how" className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          How it works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-blue-200/80 text-center mt-3 mb-10"
        >
          From scan to certainty in seconds
        </motion.p>
        <div className="grid md:grid-cols-4 gap-4 md:gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-blue-500/15 text-blue-300 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-blue-300/70 text-xs font-medium">Step {i + 1}</div>
              <h3 className="text-white font-semibold mt-1">{title}</h3>
              <p className="text-blue-200/80 text-sm mt-2 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
