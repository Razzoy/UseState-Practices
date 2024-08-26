import { useState } from 'react'
import style from '../Modal/Modal.module.scss'

export function Modal({children}) {

    return (
        <>
            <div className={style.modalContent}>
                {children}
            </div>
        </>
    )
}