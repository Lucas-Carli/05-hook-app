import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

  const [todos, dispatchTodo] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }
    dispatchTodo(action);
  }

  const handleDeleteTodo = (id) => {
    dispatchTodo({
      type: '[TODO] Remove Todo',
      payload: id
    });
  }

  const handleToggleTodo = (id) => {
    dispatchTodo({
      type: '[TODO] Toggle Todo',
      payload: id
    });
  }

  const todosCount = todos.length;

  const pendingTodosCount = todos.filter(todo=>  !todo.done).length;

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
}
