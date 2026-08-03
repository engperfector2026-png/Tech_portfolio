import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react"

export default function SessionRegistrationPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Header */}
      <div className="mb-12 md:mb-16 max-w-2xl">
        <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase mb-3">
          Registration
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Register for Session
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          Secure your spot for the upcoming live technical session.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left - Session Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 md:p-7 rounded-2xl border border-cyan-500/30 bg-zinc-900/50">
            <div className="flex items-center gap-2 mb-5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              <span className="text-sm font-medium text-cyan-400">Upcoming Session</span>
            </div>

            <h2 className="text-2xl font-semibold text-white mb-4">
              Introduction to Embedded Systems
            </h2>

            <p className="text-zinc-400 leading-relaxed mb-6">
              A practical session covering the basics of microcontrollers, sensors, and building simple embedded projects. Perfect for beginners and intermediate learners.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-zinc-300">
                <Calendar className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Date to be announced</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <Clock className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Duration: 90 minutes</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <MapPin className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Online • Zoom / YouTube</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <Users className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Limited seats available</span>
              </div>
            </div>
          </div>

          {/* What you'll learn */}
          <div className="p-6 md:p-7 rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <h3 className="text-sm font-medium text-white mb-4">What you’ll learn</h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex gap-2">
                <span className="text-cyan-400">•</span>
                Fundamentals of microcontrollers
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400">•</span>
                Working with sensors
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400">•</span>
                Building simple embedded projects
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400">•</span>
                Practical tips and common pitfalls
              </li>
            </ul>
          </div>
        </div>

        {/* Right - Registration Form */}
        <div className="lg:col-span-7">
          <div className="p-6 md:p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50">
            <h2 className="text-xl font-semibold text-white mb-6">
              Registration Form
            </h2>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">
                    Full Name <span className="text-cyan-400">*</span>
                  </label>
                  <Input
                    placeholder="Your full name"
                    className="bg-zinc-950/80 border-zinc-700 focus-visible:ring-cyan-500 focus-visible:border-cyan-500 h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-zinc-950/80 border-zinc-700 focus-visible:ring-cyan-500 focus-visible:border-cyan-500 h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">
                  Experience Level
                </label>
                <select className="w-full h-12 rounded-md border border-zinc-700 bg-zinc-950/80 px-3 text-sm text-zinc-300 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  <option value="">Select your level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">
                  Why do you want to join? (Optional)
                </label>
                <Textarea
                  placeholder="Tell us a bit about your interest..."
                  rows={4}
                  className="bg-zinc-950/80 border-zinc-700 focus-visible:ring-cyan-500 focus-visible:border-cyan-500 resize-none"
                />
              </div>

              <div className="pt-2">
                <Button className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-black font-semibold h-12 px-8">
                  Confirm Registration
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <p className="text-xs text-zinc-500 pt-2">
                By registering, you agree to receive session details and updates via email.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}