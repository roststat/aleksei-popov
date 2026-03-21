import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-64 shrink-0">
          <Image
            src="/aleksei-popov.png"
            alt="Алексей Попов"
            width={400}
            height={500}
            className="rounded-2xl object-cover w-full h-auto shadow-md"
            priority
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold tracking-tight mb-6">О себе</h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Здесь будет информация об Алексее Попове — биография, деятельность, интересы и контакты.
          </p>
        </div>
      </div>
    </div>
  );
}
