import { render, screen, fireEvent } from "@testing-library/react"
import { MultipleCustomHooks } from "../../../src/03-examples/MultipleCustomHooks"
import { useFetch, useCounter } from "../../../src/hooks";
// import { useCounter } from "../../../src/hooks/useCounter";

jest.mock('../../../src/hooks/useFetch');
jest.mock('../../../src/hooks/useCounter');
 
describe("Pruebas en MultipleCustomHooks", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });
 
  beforeEach(() => {
    jest.clearAllMocks();
  });
 
  test("debe mostrar el componente por defecto ", () => {
    useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null });
    render(<MultipleCustomHooks />);
    //screen.debug();
 
    const siguienteButton = screen.getByRole("button", { name: "Siguiente" });
    const anteriorButton = screen.getByRole("button", { name: "Anterior" });
 
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText("Información de Pokemons"));
    expect(anteriorButton.disable).toBeFalsy();
    expect(siguienteButton.disable).toBeFalsy();
  });
 
  test("debe de mostrar el componente un pokemon", () => {
    useFetch.mockReturnValue({
      data: {
        name: "Charmander",
        id: 2,
        sprites: {
          back_default: "back_default",
          back_shiny: "back_shiny",
          front_default: "front_default",
          front_shiny: "front_shiny",
        },
      },
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    // screen.debug();
    expect(screen.getByText(`#2 - Charmander`)).toBeTruthy();
  });
 
  test("Debe de llamar la función de incrementar", () => {
    useFetch.mockReturnValue({
      data: {
        name: "Charmander",
        id: 2,
        sprites: {
          back_default: "back_default",
          back_shiny: "back_shiny",
          front_default: "front_default",
          front_shiny: "front_shiny",
        },
      },
      isLoading: false,
      hasError: null,
    });
 
    render(<MultipleCustomHooks />);
 
    const siguienteButton = screen.getByRole("button", { name: "Siguiente" });
    fireEvent.click(siguienteButton);
 
    expect(mockIncrement).toHaveBeenCalled();
  });
});

