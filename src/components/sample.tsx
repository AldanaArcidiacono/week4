//import "./sample.css";
import { Counter } from "./counter";
import { CounterComplex } from "./counter.complex";
import style from "./sample.module.css";

interface IProps {
    user: string;
    age: number;
}

// export function Sample(props: IProps) {
//     const title: string = `Hola ${props.user ? props.user : "mundo"}`;
export function Sample({ user, age }: IProps) {
    const title: string = `Hola ${user ? user + age : "mundo"}`;
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
