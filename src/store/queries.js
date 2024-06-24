import { todoApi } from "../api/todos"


export const fetchTodos = async () => {
  const response = await todoApi.get("/todos");
  return response.data;
}

export const addTodo = async (newTodo) => {
  const response = await todoApi.post("/todos", newTodo);
  return response.data;
}

export const fetchTodoById = async (id) => {
  const response = await todoApi.get(`/todos/${id}`);
  return response.data;
};