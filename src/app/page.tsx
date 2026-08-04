import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Cpu,
  Code2,
  Wrench,
  ArrowUpRight,
  Zap,
  CircuitBoard,
} from "lucide-react"

const focusAreas = [
  {
    icon: Cpu,
    title: "Hardware Engineering",
    description:
      "Circuit design, embedded systems, troubleshooting, and hands-on electronics.",
  },
  {
    icon: Code2,
    title: "Programming",
    description:
      "Practical tools, automation, and software that supports real systems.",
  },
  {
    icon: Wrench,
    title: "Engineering Work",
    description:
      "Prototyping, repairs, experiments, and continuous building.",
  },
]

const projects = [
  {
    title: "Smart Power Monitoring System",
    description:
      "Real-time monitoring of voltage, current, and power using sensors and a microcontroller.",
    tags: ["Embedded", "Hardware", "Sensors"],
  },
  {
    title: "Hardware Diagnostics Tool",
    description:
      "Software utility that assists with hardware testing and component diagnostics.",
    tags: ["Software", "Automation", "Python"],
  },
]

export default function HomePage() {
  return (
    <div className="bg-zinc-950">
      {/* Hero */}
      <section className="relative h-[480px] md:h-[560px] lg:h-[620px] w-full overflow-hidden">
        <Image
          src="/hardware-workspace.jpg"
          alt="Electronics workspace"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/80 to-zinc-950/45" />
        <div className="absolute inset-0 bg-zinc-950/25" />

        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-semibold text-cyan-300 border border-cyan-500/40 rounded-full bg-cyan-500/10 backdrop-blur-sm">
              <Zap className="h-3.5 w-3.5" />
              Available for opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-5 leading-[1.08]">
              Hardware{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Software
              </span>
              <br />
              Systems.
            </h1>

            <p className="text-base md:text-lg text-zinc-300 max-w-lg mb-8 leading-relaxed">
              Computer Technology student building real systems through hardware
              engineering, embedded projects, and practical programming.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3">
              <Link href="/projects">
                <Button
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold h-11 px-6 shadow-lg shadow-cyan-500/20"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-zinc-500/80 text-white hover:bg-white/10 hover:text-white h-11 px-6 backdrop-blur-sm"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              Focus
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              What I work on
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {focusAreas.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 hover:border-cyan-500/40 hover:bg-zinc-900 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-zinc-800 border border-zinc-700 group-hover:border-cyan-500/30 flex items-center justify-center mb-4 transition-colors">
                <item.icon className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="container mx-auto px-4 pb-16 md:pb-20">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              Portfolio
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Selected projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium shrink-0"
          >
            View all
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <Link
              key={project.title}
              href="/projects"
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden hover:border-cyan-500/40 transition-all"
            >
              <div className="h-40 bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 flex items-center justify-center border-b border-zinc-800">
                <CircuitBoard className="h-10 w-10 text-zinc-600 group-hover:text-cyan-500/50 transition-colors" />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-20">
        <div className="rounded-2xl border border-cyan-500/25 bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-cyan-600/10 px-6 py-12 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
            Let’s build something real
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-md mx-auto mb-7 leading-relaxed">
            Open to collaborations, internships, and technical projects in
            hardware and software.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold h-11 px-8 shadow-lg shadow-cyan-500/20"
            >
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}