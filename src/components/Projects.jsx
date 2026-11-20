import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const projects = [
  {
    id: 1,
    title: 'Zidepeople',
    category: 'Marketplace',
    description:
      'A marketplace for local work that connects users to local service providers to complete tasks, and enables companies to hire cover staff quickly and reliably.',
    image: '/images/zidepeople2.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    color: 'from-blue-500/10 to-orange-500/10',
    playStore: 'https://play.google.com/store/apps/details?id=com.zidepeople.zide_app&pcampaignid=web_share',
    appStore: 'https://apps.apple.com/sg/app/zidepeople-quick-tasks-jobs/id6745899428',
  },
  {
    id: 2,
    title: 'Subby',
    category: 'SaaS Product',
    description:
      'A subscription management tool that helps users track, manage, and optimize all their recurring subscriptions in one unified dashboard.',
    image: '/images/subby.png',
    tags: ['React', 'Firebase', 'Tailwind'],
    color: 'from-purple-500/10 to-orange-500/10',
    playStore: 'https://play.google.com/store/apps/details?id=com.mysubbyapp&pcampaignid=web_share',
    appStore: 'https://apps.apple.com/cn/app/subby-recurring-payments/id6789639257',
  },
  {
    id: 3,
    title: 'Frodor',
    category: 'Mobile App',
    description:
      'An innovative food delivery application providing seamless ordering experience with real time tracking and smart restaurant recommendations.',
    image: '/images/frodor.png',
    tags: ['Flutter', 'Dart', 'Firebase'],
    color: 'from-green-500/10 to-emerald-500/10',
    playStore: 'https://play.google.com/store/apps/details?id=customer.frodor.app&hl=en',
    appStore: 'https://apps.apple.com/in/app/frodor/id6593661722',
  },
  {
    id: 4,
    title: 'LearnitIn AI',
    category: 'EdTech / AI',
    description:
      'An AI powered learning platform that creates personalized educational content and adaptive learning paths for students of all levels.',
    image: '/images/learnitin_logo.png',
    tags: ['Next.js', 'Python', 'OpenAI'],
    color: 'from-orange-500/10 to-yellow-500/10',
    playStore: 'https://play.google.com/store/apps/details?id=com.learnitin.learnitin&pcampaignid=web_share',
    appStore: null,
  },
  {
    id: 5,
    title: 'Clash of Words',
    category: 'Gaming',
    description:
      'A competitive word game where players battle in real time word challenges, featuring multiplayer lobbies and leaderboards.',
    image: '/images/cow.jpg',
    tags: ['React', 'Socket.io', 'Node.js'],
    color: 'from-red-500/10 to-orange-500/10',
    playStore: 'https://play.google.com/store/apps/details?id=com.wordle.app.wordle&pcampaignid=web_share',
    appStore: null,
  },
]

export default function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section id="projects" className="py-14 lg:py-20 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      {/* Subtle Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-brand font-semibold text-sm tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 mt-3">
            Featured{' '}
            <span className="bg-gradient-to-r from-brand to-orange-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-zinc-600 mt-4 max-w-2xl mx-auto text-lg">
            A collection of projects I have built, from full stack web apps to
            mobile experiences and AI powered tools.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative rounded-2xl overflow-hidden border border-zinc-200/80 bg-white hover:border-brand/40 shadow-sm hover:shadow-xl hover:shadow-brand/5 transition-all duration-500 ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div
                className={`relative ${
                  index === 0 ? 'grid md:grid-cols-2' : 'flex flex-col'
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden bg-zinc-100 ${
                    index === 0 ? 'h-72 md:h-80' : 'h-56'
                  }`}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={
                      hoveredId === project.id
                        ? { scale: 1.04 }
                        : { scale: 1 }
                    }
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md text-xs font-semibold text-zinc-800 rounded-full border border-zinc-200/80 shadow-xs">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-2 group-hover:text-brand transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed mb-5 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-zinc-100 text-xs font-medium text-zinc-700 rounded-full border border-zinc-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* App Store / Google Play Buttons */}
                  <div className="pt-2 border-t border-zinc-100 flex flex-wrap items-center gap-3">
                    {/* iOS App Store */}
                    {project.appStore ? (
                      <a
                        href={project.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 text-xs font-medium transition-all shadow-xs hover:shadow-md"
                        title="Download on Apple App Store"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76.99.08 2.05-.51 2.68-1.26z" />
                        </svg>
                        <span>App Store</span>
                      </a>
                    ) : (
                      <span
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-100 text-zinc-400 border border-zinc-200 text-xs font-medium cursor-not-allowed select-none"
                        title="App Store link not available"
                      >
                        <svg className="w-4 h-4 fill-current text-zinc-400" viewBox="0 0 24 24">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76.99.08 2.05-.51 2.68-1.26z" />
                        </svg>
                        <span>App Store</span>
                      </span>
                    )}

                    {/* Android Google Play */}
                    {project.playStore ? (
                      <a
                        href={project.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 text-xs font-medium transition-all shadow-xs hover:shadow-md"
                        title="Get it on Google Play"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M3.609 1.814L13.792 12 3.61 22.186a2.38 2.38 0 0 1-.61-1.637V3.451c0-.623.228-1.198.609-1.637zm11.236 11.24L4.85 23.048c.348.115.728.148 1.127.065.485-.1 1.026-.411 1.634-.871l9.405-6.88-2.171-2.308zm0-2.108l2.171-2.308L7.611 1.758c-.608-.46-1.149-.771-1.634-.871a2.63 2.63 0 0 0-1.127.065l9.995 9.994zm1.488 1.054l3.585 2.624c1.173.859 1.832 1.63 1.832 2.376 0 .746-.659 1.517-1.832 2.376l-3.585 2.624-2.529-2.69 2.529-2.69z" />
                        </svg>
                        <span>Google Play</span>
                      </a>
                    ) : (
                      <span
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-100 text-zinc-400 border border-zinc-200 text-xs font-medium cursor-not-allowed select-none"
                        title="Google Play link not available"
                      >
                        <svg className="w-4 h-4 fill-current text-zinc-400" viewBox="0 0 24 24">
                          <path d="M3.609 1.814L13.792 12 3.61 22.186a2.38 2.38 0 0 1-.61-1.637V3.451c0-.623.228-1.198.609-1.637zm11.236 11.24L4.85 23.048c.348.115.728.148 1.127.065.485-.1 1.026-.411 1.634-.871l9.405-6.88-2.171-2.308zm0-2.108l2.171-2.308L7.611 1.758c-.608-.46-1.149-.771-1.634-.871a2.63 2.63 0 0 0-1.127.065l9.995 9.994zm1.488 1.054l3.585 2.624c1.173.859 1.832 1.63 1.832 2.376 0 .746-.659 1.517-1.832 2.376l-3.585 2.624-2.529-2.69 2.529-2.69z" />
                        </svg>
                        <span>Google Play</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
