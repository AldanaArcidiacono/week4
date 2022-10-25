import { useState } from "react";
import { User } from "./user";

export function Foo({ names }: { names: Array<string> }) {
    const [namesState, setNamesState] = useState(names);
    const is = Math.random() > 0.5 ? true : false;
    console.log(is);
    const onDelete = (name: string) => {
        const newState = namesState.filter((item) => item !== name);
        setNamesState(newState);
    };
    return (
        <>
            {is && <p>Hola soy foo</p>}
            {namesState.map((item: string, index: number) => (
                <User key={index} name={item} onDelete={onDelete}></User>
                // No se suele usar index como un key porque pueden variar.
                // Se pone con ID o alguna propiedad unica y que no se modifique
            ))}
        </>
    );
}
