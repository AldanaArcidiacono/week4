import { useEffect, useState } from "react";

export function Counter(data: { data: Array<number> }) {
    const [counter, setCounter] = useState(0);
    console.log({ data });
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
