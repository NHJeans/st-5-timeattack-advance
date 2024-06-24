import { useState } from "react";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { addTodo } from "../store/queries";

export default function TodoForm() {
  // TODO: useMutation 으로 리팩터링 하세요.
  const queryClient = new QueryClient();
  const mutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleAddTodo = async (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now().toString(),
      title,
      contents,
      isCompleted: false,
      createdAt: Date.now(),
    };
    mutation.mutate(newTodo);
    setTitle("");
    setContents("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="title">제목:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label htmlFor="contents">내용:</label>
      <input
        id="contents"
        name="contents"
        value={contents}
        onChange={(e) => setContents(e.target.value)}
        required
      />
      <button type="submit">추가하기</button>
    </form>
  );
}
