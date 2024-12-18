const initialState = [{
    id: 1,
    todo: 'Recolecta la piedra del Alma',
    done: false,
}];

// Función pura que regresa un state
const todoReducer = (state = initialState, action = {}) => {

if ( action.type === '[TODO] add todo'){
    return [ ...state, action.payload ];
} 

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolecta la piedra del poder',
    done: false,
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction );

console.log({state: todos});

/* Tenemos un estado inicial que se lo mandamos al reducer
El reducer en todo momento tiene que saber cual es el estado anterior (initialState)
y vamos a tener una acción
Cuando queremos añadir, o modificar algo, realizar algún proceso
vamos a mandar una acción a nuestro reducer.
Esa acción es la que se va a encargar de devolver un nuevo estado
en la cual el payload va a regresar siempre un nuevo estado
Si la acción no es reconocida, se devuelve el mismo estado, no debe de hacer nada  */