import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Smart Power Monitoring System",
    description:
      "An embedded system that monitors voltage, current and power consumption in real time using sensors and a microcontroller.",
    tags: ["Hardware", "Embedded", "Sensors"],
    status: "Completed",
  },
  {
    id: 2,
    title: "Automated Hardware Testing Tool",
    description:
      "A software tool that helps automate basic hardware diagnostics and component testing procedures.",
    tags: ["Software", "Automation", "Python"],
    status: "In Progress",
  },
  {
    id: 3,
    title: "PCB Design & Prototyping",
    description:
      "Design and fabrication of custom PCBs for small electronic projects and prototypes.",
    tags: ["PCB", "Hardware", "Design"],
    status: "Completed",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Header */}
      <div className="mb-16 max-w-2xl">
        <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase mb-3">
          Portfolio
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Projects
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          A selection of hardware and software projects I’ve worked on. More coming soon.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-cyan-500/50 hover:bg-zinc-900/70 transition-all duration-300 overflow-hidden"
          >
            {/* Image / Visual Area */}
            <div className="relative h-52 bg-zinc-900 overflow-hidden">
              {/* Subtle grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />
              
              {/* Soft gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
              
              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-zinc-600 text-sm font-medium tracking-wide">
                  Project Preview
                </span>
              </div>

              {/* Status badge */}
              <div className="absolute top-4 right-4">
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                    project.status === "Completed"
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                      : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                {project.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full border border-zinc-700/80 bg-zinc-950/50 text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action */}
              <div className="flex items-center justify-between pt-2 border-t border-zinc-800/80">
                <Button
                  variant="ghost"
                  className="px-0 h-auto text-cyan-400 hover:text-cyan-300 hover:bg-transparent font-medium"
                >
                  View Project
                  <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <div className="mt-16 pt-8 border-t border-zinc-800/80 text-center">
        <p className="text-sm text-zinc-500">
          More projects in progress. Check back soon.
        </p>
      </div>
    </div>
  )
}