interface YouTubeEmbedProps {
  videoId: string
}

export function YouTubeEmbed({ videoId }: YouTubeEmbedProps) {
  return (
    <div className="aspect-video w-full max-w-[540px] mx-auto">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

