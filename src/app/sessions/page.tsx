import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Play, Calendar } from "lucide-react"

export default function SessionsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Header */}
      <div className="mb-14 md:mb-16">
        <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase mb-3">
          Knowledge Sharing
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Live Sessions
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
          Technical sessions, discussions, and knowledge sharing.
        </p>
      </div>

      {/* Sessions Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {/* Upcoming Session */}
        <div className="group relative flex flex-col p-6 md:p-7 rounded-2xl border border-cyan-500/40 bg-zinc-900/50 hover:border-cyan-500/60 hover:bg-zinc-900/70 transition-all duration-300">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              <span className="text-sm font-medium text-cyan-400">Upcoming</span>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              Live
            </span>
          </div>

          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            Introduction to Embedded Systems
          </h3>
          <p className="text-zinc-400 text-[15px] leading-relaxed mb-6 flex-1">
            A practical session covering the basics of microcontrollers, sensors, and building simple embedded projects.
          </p>

          <div className="pt-5 border-t border-zinc-800/80 space-y-4">
            <p className="text-sm text-zinc-500 flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Date & Time • Zoom / YouTube
            </p>

            <Button
              asChild
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold h-11"
            >
              <Link href="/sessions/register">
                Register Now
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Past Session 1 */}
        <div className="group flex flex-col p-6 md:p-7 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-300">
          <div className="flex items-center justify-between mb-5">
            <span className="text-sm font-medium text-zinc-500">Past Session</span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
              Completed
            </span>
          </div>

          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            Hardware Fundamentals Session
          </h3>
          <p className="text-zinc-400 text-[15px] leading-relaxed mb-6 flex-1">
            Discussion on computer hardware components, troubleshooting techniques, and best practices.
          </p>

          <div className="pt-5 border-t border-zinc-800/80 space-y-4">
            <p className="text-sm text-zinc-500">Recording available</p>
            <Button
              variant="outline"
              className="w-full border-zinc-700 hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:text-cyan-400 h-11"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Recording
            </Button>
          </div>
        </div>

        {/* Past Session 2 */}
        <div className="group flex flex-col p-6 md:p-7 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-300">
          <div className="flex items-center justify-between mb-5">
            <span className="text-sm font-medium text-zinc-500">Past Session</span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
              Completed
            </span>
          </div>

          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            Practical Programming Workshop
          </h3>
          <p className="text-zinc-400 text-[15px] leading-relaxed mb-6 flex-1">
            Hands-on session focused on writing useful scripts and small tools for technical tasks.
          </p>

          <div className="pt-5 border-t border-zinc-800/80 space-y-4">
            <p className="text-sm text-zinc-500">Recording available</p>
            <Button
              variant="outline"
              className="w-full border-zinc-700 hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:text-cyan-400 h-11"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Recording
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-16 pt-8 border-t border-zinc-800/80">
        <p className="text-sm text-zinc-500">
          New sessions are announced regularly. Stay tuned.
        </p>
      </div>
    </div>
  )
}