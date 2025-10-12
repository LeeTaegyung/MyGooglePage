import type { TodoListType } from "../../types/todo";
import TodoItem from "../TodoItem/TodoItem";

interface Props {
  currentTodos: TodoListType | null;
}

export default function TodoList({ currentTodos }: Props) {
  const isEmpty = currentTodos === null || currentTodos?.todos.length === 0;

  return isEmpty ? (
    <div className="py-12 text-center text-gray-500">할 일이 없습니다.</div>
  ) : (
    <ul>
      {currentTodos.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
