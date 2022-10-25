//import "./sample.css";
import { JsxElement } from "typescript";
import { Counter } from "./counter";
import { CounterComplex } from "./counter.complex";
import style from "./sample.module.css";

interface IProps {
    user: string;
    age: number;
    children: JSX.Element;
    data: Array<number>;
}

// export function Sample(props: IProps) {
//     const title: string = `Hola ${props.user ? props.user : "mundo"}`;
export function Sample({ user, children, data }: IProps) {
    const title: string = `Hola ${user ? user : "mundo"}`;
    return (
        <>
            <div>
                <h1>{title.toLocaleUpperCase()}</h1>
            </div>

            <p className={style.warning}>Learning React</p>
            {children}
            <Counter data={data}></Counter>
            <Counter data={[]}></Counter>
            <CounterComplex></CounterComplex>
        </>
    );
}
