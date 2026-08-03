export default function ActivitiesPage() {
  const activities = [
    {
      year: "2025",
      title: "Hardware Troubleshooting & Repair",
      description:
        "Diagnosing and repairing various computer hardware components and electronic devices.",
    },
    {
      year: "2025",
      title: "Embedded Systems Experiments",
      description:
        "Working with microcontrollers, sensors, and building small prototype systems.",
    },
    {
      year: "2024",
      title: "PCB Design Practice",
      description:
        "Learning schematic design and PCB layout for custom electronic projects.",
    },
    {
      year: "2024",
      title: "System Assembly & Optimization",
      description:
        "Building and optimizing computer systems for performance and reliability.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Header */}
      <div className="mb-16 max-w-2xl">
        <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase mb-3">
          Experience
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Engineering Activities
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          Hands-on work, experiments, and continuous technical growth.
        </p>
      </div>

      {/* Activities Grid - Uses full width */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="group relative p-6 md:p-7 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-cyan-500/40 hover:bg-zinc-900/70 transition-all duration-300"
          >
            {/* Year badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {activity.year}
              </span>
              <div className="w-2 h-2 rounded-full bg-cyan-400/60 group-hover:bg-cyan-400 transition-colors" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
              {activity.title}
            </h3>
            <p className="text-zinc-400 leading-relaxed text-[15px]">
              {activity.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <div className="mt-16 pt-8 border-t border-zinc-800/80">
        <p className="text-sm text-zinc-500">
          Continuously exploring new tools, techniques, and systems.
        </p>
      </div>
    </div>
  )
}