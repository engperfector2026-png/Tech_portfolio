"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Calendar,
  Clock,
  Users,
  Video,
  CheckCircle2,
  CalendarPlus,
  Download,
} from "lucide-react"

const sessions = [
  {
    id: 1,
    title: "Introduction to Embedded Systems",
    description:
      "Practical session covering microcontrollers, sensors, and building simple embedded projects. Ideal for beginners.",
    date: "2026-08-15",
    startTime: "14:00",
    endTime: "16:00",
    displayDate: "Aug 15, 2026",
    displayTime: "14:00 – 16:00 EAT",
    platform: "Zoom",
    status: "upcoming",
    seats: 30,
  },
  {
    id: 2,
    title: "Hardware Troubleshooting Masterclass",
    description:
      "Systematic approaches to diagnosing and fixing common computer hardware problems.",
    date: "2026-08-22",
    startTime: "15:00",
    endTime: "17:00",
    displayDate: "Aug 22, 2026",
    displayTime: "15:00 – 17:00 EAT",
    platform: "Google Meet",
    status: "upcoming",
    seats: 25,
  },
  {
    id: 3,
    title: "PCB Design Fundamentals",
    description:
      "Hands-on introduction to schematic design and PCB layout for small electronic projects.",
    date: "2026-07-28",
    startTime: "14:00",
    endTime: "16:00",
    displayDate: "Jul 28, 2026",
    displayTime: "14:00 – 16:00 EAT",
    platform: "Zoom",
    status: "past",
    seats: 0,
  },
]

function createGoogleCalendarUrl(session: (typeof sessions)[0]) {
  const start = `${session.date.replace(/-/g, "")}T${session.startTime.replace(":", "")}00`
  const end = `${session.date.replace(/-/g, "")}T${session.endTime.replace(":", "")}00`

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: session.title,
    details: session.description,
    location: session.platform,
    dates: `${start}/${end}`,
  })

  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

function downloadICS(session: (typeof sessions)[0]) {
  const start = `${session.date.replace(/-/g, "")}T${session.startTime.replace(":", "")}00`
  const end = `${session.date.replace(/-/g, "")}T${session.endTime.replace(":", "")}00`

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Portfolio//Sessions//EN
BEGIN:VEVENT
UID:${session.id}@portfolio
DTSTAMP:${start}Z
DTSTART:${start}Z
DTEND:${end}Z
SUMMARY:${session.title}
DESCRIPTION:${session.description}
LOCATION:${session.platform}
END:VEVENT
END:VCALENDAR`

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = `${session.title.replace(/\s+/g, "-").toLowerCase()}.ics`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export default function SessionsPage() {
  const [selectedSession, setSelectedSession] = useState<(typeof sessions)[0] | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "" })

  const openRegistration = (session: (typeof sessions)[0]) => {
    setSelectedSession(session)
    setIsSubmitted(false)
    setFormData({ name: "", email: "" })
    setIsOpen(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Registration:", { ...formData, session: selectedSession?.title })
    setIsSubmitted(true)
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      {/* Compact Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-1.5">
            Live Sessions
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Technical Sessions & Workshops
          </h1>
        </div>
        <p className="text-sm text-zinc-400 max-w-md">
          Free registration • Add to your calendar
        </p>
      </div>

      {/* Dense Sessions Grid */}
      <div className="grid gap-4">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-zinc-700 transition-colors"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              {/* Left Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {session.status === "upcoming" ? (
                    <Badge className="bg-cyan-500/15 text-cyan-400 border-cyan-500/30 text-xs px-2 py-0.5">
                      Upcoming
                    </Badge>
                  ) : (
                    <Badge className="bg-zinc-800 text-zinc-400 text-xs px-2 py-0.5">
                      Past
                    </Badge>
                  )}
                  <span className="text-xs text-zinc-500 flex items-center gap-1">
                    <Video className="h-3 w-3" />
                    {session.platform}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-1.5 leading-snug">
                  {session.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-3 line-clamp-2">
                  {session.description}
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {session.displayDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {session.displayTime}
                  </span>
                  {session.status === "upcoming" && (
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      {session.seats} seats
                    </span>
                  )}
                </div>
              </div>

              {/* Actions */}
              {session.status === "upcoming" && (
                <div className="flex flex-wrap gap-2 shrink-0">
                  <Button
                    size="sm"
                    onClick={() => openRegistration(session)}
                    className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold h-9 px-4"
                  >
                    Register
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 h-9 px-3"
                    onClick={() => window.open(createGoogleCalendarUrl(session), "_blank")}
                  >
                    <CalendarPlus className="h-3.5 w-3.5 mr-1.5" />
                    Calendar
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 h-9 px-3"
                    onClick={() => downloadICS(session)}
                  >
                    <Download className="h-3.5 w-3.5" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Registration Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-zinc-950 border-zinc-800 sm:max-w-md">
          {!isSubmitted ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-white text-lg">
                  Register for Session
                </DialogTitle>
                <DialogDescription className="text-zinc-400 text-sm">
                  {selectedSession?.title}
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4 mt-1">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-zinc-300">Full Name</label>
                  <Input
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-zinc-900 border-zinc-700 focus-visible:ring-cyan-500 h-10"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-zinc-300">Email Address</label>
                  <Input
                    required
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-zinc-900 border-zinc-700 focus-visible:ring-cyan-500 h-10"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold h-10 mt-2"
                >
                  Confirm Registration
                </Button>
              </form>
            </>
          ) : (
            <div className="py-6 text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-500/15 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1.5">
                Registration Successful
              </h3>
              <p className="text-zinc-400 text-sm mb-5">
                Registered for <span className="text-white">{selectedSession?.title}</span>.
                Meeting link will be sent to your email.
              </p>

              {selectedSession && (
                <div className="flex flex-col gap-2 mb-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-zinc-700"
                    onClick={() =>
                      window.open(createGoogleCalendarUrl(selectedSession), "_blank")
                    }
                  >
                    <CalendarPlus className="mr-2 h-3.5 w-3.5" />
                    Add to Google Calendar
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-zinc-700"
                    onClick={() => downloadICS(selectedSession)}
                  >
                    <Download className="mr-2 h-3.5 w-3.5" />
                    Download .ics
                  </Button>
                </div>
              )}

              <Button
                size="sm"
                onClick={() => setIsOpen(false)}
                variant="outline"
                className="border-zinc-700"
              >
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}