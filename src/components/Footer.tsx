import Link from "next/link"
import {
  Mail,
  Cpu,
  MapPin,
} from "lucide-react"
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6"

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/activities", label: "Activities" },
  { href: "/sessions", label: "Sessions" },
  { href: "/contact", label: "Contact" },
]

const socialLinks = [
  {
    href: "https://github.com", // replace
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://linkedin.com/in/eng-perfector-a5376a347", // replace
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://x.com", // replace
    label: "X",
    icon: FaXTwitter,
  },
  {
    href: "https://facebook.com", // replace
    label: "Facebook",
    icon: FaFacebook,
  },
  {
    href: "https://wa.me/254796985894", // replace with your number
    label: "WhatsApp",
    icon: FaWhatsapp,
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Content */}
        <div className="py-14 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Block */}
          <div className="md:col-span-5 space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group"
            >
              <span className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/15 transition-all duration-300">
                <Cpu className="h-4 w-4 text-cyan-400" />
              </span>
              <span className="text-lg font-semibold text-white tracking-tight">
                Eng Perfector
              </span>
            </Link>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
              Computer Technologist focused on hardware engineering, embedded
              systems, and practical software solutions.
            </p>

            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <MapPin className="h-4 w-4 text-cyan-500/70" />
              <span>Maseno · Kisumu County, Kenya</span>
            </div>
          </div>

          {/* Navigation Block */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social Block */}
          <div className="md:col-span-4 space-y-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-5">
                Get in Touch
              </h4>
              <a
                href="mailto:engperfector2026@gmail.com"
                className="group inline-flex items-center gap-2.5 text-sm text-zinc-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Mail className="h-4 w-4 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                <span className="break-all">engperfector2026@gmail.com</span>
              </a>
            </div>

            {/* Social Icons - Horizontal */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
                Follow
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="group flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300"
                  >
                    <item.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800/70 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-zinc-600">
              © {new Date().getFullYear()} Eng Perfector. All rights reserved.
            </p>
            <p className="text-xs text-zinc-600 tracking-wide">
              Hardware · Embedded · Software
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}