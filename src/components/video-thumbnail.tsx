"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

interface VideoThumbnailProps {
    title: string
    category: string
    thumbnail: string
    onPlay?: () => void
}

export function VideoThumbnail({ title, category, thumbnail, onPlay }: VideoThumbnailProps) {
    const [isHovering, setIsHovering] = useState(false)

    return (
        <div
            className="group relative overflow-hidden rounded-lg transition-all duration-500"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="aspect-video relative overflow-hidden rounded-lg">
                <Image
                    src={thumbnail}
                    alt={title}
                    width={600}
                    height={340}
                    className={`object-cover transition-transform duration-700 ${isHovering ? 'scale-110 blur-sm' : 'scale-100'}`}
                />

                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
                    <button
                        onClick={onPlay}
                        className="relative z-10 transform rounded-full bg-purple-600 p-5 text-white shadow-lg transition-all duration-300 hover:bg-purple-700 hover:scale-110 active:scale-95"
                    >
                        <Play className="h-8 w-8 fill-white text-white ml-1" />

                        {/* Pulsating effect */}
                        <span className="absolute inset-0 rounded-full bg-purple-600 opacity-70 animate-ping"></span>
                    </button>
                </div>

                {/* Preview info on hover */}
                <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-4 transform transition-transform duration-300 ${isHovering ? 'translate-y-0' : 'translate-y-full'}`}>
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <p className="text-purple-300">{category}</p>
                </div>
            </div>
        </div>
    )
}