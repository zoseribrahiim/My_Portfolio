import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ROLES = [
  "Front-End Developer",
  "React.js & Next.js Framework",
  "Problem Solver",
];

export default function Hero() {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = ROLES[i % ROLES.length];

    const step = () => {
      if (!del) {
        setTxt((t) => {
          const newText = full.slice(0, t.length + 1);
          if (newText === full) {
            setTimeout(() => setDel(true), 1200);
          }
          return newText;
        });
      } else {
        setTxt((t) => {
          const newText = full.slice(0, t.length - 1);
          if (newText === "") {
            setDel(false);
            setI(i + 1);
          }
          return newText;
        });
      }
    };

    const t = setTimeout(step, 100);
    return () => clearTimeout(t);
  }, [i, txt, del]);

  return (
    <section
      id="home"
      className="relative overflow-hidden h-screen flex items-center"
    >
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full" />
      <div className="absolute top-40 -right-16 w-96 h-96 bg-fuchsia-500/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold"
          >
            Hi, I'm <span className="text-cyan-400">Ibrahim Ahmed</span>
          </motion.h1>

          <motion.p className="mt-3 text-lg md:text-xl text-gray-300 min-h-[2rem]">
            {txt}
            <span className="animate-pulse">▌</span>
          </motion.p>

          <motion.p className="mt-4 max-w-2xl mx-auto text-gray-400">
            I build fast, accessible, and delightful web experiences with React,
            Tailwind, and tasteful motion.
          </motion.p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="px-5 py-3 rounded-xl bg-cyan-500 text-white font-medium"
            >
              See Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="https://drive.google.com/file/d/1aE0uereq29z2lkAp9YvlBsS1zNCNDIYa/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="px-11 py-3 rounded-xl border border-white/20"
            >
              My CV
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
