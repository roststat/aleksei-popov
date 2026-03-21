import { videos } from "@/data/videos";
import VideoCard from "@/components/VideoCard";

export default function VideosPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Видео</h1>
      <p className="text-neutral-500 mb-12">Видеоматериалы и записи</p>
      {videos.length === 0 ? (
        <p className="text-neutral-400">Видео скоро появятся.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
}
