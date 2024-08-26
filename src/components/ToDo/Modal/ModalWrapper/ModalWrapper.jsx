import style from '../Modal.module.scss'

export function ModalWrapper({action, children}){
    return(
        <div className={style.containerModal} onClick={() => action(false)}>
            {children}
        </div>
    )
}