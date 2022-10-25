import { useEffect, useState } from "react";

export function Counter(data: { data: Array<number> }) {
    const [counter, setCounter] = useState(0);

    // Este codigo se ejecuta en cada 'render'
    //console.log({ data });

    // Para que se ejecute solo una vez al principio
    useEffect(() => {
        console.log({ data });
    }, []);

    // Este hook lo usamos para que el codigo de dentro se ejecute sólo
    // cuando haya un cambio en tus dependecias []
    useEffect(() => {
        console.log(counter);
    }, [counter]);

    const handlerCounter = (value: number) => {
        //counter = counter + value;
        setCounter(counter + value);
    };
    return (
        <>
            <div>
                <p>{counter}</p>
                <div>
                    <button
                        onClick={() => {
                            handlerCounter(-1);
                        }}
                    >
                        -
                    </button>
                    <button
                        onClick={() => {
                            handlerCounter(+1);
                        }}
                    >
                        +
                    </button>
                </div>
            </div>
        </>
    );
}
