"use client"

import { useEffect, useRef, useState } from "react"

interface InstagramEmbedProps {
  url: string
  caption?: string
}

export function InstagramEmbed({ url, caption }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setError(false)

    // Clear previous content
    const container = containerRef.current
    if (container) {
      container.innerHTML = ""

      try {
        // Create Instagram blockquote
        const blockquote = document.createElement("blockquote")
        blockquote.className = "instagram-media"
        blockquote.setAttribute("data-instgrm-permalink", url)
        blockquote.setAttribute("data-instgrm-version", "14")
        blockquote.style.margin = "0 auto"
        blockquote.style.width = "100%"
        blockquote.style.maxWidth = "540px"
        container.appendChild(blockquote)

        // Load Instagram embed script
        const script = document.createElement("script")
        script.src = "//www.instagram.com/embed.js"
        script.async = true

        // Handle load events
        script.onload = () => {
          if (window.instgrm) {
            window.instgrm.Embeds.process()
            setIsLoading(false)
          }
        }

        script.onerror = () => {
          setError(true)
          setIsLoading(false)
        }

        container.appendChild(script)
      } catch (err) {
        setError(true)
        setIsLoading(false)
      }
    }

    return () => {
      if (container) {
        container.innerHTML = ""
      }
    }
  }, [url])

  return (
      <div className="relative flex flex-col items-center mb-6 mt-6">
        {isLoading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 backdrop-blur-sm rounded-lg">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-purple-500 border-t-transparent"></div>
            </div>
        )}

        {error && (
            <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-center text-red-800 w-full max-w-[540px]">
              Failed to load Instagram content. Please check the URL and try again.
            </div>
        )}

        <div
            ref={containerRef}
            className="instagram-embed w-full rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
        />

        {caption && (
            <p className="text-sm text-gray-400 mt-2 text-center">{caption}</p>
        )}
      </div>
  )
}

// Add this to your global.d.ts file or declare it directly here
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}