"use client"

import dynamic from "next/dynamic"

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-zinc-900">
      <p className="text-zinc-500 text-sm">Loading map...</p>
    </div>
  ),
})

export default function ContactMap() {
  return <Map />
}