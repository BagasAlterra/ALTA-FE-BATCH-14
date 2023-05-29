import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/todoContext";

const ToDo = () => {
  const { todos, addTodo, toggleTodo, removeTodo } = useContext(TodoContext);
  const [title, setTitle] = useState<string>("");

  const handleAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(title);
    console.log("title : ", todos);
  };

  return (
    <div>
      <form className="m-10" onSubmit={handleAddTodo}>
        <input
          className="w-40 h-12 bg-white mr-10"
          type="text"
          placeholder="Enter a task"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="w-40 h-12 bg-blue-500" type="submit">
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              {todo.title}
              <button onClick={() => removeTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDo;
