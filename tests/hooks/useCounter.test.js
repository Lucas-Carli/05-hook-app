import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el useCounter', () => {

    test('debe de retornar los valores por defecto', () => {

        /* Nos regresa el resultado del hook en ese  */
        const { result } = renderHook(() => useCounter());
        /* resultado actual del obj de retorno del hook */
        const { counter, decrement, increment, reset } = result.current

        /* evaluo que reciba el valor 10 */
        expect(counter).toBe(10);
        /* evalúo que sean funciones */
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));

    });

    test('debe de generar el counter con el valor de 100', () => {

        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current
        expect(counter).toBe(100);

    });

    test('debe de incrementar el contador', () => {

        const { result } = renderHook(() => useCounter(100));
        const { counter, increment } = result.current


        /* Ejecuto función increment dentro del act */
        act(() => {
            increment();
            increment(2);
        })

        /* El valor que se encuentra actualmente  */
        expect(result.current.counter).toBe(103);

    });

    test('debe de decrementar el contador', () => {

        const { result } = renderHook(() => useCounter(100));
        const { counter, decrement } = result.current


        /* Ejecuto función increment dentro del act */
        act(() => {
            decrement();
            decrement(2);
        })

        /* El valor que se encuentra actualmente  */
        expect(result.current.counter).toBe(97);

    });

    test('debe de realizar el reset', () => {

        const { result } = renderHook(() => useCounter(100));
        const { counter, decrement, increment, reset } = result.current

        /* Ejecuto función increment dentro del act */
        act(() => {
            decrement();
            increment(3);
            reset();
        })

        /* El valor que se encuentra actualmente  */
        expect(result.current.counter).toBe(100);

    });

})