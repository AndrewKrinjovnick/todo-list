import { ApiRoutes } from "../config/api";
import { setParams } from "../utils/setParams";
import { http } from "./http.service";

export const TodoService = {
  async addTask(task) {
    const data = await http.post(ApiRoutes.todos, task);

    return data;
  },

  async editTask(id, task) {
    const data = await http.patch(`${ApiRoutes.todos}/${id}`, task);

    return data;
  },

  async deleteTask(id) {
    const data = await http.delete(`${ApiRoutes.todos}/${id}`);

    return data;
  },

  async getTasks(params = {}) {
    const searchParams = setParams(params);

    const data = await http.get(ApiRoutes.todos, {
      params: searchParams,
    });

    return data;
  },
};
