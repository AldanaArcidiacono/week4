import { useEffect, useState } from "react";

export function Counter() {
    const [counter, setCounter] = useState(0);

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
