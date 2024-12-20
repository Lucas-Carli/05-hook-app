import { screen } from "@testing-library/dom";
import { TodoApp } from "../../../src/08-useReducer/TodoApp"
import { render } from "@testing-library/react";
import { useTodos } from "../../../src/08-useReducer/hooks/useTodos";

jest.mock('../../../src/08-useReducer/hooks/useTodos');

describe('Pruebas en  <TodoApp />', () => {

    /* Es el resultado cuando se mande a llamar el hook, con el estado que quiera que tenga */
    useTodos.mockReturnValue({
        todos: [
            {id: 1, description: 'Todo #1', done: false},
            {id: 2, description: 'Todo #2', done: true},
        ],
        todosCount:  2,
        pendingTodosCount: 1,
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),       
    });

    test('debe de mostrar el componente correctamente', () => {

        render(<TodoApp />);
        // screen.debug();
        expect( screen.getByText('Todo #1')).toBeTruthy();
        expect( screen.getByText('Todo #2')).toBeTruthy();
        expect( screen.getByRole('textbox')).toBeTruthy();

    })

})