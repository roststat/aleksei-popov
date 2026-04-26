"use client";

import { useState } from "react";
import { videos } from "@/data/videos";
import VideoCard from "@/components/VideoCard";

export default function VideoList() {
  const [activeId, setActiveId] = useState<string | null>(null);

  if (videos.length === 0) {
    return <p className="text-neutral-400">Видео скоро появятся.</p>;
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          playing={activeId === video.id}
          onPlay={() => setActiveId(video.id)}
        />
      ))}
    </div>
  );
}
