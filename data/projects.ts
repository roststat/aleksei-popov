export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
};

export const projects: Project[] = [
  // Добавляйте проекты здесь
  // {
  //   id: "1",
  //   title: "Название проекта",
  //   description: "Описание проекта",
  //   tags: ["тег1", "тег2"],
  //   link: "https://...",
  // },
];
