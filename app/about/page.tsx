import Image from "next/image";

export const metadata = {
  title: "Биография — Алексей Попов",
  description: "Алексей Валерьевич Попов — участник СВО, кандидат в депутаты, общественный деятель.",
};

const timeline = [
  {
    period: "2026",
    title: "РАНХиГС — программа «Время Героев»",
    description:
      "Курсы повышения квалификации «Современное публичное управление» в Высшей школе государственного управления РАНХиГС (Мастерская управления «Сенеж»). Программа для участников СВО.",
    tag: "Образование",
  },
  {
    period: "2023 — н.в.",
    title: "Вооружённые силы РФ",
    description:
      "Участник специальной военной операции. Младший сержант, в/ч 71211. Удостоен государственной награды — Медали Жукова.",
    tag: "Служба",
  },
  {
    period: "2017",
    title: "Конкурс «Лидеры России. Политика»",
    description: "Участник федерального конкурса управленцев нового поколения.",
    tag: "Образование",
  },
  {
    period: "2019",
    title: "Партия «Единая Россия», Чувашия",
    description:
      "Участник праймериз в Государственный совет Чувашской Республики: сбор подписей, встречи с жителями.",
    tag: "Политика",
  },
  {
    period: "2008–2009",
    title: "Электромеханический колледж",
    description: "Специальность «Менеджмент». Диплом с отличием.",
    tag: "Образование",
  },
  {
    period: "2005–2006",
    title: "Волго-Вятская академия государственной службы",
    description:
      "Специальность «Государственное и муниципальное управление» (филиал в Чебоксарах).",
    tag: "Образование",
  },
];

const tagColors: Record<string, string> = {
  Служба: "bg-red-50 text-red-700 border border-red-200",
  Политика: "bg-blue-50 text-blue-700 border border-blue-200",
  Образование: "bg-green-50 text-green-700 border border-green-200",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">

      {/* Hero block */}
      <section className="flex flex-col md:flex-row gap-12 items-start mb-20">
        <div className="md:w-60 shrink-0">
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
          <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-3">
            Кандидат в депутаты
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            Алексей Валерьевич&nbsp;Попов
          </h1>
          <p className="text-lg text-neutral-500 leading-relaxed mb-8">
            Участник специальной военной операции, награждённый Медалью Жукова. Предприниматель
            с более чем 15-летним опытом. Общественный деятель и кандидат в депутаты.
          </p>

          {/* Key facts */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-neutral-50 rounded-xl">
              <p className="text-xs text-neutral-400 mb-1">Возраст</p>
              <p className="text-base font-semibold">40 лет</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-xl">
              <p className="text-xs text-neutral-400 mb-1">Место рождения</p>
              <p className="text-base font-semibold">г. Чебоксары</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-xl">
              <p className="text-xs text-neutral-400 mb-1">Гражданство</p>
              <p className="text-base font-semibold">Россия</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl col-span-2 sm:col-span-3">
              <p className="text-xs text-red-400 mb-1">Государственная награда</p>
              <p className="text-base font-semibold text-red-800">Медаль Жукова</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold tracking-tight mb-10">Биография</h2>
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-neutral-200 hidden sm:block" />

          <div className="flex flex-col gap-8">
            {timeline.map((item, i) => (
              <div key={i} className="sm:pl-12 relative">
                {/* dot */}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-2 border-neutral-300 hidden sm:flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-neutral-400" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                  <span className="text-sm text-neutral-400 font-mono shrink-0 sm:w-28 pt-0.5">
                    {item.period}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColors[item.tag]}`}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Social */}
      <section className="border-t border-neutral-200 pt-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Контакты</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:aepopovich121@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-3 border border-neutral-200 rounded-lg text-sm hover:border-neutral-900 transition-colors"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75" />
            </svg>
            aepopovich121@gmail.com
          </a>
          <a
            href="https://youtube.com/@russiaforlive"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors"
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
