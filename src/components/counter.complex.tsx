import { useEffect, useState } from "react";

interface IState {
    counter: number;
    user: string;
}

export function CounterComplex() {
    const initialState: IState = { counter: 0, user: "Pepe" };
    const [state, setState] = useState(initialState);

    useEffect(() => {
        console.log(state);
    }, [state]);

    const handlerCounter = (value: number) => {
        setState({ ...state, counter: state.counter + value });
    };
    return (
        <>
            <div>
                <p>{state.counter}</p>
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
