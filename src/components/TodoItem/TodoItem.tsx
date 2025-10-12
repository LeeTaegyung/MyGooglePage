import { FaCheck } from "react-icons/fa6";
import type { TodoItemType } from "../../types/todo";

interface Props {
  todo: TodoItemType;
}

export default function TodoItem({ todo }: Props) {
  const { id, text, completed } = todo;
  return (
    <li>
      <label
        className="flex items-start py-2 px-3 cursor-pointer group gap-1"
        htmlFor={`todo-${id}`}
      >
        <input
          type="checkbox"
          name=""
          id={`todo-${id}`}
          className="hidden"
          defaultChecked={completed}
        />
        <span className="flex items-center justify-center w-5 border aspect-square shrink-0">
          <FaCheck className="hidden group-has-checked:block" />
        </span>
        <p className="text-sm">{text}</p>
      </label>
    </li>
  );
}
