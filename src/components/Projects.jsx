import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import gameOver from "../assets/gameOver.png";

const PROJECTS = [
  {
    title: "Weather app",
    desc: "Weather web app with city search, 7-day forecast, geolocation, and WeatherAPI integration.",
    tags: ["HTML", "Css", "Bootstrap", "js"],
    live: "https://zoseribrahiim.github.io/Quote1/",
    code: "https://github.com/zoseribrahiim/Quote1",
    cover:
      "https://images.unsplash.com/photo-1614480633894-f3b7f4bb0e76?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Game over",
    desc: "Game over web app using Free-to-Play Games API to browse and view details of games by category.",
    tags: ["HTML", "Css", "Bootstrap", "js"],
    live: "https://zoseribrahiim.github.io/Game-Over/",
    code: "https://github.com/zoseribrahiim/Game-Over",
    cover: gameOver,
  },
  {
    title: "Fresh Cart",
    desc: "Full-featured e-commerce web app using React, Redux, and custom hooks with authentication and modern responsive UI.",
    tags: ["React", "Sass", "Tailwind", "Redux", "Stripe", "Auth"],
    live: "https://zoseribrahiim.github.io/Fresh-Cart/",
    code: "https://github.com/zoseribrahiim/fresh-Cart",
    cover:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Book-Mark",
    desc: "Create Bookmark app using Js.",
    tags: ["HTML", "Css", "Bootstrap", "js"],
    live: "https://zoseribrahiim.github.io/Book-Mark/",
    code: "https://github.com/zoseribrahiim/Book-Mark",
    cover:
      "https://images.unsplash.com/photo-1734709118897-78caf6bc7695?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Projects() {
  const [query, setQuery] = useState("");
  const list = useMemo(
    () =>
      PROJECTS.filter((p) =>
        (p.title + " " + p.tags.join(" "))
          .toLowerCase()
          .includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <section id="projects" className="py-20 md:py-24 border-t border-white/5">
      <div className="container px-4">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="section-title">Projects</h2>
            <p className="section-sub mt-1">Some things I've been working on</p>
          </div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 outline-none"
          />
        </div>

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        >
          <AnimatePresence>
            {list.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="font-semibold">{p.title}</div>
                  <p className="text-sm text-gray-400 mt-1">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-lg bg-black/30 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-cyan-500 text-sm"
                    >
                      Live
                    </a>
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg border border-white/20 text-sm"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
