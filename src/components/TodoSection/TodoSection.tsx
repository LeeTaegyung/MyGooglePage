import TodoForm from "../TodoForm/TodoForm";
import { useEffect, useState } from "react";
import { getTodoDate, getWeek } from "../../utils/date";
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage";
import TodoList from "../TodoList/TodoList";
import type { TodoItemType, TodoListType } from "../../types/todo";

export default function TodoSection() {
  const [currentDate, setCurrentDate] = useState(getTodoDate(new Date()));
  const [currentTodos, setCurrentTodos] = useState<TodoListType | null>(null);

  useEffect(() => {
    const myTodos = getLocalStorage<TodoListType[]>("myTodos");
    if (myTodos === null) return;
    console.log(myTodos);
    const findTodos = myTodos.find((todo) => todo.date === currentDate);
    console.log(findTodos);
  }, []);

  const onCreateTodo = (todo: TodoItemType) => {
    const myTodos = getLocalStorage<TodoListType[]>("myTodos");
    const nextTodos =
      currentTodos === null
        ? { date: currentDate, todos: [todo] }
        : { ...currentTodos, todos: [...currentTodos.todos, todo] };
    setCurrentTodos(nextTodos);

    const newLocalStorage = myTodos?.map((todo) =>
      todo.date === currentDate ? nextTodos : todo
    );

    setLocalStorage("myTodos", JSON.stringify(newLocalStorage));
  };

  return (
    <article className="flex flex-col w-[40%] max-w-[400px] rounded-2xl common-shadow bg-white overflow-hidden">
      <div className="flex justify-between items-center p-3 text-sm font-medium shrink-0">
        <h2>TO DO</h2>
        <div>
          <h3>{`${currentDate} (${getWeek(
            new Date(currentDate).getDay()
          )})`}</h3>
        </div>
      </div>
      <div className="flex px-3 gap-1 text-sm shrink-0">
        <button className="cursor-pointer py-1 px-2 min-w-[50px] rounded-sm border border-black bg-black text-white">
          All
        </button>
        <button className="cursor-pointer py-1 px-2 min-w-[50px] rounded-sm border border-black">
          Do
        </button>
        <button className="cursor-pointer py-1 px-2 min-w-[50px] rounded-sm border border-black">
          Done
        </button>
      </div>
      <div className="grow-1 overflow-auto my-2">
        <TodoList currentTodos={currentTodos} />
      </div>
      <TodoForm onCreateTodo={onCreateTodo} />
    </article>
  );
}
