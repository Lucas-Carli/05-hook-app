
/* Recibo la funcion onDeleteTodo del padre */
/* Recibo la funcion onToggleTodo del padre */
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between">
                <span

                    className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }`}
                    onClick={ () => onToggleTodo( todo.id ) }
                    aria-label="span"
                    >
                    {todo.description}
                </span>
                <button
                    className="btn btn-danger"
                    onClick={() => onDeleteTodo(todo.id)} /* Implemento función */
                >Borrar</button>
            </li>
        </>
    )
}
