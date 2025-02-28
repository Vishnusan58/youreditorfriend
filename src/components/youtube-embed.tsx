"use client"

import { useState } from "react"

interface YouTubeEmbedProps {
    videoId: string
    title?: string
}

export function YouTubeEmbed({ videoId, title = "YouTube video player" }: YouTubeEmbedProps) {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-purple-500 border-t-transparent"></div>
                </div>
            )}
            <iframe
                className="h-full w-full rounded-lg transition-opacity duration-300"
                style={{ opacity: isLoading ? "0.4" : "1" }}
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?controls=1&rel=0`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                onLoad={() => setIsLoading(false)}
            ></iframe>
        </div>
    )
}