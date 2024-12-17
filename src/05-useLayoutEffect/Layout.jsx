import React from 'react';
import { useCounter, useFetch } from '../hooks';
import { PokemonCard, LoadingMessage } from '../03-examples';


export const Layout = () => {

    const { counter, decrement, increment } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
        <>
            <h1>Información del Pokemon</h1>
            <hr />

            {isLoading 
            ? <LoadingMessage/>
            : (
              <PokemonCard 
              id={data.id} 
              name= {data.name} 
              sprites={[
                data.sprites.front_default,
                data.sprites.front_shiny,
                data.sprites.back_default,
                data.sprites.back_shiny,
              ]}/>
            )}

{/* 

            <h2> {data?.name}</h2> */}

            <button onClick={ () => counter > 1 ? decrement() : null} className="btn btn-primary mt-2">Anterior</button>
            <button onClick={ () => increment()} className="btn btn-primary mt-2">Siguiente</button>

        </>

    )
}
