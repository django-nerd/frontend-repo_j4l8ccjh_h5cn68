import { Mail, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  };

  return (
    <section id="download" className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-6 md:p-12 text-white shadow-2xl border border-white/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Be first to try the AI parking scanner</h2>
          <p className="text-white/80 mt-3 mb-6">
            Join the waitlist and we’ll send you early access when it’s ready.
          </p>

          {sent ? (
            <div className="bg-white/10 border border-white/20 rounded-2xl p-4">
              Thanks! You’re on the list. We’ll email you when invites go out.
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-white/70" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/15 placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
                />
              </div>
              <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:opacity-95">
                Join waitlist <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
