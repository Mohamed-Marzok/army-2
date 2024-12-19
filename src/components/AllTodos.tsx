import { useEffect, useMemo, useState } from "react";
import { ITodo } from "../interfaces";

export default function AllTodos() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const handleTodoClick = () => console.log("");
  // Fetch todos only once when the component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  const todosTsx = useMemo(() => {
    return todos.map((todo) => {
      return (
        <div
          onClick={handleTodoClick}
          key={todo.id}
          className={`shadow-md flex justify-between p-4 mb-5  transition-all duration-200 ease-linear hover:translate-x-3 cursor-pointer ${
            todo.completed ? "bg-green-500" : "bg-red-500"
          }`}
        >
          <p className="text-lg font-semibold">{todo.title}</p>
          <input
            className="accent-green-500 size-5"
            type="checkbox"
            checked={todo.completed}
            disabled
          />
        </div>
      );
    });
  }, [todos]);

  return <div className="py-12">{todosTsx}</div>;
}
