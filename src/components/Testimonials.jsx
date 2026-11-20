import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const testimonials = [
  {
    id: 1,
    name: 'Esther Oyeleye',
    role: 'CEO, Zidepeople',
    text: "Collins was instrumental in bringing Zidepeople to life. His technical expertise and deep understanding of our vision resulted in a platform that truly connects users with local service providers seamlessly.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Victor Uboho',
    role: 'CEO & Founder, Ceed Venture Studio',
    text: "Working with Collins has been an exceptional experience. His ability to translate complex ideas into clean, functional software is remarkable. He consistently delivers beyond expectations.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Mfon Ekwere',
    role: 'Founder & CEO, Subby',
    text: "Collins built Subby from the ground up with incredible attention to detail. The final product was polished, intuitive, and exactly the subscription management tool we envisioned.",
    rating: 5,
  },
  {
    id: 4,
    name: 'Matthew Gusanu',
    role: 'Software Engineer',
    text: "Collins is one of the most talented developers I've worked with. His code is clean, well structured, and he has a sharp eye for both performance and user experience.",
    rating: 5,
  },
  {
    id: 5,
    name: 'Victor Chiemelie',
    role: '.NET Developer, ZedCrest',
    text: "Collins brings a rare combination of creativity and technical depth. His collaborative spirit and problem solving skills make him an outstanding developer to work alongside.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.2 })
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="py-14 lg:py-20 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand font-semibold text-sm tracking-widest uppercase">
              Testimonials
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 mt-3 leading-tight">
              Trusted by Clients,
              <br />
              <span className="bg-gradient-to-r from-brand to-orange-500 bg-clip-text text-transparent">
                Loved
              </span>{' '}
              by Users
            </h2>
            <p className="text-zinc-600 mt-5 text-lg leading-relaxed">
              Great software goes beyond functionality, it creates impact.
              Hear from people who have experienced the results of thoughtful
              development firsthand.
            </p>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {testimonials.map((t, index) => (
              <motion.div
                key={t.id}
                onClick={() => setActive(index)}
                className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  active === index
                    ? 'bg-white border-brand/50 shadow-lg shadow-brand/10'
                    : 'bg-white/80 border-zinc-200 hover:border-zinc-300 shadow-xs'
                }`}
                whileHover={{ y: -2 }}
                layout
              >
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-brand"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {active === index && (
                    <motion.p
                      key={t.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-zinc-700 text-sm leading-relaxed mb-4"
                    >
                      "{t.text}"
                    </motion.p>
                  )}
                </AnimatePresence>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-orange-400 flex items-center justify-center shadow-xs">
                    <span className="text-white font-semibold text-sm">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-zinc-900 font-semibold text-sm">{t.name}</p>
                    <p className="text-zinc-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
