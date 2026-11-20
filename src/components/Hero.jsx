import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 pb-16"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-400/10 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/25 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-8"
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm text-brand-dark font-medium">
                Available for Work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-zinc-900 leading-[1.05] tracking-tight mb-5"
            >
              Software
              <br />
              Developer &{' '}
              <span className="bg-gradient-to-r from-brand to-orange-500 bg-clip-text text-transparent">
                Creative
              </span>
              <br />
              Problem Solver
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base sm:text-lg text-zinc-600 max-w-lg mb-8 leading-relaxed"
            >
              Hi, I am Collins, a passionate developer crafting seamless
              digital experiences. I build products that connect, inspire,
              and make an impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-brand to-orange-500 text-white font-medium rounded-full shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/35 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                See My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-7 py-3.5 border border-zinc-300 text-zinc-800 font-medium rounded-full hover:border-zinc-400 hover:bg-zinc-100 transition-all duration-300 bg-white/70"
              >
                Contact Me
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex gap-8 sm:gap-10 mt-10 pt-6 border-t border-zinc-200"
            >
              {[
                { number: '5+', label: 'Projects Built' },
                { number: '3+', label: 'Years Experience' },
                { number: '10+', label: 'Technologies' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-zinc-900">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-zinc-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Photo glow ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-br from-brand/35 via-orange-400/20 to-transparent rounded-3xl blur-md" />

              {/* Photo container */}
              <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[460px] rounded-2xl overflow-hidden border border-zinc-200/80 shadow-2xl bg-white">
                <img
                  src="/images/photobg.jpg"
                  alt="Collins"
                  className="w-full h-full object-cover"
                />
                {/* Photo overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent" />

                {/* Floating label on photo */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 border border-zinc-200/60 shadow-lg">
                    <p className="text-zinc-900 font-semibold text-sm">Currently building</p>
                    <p className="text-brand font-medium text-xs mt-0.5">Amazing digital experiences ✨</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling marquee of tech stack */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 border-t border-zinc-200 bg-white/60 backdrop-blur-sm"
      >
        <div className="overflow-hidden py-3.5">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            className="flex gap-8 items-center whitespace-nowrap"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 items-center">
                {['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Next.js', 'Firebase', 'Flutter', 'Python'].map(
                  (tech) => (
                    <div
                      key={`${tech}-${i}`}
                      className="flex items-center gap-2 text-zinc-600 font-medium text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-brand rounded-full" />
                      {tech}
                    </div>
                  )
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
