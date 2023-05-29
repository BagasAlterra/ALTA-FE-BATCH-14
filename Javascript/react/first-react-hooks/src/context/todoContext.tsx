import React, { createContext, useState } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoContextType = {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
};

interface TodoProps {
  children?: React.ReactNode;
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
  removeTodo: () => {},
});

let nextTodoId = 1;

export const TodoProvider: React.FC<TodoProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: nextTodoId++,
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodo: Todo[]) => {
      prevTodo.map((todo) => {
        todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
    });
  };

  const deleteTodo = () => {
    setTodos((prevTodos: Todo[]) => {
      prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
