//import "./sample.css";
import { Counter } from "./counter";
import { CounterComplex } from "./counter.complex";
import style from "./sample.module.css";

export function Sample() {
    const title: string = "Hola Mundo";
    return (
        <>
            <div>
                <h1>{title.toLocaleUpperCase()}</h1>
            </div>
            <div>
                <p className={style.warning}>Learning React</p>
                <Counter></Counter>
                <Counter></Counter>
                <CounterComplex></CounterComplex>
            </div>
        </>
    );
}
