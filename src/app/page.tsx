import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, Code2, Wrench, ArrowUpRight, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div>
      {/* Hero Banner with Image Background */}
      <section className="relative h-[480px] md:h-[560px] lg:h-[620px] w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/hardware-workspace.jpg"
          alt="Electronics workspace"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />

        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/75 to-zinc-950/40" />
        <div className="absolute inset-0 bg-zinc-950/30" />

        {/* Content on top of image */}
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 text-xs font-semibold text-cyan-300 border border-cyan-500/40 rounded-full bg-cyan-500/10 backdrop-blur-sm">
              <Zap className="h-3.5 w-3.5" />
              Available for opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-5 leading-[1.1]">
              Hardware.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Software.
              </span>
              <br />
              Systems.
            </h1>

            <p className="text-base md:text-lg text-zinc-200 max-w-lg mb-8 leading-relaxed">
              Computer Technology student building real systems through hardware engineering, 
              embedded projects, and practical programming.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3">
              <Link href="/projects">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold h-11 px-6">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-zinc-500 text-white hover:bg-white/10 h-11 px-6 backdrop-blur-sm">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: Cpu,
              title: "Hardware Engineering",
              description: "Circuit design, embedded systems, troubleshooting and electronics.",
            },
            {
              icon: Code2,
              title: "Programming",
              description: "Practical tools, automation, and system-level software solutions.",
            },
            {
              icon: Wrench,
              title: "Engineering Work",
              description: "Prototyping, repairs, experiments, and continuous building.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl border border-zinc-700/80 bg-zinc-900/50 hover:border-cyan-500/50 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-4">
                <item.icon className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1.5">{item.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Selected Projects</h2>
          <Link
            href="/projects"
            className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
          >
            View all <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Smart Power Monitoring System",
              description: "Real-time monitoring of voltage, current and power using sensors and microcontroller.",
              tags: ["Embedded", "Hardware", "Sensors"],
            },
            {
              title: "Hardware Diagnostics Tool",
              description: "Software utility that assists with hardware testing and component diagnostics.",
              tags: ["Software", "Automation", "Python"],
            },
          ].map((project) => (
            <div
              key={project.title}
              className="group rounded-xl border border-zinc-700/80 bg-zinc-900/50 overflow-hidden hover:border-cyan-500/50 transition-all"
            >
              <div className="h-36 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                <span className="text-zinc-500 text-sm">Project Preview</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-cyan-400 transition-colors">
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
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-20">
        <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-600/15 via-blue-600/15 to-cyan-600/15 px-6 py-12 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Let’s Build Something Real
          </h2>
          <p className="text-zinc-300 text-sm md:text-base max-w-lg mx-auto mb-6">
            Open to collaborations, internships, and technical projects.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold h-11 px-8">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}