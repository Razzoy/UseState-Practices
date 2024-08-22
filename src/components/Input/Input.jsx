import { useState } from 'react';
import style from './Input.module.scss'


export function Input() {
    const [name, setName] = useState('"John"');

    function changeName(e) {
        if (e.target.value == '') {
            setName('"John"');
        } else {
            setName(e.target.value);
        }
    }
    return (
        <>
            <section className={style.sectionInput}>
                <p>Send en hilsen til {name}</p>
                <input type="text" onChange={changeName} placeholder='Indtast navn' />
            </section>
        </>
    )
}
