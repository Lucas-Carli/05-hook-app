export const todoReducer = (initialState = [], action) => {

    /* Recibo la acción del handleNewTodo */
    switch (action.type) {
        /* Este es el caso de uso que tengo */
        case '[TODO] Add Todo':
            // Usamos el spread para esparcir los elementos de dentro del arreglo
            /* Regreso el nuevo state */
            return [...initialState, action.payload];

        case '[TODO] Remove Todo':
            /* El filter regresa un nuevo arreglo */
            /* Retorno todos los TODOS siempre y cuando el id sea distinto del que tengo en el payload  */
            return initialState.filter(todo => todo.id !== action.payload);

        case '[TODO] Toggle Todo':
            /* El map transforma un array en otra cosa */
            /* Siempre regreso un todo(nuestro estado incial) */
            /* Si el id es el mismo que el que tengo en la acción regreso un nuevo todo con el done modificado */
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });
        default:
            return initialState;
    }
}



