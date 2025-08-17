import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24 border-t border-white/5">
      <div className="container px-4">
        <h2 className="section-title">Contact</h2>
        <p className="section-sub mt-1">Let's build something great</p>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-3">
            <a
              className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10"
              href="mailto:ibrahimessam751@gmail.com"
            >
              📧 Email
            </a>
            <a
              className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10"
              target="_blank"
              href="https://github.com/zoseribrahiim"
            >
              💻 GitHub
            </a>
            <a
              className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10"
              target="_blank"
              href="https://www.linkedin.com/in/ibrahim-ahmed-33191a276"
            >
              🔗 LinkedIn
            </a>
          </div>
          <form className="space-y-3">
            <input
              className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 outline-none"
              placeholder="Your name"
            />
            <input
              type="email"
              className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 outline-none"
              placeholder="Email"
            />
            <textarea
              rows="5"
              className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 outline-none"
              placeholder="Tell me about your project..."
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2 rounded-xl bg-cyan-500 text-white"
            >
              Send
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
