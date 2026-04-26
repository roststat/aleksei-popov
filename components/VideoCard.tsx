"use client";

import Image from "next/image";
import { Video } from "@/data/videos";

interface VideoCardProps {
  video: Video;
  playing: boolean;
  onPlay: () => void;
}

export default function VideoCard({ video, playing, onPlay }: VideoCardProps) {

  const thumb = video.youtubeId
    ? `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`
    : null;

  const dateLabel = video.date
    ? new Date(video.date).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })
    : "";

  return (
    <div className="flex flex-col border border-neutral-200 rounded-xl overflow-hidden hover:border-neutral-400 transition-colors">
      {/* Player / Thumbnail */}
      <div className="relative aspect-video bg-neutral-100 overflow-hidden">
        {playing && video.youtubeId ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            onClick={onPlay}
            className="group absolute inset-0 w-full h-full"
            aria-label={`Смотреть: ${video.title}`}
          >
            {thumb && (
              <Image
                src={thumb}
                alt={video.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-black/60 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-1.5">
        <p className="text-xs text-neutral-400">{dateLabel}</p>
        <h2 className="text-sm font-semibold leading-snug line-clamp-2">{video.title}</h2>
        {video.description && (
          <p className="text-xs text-neutral-500 line-clamp-2">{video.description}</p>
        )}
      </div>
    </div>
  );
}
