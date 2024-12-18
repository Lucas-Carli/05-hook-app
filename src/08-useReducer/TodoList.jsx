import { TodoItem } from "./TodoItem"

/* Recibo el onDeleteTodo que envio al hijo*/
/* Recibo el onToggleTodo que envio al hijo*/
export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {

    return (
        <ul className="list-group">
            {
                todos.map( todo => (
                    /* Todo Item */ /* Tomo la función que recibo y la envío al item */
                    <TodoItem
                        key={ todo.id }
                        todo={ todo }
                        onDeleteTodo={ onDeleteTodo }
                        onToggleTodo={ onToggleTodo }
                    />
                ))
            }
        </ul>
    )
}
