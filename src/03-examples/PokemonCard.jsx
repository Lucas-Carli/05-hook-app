import React, { useLayoutEffect, useRef, useState } from 'react'

export const PokemonCard = ({ id, name, sprites = [] }) => {

    const h2Ref = useRef();

    const [boxSize, setBoxSize] = useState({width: 0, height: 0});

    useLayoutEffect(() => {
        const { height, width } = h2Ref.current.getBoundingClientRect();
        setBoxSize({ height, width});
        // console.log({ height, width });
    }, [name]);// Cada vez que el nombre cambie

    return (
        <section style={{ height: 200, display: 'flex', flexDirection: 'row' }}>
            <h2 ref={h2Ref} className="text-capitalize">
                #{id} - {name}
            </h2>

            {/* Ímñágenes */}
            <div>
                {
                    sprites.map(sprite => (
                        <img key={sprite} src={sprite} alt={name} />
                    ))
                }
            </div>

            <pre>
                { JSON.stringify(boxSize)}
            </pre>

        </section>
    )
}
