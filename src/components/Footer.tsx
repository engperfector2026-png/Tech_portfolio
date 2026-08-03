import Link from "next/link"
import { Mail, ArrowUpRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <h3 className="text-lg font-semibold text-white mb-2">
              Eng Perfector
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Computer Technologist focused on hardware, embedded systems, and practical software solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-medium text-white mb-4">Navigate</h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-cyan-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/activities" className="hover:text-cyan-400 transition-colors">
                  Activities
                </Link>
              </li>
              <li>
                <Link href="/sessions" className="hover:text-cyan-400 transition-colors">
                  Sessions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-medium text-white mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-zinc-400 hover:text-cyan-400 transition-colors"
              >
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-zinc-400 hover:text-cyan-400 transition-colors"
              >
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
              </a>
              <a
                href="mailto:engperfector2026@gmail.com"
                className="group flex items-center gap-2 text-sm text-zinc-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                engperfector2026@gmail.com
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Eng Perfector. All rights reserved.
          </p>
          <p className="text-sm text-zinc-600">
            Built with purpose in Kisumu, Kenya
          </p>
        </div>
      </div>
    </footer>
  )
}