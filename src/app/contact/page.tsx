import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, ArrowUpRight } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Header */}
      <div className="mb-14 max-w-2xl">
        <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase mb-3">
          Contact
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Get In Touch
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed">
          Have a question, collaboration idea, or opportunity? I’d love to hear from you.
          I usually respond within 24 hours.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-3 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8 shadow-xl shadow-black/20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold text-white">Send a Message</h2>
            <span className="text-xs text-zinc-500 bg-zinc-800/80 px-2.5 py-1 rounded-full">
              Average reply: 24h
            </span>
          </div>

          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">
                  Name <span className="text-cyan-400">*</span>
                </label>
                <Input
                  placeholder="Your full name"
                  className="bg-zinc-950/80 border-zinc-700 focus-visible:ring-cyan-500 focus-visible:border-cyan-500 h-12 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">
                  Email <span className="text-cyan-400">*</span>
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-zinc-950/80 border-zinc-700 focus-visible:ring-cyan-500 focus-visible:border-cyan-500 h-12 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">
                Subject <span className="text-cyan-400">*</span>
              </label>
              <Input
                placeholder="What is this about?"
                className="bg-zinc-950/80 border-zinc-700 focus-visible:ring-cyan-500 focus-visible:border-cyan-500 h-12 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">
                Message <span className="text-cyan-400">*</span>
              </label>
              <Textarea
                placeholder="Write your message here..."
                rows={6}
                className="bg-zinc-950/80 border-zinc-700 focus-visible:ring-cyan-500 focus-visible:border-cyan-500 resize-none transition-colors"
              />
            </div>

            <Button
              type="submit"
              className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-black font-semibold h-12 px-8 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Info Sidebar */}
        <div className="lg:col-span-2 space-y-5">
          {/* Email */}
          <a
            href="mailto:engperfector2026@gmail.com"
            className="group block rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-cyan-500/40 hover:bg-zinc-900/80 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                <Mail className="h-5 w-5 text-cyan-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-medium text-zinc-400">Email</h3>
                  <ArrowUpRight className="h-4 w-4 text-zinc-600 group-hover:text-cyan-400 transition-colors" />
                </div>
                <p className="text-white font-medium mt-1 truncate">
                  engperfector2026@gmail.com
                </p>
              </div>
            </div>
          </a>

          {/* Location */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-zinc-400">Location</h3>
                <p className="text-white font-medium mt-1">Kisumu, Kenya</p>
                <p className="text-zinc-500 text-sm mt-0.5">Available for remote work</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <a
            href="tel:+254796985894"
            className="group block rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-cyan-500/40 hover:bg-zinc-900/80 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                <Phone className="h-5 w-5 text-cyan-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-medium text-zinc-400">Phone</h3>
                  <ArrowUpRight className="h-4 w-4 text-zinc-600 group-hover:text-cyan-400 transition-colors" />
                </div>
                <p className="text-white font-medium mt-1">+254 796 985 894</p>
              </div>
            </div>
          </a>

          {/* Map / Visual Block */}
          <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/50 h-52 overflow-hidden group">
            {/* Decorative grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
            
            {/* Soft glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-3">
                <MapPin className="h-5 w-5 text-cyan-400" />
              </div>
              <p className="text-white font-medium">Kisumu, Kenya</p>
              <p className="text-zinc-500 text-sm mt-1">East Africa • UTC+3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}