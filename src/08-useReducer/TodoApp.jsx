import { useEffect } from "react"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodos } from "./hooks/useTodos";

export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();
   
    useEffect(() => {
        console.log({ todos });
    }, [])

    return (
        <>
            <h1>TodoApp {todosCount}, <small>pendientes: {pendingTodosCount} </small></h1>
            <hr />

            {/* Como estamos trabajando en boostrap tenemos un col de 12 posiciones */}
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    /> {/* Emite un evento onDeleteTodo llamando a la función y enviando el id */}
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd
                        onNewTodo={handleNewTodo}
                    />  {/* El componente se encarga de emitir el valor  */}
                </div>
            </div>

        </>
    )
}
