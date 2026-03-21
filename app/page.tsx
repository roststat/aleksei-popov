import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Hero */}
      <section className="py-24 md:py-36 flex flex-col md:flex-row md:items-center gap-12">
        <div className="flex-1">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Алексей Попов
          </h1>
          <p className="text-xl text-neutral-500 max-w-2xl mb-10">
            Здесь собраны мои проекты, видеоматериалы, статьи и личный блог.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="px-6 py-3 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-700 transition-colors"
            >
              О себе
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 border border-neutral-300 text-sm font-medium rounded-lg hover:border-neutral-900 transition-colors"
            >
              Проекты
            </Link>
          </div>
        </div>
        <div className="md:w-72 lg:w-80 shrink-0">
          <Image
            src="/aleksei-popov.png"
            alt="Алексей Попов"
            width={400}
            height={500}
            className="rounded-2xl object-cover w-full h-auto shadow-lg"
            priority
          />
        </div>
      </section>

      {/* Sections preview */}
      <section className="grid md:grid-cols-3 gap-6 pb-24">
        <Link href="/projects" className="group p-6 border border-neutral-200 rounded-xl hover:border-neutral-900 transition-colors">
          <h2 className="text-lg font-semibold mb-2">Проекты</h2>
          <p className="text-sm text-neutral-500">Работы и реализованные идеи</p>
        </Link>
        <Link href="/videos" className="group p-6 border border-neutral-200 rounded-xl hover:border-neutral-900 transition-colors">
          <h2 className="text-lg font-semibold mb-2">Видео</h2>
          <p className="text-sm text-neutral-500">Видеоматериалы и записи</p>
        </Link>
        <Link href="/articles" className="group p-6 border border-neutral-200 rounded-xl hover:border-neutral-900 transition-colors">
          <h2 className="text-lg font-semibold mb-2">Статьи</h2>
          <p className="text-sm text-neutral-500">Публикации и материалы</p>
        </Link>
        <Link href="/blog" className="group p-6 border border-neutral-200 rounded-xl hover:border-neutral-900 transition-colors md:col-span-2">
          <h2 className="text-lg font-semibold mb-2">Блог</h2>
          <p className="text-sm text-neutral-500">Мысли, заметки и личные записи</p>
        </Link>
        <Link href="/about" className="group p-6 border border-neutral-200 rounded-xl hover:border-neutral-900 transition-colors">
          <h2 className="text-lg font-semibold mb-2">О себе</h2>
          <p className="text-sm text-neutral-500">Биография и контакты</p>
        </Link>
      </section>
    </div>
  );
}
