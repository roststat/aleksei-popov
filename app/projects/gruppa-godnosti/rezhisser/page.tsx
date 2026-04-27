import Link from "next/link";

export const metadata = {
  title: "Анастасия Емельянова — режиссёр спектакля «Группа годности»",
  description:
    "Режиссёр-постановщик спектакля «Группа годности». Художественный руководитель Компании «Маскарад». Режиссёр Электротеатра Станиславский.",
};

const works = [
  {
    title: "«Гроза»",
    year: "2015",
    venue: "Электротеатр Станиславский",
    note: "8 лет в репертуаре",
  },
  {
    title: "«Путешествие Винни Пуха и его друзей»",
    year: "2019",
    venue: "Театр ЧХТ",
    note: "Трилогия, 3 года в репертуаре",
  },
  {
    title: "«О любви»",
    year: "2024",
    venue: "Кино",
    note: "Короткометражный фильм",
  },
  {
    title: "Кинофестиваль «Короткий метр в короткий день»",
    year: "2021",
    venue: "Ялта",
    note: "Режиссёр фестиваля",
  },
  {
    title: "«Сказка о Царе Салтане»",
    year: "—",
    venue: "—",
    note: "Видео-репетиции",
  },
];

const education = [
  {
    school: "ИСИ",
    degree: "Актриса театра и кино",
  },
  {
    school: "МИР-4, Мастерская Индивидуальной Режиссуры Бориса Юхананова",
    degree: "Продюсер-режиссёр театра, кино и телевидения",
  },
  {
    school: "Школа лабораторных исследований и техник театра Анатолия Васильева, ММУ",
    degree: "«Партитура драматического текста и роли» (2024–2025)",
  },
];

const clients = [
  "РЖД", "METRO", "DHL", "Jones Day", "Kira Plastinina", "Международный инвестиционный банк",
];

export default function RezhisserPage() {
  return (
    <div>

      {/* Hero */}
      <section className="border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 py-20 md:py-28">
          <Link
            href="/projects/gruppa-godnosti"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-900 transition-colors mb-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            «Группа годности»
          </Link>
          <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-5">
            Режиссёр-постановщик
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-6">
            Анастасия Емельянова
          </h1>
          <p className="text-xl text-neutral-500 max-w-2xl">
            Режиссёр театра и кино. Художественный руководитель Компании «Маскарад». Режиссёр Электротеатра Станиславский.
          </p>
        </div>
      </section>

      {/* О режиссёре */}
      <section className="border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-4">О режиссёре</p>
            <h2 className="text-3xl font-bold tracking-tight leading-tight">
              42 года. Москва. Театр — с 2004 года.
            </h2>
          </div>
          <div className="space-y-4 text-neutral-600 leading-relaxed">
            <p>
              Анастасия Емельянова — режиссёр с двадцатилетним опытом в театре и кино. С 2004 года — художественный руководитель Компании «Маскарад». Режиссёр Электротеатра Станиславский, где её спектакль «Гроза» держится в репертуаре уже восемь лет.
            </p>
            <p>
              Образование — системное и глубокое: ИСИ, Мастерская индивидуальной режиссуры Бориса Юхананова (МИР-4), школа лабораторных исследований театра Анатолия Васильева.
            </p>
            <p>
              В 2024 году выпустила короткометражный фильм «О любви». В 2021-м — выступила режиссёром кинофестиваля «Короткий метр в короткий день» в Ялте.
            </p>
            <p>
              Анастасия — родная сестра Алексея Попова. Именно это делает её присутствие в «Группе годности» не случайным: она знает эту историю изнутри.
            </p>
          </div>
        </div>
      </section>

      {/* Ключевые работы */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-10">Ключевые работы</p>
          <div className="divide-y divide-neutral-200">
            {works.map((w) => (
              <div key={w.title} className="py-5 flex flex-col sm:flex-row gap-2 sm:gap-8 sm:items-baseline">
                <div className="sm:w-72 shrink-0">
                  <p className="font-semibold text-neutral-900">{w.title}</p>
                  <p className="text-xs text-neutral-400 mt-0.5">{w.year} · {w.venue}</p>
                </div>
                <p className="text-sm text-neutral-500">{w.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Образование */}
      <section className="border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-10">Образование</p>
          <div className="space-y-6">
            {education.map((e) => (
              <div key={e.school} className="flex flex-col sm:flex-row gap-2 sm:gap-12 pb-6 border-b border-neutral-100 last:border-0 last:pb-0">
                <div className="sm:w-72 shrink-0">
                  <p className="font-semibold text-neutral-900 text-sm leading-snug">{e.school}</p>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed">{e.degree}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Группа годности — акцентный блок */}
      <section className="border-b border-neutral-200 bg-neutral-900">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-8">«Группа годности»</p>
          <blockquote className="text-2xl md:text-4xl font-medium leading-relaxed text-white max-w-3xl mb-10">
            «Это история моего брата. Я знаю её изнутри — не из новостей и не из сценария. Я слышала её голосом, в котором не было пафоса. Именно поэтому я знаю, как её рассказать.»
          </blockquote>
          <p className="text-neutral-400 text-sm mb-8">— Анастасия Емельянова, режиссёр-постановщик</p>
          <a
            href="tel:+79951219467"
            className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            +7 995 121-94-67
          </a>
        </div>
      </section>

      {/* Компания Маскарад */}
      <section className="border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-4">Компания</p>
            <h2 className="text-3xl font-bold tracking-tight mb-2">«Маскарад»</h2>
            <p className="text-neutral-500 text-sm">Основана в 2004 году</p>
          </div>
          <div className="space-y-4 text-neutral-600 leading-relaxed">
            <p>
              Детские спектакли, перформансы, корпоративные события. За двадцать лет работы — сотни постановок и долгосрочные партнёрства с крупными компаниями.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {clients.map((c) => (
                <span key={c} className="px-3 py-1.5 bg-neutral-100 rounded-lg text-xs font-medium text-neutral-600">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-20 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-2">Следующий шаг</p>
            <p className="text-lg font-semibold text-neutral-900">Спектакль «Группа годности» · Боярские палаты · 2026</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/projects/gruppa-godnosti"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-neutral-900 text-white rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors"
            >
              Смотреть спектакль
            </Link>
            <a
              href="mailto:aepopovich121@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-neutral-200 rounded-lg text-sm font-medium hover:border-neutral-900 transition-colors"
            >
              Связаться
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
