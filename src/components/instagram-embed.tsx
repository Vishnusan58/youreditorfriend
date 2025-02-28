"use client"

import { useEffect, useRef, useState } from "react"

interface InstagramEmbedProps {
  url: string
  caption?: string
  className?: string // Added to allow custom styling from parent
}

export function InstagramEmbed({
                                 url,
                                 caption,
                                 className = "" // Default value for optional className
                               }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null) // Changed to string to store error messages

  useEffect(() => {
    let isMounted = true // For handling cleanup and preventing memory leaks

    const loadInstagramEmbed = async () => {
      if (!isMounted) return

      setIsLoading(true)
      setError(null)

      const container = containerRef.current
      if (!container) return

      // Clear previous content
      container.innerHTML = ""

      try {
        // Create Instagram blockquote
        const blockquote = document.createElement("blockquote")
        blockquote.className = "instagram-media"
        blockquote.setAttribute("data-instgrm-permalink", url)
        blockquote.setAttribute("data-instgrm-version", "14")
        blockquote.style.margin = "0 auto"
        blockquote.style.width = "100%"
        blockquote.style.maxWidth = "740px"
        container.appendChild(blockquote)

        // Load Instagram embed script
        const script = document.createElement("script")
        script.src = "//www.instagram.com/embed.js"
        script.async = true

        // Create a promise to handle script loading
        const loadScript = new Promise<void>((resolve, reject) => {
          script.onload = () => {
            if (window.instgrm) {
              window.instgrm.Embeds.process()
              resolve()
            } else {
              reject(new Error("Instagram embed failed to initialize"))
            }
          }

          script.onerror = () => {
            reject(new Error("Failed to load Instagram embed script"))
          }
        })

        container.appendChild(script)

        await loadScript
        if (isMounted) {
          setIsLoading(false)
        }
      } catch {
        if (isMounted) {
          setError("Failed to load Instagram content")
          setIsLoading(false)
        }
      }
    }

    loadInstagramEmbed()

    return () => {
      isMounted = false
      const container = containerRef.current
      if (container) {
        container.innerHTML = ""
      }
    }
  }, [url])

  return (
      <div className={`relative flex flex-col items-center my-6 ${className}`.trim()}>
        {isLoading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 backdrop-blur-sm rounded-lg">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-purple-500 border-t-transparent" />
            </div>
        )}

        {error && (
            <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-center text-red-800 w-full max-w-[540px]">
              {error}
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