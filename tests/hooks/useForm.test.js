import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm"
import { act } from "react";

describe('Pruebas en el useForm', () => {

    /* Define el valor inicial que espera el form */
    const initialForm = {
        name: 'Lucas',
        email: 'lucas@google.com'
    }

    test('debe regresar los valores por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm));
        // console.log(result.current);
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });
    });

    test('debe de cambiar el nombre del formulario', () => {

        const newValue = 'Juan';

        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        act(() => {
            /* Tiene: target. Dentro el name que es el campo, y el value que es el newValue */
            onInputChange({target: { name: 'name', value: newValue }});
        })

        expect(result.current.name).toBe( newValue);
        expect(result.current.formState.name).toBe( newValue );

    }); 

    test('debe de cambiar el nombre del formulario', () => {

        const newValue = 'Juan';

        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        act(() => {
            onInputChange({target: { name: 'name', value: newValue }});
            onResetForm();
        })

        expect(result.current.name).toBe( initialForm.name);
        expect(result.current.formState.name).toBe( initialForm.name );

    })



})