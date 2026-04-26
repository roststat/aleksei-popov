import Link from "next/link";

export const metadata = {
  title: "«Группа годности» — спектакль",
  description:
    "Документальный монолог по письмам солдата с фронта. Автор — Алексей Попов (позывной Тихий). Боярские палаты, 2026.",
};

const team = [
  {
    name: "Алексей Попов",
    role: "Автор текста, идея, прототип героя",
    bio: "Позывной — Тихий. Ветеран СВО, наводчик и командир миномётного расчёта. Участник боёв в районе Часов Яра (июль 2023 — ноябрь 2025). Кандидат в депутаты.",
  },
  {
    name: "Анастасия Емельянова (Попова)",
    role: "Режиссёр, художественный руководитель",
    bio: "Художественный руководитель Компании «Маскарад». Режиссёр Электротеатра Станиславский. Выпускница МИР-4 (Мастерская Юхананова). Школа лабораторных исследований театра Анатолия Васильева. Спектакль «Гроза» — 8 лет в репертуаре Электротеатра. Сестра автора.",
  },
  {
    name: "Евгений Жигаленков",
    role: "Актёр (главная роль)",
    bio: "Актёр Электротеатра Станиславский. Снимался в «Великолепной пятёрке», «Последнем богатыре», «Смешной истории». Выпускник МИР (2022). Атлетическое сложение, баритон/бас.",
  },
  {
    name: "Мария Чиркова",
    role: "Актриса",
    bio: "ГИТИС, мастерская А. А. Васильева и Н. Д. Чиндяйкина. Электротеатр Станиславский: «Дом Бернарды Альбы», «Пиноккио», «Пир во время чумы». Фильмография: «Ворошиловский стрелок», «Безумный ангел Пиноккио».",
  },
  {
    name: "Андрей Емельянов",
    role: "Актёр",
    bio: "Электротеатр Станиславский с 2016 года. Ранее — театр «Школа драматического искусства» (2007–2016). Роли: «Жизнь есть сон», «Таланты и поклонники», «Визит дамы», «Стойкий принцип».",
  },
  {
    name: "Светлана Найдёнова",
    role: "Актриса",
    bio: "Актриса Электротеатра Станиславский. В составе труппы — 22 номинации на «Золотую маску» (2020). Пресса: «Ведомости», «МК», «Сноб», CoolConnections.",
  },
];

export default function GruppaGodnostiPage() {
  return (
    <div>

      {/* Hero — полная ширина */}
      <section className="border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 py-20 md:py-28">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-900 transition-colors mb-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            Все проекты
          </Link>
          <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-5">
            Спектакль · Боярские палаты · 2026
          </p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none mb-8">
            «Группа годности»
          </h1>
          <p className="text-xl text-neutral-500 max-w-2xl mb-10">
            Документальный монолог по письмам солдата с фронта. Один актёр, хор, 55 минут без антракта.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
            {[
              { label: "Жанр", value: "Вербатим-театр" },
              { label: "Форма", value: "1 актёр + хор" },
              { label: "Хронометраж", value: "55 минут" },
              { label: "Основа", value: "Письма с фронта" },
            ].map((item) => (
              <div key={item.label} className="p-4 bg-neutral-50 rounded-xl">
                <p className="text-xs text-neutral-400 mb-1">{item.label}</p>
                <p className="text-sm font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Первая цитата — на всю ширину */}
      <section className="border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
          <p className="text-2xl md:text-4xl font-medium leading-relaxed max-w-3xl text-neutral-800">
            «Первый раз я подумал — всё… Я даже не вспомнил флаг. Я вспомнил маму…»
          </p>
          <p className="text-neutral-400 mt-6 text-sm">— Алексей Попов (Тихий)</p>
        </div>
      </section>

      {/* О спектакле */}
      <section className="border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-4">О спектакле</p>
            <h2 className="text-3xl font-bold tracking-tight leading-tight">
              Это не спектакль о войне. Это спектакль о живом духе.
            </h2>
          </div>
          <div className="space-y-4 text-neutral-600 leading-relaxed">
            <p>
              О том, как человек остаётся человеком там, где это, казалось бы, невозможно. О солдатской душе, которая верит в Бога, прикрывает товарища, смеётся над анекдотами в бунгало пока вокруг рвутся снаряды — и идёт дальше.
            </p>
            <p>
              Ритм спектакля — современный. Короткие фразы, как короткие сообщения. Целый мир через малое количество слов. Актёр говорит напрямую с залом — живо, радостно, без дистанции.
            </p>
            <p>
              Хор держит пространство. Это голоса тех, кто рядом. Это тишина между словами. Это мы — те, кто утром завтракает и листает ленту новостей.
            </p>
            <p className="font-medium text-neutral-900">
              Без взывания к слезам. Без манипуляций войной. С верой в будущее.
            </p>
          </div>
        </div>
      </section>

      {/* Свидетель */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-8">Свидетель</p>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Алексей Попов</h2>
              <p className="text-neutral-400 mb-8">Позывной — Тихий. Москва. Родился в Чебоксарах.</p>
              <p className="text-sm text-red-600 font-medium">
                Этот спектакль создавался пока брат был на фронте.
              </p>
            </div>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                Его не брали. Группа годности «В» — нельзя. Он настоял. Прошёл повторные комиссии. Отжимался. Бегал. Сколько скажут. Добился «А1». Ушёл добровольно. Никто не заставлял.
              </p>
              <p>
                С июля 2023 — на СВО. Наводчик. Командир расчёта. Командир миномётного взвода. Часов Яр, Донбасс.
              </p>
              <p>
                Письма с фронта стали основой спектакля. Режиссёр — его родная сестра Анастасия Емельянова.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Цитаты */}
      <section className="border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-10">Голос автора</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Патриотизм — это когда тебе говорят «нельзя» — а ты остаёшься.",
              "Там ты не Россия. Ты — человек, который прикрывает другого человека.",
              "Патриотизм — это не слова. Это когда, если придётся, ты пойдёшь первым.",
            ].map((quote, i) => (
              <blockquote key={i} className="border-l-2 border-neutral-300 pl-5">
                <p className="text-base leading-relaxed italic text-neutral-700 mb-3">«{quote}»</p>
                <p className="text-xs text-neutral-400">— Алексей Попов (Тихий)</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Команда */}
      <section className="border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-10">Команда</p>
          <div className="divide-y divide-neutral-100">
            {team.map((member) => (
              <div key={member.name} className="py-6 flex flex-col sm:flex-row gap-4 sm:gap-12">
                <div className="sm:w-64 shrink-0">
                  <p className="font-semibold text-neutral-900">{member.name}</p>
                  <p className="text-xs text-neutral-400 mt-1">{member.role}</p>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed flex-1">{member.bio}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-400 mt-8 pt-6 border-t border-neutral-100">
            Вся команда объединена через Электротеатр Станиславский и Мастерскую индивидуальной режиссуры Бориса Юхананова (МИР).
          </p>
        </div>
      </section>

      {/* Площадка + CTA */}
      <section>
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-4">Площадка</p>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Боярские палаты</h2>
            <p className="text-neutral-500">Ориентировочная дата показов — 2026 год.</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-4">Контакт</p>
            <p className="font-semibold text-lg mb-1">Анастасия Емельянова</p>
            <p className="text-neutral-500 text-sm mb-6">Режиссёр, художественный руководитель проекта</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:aepopovich121@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-neutral-200 rounded-lg text-sm hover:border-neutral-900 transition-colors"
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
          </div>
        </div>
      </section>

    </div>
  );
}
