import { v4 as uuid } from "uuid";

export const initTasks = [
  {
    completed: true,
    id: uuid(),
    title: "Поїсти",
    userId: 1,
  },
  {
    completed: false,
    id: uuid(),
    title: "Подивитися серіал",
    userId: 1,
  },
  {
    completed: false,
    id: uuid(),
    title: "Поспати",
    userId: 1,
  },
  {
    completed: false,
    id: uuid(),
    title: "Погладити кота",
    userId: 1,
  },
];
