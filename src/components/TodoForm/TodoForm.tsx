import { useRef } from "react";
import { FaPlus } from "react-icons/fa6";
import type { TodoItemType } from "../../types/todo";

interface Props {
  onCreateTodo: (todo: TodoItemType) => void;
}

export default function TodoForm({ onCreateTodo }: Props) {
  const todoInputRef = useRef<HTMLInputElement>(null);

  const handleCreateTodo = () => {
    const todoTimestamp = new Date().getTime();
    const inputNode = todoInputRef.current;
    if (!inputNode) return;
    const todoText = inputNode.value;

    if (!todoText) return;

    const newTodo = {
      id: todoTimestamp,
      text: todoText,
      completed: false,
    };

    onCreateTodo(newTodo);

    // 초기화
    inputNode.value = "";
  };

  return (
    <div className="flex py-2 px-3 gap-1 shrink-0 border-t border-t-gray-300">
      <input
        type="text"
        placeholder="오늘의 할 일을 입력해주세요."
        className="grow-1 focus:outline-0"
        ref={todoInputRef}
      />
      <button
        className="flex justify-center items-center w-[30px] shrink-0 rounded-sm bg-black cursor-pointer"
        onClick={handleCreateTodo}
      >
        <FaPlus className="text-white" />
      </button>
    </div>
  );
}
