import Link from "next/link";

export const metadata = {
  title: "«Группа годности» — спектакль",
  description:
    "Документальный монолог по письмам солдата с фронта. Автор — Алексей Попов (позывной Тихий). Боярские палаты, 2026.",
};

const quotes = [
  "Первый раз я подумал — всё… Я даже не вспомнил флаг. Я вспомнил маму…",
  "Патриотизм — это когда тебе говорят «нельзя» — а ты остаёшься.",
  "Там ты не Россия. Ты — человек, который прикрывает другого человека.",
  "Патриотизм — это не слова. Это когда, если придётся, ты пойдёшь первым.",
];

const team = [
  {
    name: "Алексей Попов",
    role: "Автор текста, идея, прототип героя",
    bio: "Позывной — Тихий. Ветеран СВО, наводчик и командир миномётного расчёта. Участник боёв в районе Часов Яра (июль 2023 — ноябрь 2025). Кандидат в депутаты.",
  },
  {
    name: "Анастасия Емельянова (Попова)",
    role: "Режиссёр, художественный руководитель",
    bio: "Художественный руководитель Компании «Маскарад». Режиссёр Электротеатра Станиславский. Выпускница Мастерской индивидуальной режиссуры Бориса Юхананова (МИР-4). Школа лабораторных исследований и техник театра Анатолия Васильева. Спектакль «Гроза» — 8 лет в репертуаре Электротеатра Станиславский. Сестра автора.",
  },
  {
    name: "Евгений Жигаленков",
    role: "Актёр (главная роль)",
    bio: "Актёр Электротеатра Станиславский. Снимался в «Великолепной пятёрке», «Последнем богатыре», «Смешной истории». Выпускник МИР (Мастерская Юхананова, 2022). Атлетическое сложение, баритон/бас.",
  },
  {
    name: "Мария Чиркова",
    role: "Актриса",
    bio: "ГИТИС, мастерская А. А. Васильева и Н. Д. Чиндяйкина. Актриса Электротеатра Станиславский: «Дом Бернарды Альбы», «Пиноккио», «Пир во время чумы». Фильмография: «Ворошиловский стрелок», «Безумный ангел Пиноккио».",
  },
  {
    name: "Андрей Емельянов",
    role: "Актёр",
    bio: "Актёр Электротеатра Станиславский с 2016 года. До этого — театр «Школа драматического искусства» (2007–2016). Роли: «Жизнь есть сон», «Таланты и поклонники», «Пиноккио. Театр», «Визит дамы», «Стойкий принцип».",
  },
  {
    name: "Светлана Найдёнова",
    role: "Актриса",
    bio: "Актриса Электротеатра Станиславский. В составе труппы — 22 номинации на «Золотую маску» (2020). Работы освещались в «Ведомостях», «МК», «Снобе», CoolConnections.",
  },
];

export default function GruppaGodnostiPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">

      {/* Back */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-900 transition-colors mb-12"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        Все проекты
      </Link>

      {/* Hero */}
      <section className="mb-16">
        <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-4">
          Спектакль · Боярские палаты · 2026
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-none">
          «Группа<br />годности»
        </h1>
        <p className="text-lg text-neutral-500 mb-8">
          Документальный монолог · один актёр · хор · 55 минут
        </p>
        <div className="flex flex-wrap gap-3">
          {["verbatim-театр", "документальный монолог", "Электротеатр Станиславский", "2026"].map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 bg-neutral-100 rounded-full text-neutral-600">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Opening quote */}
      <section className="mb-16 border-l-4 border-neutral-900 pl-6 py-2">
        <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-neutral-800">
          «{quotes[0]}»
        </p>
        <p className="text-sm text-neutral-400 mt-3">— Алексей Попов (Тихий)</p>
      </section>

      {/* About */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">О спектакле</h2>
        <div className="prose prose-neutral max-w-none text-neutral-600 leading-relaxed space-y-4">
          <p>
            <strong className="text-neutral-900">«Группа годности»</strong> — это не спектакль о войне. Это спектакль о живом духе. О том, как человек остаётся человеком там, где это, казалось бы, невозможно.
          </p>
          <p>
            О солдатской душе, которая верит в Бога, прикрывает товарища, смеётся над анекдотами в бунгало пока вокруг рвутся снаряды — и идёт дальше.
          </p>
          <p>
            Без взывания к слезам. Без манипуляций войной. С верой в будущее.
          </p>
        </div>

        {/* Specs */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Жанр", value: "verbatim-театр" },
            { label: "Форма", value: "1 актёр + хор 3–5 чел." },
            { label: "Продолжительность", value: "55 мин. без антракта" },
            { label: "Основа", value: "Письма солдата с фронта" },
          ].map((item) => (
            <div key={item.label} className="p-4 bg-neutral-50 rounded-xl">
              <p className="text-xs text-neutral-400 mb-1">{item.label}</p>
              <p className="text-sm font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Witness */}
      <section className="mb-16 border border-neutral-200 rounded-2xl p-8 md:p-10">
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-4">Свидетель</p>
        <h3 className="text-xl font-bold mb-4">
          Попов Алексей Валерьевич. Позывной — Тихий.
        </h3>
        <p className="text-neutral-600 leading-relaxed mb-4">
          Его не брали. Группа годности «В» — нельзя. Он настоял. Прошёл повторные комиссии. Отжимался. Бегал. Сколько скажут. Добился «А1». Ушёл добровольно. Никто не заставлял.
        </p>
        <p className="text-neutral-600 leading-relaxed mb-6">
          С июля 2023 — на СВО. Наводчик. Командир расчёта. Командир миномётного взвода. Часов Яр, Донбасс.
        </p>
        <p className="text-sm text-red-600 font-medium">
          Этот спектакль создавался пока брат был на фронте.
        </p>
      </section>

      {/* How it started */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Как это началось</h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          Когда режиссёр Анастасия Емельянова прочитала первое письмо с записями своего брата — она плакала. Это был новый, незнакомый опыт. Это любовь. Но это и ещё что-то другое — то, что дошло от предков, через общую память.
        </p>
        <p className="text-neutral-600 leading-relaxed mb-4">
          Письма — это документ. Свидетельство солдата. Ритм спектакля — современный. Короткие фразы, как короткие сообщения. Целый мир через малое количество слов.
        </p>
        <p className="text-neutral-600 leading-relaxed">
          Актёр говорит напрямую с залом — живо, радостно, без дистанции. Хор держит пространство. Это голоса тех, кто рядом. Это тишина между словами. Это мы — те, кто утром завтракает и листает ленту новостей.
        </p>
      </section>

      {/* Quotes */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-8">Голос автора</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {quotes.slice(1).map((quote, i) => (
            <blockquote
              key={i}
              className="border border-neutral-200 rounded-xl p-6 flex flex-col justify-between gap-4"
            >
              <p className="text-base leading-relaxed italic text-neutral-700">«{quote}»</p>
              <p className="text-xs text-neutral-400">— Алексей Попов (Тихий)</p>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-8">Команда</h2>
        <div className="flex flex-col divide-y divide-neutral-100">
          {team.map((member) => (
            <div key={member.name} className="py-6 flex flex-col sm:flex-row gap-4">
              <div className="sm:w-56 shrink-0">
                <p className="font-semibold text-neutral-900">{member.name}</p>
                <p className="text-xs text-neutral-400 mt-0.5">{member.role}</p>
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed flex-1">{member.bio}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-neutral-400 mt-6 pt-6 border-t border-neutral-100">
          Вся команда объединена через Электротеатр Станиславский и Мастерскую индивидуальной режиссуры Бориса Юхананова (МИР). Режиссёр Анастасия Емельянова — родная сестра автора.
        </p>
      </section>

      {/* Venue */}
      <section className="mb-16 border border-neutral-200 rounded-2xl p-8">
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-3">Площадка</p>
        <h3 className="text-xl font-bold mb-2">Боярские палаты</h3>
        <p className="text-neutral-500 text-sm">Ориентировочная дата показов — 2026 год.</p>
      </section>

      {/* Contact CTA */}
      <section className="bg-neutral-50 rounded-2xl p-8 md:p-10 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-neutral-400 mb-3">Контакт</p>
        <h3 className="text-xl font-bold mb-2">Анастасия Емельянова</h3>
        <p className="text-neutral-500 text-sm mb-6">Режиссёр, художественный руководитель проекта</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:aepopovich121@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-neutral-200 rounded-lg text-sm hover:border-neutral-900 transition-colors bg-white"
          >
            aepopovich121@gmail.com
          </a>
          <a
            href="https://youtube.com/@russiaforlive"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors"
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            YouTube-канал
          </a>
        </div>
      </section>

    </div>
  );
}
