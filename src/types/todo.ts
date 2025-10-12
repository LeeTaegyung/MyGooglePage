export interface TodoItemType {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoListType {
  date: string;
  todos: TodoItemType[];
}
