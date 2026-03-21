import { Video } from "@/data/videos";

export default function VideoCard({ video }: { video: Video }) {
  return (
    <div className="border border-neutral-200 rounded-xl overflow-hidden flex flex-col">
      {video.youtubeId && (
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            allowFullScreen
          />
        </div>
      )}
      <div className="p-4 flex flex-col gap-1">
        <p className="text-xs text-neutral-400">{video.date}</p>
        <h2 className="font-semibold">{video.title}</h2>
        {video.description && <p className="text-sm text-neutral-500">{video.description}</p>}
      </div>
    </div>
  );
}
