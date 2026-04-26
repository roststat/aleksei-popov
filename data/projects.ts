export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  href?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "gruppa-godnosti",
    title: "«Группа годности»",
    description:
      "Документальный монолог по письмам солдата с фронта. Один актёр, хор, 55 минут. Площадка — Боярские палаты, 2026.",
    tags: ["verbatim-театр", "спектакль", "2026"],
    href: "/projects/gruppa-godnosti",
  },
];
