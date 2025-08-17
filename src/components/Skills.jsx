import { motion } from 'framer-motion'

const SKILLS = [
  { name: 'HTML5 / CSS3 / SCSS / Bootstrap 4 / Tailwind', level: 0.95 },
  { name: 'JavaScript', level: 0.9 },
  { name: 'TypeScript', level: 0.8 },
  { name: 'NPM', level: 0.85 },
  { name: 'Webpack', level: 0.75 },
  { name: 'DOM & BOM', level: 0.85 },
  { name: 'Material UI', level: 0.8 },
  { name: 'React framework', level: 0.9 },
  { name: 'Nuxt.js', level: 0.65 },
  { name: 'jQuery Plugins', level: 0.7 },
  { name: 'JSON', level: 0.9 },
  { name: 'API', level: 0.85 },
  { name: 'Express', level: 0.7 },
  { name: 'MySQL / SQL', level: 0.75 },
  { name: 'MongoDB', level: 0.7 },
  { name: 'Git / GitHub', level: 0.85 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24 border-t border-white/5">
      <div className="container px-4">
        <h2 className="section-title">Skills</h2>
        <p className="section-sub mt-1">Always learning. Always shipping.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.name}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="p-4 w-full rounded-xl border border-white/10 bg-white/5"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-sm">{s.name}</span>
                <span className="text-xs text-gray-400">
                  {Math.round(s.level * 100)}%
                </span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level * 100}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.05,
                  }}
                  className="h-full rounded-full bg-cyan-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
