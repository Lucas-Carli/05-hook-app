import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    // Si no se envía valor por parámetro, se fuerza  a 1 
    const increment = ( value = 1) => {
        /* Se toma el current (valor actual) */
        setCounter( (current) => current + value);
    }
    const decrement = ( value = 1 ) => {
        // if (counter === 0) return;
        setCounter((current) => current - value);
    }
    const reset = () => {
        setCounter(initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}