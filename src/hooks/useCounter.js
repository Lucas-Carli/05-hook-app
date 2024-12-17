import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    // Si no se envía valor por àrámetro, se fuerza  a 1 
    const increment = ( value = 1) => {
        setCounter(counter + value);
    }
    const decrement = ( value = 1 ) => {
        // if (counter === 0) return;
        setCounter(counter - value);
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