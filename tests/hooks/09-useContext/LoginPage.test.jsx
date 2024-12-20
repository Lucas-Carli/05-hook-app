import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../../src/09-useContext/LoginPage";

describe('Pruebas en <LoginPage />', () => {

    test('debe de mostrar el componenete sin el usuario', () => {


        /* Se establece el contexto, en base a eso se define el Home */
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />);
            </UserContext.Provider>
        );
        // screen.debug();

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');

    });

    test('debe de llamar el setUser cuando se hace click en el botón', () => {

        /* Creo un mock de setUser */
        const setUserMock = jest.fn();

        /* Establezco en el componente el usuario nulo y la función que necesito */
        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />);
            </UserContext.Provider>
        );


        /* Disparo el click sobre el evento */
        const button = screen.getByText('Establecer Usuario');
        // const button = screen.getByRole('button', { name: /establecer usuario/i });

        fireEvent.click(button);

        expect(setUserMock).toHaveBeenCalledWith({
            id: 123,
            name: 'Juan',
            email: 'juan@google.com'
        });

    });

})