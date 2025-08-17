import { motion } from 'framer-motion'

const COURSES = [
  {
    period: '2025 – present',
    role: 'React Front-End Course',
    org: 'Digital Egypt Pioneers Initiative',
    bullets: ['Currently enrolled', 'Building scalable front-end apps'],
  },
  {
    period: '2025 – present',
    role: '6-Month Diploma, NodeJs Back-End',
    org: 'Route Academy',
    bullets: ['RESTful APIs with Express.js', 'MongoDB & Mongoose'],
  },
  {
    period: '2024 – 2025',
    role: '6-Month Diploma, React Front-End',
    org: 'Route Academy',
    bullets: ['Advanced React patterns', 'State management with Redux'],
  },
]

export default function Courses() {
  return (
    <section id="courses" className="py-20 md:py-24 border-t border-white/5">
      <div className="container px-4">
        <h2 className="section-title">Courses</h2>
        <div className="relative mt-8">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10" />
          <div className="space-y-6">
            {COURSES.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                <div className="absolute left-2 top-2 h-6 w-6 rounded-full bg-cyan-500 shadow" />
                <div className="p-5 rounded-2xl border border-white/10 bg-white/5">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">
                      {c.role} • <span className="text-cyan-400">{c.org}</span>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-lg bg-black/40 border border-white/10">
                      {c.period}
                    </span>
                  </div>
                  <ul className="list-disc ml-5 text-gray-300 mt-2 space-y-1">
                    {c.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
