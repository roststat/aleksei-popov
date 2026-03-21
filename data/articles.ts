export type Article = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  link?: string; // внешняя ссылка на статью
  source?: string; // название издания
};

export const articles: Article[] = [
  // Добавляйте статьи здесь
  // {
  //   id: "1",
  //   title: "Название статьи",
  //   excerpt: "Краткое описание",
  //   date: "2024-01-01",
  //   link: "https://...",
  //   source: "Медиа",
  // },
];
