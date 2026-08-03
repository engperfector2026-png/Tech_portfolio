"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Activities", href: "/activities" },
  { name: "Sessions", href: "/sessions" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <span className="text-black font-bold text-sm">E</span>
          </div>
          <span className="font-semibold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
            EngPerfector
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-md transition-all ${
                  isActive
                    ? "text-cyan-400"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-[1.35rem] h-[2px] bg-cyan-400 rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact">
            <Button
              size="sm"
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold h-9 px-4"
            >
              Get in Touch
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden">
            <Button variant="ghost" size="icon" className="text-zinc-300 hover:text-white">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="bg-zinc-950 border-zinc-800 w-72 px-0">
            <div className="flex flex-col h-full">
              {/* Mobile Logo */}
              <div className="px-6 py-5 border-b border-zinc-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">E</span>
                  </div>
                  <span className="font-semibold text-white">EngPerfector</span>
                </div>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col gap-1 p-4 flex-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                        isActive
                          ? "text-cyan-400 bg-cyan-400/10"
                          : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )
                })}
              </div>

              {/* Mobile CTA */}
              <div className="p-4 border-t border-zinc-800">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold h-11">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}