import { todoApi } from "../api/todos";


export const fetchTodos = async () => {
  const response = await todoApi.get("/todos");
  return response.data;
}

export const updateTodoLike = async ({ id, liked }) => {
  const response = await todoApi.patch(`/todos/${id}`, { liked });
  return response.data;
}