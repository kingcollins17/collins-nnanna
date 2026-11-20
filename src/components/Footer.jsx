import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative pt-12 pb-6 border-t border-zinc-200 bg-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand to-orange-400 flex items-center justify-center shadow-xs">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-zinc-900 font-semibold text-lg">Collins</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Building exceptional digital experiences with clean code and
              creative vision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-zinc-900 font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-zinc-600 text-sm hover:text-brand font-medium transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-zinc-900 font-semibold mb-4">Let's Talk</h4>
            <p className="text-zinc-500 text-sm mb-4">
              Ready to start a project? Drop me a line.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand to-orange-500 text-white text-sm font-medium rounded-full shadow-md shadow-brand/20 hover:shadow-lg hover:shadow-brand/30 transition-all duration-300"
            >
              Contact Me
            </motion.a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Collins. All rights reserved.
          </p>
          <p className="text-zinc-500 text-sm">
            Built with <span className="text-brand">♥</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
