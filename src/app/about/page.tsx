export default function AboutPage() {
  const skills = [
    "Computer Hardware",
    "Embedded Systems",
    "Circuit Design",
    "Troubleshooting",
    "Programming",
    "System Design",
    "Prototyping",
    "Technical Documentation",
  ]

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Header */}
      <div className="mb-16 max-w-3xl">
        <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase mb-3">
          About
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-5">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
          Computer Technology student passionate about understanding systems from the ground up.
        </p>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="grid lg:grid-cols-12 gap-12 xl:gap-16">
        {/* Left Column - Bio */}
        <div className="lg:col-span-7 space-y-6 text-zinc-300 leading-relaxed text-[17px]">
          <p>
            I am currently studying Computer Technology with a strong focus on both
            hardware and software. What drives me is the process of taking an idea,
            understanding how it works at a technical level, and turning it into a
            working system.
          </p>
          <p>
            My main interests include computer hardware, embedded systems, circuit design,
            troubleshooting, and practical programming. I enjoy working on projects that
            combine both hardware and software — because that’s where real systems are built.
          </p>
          <p>
            This portfolio is a living document of my journey. Here you’ll find the projects
            I’ve built, the engineering activities I engage in, and the continuous learning
            process that keeps me growing as a technologist.
          </p>

          {/* Currently Focused On */}
          <div className="mt-10 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <h2 className="text-sm font-medium text-cyan-400 uppercase tracking-wide mb-3">
              Currently Focused On
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Deepening my understanding of embedded systems, practical circuit design, and
              building projects that bridge hardware and software. Continuously improving
              troubleshooting skills and system-level thinking.
            </p>
          </div>
        </div>

        {/* Right Column - Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Education & Location */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5">
            <div className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <h3 className="text-sm font-medium text-zinc-400 mb-1.5">Education</h3>
              <p className="text-white font-medium">Computer Technology</p>
              <p className="text-zinc-500 text-sm mt-1">Currently pursuing</p>
            </div>
            <div className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <h3 className="text-sm font-medium text-zinc-400 mb-1.5">Location</h3>
              <p className="text-white font-medium">Maseno, Kisumu county</p>
              <p className="text-zinc-500 text-sm mt-1">Open to remote opportunities</p>
            </div>
          </div>

          {/* Skills */}
          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <h3 className="text-sm font-medium text-zinc-400 mb-4">Skills & Focus Areas</h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-full border border-zinc-700/80 bg-zinc-950/50 text-sm text-zinc-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How I Work - Full Width */}
      <div className="mt-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-white whitespace-nowrap">
            How I Work
          </h2>
          <div className="h-px w-full bg-zinc-800" />
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <h3 className="text-white font-medium mb-2">Understand First</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              I dig into how things work at a fundamental level before building.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <h3 className="text-white font-medium mb-2">Build Practically</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              I prefer real systems over theory alone — hardware + software together.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <h3 className="text-white font-medium mb-2">Keep Learning</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Every project is a chance to improve and document what I learn.
            </p>
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="mt-16 pt-8 border-t border-zinc-800/80">
        <p className="text-sm text-zinc-500">
          Always learning. Always building.
        </p>
      </div>
    </div>
  )
}