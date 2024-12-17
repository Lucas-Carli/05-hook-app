import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
        (value) => {
            setCounter( (c) => c + value);
        },
        [],
    )

    // Tambien podria ser que solo
    // cuando cambie la función, se dispare el efecto
    useEffect(() => {
        // incrementFather();
    }, [incrementFather])


    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementFather} />
        </>
    )
}

