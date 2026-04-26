export type Video = {
  id: string;
  title: string;
  description?: string;
  youtubeId?: string;
  url?: string;
  date: string;
};

export const videos: Video[] = [
  { id: "1",  youtubeId: "MBanVp4-KC8", date: "2026-04-06", title: "Фронт учит главному — отвечать за людей. И если можешь делать больше — обязан идти дальше." },
  { id: "2",  youtubeId: "FRAlDdRHVRM", date: "2026-04-04", title: "С фронта — ответственность!" },
  { id: "3",  youtubeId: "rj3rFq3c2SQ", date: "2026-04-02", title: "В Госдуму с передовой!" },
  { id: "4",  youtubeId: "uSPFt2q_UkM", date: "2026-04-02", title: "В депутаты с передовой!" },
  { id: "5",  youtubeId: "PJcoMMVn3II", date: "2026-03-12", title: "С фронта в Госдуму!" },
  { id: "6",  youtubeId: "vGXFUKQowLM", date: "2026-03-07", title: "Поздравляю с 8 марта!" },
  { id: "7",  youtubeId: "hPtIWo-5iTY", date: "2026-02-23", title: "Каждая строчка — прожитая. Каждая нота — о тех, кто рядом" },
  { id: "8",  youtubeId: "-klpnenI5SI", date: "2026-02-22", title: "С прощённым воскресеньем!" },
  { id: "9",  youtubeId: "t5RXYTnoiU4", date: "2026-02-05", title: "Будни СВО" },
  { id: "10", youtubeId: "PSvPqB-XzDY", date: "2026-01-15", title: "Сердце на бронежилете! С Новым 2026 годом" },
  { id: "11", youtubeId: "TYTdDxr2I2U", date: "2026-01-07", title: "Сердце на бронежилете! С Рождеством Христовым" },
  { id: "12", youtubeId: "Mw7Yqeuzmew", date: "2026-01-06", title: "Говорю правду! С Новым 2026 годом" },
  { id: "13", youtubeId: "rPmwDeVSBGg", date: "2025-12-31", title: "На передовой особенно ясно понимаешь, что главное в жизни" },
  { id: "14", youtubeId: "NowsZqoMBzQ", date: "2025-12-21", title: "Время героев — время решений! Поздравление с наступающим Новым годом" },
  { id: "15", youtubeId: "qpBII3DsMjc", date: "2025-10-21", title: "Только вперёд! Начинаем подготовку к выборам в 2026 году!" },
];
