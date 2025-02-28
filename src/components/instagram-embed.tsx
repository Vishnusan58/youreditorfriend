"use client"

import { useEffect, useRef } from "react"

interface InstagramEmbedProps {
  url: string
}

export function InstagramEmbed({ url }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "//www.instagram.com/embed.js"
    script.async = true

    const container = containerRef.current
    if (container) {
      container.innerHTML = ""
      const blockquote = document.createElement("blockquote")
      blockquote.className = "instagram-media"
      blockquote.setAttribute("data-instgrm-permalink", url)
      blockquote.setAttribute("data-instgrm-version", "14")
      container.appendChild(blockquote)
      container.appendChild(script)
    }

    return () => {
      if (container) {
        container.innerHTML = ""
      }
    }
  }, [url])

  return <div ref={containerRef} className="instagram-embed w-full max-w-[540px] mx-auto" />
}

