import style from './Button.module.scss'
import { useState } from "react"

export function Button() {
    const [click, setClick] = useState(0);

    function handleClick() {
        setClick(click + 1);
    }
    return(
        <>
        <section className={style.sectionButton}>
            <h2>Du har klikket på knappen {click} antal gange.</h2>
            <button onClick={handleClick}>Click Me</button>
        </section>
    </>
    )
}