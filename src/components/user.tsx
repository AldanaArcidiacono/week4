import { SyntheticEvent } from "react";

export function User({
    name,
    onDelete,
}: {
    name: string;
    onDelete: (name: string) => void;
}) {
    const handleClick = (ev: SyntheticEvent) => {
        console.log("Click", name, ev);
        onDelete(name);
    };
    return (
        <div>
            <hr />
            <p>
                {name}
                <span onClick={handleClick}> 🗑</span>
            </p>
            <hr />
        </div>
    );
}
