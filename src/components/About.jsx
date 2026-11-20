import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const skills = [
    { name: 'Python', level: 95 },
    { name: 'Flutter / Dart', level: 95 },
    { name: 'React / Next.js', level: 90 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 85 },
  ]

  const tools = [
    'Git', 'Firebase', 'MongoDB', 'PostgreSQL', 'Docker', 'Figma', 'VS Code', 'REST APIs'
  ]

  return (
    <section id="about" className="py-14 lg:py-20 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-brand font-semibold text-sm tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 mt-3 leading-tight">
            Crafting Meaningful
            <br />
            <span className="bg-gradient-to-r from-brand to-orange-500 bg-clip-text text-transparent">
              Digital Experiences
            </span>{' '}
            That
            <br />
            Stand Out
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left - About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-zinc-600 text-lg leading-relaxed mb-6">
              I am Collins, a passionate software developer focused on building
              intuitive, performant, and visually stunning digital products.
              With a strong foundation in both frontend and backend technologies,
              I bring ideas to life with clean code and thoughtful design.
            </p>
            <p className="text-zinc-600 text-lg leading-relaxed mb-8">
              I believe in building products that not only look beautiful but
              solve real problems. Every project I take on is an opportunity to
              push boundaries and deliver something extraordinary.
            </p>

            {/* Tools grid */}
            <div className="mt-8">
              <h3 className="text-zinc-900 font-semibold mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="px-4 py-2 bg-white border border-zinc-200/90 rounded-lg text-sm text-zinc-700 font-medium hover:border-brand/50 hover:text-brand shadow-xs transition-all duration-300"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Skills bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-zinc-900 font-semibold mb-6">Core Skills</h3>
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-zinc-800 text-sm font-medium">{skill.name}</span>
                  <span className="text-brand font-semibold text-sm">{skill.level}%</span>
                </div>
                <div className="h-2.5 bg-zinc-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full bg-gradient-to-r from-brand to-orange-400 rounded-full"
                  />
                </div>
              </div>
            ))}

            {/* Experience card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="mt-8 p-6 bg-gradient-to-br from-white to-orange-50/40 rounded-2xl border border-zinc-200/80 shadow-md shadow-zinc-200/50"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-zinc-900 font-semibold">Always Learning</p>
                  <p className="text-zinc-500 text-sm">Constantly exploring new technologies and methodologies</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
