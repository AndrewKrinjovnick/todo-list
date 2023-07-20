import { v4 as uuid } from "uuid";
import { AsyncTodoList } from "./AsyncTodoList";
import { SyncTodoList } from "./SyncTodoList";

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

export const filtersMap = {
  completed: true,
  notCompleted: false,
};

export const filters = [
  {
    value: "all",
    label: "Всі",
  },
  {
    value: "completed",
    label: "Завершенні",
  },
  {
    value: "notCompleted",
    label: "Не завершенні",
  },
];

export const sorting = [
  {
    value: "default",
    label: "Стандарт",
  },
  {
    value: "asc",
    label: "А - Я",
  },
  {
    value: "desc",
    label: "Я - А",
  },
];

export const tabs = [
  {
    label: "Синхронний",
    value: "sync",
  },
  {
    label: "Асинхронний",
    value: "async",
  },
];

export const activeTabMap = {
  [tabs[0].value]: <SyncTodoList />,
  [tabs[1].value]: <AsyncTodoList />,
};
